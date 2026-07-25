'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { industries } from '@/lib/industries';
import { getIcon } from '@/lib/icon-map';

export function IndustriesSection() {
  return (
    <section className="bg-muted/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Sector-specific expertise that understands your world"
          description="We combine deep financial knowledge with industry insight to deliver solutions tailored to your sector's unique challenges."
        />

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" delay={0.06}>
          {industries.map((industry) => {
            const Icon = getIcon(industry.icon);
            return (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries#${industry.slug}`}
                  className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-gradient text-gold-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="heading-font mt-4 text-sm font-semibold text-navy-900 dark:text-white">
                    {industry.title}
                  </h3>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
