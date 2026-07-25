'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { FaqJsonLd } from '@/components/json-ld';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/lib/content';

export function FaqSection() {
  const homepageFaqs = faqs.slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Have a question? We have answers. Can't find what you're looking for? Contact us directly."
        />
        <FaqJsonLd faqs={homepageFaqs} />
        <FadeIn delay={0.2} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {homepageFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-navy-900 hover:no-underline dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
        <div className="mt-8 text-center">
          <Link
            href="/faqs"
            className="inline-flex items-center gap-2 font-semibold text-gold-600 transition-colors hover:text-gold-500 dark:text-gold-400"
          >
            View all FAQs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
