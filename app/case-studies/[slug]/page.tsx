import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: 'Case Study Not Found' };
  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    openGraph: {
      title: `${study.title} | Riverhorse Hippo Case Studies`,
      description: study.summary,
      images: [{ url: study.image }],
    },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: study.client, url: `/case-studies/${study.slug}` },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Case Studies
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">{study.industry}</span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white">{study.service}</span>
          </div>
          <h1 className="heading-font mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">{study.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">{study.summary}</p>
        </Container>
      </section>

      {/* Metrics */}
      <section className="border-b border-border bg-card py-10">
        <Container>
          <div className="grid grid-cols-3 gap-6">
            {study.metrics.map((m) => (
              <FadeIn key={m.label}>
                <div className="text-center">
                  <div className="heading-font text-3xl font-bold text-gradient-gold sm:text-4xl">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{m.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container size="narrow">
          <FadeIn>
            <div className="space-y-10">
              <div>
                <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">The Challenge</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{study.challenge}</p>
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Our Solution</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{study.solution}</p>
              </div>
              <div>
                <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Results</h2>
                <ul className="mt-4 space-y-3">
                  {study.results.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                      <span className="text-base text-foreground">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-muted/50 py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-10 text-center text-white shadow-xl sm:p-16">
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="relative">
              <TrendingUp className="mx-auto h-12 w-12 text-gold-400" />
              <h2 className="heading-font mt-6 text-3xl font-bold sm:text-4xl text-balance">Want similar results for your organization?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70 text-pretty">Let's discuss how we can help you achieve your financial goals.</p>
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
