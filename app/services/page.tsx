import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero, SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { BreadcrumbJsonLd } from '@/components/json-ld';
import { services, serviceCategories } from '@/lib/services';
import { getIcon } from '@/lib/icon-map';

export const metadata: Metadata = {
  title: 'Services — Accounting, Tax, Audit & Advisory',
  description:
    'Explore our full range of professional services: accounting, bookkeeping, payroll, tax, external audit, internal audit, forensic audit, business consulting, governance, HR, Virtual CFO, digital transformation, business registration, real estate, and immigration.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]} />
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive financial services for every stage of growth"
        description="From foundational bookkeeping to strategic advisory, we provide the expertise your organization needs to succeed."
      />

      <section className="py-20 sm:py-24">
        <Container>
          {serviceCategories.map((category) => {
            const categoryServices = services.filter((s) => s.category === category);
            return (
              <div key={category} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-center gap-4">
                  <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">{category}</h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
                </div>
                <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.08}>
                  {categoryServices.map((service) => {
                    const Icon = getIcon(service.icon);
                    return (
                      <StaggerItem key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-xl"
                        >
                          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold-500/5 transition-transform duration-500 group-hover:scale-150" />
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-navy-gradient text-gold-400 transition-transform duration-300 group-hover:scale-110">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="heading-font relative mt-5 text-lg font-semibold text-navy-900 dark:text-white">{service.title}</h3>
                          <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
                          <div className="relative mt-4 flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                            Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="bg-muted/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Get Started"
            title="Not sure which service you need?"
            description="Book a free consultation and we'll help you identify the right services for your organization."
          />
          <div className="mt-8 text-center">
            <Link href="/book-consultation" className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-navy-900 transition-opacity hover:opacity-90">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
