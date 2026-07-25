import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/json-ld';
import { services, getService } from '@/lib/services';
import { getIcon } from '@/lib/icon-map';
import { siteConfig } from '@/lib/site-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} — Professional Services`,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Riverhorse Hippo Company Limited`,
      description: service.short,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = getIcon(service.icon);
  const relatedServices = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: service.title, url: `/services/${service.slug}` },
      ]} />
      {service.faqs.length > 0 && <FaqJsonLd faqs={service.faqs} />}

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-gradient pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <Container className="relative">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold-400 ring-1 ring-gold-500/20">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">{service.category}</span>
              <h1 className="heading-font text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{service.title}</h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">{service.short}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book-consultation" className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 font-semibold text-navy-900 transition-opacity hover:opacity-90">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </Container>
      </section>

      {/* Description */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <FadeIn className="lg:col-span-2">
              <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.description}</p>

              <h2 className="heading-font mt-10 text-2xl font-bold text-navy-900 dark:text-white">What's Included</h2>
              <StaggerContainer className="mt-5 grid gap-3 sm:grid-cols-2" delay={0.05}>
                {service.features.map((feature) => (
                  <StaggerItem key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <h2 className="heading-font mt-10 text-2xl font-bold text-navy-900 dark:text-white">Our Process</h2>
              <div className="mt-5 space-y-5">
                {service.process.map((step, i) => (
                  <FadeIn key={step.step} delay={i * 0.1}>
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-gradient text-gold-400">
                        <span className="heading-font font-bold">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="heading-font font-semibold text-navy-900 dark:text-white">{step.step}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.15}>
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-md">
                  <h3 className="heading-font text-lg font-semibold text-navy-900 dark:text-white">Deliverables</h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-navy-gradient p-6 text-white shadow-md">
                  <h3 className="heading-font text-lg font-semibold">Ready to get started?</h3>
                  <p className="mt-2 text-sm text-white/70">Book a free consultation to discuss your needs.</p>
                  <Link href="/book-consultation" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-900 transition-opacity hover:opacity-90">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="bg-muted/50 py-20">
          <Container size="narrow">
            <h2 className="heading-font text-center text-3xl font-bold text-navy-900 dark:text-white">Frequently Asked Questions</h2>
            <FadeIn delay={0.2} className="mt-10">
              <Accordion type="single" collapsible className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-xl border border-border bg-card px-5">
                    <AccordionTrigger className="text-left text-base font-semibold text-navy-900 hover:no-underline dark:text-white">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20">
          <Container>
            <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">Related Services</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {relatedServices.map((rel) => {
                const RelIcon = getIcon(rel.icon);
                return (
                  <Link key={rel.slug} href={`/services/${rel.slug}`} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
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
      )}
    </>
  );
}
