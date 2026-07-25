import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd, FaqJsonLd } from '@/components/json-ld';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs, faqCategories } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQs — Frequently Asked Questions',
  description:
    'Find answers to common questions about our accounting, tax, audit, and advisory services, pricing, audit independence, data security, and working with Riverhorse Hippo.',
  alternates: { canonical: '/faqs' },
};

export default function FaqsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'FAQs', url: '/faqs' }]} />
      <FaqJsonLd faqs={faqs} />
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Find answers to the questions we hear most often. Still have questions? We're just a message away."
      />

      <section className="py-20 sm:py-24">
        <Container size="narrow">
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter((f) => f.category === category);
            return (
              <FadeIn key={category}>
                <div className="mb-12">
                  <div className="mb-6 flex items-center gap-4">
                    <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">{category}</h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
                  </div>
                  <Accordion type="single" collapsible className="space-y-3">
                    {categoryFaqs.map((faq, i) => (
                      <AccordionItem key={`${category}-${i}`} value={`item-${i}`} className="overflow-hidden rounded-xl border border-border bg-card px-5">
                        <AccordionTrigger className="text-left text-base font-semibold text-navy-900 hover:no-underline dark:text-white">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </FadeIn>
            );
          })}

          <div className="rounded-2xl bg-navy-gradient p-8 text-center text-white sm:p-12">
            <h2 className="heading-font text-2xl font-bold sm:text-3xl">Still have questions?</h2>
            <p className="mt-3 text-white/70">Our team is ready to help. Reach out and we'll get you the answers you need.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-gold-gradient px-6 py-3 font-semibold text-navy-900 transition-opacity hover:opacity-90">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/book-consultation" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
                Book a Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
