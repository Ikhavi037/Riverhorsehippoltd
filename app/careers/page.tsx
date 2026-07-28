import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd, JsonLd } from '@/components/json-ld';
import { careers } from '@/lib/careers';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Careers — Join the Riverhorse Hippo Team',
  description:
    'Explore career opportunities at Riverhorse Hippo Company Limited. We are always looking for talented professionals in audit, tax, advisory, and corporate services to join our growing team.',
  alternates: { canonical: '/careers' },
};

const perks = [
  { title: 'Professional Development', text: 'Full support for CPA/ACCA studies, conferences, and continuous learning.' },
  { title: 'Mentorship', text: 'Work alongside Big Four–trained partners who invest in your growth.' },
  { title: 'Real Impact', text: 'Direct exposure to diverse clients across industries and countries.' },
  { title: 'Competitive Package', text: 'Market-leading salary, performance bonuses, and comprehensive benefits.' },
  { title: 'Work-Life Balance', text: 'Flexible working arrangements and respect for personal time.' },
  { title: 'Clear Progression', text: 'Transparent career path from trainee to partner with regular reviews.' },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Careers', url: '/careers' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: 'Open Positions at Riverhorse Hippo',
          description: 'Explore open positions and career opportunities.',
          hiringOrganization: { '@type': 'Organization', name: siteConfig.name, sameAs: siteConfig.url },
          employmentType: 'FULL_TIME',
          jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Nairobi', addressCountry: 'KE' } },
          datePosted: '2025-01-01',
        }}
      />

      <PageHero
        eyebrow="Careers"
        title="Build your career at a firm that invests in you"
        description="Join a team of passionate professionals dedicated to excellence, integrity, and client success. Your growth is our growth."
      />

      {/* Perks */}
      <section className="py-20 sm:py-24">
        <Container>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" delay={0.08}>
            {perks.map((perk) => (
              <StaggerItem key={perk.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md">
                  <h3 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">{perk.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Open positions */}
      <section className="bg-muted/50 py-20 sm:py-24">
        <Container>
          <h2 className="heading-font text-3xl font-bold text-navy-900 dark:text-white">Open Positions</h2>
          <p className="mt-3 text-muted-foreground">Find the role that's right for you and apply today.</p>

          <FadeIn delay={0.1} className="mt-10 space-y-4">
            {careers.map((career) => (
              <Link
                key={career.slug}
                href={`/careers/${career.slug}`}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-gold-500/40 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="heading-font text-lg font-semibold text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">{career.title}</h3>
                    <span className="rounded-full bg-gold-500/10 px-2.5 py-0.5 text-xs font-semibold text-gold-600 dark:text-gold-400">{career.type}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{career.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{career.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{career.level}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold text-gold-600 dark:text-gold-400">
                  View & Apply <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </FadeIn>
        </Container>
      </section>

      {/* General application CTA */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-xl sm:p-16">
              <div className="absolute inset-0 bg-dots opacity-30" />
              <div className="relative">
                <h2 className="heading-font text-3xl font-bold sm:text-4xl text-balance">Don't see the right role?</h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70 text-pretty">Send us your CV and we'll keep you in mind for future opportunities that match your expertise.</p>
                <a href={`mailto:${siteConfig.careersEmail}?subject=General Career Application`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-navy-900 transition-opacity hover:opacity-90">
                  Send Your CV <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
