'use client';

import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { clientLogos } from '@/lib/content';

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Partners & Clients"
          title="Trusted by organizations across industries"
          description="From startups to institutions, we are proud to serve a diverse portfolio of clients."
        />
        <FadeIn delay={0.2} className="mt-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-24 items-center justify-center rounded-xl border border-border bg-card transition-all hover:border-gold-500/30 hover:shadow-md"
              >
                <span className="heading-font text-lg font-bold text-navy-300 transition-colors hover:text-navy-800 dark:text-white/40 dark:hover:text-white/70">
                  {logo.short}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
