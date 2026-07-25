'use client';

import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { StaggerContainer, StaggerItem } from '@/components/motion';
import { processSteps } from '@/lib/content';

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Process"
          title="A proven path from engagement to results"
          description="Our five-step methodology ensures every engagement is structured, transparent, and outcome-driven."
          light
        />

        <div className="mt-14">
          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
              <StaggerContainer className="grid grid-cols-5 gap-4">
                {processSteps.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-800 text-gold-400 shadow-lg ring-1 ring-gold-500/20">
                        <span className="heading-font text-xl font-bold">{step.number}</span>
                      </div>
                      <h3 className="heading-font mt-5 text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden">
            <StaggerContainer className="space-y-8">
              {processSteps.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="flex gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-gold-400 shadow-lg ring-1 ring-gold-500/20">
                      <span className="heading-font text-lg font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="heading-font text-base font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
}
