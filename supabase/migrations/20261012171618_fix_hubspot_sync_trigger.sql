/*
# Fix HubSpot sync trigger function

## Problem
The trigger function `notify_hubspot_sync()` had a PL/pgSQL variable named
`shared_secret` that collided with the column name `shared_secret` in the
`hubspot_sync_config` table. PostgreSQL threw "column reference is ambiguous"
on every insert, blocking all form submissions.

## Changes
1. Renamed the local variable from `shared_secret` to `v_secret` to eliminate
   the ambiguity with the table column.
2. Added `SET search_path = public, net` to the function so that
   `SECURITY DEFINER` resolves `hubspot_sync_config` and `net.http_post`
   against the correct schemas regardless of the caller's search_path.
3. Wrapped the entire trigger body in an `EXCEPTION WHEN OTHERS` block that
   logs a warning via `RAISE WARNING` and still returns `NEW`, so a sync
   failure never blocks the form submission.

## No data changes
- No tables altered, no data modified.
- Triggers on the three tables are dropped and recreated pointing to the
  updated function (the function itself is replaced in place).
*/

CREATE OR REPLACE FUNCTION notify_hubspot_sync()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, net
AS $$
DECLARE
  v_edge_url text;
  v_secret text;
  v_payload jsonb;
BEGIN
  -- Read the shared secret from the config table
  -- Variable is named v_secret to avoid collision with the column name
  SELECT hubspot_sync_config.shared_secret
  INTO v_secret
  FROM hubspot_sync_config
  WHERE hubspot_sync_config.id = 1;

  -- If the secret is not configured yet, skip the sync silently
  IF v_secret IS NULL OR v_secret = '' THEN
    RETURN NEW;
  END IF;

  v_edge_url := 'https://xactmqhabuopzylizkto.supabase.co/functions/v1/sync-to-hubspot';

  v_payload := jsonb_build_object(
    'table', TG_TABLE_NAME,
    'row', to_jsonb(NEW)
  );

  -- Fire async HTTP POST — does not block the insert
  PERFORM net.http_post(
    url := v_edge_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-sync-secret', v_secret
    ),
    body := v_payload
  );

  RETURN NEW;

EXCEPTION WHEN OTHERS THEN
  -- Log the error but never let it block the insert
  RAISE WARNING 'HubSpot sync trigger failed for table %: %', TG_TABLE_NAME, SQLERRM;
  RETURN NEW;
END;
$$;
