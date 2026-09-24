import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { team, hasTeam } from '@/src/data/team';
import { Linkedin } from 'lucide-react';

export function TeamSection() {
  if (!hasTeam()) return null;

  return (
    <section className="bg-muted/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our People"
          title="Meet the partners"
          description="Experienced professionals committed to your financial success."
        />
        <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
          {team.map((member) => (
            <StaggerItem key={member.slug}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-gold-600 dark:text-gold-400">{member.title}</p>
                  {member.credentials && (
                    <p className="mt-1 text-xs text-muted-foreground">{member.credentials}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold-600 dark:text-white dark:hover:text-gold-400">
                      <Linkedin className="h-4 w-4" /> LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
