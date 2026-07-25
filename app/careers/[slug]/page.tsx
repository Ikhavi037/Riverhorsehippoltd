import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check, MapPin, Briefcase, Clock, Building } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { FadeIn } from '@/components/motion';
import { BreadcrumbJsonLd, JsonLd } from '@/components/json-ld';
import { careers, getCareer } from '@/lib/careers';
import { siteConfig } from '@/lib/site-config';
import { CareerApplicationForm } from '@/components/career-application-form';

export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const career = getCareer(params.slug);
  if (!career) return { title: 'Position Not Found' };
  return {
    title: `${career.title} — Career Opportunity`,
    description: career.description,
    alternates: { canonical: `/careers/${career.slug}` },
  };
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
  const career = getCareer(params.slug);
  if (!career) notFound();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Careers', url: '/careers' },
        { name: career.title, url: `/careers/${career.slug}` },
      ]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: career.title,
          description: career.description,
          hiringOrganization: { '@type': 'Organization', name: siteConfig.name, sameAs: siteConfig.url },
          employmentType: career.type.toUpperCase().replace('-', '_'),
          jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: career.location, addressCountry: 'KE' } },
          datePosted: '2025-01-01',
        }}
      />

      <section className="relative overflow-hidden bg-navy-gradient pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <Container className="relative">
          <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All Positions
          </Link>
          <span className="mt-6 inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">{career.type}</span>
          <h1 className="heading-font mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{career.title}</h1>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/70">
            <span className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-gold-400" />{career.department}</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold-400" />{career.location}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold-400" />{career.level}</span>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <FadeIn className="lg:col-span-2">
              <h2 className="heading-font text-2xl font-bold text-navy-900 dark:text-white">About the Role</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{career.description}</p>

              <h2 className="heading-font mt-10 text-2xl font-bold text-navy-900 dark:text-white">Responsibilities</h2>
              <ul className="mt-4 space-y-3">
                {career.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-base text-foreground">{r}</span>
                  </li>
                ))}
              </ul>

              <h2 className="heading-font mt-10 text-2xl font-bold text-navy-900 dark:text-white">Requirements</h2>
              <ul className="mt-4 space-y-3">
                {career.requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    <span className="text-base text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <div className="lg:col-span-1">
              <CareerApplicationForm jobTitle={career.title} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
