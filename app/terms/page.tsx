import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions governing the use of Riverhorse Hippo Company Limited services and website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="The terms governing your use of our services and website." />
      <section className="py-20">
        <Container size="narrow">
          <FadeIn>
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">1. Acceptance of Terms</h2>
                <p className="mt-3 text-sm leading-relaxed">By accessing and using the services and website of {siteConfig.name}, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
              </section>
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">2. Professional Services</h2>
                <p className="mt-3 text-sm leading-relaxed">We provide accounting, tax, audit, and advisory services in accordance with applicable professional standards, including International Standards on Auditing, IFRS, IPSAS, and local regulatory requirements. Our engagements are governed by separate engagement letters that specify scope, fees, and deliverables.</p>
              </section>
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">3. Confidentiality</h2>
                <p className="mt-3 text-sm leading-relaxed">We maintain strict confidentiality of all client information in accordance with professional standards and applicable law. We do not disclose client information to third parties without consent, except as required by law or professional obligation.</p>
              </section>
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">4. Intellectual Property</h2>
                <p className="mt-3 text-sm leading-relaxed">All content on this website, including text, graphics, logos, and design elements, is the property of {siteConfig.name} and is protected by intellectual property laws. You may not reproduce or distribute our content without written permission.</p>
              </section>
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">5. Limitation of Liability</h2>
                <p className="mt-3 text-sm leading-relaxed">Our liability is limited to the scope and terms of each engagement letter. We are not liable for indirect, incidental, or consequential damages arising from the use of our services or website.</p>
              </section>
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">6. Governing Law</h2>
                <p className="mt-3 text-sm leading-relaxed">These terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Kenya, unless otherwise specified in your engagement letter.</p>
              </section>
              <section>
                <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">7. Changes to Terms</h2>
                <p className="mt-3 text-sm leading-relaxed">We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date.</p>
              </section>
              <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
