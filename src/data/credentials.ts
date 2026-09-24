export type Credential = {
  label: string;
  value: string;
  url?: string;
};

export type CredentialsData = {
  icpakRegistrationNumber: string;
  kraPin: string;
  yearEstablished: string;
  professionalMemberships: { name: string; url?: string }[];
};

// Populate these fields once verified. Sections render only when non-empty.
export const credentials: CredentialsData = {
  icpakRegistrationNumber: '',
  kraPin: '',
  yearEstablished: '',
  professionalMemberships: [],
};

export const hasCredentials = (): boolean =>
  Boolean(
    credentials.icpakRegistrationNumber ||
    credentials.kraPin ||
    credentials.yearEstablished ||
    credentials.professionalMemberships.length > 0
  );
