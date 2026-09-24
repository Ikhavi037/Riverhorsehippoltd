export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  photo: string;
  linkedin?: string;
};

// Populate these fields once partner details are confirmed.
// The Team section renders only when this array is non-empty.
export const team: TeamMember[] = [];

export const hasTeam = (): boolean => team.length > 0;

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
