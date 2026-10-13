const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const HUBSPOT_BASE = "https://api.hubapi.com/crm/v3/objects/contacts";

type TableRow = {
  id: string;
  email: string;
  name?: string | null;
  phone?: string | null;
  company?: string | null;
  subject?: string | null;
  message?: string | null;
  service?: string | null;
  preferred_date?: string | null;
  preferred_time?: string | null;
  status?: string | null;
  created_at?: string | null;
};

type Payload = {
  table: "newsletter_subscribers" | "contact_submissions" | "consultation_bookings";
  row: TableRow;
};

function splitName(fullName: string): { firstname: string; lastname: string } {
  const trimmed = fullName.trim();
  if (!trimmed) return { firstname: "", lastname: "" };
  const spaceIdx = trimmed.indexOf(" ");
  if (spaceIdx === -1) return { firstname: trimmed, lastname: "" };
  return {
    firstname: trimmed.slice(0, spaceIdx),
    lastname: trimmed.slice(spaceIdx + 1),
  };
}

function buildProperties(
  row: TableRow,
  leadSource: string
): Record<string, string> {
  const props: Record<string, string> = { email: row.email };

  if (row.name) {
    const { firstname, lastname } = splitName(row.name);
    if (firstname) props.firstname = firstname;
    if (lastname) props.lastname = lastname;
  }

  if (row.phone) props.phone = row.phone;
  if (row.company) props.company = row.company;
  props.lead_source = leadSource;

  return props;
}

function filterNonEmpty(props: Record<string, string>): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined && value !== null && value !== "") {
      result[key] = value;
    }
  }
  return result;
}

async function lookupContactByEmail(
  email: string,
  token: string
): Promise<string | null> {
  const url = `${HUBSPOT_BASE}/${encodeURIComponent(email)}?idProperty=email&properties=firstname,lastname,email,phone,company,lead_source`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 200) {
    const data = await res.json();
    return data.id ?? null;
  }
  if (res.status === 404) return null;
  const body = await res.text();
  console.error(`HubSpot email lookup failed (${res.status}) for ${email}: ${body}`);
  return null;
}

async function createContact(
  props: Record<string, string>,
  token: string
): Promise<string | null> {
  const res = await fetch(HUBSPOT_BASE, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties: props }),
  });

  if (res.status === 201) {
    const data = await res.json();
    return data.id ?? null;
  }

  if (res.status === 409) {
    // Contact exists — fall back to email lookup + update
    return null;
  }

  const body = await res.text();
  console.error(`HubSpot create failed (${res.status}): ${body}`);
  return null;
}

async function updateContact(
  contactId: string,
  props: Record<string, string>,
  token: string
): Promise<void> {
  // Only send properties that have non-empty values — never overwrite with blanks
  const updates = filterNonEmpty(props);
  // email is the match key, not an updateable property here
  delete updates.email;

  if (Object.keys(updates).length === 0) return;

  const res = await fetch(`${HUBSPOT_BASE}/${contactId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ properties: updates }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`HubSpot update failed (${res.status}) for contact ${contactId}: ${body}`);
  }
}

async function addNoteToContact(
  contactId: string,
  noteBody: string,
  token: string
): Promise<void> {
  // Create the note
  const noteRes = await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      properties: {
        hs_note_body: noteBody,
      },
    }),
  });

  if (!noteRes.ok) {
    const body = await noteRes.text();
    console.error(`HubSpot note creation failed (${noteRes.status}): ${body}`);
    return;
  }

  const noteData = await noteRes.json();
  const noteId = noteData.id;
  if (!noteId) {
    console.error("HubSpot note creation returned no ID");
    return;
  }

  // Associate the note with the contact
  const assocRes = await fetch(
    `https://api.hubapi.com/crm/v3/objects/notes/${noteId}/associations/contact/${contactId}/contact_to_note`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!assocRes.ok) {
    const body = await assocRes.text();
    console.error(`HubSpot note association failed (${assocRes.status}): ${body}`);
  }
}

function buildNoteText(table: string, row: TableRow): string {
  if (table === "contact_submissions") {
    const parts = ["New contact form submission", ""];
    if (row.subject) parts.push(`Subject: ${row.subject}`);
    parts.push(`Message: ${row.message ?? "(no message)"}`);
    if (row.company) parts.push(`Company: ${row.company}`);
    return parts.join("\n");
  }

  if (table === "consultation_bookings") {
    const parts = ["New consultation booking request", ""];
    parts.push(`Service: ${row.service ?? "N/A"}`);
    parts.push(`Preferred date: ${row.preferred_date ?? "N/A"}`);
    parts.push(`Preferred time: ${row.preferred_time ?? "N/A"}`);
    if (row.company) parts.push(`Company: ${row.company}`);
    if (row.message) parts.push(`Message: ${row.message}`);
    parts.push(`Status: ${row.status ?? "pending"}`);
    return parts.join("\n");
  }

  return "";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const sharedSecret = Deno.env.get("SYNC_SHARED_SECRET");
    if (!sharedSecret) {
      console.error("SYNC_SHARED_SECRET is not configured");
      return new Response(
        JSON.stringify({ error: "Server not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const authHeader = req.headers.get("x-sync-secret");
    if (!authHeader || authHeader !== sharedSecret) {
      console.error("Request rejected: shared secret mismatch");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const hubspotToken = Deno.env.get("HUBSPOT_TOKEN");
    if (!hubspotToken) {
      console.error("HUBSPOT_TOKEN is not configured");
      return new Response(
        JSON.stringify({ error: "Server not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { table, row } = (await req.json()) as Payload;

    if (!table || !row || !row.email) {
      console.error("Invalid payload: missing table or row.email");
      return new Response(
        JSON.stringify({ error: "Invalid payload" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const leadSourceMap: Record<string, string> = {
      newsletter_subscribers: "Newsletter",
      contact_submissions: "Contact form",
      consultation_bookings: "Consultation",
    };

    const leadSource = leadSourceMap[table] ?? "Website";
    const props = buildProperties(row, leadSource);

    // 1. Look up existing contact by email
    let contactId = await lookupContactByEmail(row.email, hubspotToken);

    if (contactId) {
      // Update existing — only non-empty properties
      await updateContact(contactId, props, hubspotToken);
    } else {
      // Create new contact
      contactId = await createContact(props, hubspotToken);
      if (!contactId) {
        // Create returned 409 or failed — try lookup again as fallback
        contactId = await lookupContactByEmail(row.email, hubspotToken);
        if (contactId) {
          await updateContact(contactId, props, hubspotToken);
        } else {
          console.error(`Could not create or find contact for ${row.email}`);
        }
      }
    }

    // 2. Add a note for contact_submissions and consultation_bookings
    if (contactId && (table === "contact_submissions" || table === "consultation_bookings")) {
      const noteText = buildNoteText(table, row);
      if (noteText) {
        try {
          await addNoteToContact(contactId, noteText, hubspotToken);
        } catch (noteErr) {
          console.error(`Failed to add note for ${row.email}:`, noteErr);
        }
      }
    }

    return new Response(
      JSON.stringify({ success: true, contactId }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("sync-to-hubspot error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
