import type { Metadata } from 'next';

const SITE_URL = 'https://riverhorsehippoltd.com';
const DEFAULT_OG_IMAGE = '/og-image.png';
const SITE_NAME = 'Riverhorse Hippo';

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
};

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).trimEnd() + '…';
}

export function pageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  authors,
}: SeoOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const desc = truncate(description, 160);

  const openGraph: Metadata['openGraph'] = {
    type,
    locale: 'en_US',
    url: canonical,
    siteName: SITE_NAME,
    title,
    description: desc,
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  };

  if (publishedTime) openGraph.publishedTime = publishedTime;
  if (authors) openGraph.authors = authors;

  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImage],
    },
  };
}

export { SITE_URL };
