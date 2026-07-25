'use client';

import { Check, X } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';

const comparison = [
  { feature: 'Big Four–level expertise at accessible pricing', us: true, others: false },
  { feature: 'Dedicated engagement partner for every client', us: true, others: false },
  { feature: 'Sector-specific industry expertise', us: true, others: 'partial' },
  { feature: 'Proactive tax planning, not just compliance', us: true, others: 'partial' },
  { feature: 'Same-day response guarantee', us: true, others: false },
  { feature: 'Digital client portal with 24/7 access', us: true, others: 'partial' },
  { feature: 'Transparent, fixed-fee pricing', us: true, others: false },
  { feature: 'Multi-country service capability', us: true, others: 'partial' },
  { feature: 'Forensic and fraud investigation team', us: true, others: false },
  { feature: 'Virtual CFO for growing businesses', us: true, others: false },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Riverhorse Hippo difference"
          description="We combine the rigor of a Big Four firm with the agility and personal attention of a boutique practice."
        />

        <FadeIn delay={0.2} className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-navy-900 text-white">
                  <th className="px-6 py-4 font-semibold">Capability</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <span className="text-gold-400">Riverhorse Hippo</span>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-white/60">Typical Firms</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-card' : 'bg-muted/30'}
                  >
                    <td className="px-6 py-4 font-medium text-navy-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.us === true && (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-500/15 text-green-600 dark:text-green-400">
                          <Check className="h-4 w-4" />
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.others === false && (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                      {row.others === 'partial' && (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
                          <span className="text-xs font-bold">~</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
