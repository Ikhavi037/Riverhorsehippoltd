import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { pageMetadata } from '@/lib/seo';
import { industries, getIndustry } from '@/lib/industries';
import { getIcon } from '@/lib/icon-map';

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return { title: 'Industry Not Found' };
  const title = `${industry.title} Accounting & Advisory in Nairobi, Kenya | Riverhorse Hippo`;
  const description = `${industry.short} Sector-specific accounting and advisory services for ${industry.title.toLowerCase()} in Nairobi, Kenya. Contact Riverhorse Hippo today.`;
  return pageMetadata({ title, description, path: `/industries/${industry.slug}` });
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  const Icon = getIcon(industry.icon);
  const relatedIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Industries', url: '/industries' },
        { name: industry.title, url: `/industries/${industry.slug}` },
      ]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <Link href="/industries" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Industries
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold-400 ring-1 ring-gold-500/20">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="heading-font text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{industry.title}</h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">{industry.description}</p>
          <div className="mt-8">
            <Link href="/book-consultation" className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 font-semibold text-navy-900 transition-opacity hover:opacity-90">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <FadeIn className="lg:col-span-2">
              <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{industry.longDescription}</p>

              <h2 className="heading-font mt-10 text-2xl font-bold text-navy-900 dark:text-white">Who This Is For</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{industry.whoFor}</p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">Key Challenges</h2>
                  <ul className="mt-4 space-y-3">
                    {industry.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">Our Solutions</h2>
                  <ul className="mt-4 space-y-3">
                    {industry.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.15}>
              <div className="sticky top-24">
                <div className="rounded-2xl bg-navy-gradient p-6 text-white shadow-md">
                  <h3 className="heading-font text-lg font-semibold">Need industry-specific support?</h3>
                  <p className="mt-2 text-sm text-white/70">Book a free consultation to discuss how we can help your {industry.title.toLowerCase()} organization.</p>
                  <Link href="/book-consultation" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-900 transition-opacity hover:opacity-90">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Related industries */}
      <section className="bg-muted/50 py-20">
        <Container>
          <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Other Industries We Serve</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedIndustries.map((rel) => {
              const RelIcon = getIcon(rel.icon);
              return (
                <Link key={rel.slug} href={`/industries/${rel.slug}`} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-gradient text-gold-400">
                    <RelIcon className="h-5 w-5" />
                  </div>
                  <h3 className="heading-font mt-4 font-semibold text-navy-900 dark:text-white">{rel.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{rel.short}</p>
                  <span className="mt-3 flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
