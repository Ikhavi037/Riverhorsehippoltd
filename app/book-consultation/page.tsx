import type { Metadata } from 'next';
import BookConsultationForm from '@/components/book-consultation-form';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Book a Free Consultation in Nairobi | Riverhorse Hippo',
  description:
    'Schedule a free 30-minute consultation with Riverhorse Hippo in Nairobi, Kenya. Get expert advice on accounting, tax, audit and advisory services for your organization. Book now.',
  path: '/book-consultation',
});

export default function BookConsultationPage() {
  return <BookConsultationForm />;
}
