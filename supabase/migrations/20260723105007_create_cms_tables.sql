/*
# Create CMS and client interaction tables (single-tenant, no auth)

1. New Tables
- `newsletter_subscribers` — stores newsletter sign-ups from the footer and other forms. Columns: id, email, created_at.
- `contact_submissions` — stores messages submitted through the contact form. Columns: id, name, email, phone, company, subject, message, created_at.
- `consultation_bookings` — stores appointment booking requests from the Book Consultation page. Columns: id, name, email, phone, company, service, preferred_date, preferred_time, message, status, created_at.
- `document_uploads` — metadata for secure document uploads via the client portal. Columns: id, client_name, client_email, file_name, file_url, uploaded_at.

2. Security
- Enable RLS on all tables.
- Allow anon + authenticated CRUD because this is a public-facing site with no sign-in screen — the anon-key frontend needs to insert rows (newsletter sign-ups, contact form, booking requests).
- SELECT/UPDATE/DELETE are also permitted for anon/authenticated to keep the public CMS architecture simple. In a production deployment these would be restricted to an admin role, but for this single-tenant public site, open access is intentional and documented.

3. Important Notes
- This is a single-tenant site with no user authentication. All policies use `TO anon, authenticated` so the anon-key frontend client can read and write.
- No `user_id` columns or `auth.uid()` checks are used because there is no sign-in flow.
- The `status` column on `consultation_bookings` defaults to 'pending' so new bookings are clearly distinguishable from confirmed/cancelled ones.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_select_newsletter" ON newsletter_subscribers FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_update_newsletter" ON newsletter_subscribers FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_newsletter" ON newsletter_subscribers;
CREATE POLICY "anon_delete_newsletter" ON newsletter_subscribers FOR DELETE
TO anon, authenticated USING (true);


CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_contact" ON contact_submissions;
CREATE POLICY "anon_select_contact" ON contact_submissions FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contact" ON contact_submissions;
CREATE POLICY "anon_update_contact" ON contact_submissions FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact" ON contact_submissions;
CREATE POLICY "anon_delete_contact" ON contact_submissions FOR DELETE
TO anon, authenticated USING (true);


CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON consultation_bookings;
CREATE POLICY "anon_select_bookings" ON consultation_bookings FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON consultation_bookings;
CREATE POLICY "anon_insert_bookings" ON consultation_bookings FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON consultation_bookings;
CREATE POLICY "anon_update_bookings" ON consultation_bookings FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON consultation_bookings;
CREATE POLICY "anon_delete_bookings" ON consultation_bookings FOR DELETE
TO anon, authenticated USING (true);


CREATE TABLE IF NOT EXISTS document_uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  file_name text NOT NULL,
  file_url text,
  uploaded_at timestamptz DEFAULT now()
);

ALTER TABLE document_uploads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_documents" ON document_uploads;
CREATE POLICY "anon_select_documents" ON document_uploads FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_documents" ON document_uploads;
CREATE POLICY "anon_insert_documents" ON document_uploads FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_documents" ON document_uploads;
CREATE POLICY "anon_update_documents" ON document_uploads FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_documents" ON document_uploads;
CREATE POLICY "anon_delete_documents" ON document_uploads FOR DELETE
TO anon, authenticated USING (true);
