import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Analytics } from '@/components/analytics';
import { AccountingServiceJsonLd } from '@/components/json-ld';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const siteUrl = 'https://riverhorsehippoltd.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Accounting, Tax & Audit Firm in Nairobi | Riverhorse Hippo',
  description:
    'Nairobi accounting, tax, audit and advisory firm for startups, SMEs, NGOs and corporates. Fixed-fee pricing and KRA-compliant filings. Book a free consultation.',
  authors: [{ name: 'Riverhorse Hippo Company Limited' }],
  creator: 'Riverhorse Hippo Company Limited',
  publisher: 'Riverhorse Hippo Company Limited',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Riverhorse Hippo',
    title: 'Accounting, Tax & Audit Firm in Nairobi | Riverhorse Hippo',
    description:
      'Nairobi accounting, tax, audit and advisory firm for startups, SMEs, NGOs and corporates. Fixed-fee pricing and KRA-compliant filings. Book a free consultation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Riverhorse Hippo — Accounting, Tax & Audit Firm in Nairobi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting, Tax & Audit Firm in Nairobi | Riverhorse Hippo',
    description:
      'Nairobi accounting, tax, audit and advisory firm. Fixed-fee pricing and KRA-compliant filings. Book a free consultation.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#0b132b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <AccountingServiceJsonLd />
      </head>
      <body className="body-font bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold-gradient focus:px-4 focus:py-2 focus:text-navy-900 focus:font-semibold"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
