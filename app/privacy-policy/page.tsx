import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { PageHero } from '@/components/section-heading';
import { FadeIn } from '@/components/motion';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Riverhorse Hippo Company Limited collects, uses, and protects your personal and financial data.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Your privacy and data security are paramount to us." />
      <section className="py-20">
        <Container size="narrow">
          <FadeIn>
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <div className="space-y-8 text-muted-foreground">
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">1. Introduction</h2>
                  <p className="mt-3 text-sm leading-relaxed">{siteConfig.name} ("we", "us", "our") is committed to protecting the privacy and security of your personal and financial information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services or visit our website.</p>
                </section>
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">2. Information We Collect</h2>
                  <p className="mt-3 text-sm leading-relaxed">We collect information you provide directly to us, including your name, email address, phone number, company name, and any information you share in communications with us. When you book a consultation, we collect your preferred service, date, and time. When you submit documents, we collect the metadata associated with those files.</p>
                </section>
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">3. How We Use Your Information</h2>
                  <p className="mt-3 text-sm leading-relaxed">We use your information to provide and deliver our services, communicate with you about your engagements, send newsletters and updates (only if you have subscribed), respond to your inquiries, improve our services, and comply with legal and regulatory obligations.</p>
                </section>
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">4. Data Security</h2>
                  <p className="mt-3 text-sm leading-relaxed">We implement industry-standard security measures including encrypted client portals, role-based access controls, and strict confidentiality protocols. All our staff sign confidentiality agreements. We do not sell, rent, or trade your personal information to third parties.</p>
                </section>
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">5. Data Retention</h2>
                  <p className="mt-3 text-sm leading-relaxed">We retain your information for as long as necessary to provide our services and comply with legal, accounting, and regulatory requirements. Professional standards require retention of working papers and financial records for a minimum period as prescribed by law.</p>
                </section>
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">6. Your Rights</h2>
                  <p className="mt-3 text-sm leading-relaxed">You have the right to access, correct, or request deletion of your personal information. You may also unsubscribe from our newsletter at any time. To exercise these rights, please contact us at {siteConfig.email}.</p>
                </section>
                <section>
                  <h2 className="heading-font text-xl font-bold text-navy-900 dark:text-white">7. Contact Us</h2>
                  <p className="mt-3 text-sm leading-relaxed">If you have questions about this Privacy Policy or our data practices, please contact us at {siteConfig.email} or {siteConfig.phone}.</p>
                </section>
                <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
