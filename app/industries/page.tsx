import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { pageMetadata } from '@/lib/seo';
import { industries } from '@/lib/industries';
import { getIcon } from '@/lib/icon-map';

export const metadata: Metadata = pageMetadata({
  title: 'Industries We Serve in Nairobi, Kenya | Riverhorse Hippo',
  description:
    'Sector-specific accounting and advisory for healthcare, education, construction, NGOs, retail, manufacturing, tech and government in Nairobi, Kenya. Talk to our industry experts today.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/industries' }]} />
      <PageHero
        eyebrow="Industries"
        title="Sector-specific expertise that understands your world"
        description="We combine deep financial knowledge with industry insight to deliver solutions tailored to your sector's unique challenges and opportunities."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-16">
            {industries.map((industry, idx) => {
              const Icon = getIcon(industry.icon);
              const reversed = idx % 2 === 1;
              return (
                <FadeIn key={industry.slug}>
                  <div className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2">
                    <div className={reversed ? 'lg:order-2' : ''}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-gradient text-gold-400 shadow-lg">
                        <Icon className="h-8 w-8" />
                      </div>
                      <h2 className="heading-font mt-5 text-2xl font-bold text-navy-900 dark:text-white sm:text-3xl">{industry.title}</h2>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{industry.description}</p>
                      <Link href={`/industries/${industry.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div>
                          <h3 className="heading-font text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">Key Challenges</h3>
                          <ul className="mt-3 space-y-2">
                            {industry.challenges.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="heading-font text-sm font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">Our Solutions</h3>
                          <ul className="mt-3 space-y-2">
                            {industry.solutions.map((s) => (
                              <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={reversed ? 'lg:order-1' : ''}>
                      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-md">
                        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gold-500/5" />
                        <h3 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">How we help {industry.title.toLowerCase()} organizations</h3>
                        <p className="mt-3 text-sm text-muted-foreground">{industry.short}</p>
                        <Link href={`/industries/${industry.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400">
                          Read more <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="/book-consultation" className="mt-3 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800">
                          Discuss Your Needs <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
