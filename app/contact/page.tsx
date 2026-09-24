import type { Metadata } from 'next';
import ContactForm from '@/components/contact-form';
import { pageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/json-ld';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Our Nairobi Accounting Firm | Riverhorse Hippo',
  description:
    'Contact Riverhorse Hippo in Nairobi, Kenya for accounting, tax, audit and advisory services. Call +254 786 658 137, email us, or send a message — we respond within 24 hours.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]} />
      <ContactForm />
    </>
  );
}
