'use client';

import { Container } from '@/components/ui/container';
import { AnimatedCounter } from '@/components/animated-counter';
import { FadeIn } from '@/components/motion';
import { stats } from '@/lib/content';

export function StatsSection() {
  return (
    <section className="border-b border-border bg-white py-16 dark:bg-navy-900/50">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="heading-font text-4xl font-bold text-navy-900 dark:text-white sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-gradient-gold" />
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                  {stat.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
