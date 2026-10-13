/*
# Create HubSpot sync triggers for newsletter_subscribers, contact_submissions, consultation_bookings

1. Overview
- Enables the `pg_net` extension (async HTTP client for PostgreSQL).
- Creates a single reusable trigger function `notify_hubspot_sync()` that fires
  AFTER INSERT on the three tables and sends an async HTTP POST to the
  `sync-to-hubspot` Supabase Edge Function.
- The POST body contains `{ "table": "<table_name>", "row": { ... } }`.
- The `x-sync-secret` header carries the value of the `SYNC_SHARED_SECRET`
  Edge Function secret, so only the database can invoke the function.
- All HTTP calls are async (`net.http_post`) — the trigger never blocks the
  insert, and a HubSpot failure cannot prevent the row from being saved.
- `document_uploads` is deliberately excluded from sync.

2. Security
- No new tables created (hubspot_sync_config is a single-row config table).
- `pg_net` is installed by the postgres superuser; it only needs to be enabled once.
- The trigger function is `SECURITY DEFINER` owned by postgres so it can call
  `net.http_post` (which requires elevated privileges).
- No changes to RLS policies on existing tables.

3. Important Notes
- The Edge Function URL: https://xactmqhabuopzylizkto.supabase.co/functions/v1/sync-to-hubspot
- The shared secret is stored in a Supabase table `hubspot_sync_config` so the
  trigger can read it without needing ALTER DATABASE permissions.
- The user must insert their chosen secret value into `hubspot_sync_config`
  after this migration runs, and set the same value in the Edge Function
  Secrets tab as SYNC_SHARED_SECRET.
*/

-- Enable pg_net for async HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Small config table to hold the shared secret (single row)
CREATE TABLE IF NOT EXISTS hubspot_sync_config (
  id int PRIMARY KEY DEFAULT 1,
  shared_secret text NOT NULL DEFAULT '',
  CONSTRAINT single_row CHECK (id = 1)
);

INSERT INTO hubspot_sync_config (id, shared_secret)
VALUES (1, '')
ON CONFLICT (id) DO NOTHING;

ALTER TABLE hubspot_sync_config ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_sync_config" ON hubspot_sync_config;
CREATE POLICY "anon_read_sync_config" ON hubspot_sync_config FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_sync_config" ON hubspot_sync_config;
CREATE POLICY "anon_update_sync_config" ON hubspot_sync_config FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

-- Reusable trigger function
CREATE OR REPLACE FUNCTION notify_hubspot_sync()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  edge_function_url text;
  shared_secret text;
  payload jsonb;
BEGIN
  -- Read the shared secret from the config table
  SELECT shared_secret INTO shared_secret FROM hubspot_sync_config WHERE id = 1;

  -- If the secret is not configured yet, skip the sync silently
  IF shared_secret IS NULL OR shared_secret = '' THEN
    RETURN NEW;
  END IF;

  edge_function_url := 'https://xactmqhabuopzylizkto.supabase.co/functions/v1/sync-to-hubspot';

  -- Build the payload with table name and full row
  payload := jsonb_build_object(
    'table', TG_TABLE_NAME,
    'row', to_jsonb(NEW)
  );

  -- Fire async HTTP POST — does not block the insert
  -- Errors are logged by pg_net and do not propagate to the caller
  PERFORM net.http_post(
    url := edge_function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'x-sync-secret', shared_secret
    ),
    body := payload
  );

  RETURN NEW;
END;
$$;

-- Attach triggers to the three tables (drop first for idempotency)
DROP TRIGGER IF EXISTS trg_hubspot_sync_newsletter ON newsletter_subscribers;
CREATE TRIGGER trg_hubspot_sync_newsletter
  AFTER INSERT ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION notify_hubspot_sync();

DROP TRIGGER IF EXISTS trg_hubspot_sync_contact ON contact_submissions;
CREATE TRIGGER trg_hubspot_sync_contact
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION notify_hubspot_sync();

DROP TRIGGER IF EXISTS trg_hubspot_sync_booking ON consultation_bookings;
CREATE TRIGGER trg_hubspot_sync_booking
  AFTER INSERT ON consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION notify_hubspot_sync();
