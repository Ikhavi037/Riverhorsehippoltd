import { siteConfig } from '@/lib/site-config';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const organization = {
  '@type': 'AccountingService',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/og-image.png`,
  image: `${siteConfig.url}/og-image.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Teleposta Towers, Kenyatta Avenue',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.2864,
    longitude: 36.8168,
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  }],
  areaServed: { '@type': 'Country', name: 'Kenya' },
  sameAs: Object.values(siteConfig.social),
};

export function AccountingServiceJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        ...organization,
      }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url: `${siteConfig.url}${url}`,
        provider: {
          '@type': 'AccountingService',
          name: siteConfig.name,
          url: siteConfig.url,
          telephone: siteConfig.phone,
          address: organization.address,
          areaServed: organization.areaServed,
        },
        areaServed: { '@type': 'Country', name: 'Kenya' },
      }}
    />
  );
}

export function BlogPostingJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline,
        description,
        image,
        datePublished,
        dateModified: dateModified ?? datePublished,
        author: { '@type': 'Person', name: author },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          logo: { '@type': 'ImageObject', url: `${siteConfig.url}/og-image.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': siteConfig.url },
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] | { q: string; a: string }[] }) {
  const normalized = faqs.map((f) => ({
    question: 'question' in f ? f.question : f.q,
    answer: 'answer' in f ? f.answer : f.a,
  }));
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: normalized.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }}
    />
  );
}
