import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { credentials, hasCredentials } from '@/src/data/credentials';
import { ShieldCheck, Award, Building2, Calendar } from 'lucide-react';

export function CredentialsSection() {
  if (!hasCredentials()) return null;

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trust & Credibility"
          title="Credentials & Registration"
          description="Our firm is registered and regulated by the relevant professional and statutory bodies in Kenya."
        />
        <FadeIn delay={0.15} className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.icpakRegistrationNumber && (
              <CredentialCard
                icon={ShieldCheck}
                label="ICPAK Registration"
                value={credentials.icpakRegistrationNumber}
              />
            )}
            {credentials.kraPin && (
              <CredentialCard
                icon={Building2}
                label="KRA Registration"
                value={credentials.kraPin}
              />
            )}
            {credentials.yearEstablished && (
              <CredentialCard
                icon={Calendar}
                label="Year Established"
                value={credentials.yearEstablished}
              />
            )}
            {credentials.professionalMemberships.length > 0 && (
              <CredentialCard
                icon={Award}
                label="Professional Memberships"
                value={credentials.professionalMemberships.map((m) => m.name).join(', ')}
              />
            )}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function CredentialCard({ icon: Icon, label, value }: { icon: typeof ShieldCheck; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-gradient text-gold-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="heading-font mt-4 text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">{label}</h3>
      <p className="mt-2 text-sm text-foreground">{value}</p>
    </div>
  );
}
