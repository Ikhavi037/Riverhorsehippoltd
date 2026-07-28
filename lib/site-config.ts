export const siteConfig = {
  name: 'Riverhorse Hippo Company Limited',
  shortName: 'Riverhorse Hippo',
  tagline: 'Accounting. Tax. Audit. Advisory. Done Right.',
  description:
    'Riverhorse Hippo Company Limited is a professional business advisory and financial services firm helping startups, SMEs, NGOs, corporates, investors, and public institutions achieve sustainable growth through accounting, taxation, audit, HR consulting, governance, digital transformation, and strategic business advisory services.',
  url: 'https://riverhorsehippo.com',
  email: 'info@riverhorsehippoltd.com',
  supportEmail: 'support@riverhorsehippoltd.com',
  careersEmail: 'careers@riverhorsehippoltd.com',
  phone: '+254 786 658 137',
  whatsapp: '+254786658137',
  whatsappMessage: "Hello Riverhorse Hippo, I'd like to learn more about your services.",
  address: {
    line1: 'Teleposta Towers, Kenyatta Avenue',
    line2: 'Nairobi, Kenya',
    full: 'Teleposta Towers, Kenyatta Avenue, Nairobi, Kenya',
  },
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM (EAT)',
  social: {
    linkedin: 'https://www.linkedin.com/company/109436110',
    twitter: 'https://x.com/GoRiverHorse',
    facebook: 'https://www.facebook.com/profile.php?id=61581555825482',
    instagram: 'https://www.instagram.com/riverhorsehippo',
    youtube: 'https://www.youtube.com/@riverhorsehippo',
  },
};

export const mainNav = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Industries', href: '/industries' },
  { title: 'Case Studies', href: '/case-studies' },
  {
    title: 'Resources',
    children: [
      { title: 'Blog', href: '/blog', description: 'Insights, guides, and firm news' },
      { title: 'FAQs', href: '/faqs', description: 'Answers to common questions' },
    ],
  },
  { title: 'Careers', href: '/careers' },
  { title: 'Contact', href: '/contact' },
];

export type NavItem = { title: string; href?: string; children?: { title: string; href: string; description: string }[] };
