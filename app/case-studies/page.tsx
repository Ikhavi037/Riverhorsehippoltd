import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { caseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Results for Real Clients',
  description:
    'Explore how Riverhorse Hippo has helped startups, NGOs, construction firms, manufacturers, and retailers achieve measurable financial results through our advisory and accounting services.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Case Studies', url: '/case-studies' }]} />
      <PageHero
        eyebrow="Case Studies"
        title="Real results for real organizations"
        description="See how our expertise has driven measurable financial outcomes for clients across industries."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <StaggerContainer className="grid gap-8 md:grid-cols-2" delay={0.1}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">{study.industry}</span>
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">{study.service}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="heading-font text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">
                      {study.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
                    <div className="mt-5 flex items-center gap-4">
                      {study.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <div className="heading-font text-xl font-bold text-gradient-gold">{m.value}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                      Read full case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="bg-muted/50 py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-xl sm:p-16">
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="relative">
              <TrendingUp className="mx-auto h-12 w-12 text-gold-400" />
              <h2 className="heading-font mt-6 text-3xl font-bold sm:text-4xl text-balance">Ready to write your success story?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70 text-pretty">Let's discuss how we can help your organization achieve similar results.</p>
              <Link href="/book-consultation" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-navy-900 transition-opacity hover:opacity-90">
                Book a Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
