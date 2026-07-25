'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { services } from '@/lib/services';
import { getIcon } from '@/lib/icon-map';

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive financial services, delivered with excellence"
          description="From day-to-day bookkeeping to strategic advisory, we provide the full spectrum of financial services your organization needs to thrive."
        />

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.08}>
          {services.map((service) => {
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
                  <h3 className="heading-font relative mt-5 text-lg font-semibold text-navy-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <div className="relative mt-4 flex items-center gap-1.5 text-sm font-medium text-gold-600 dark:text-gold-400">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-navy-900/15 bg-card px-6 py-3 font-semibold text-navy-900 transition-all hover:border-gold-500/40 hover:shadow-md dark:border-white/15 dark:text-white"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
