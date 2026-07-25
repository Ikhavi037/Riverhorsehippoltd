export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  industry: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Dr. Amara Okello',
    role: 'Executive Director',
    company: 'Hope Health Initiative',
    quote:
      'Riverhorse Hippo transformed our financial management. Their donor compliance expertise helped us secure three new multi-year grants. They are more than accountants — they are strategic partners.',
    rating: 5,
    industry: 'Healthcare',
  },
  {
    id: 't2',
    name: 'James Mwangi',
    role: 'Founder & CEO',
    company: 'TechBridge Africa',
    quote:
      'As a scaling tech startup, we needed CFO-level insight without the full-time cost. Their Virtual CFO service gave us the financial discipline that closed our Series A round.',
    rating: 5,
    industry: 'Technology',
  },
  {
    id: 't3',
    name: 'Sarah Nakato',
    role: 'Finance Manager',
    company: 'GreenField Construction',
    quote:
      'Their project accounting and cost control systems saved us from significant losses on two major contracts. The detail and professionalism are unmatched.',
    rating: 5,
    industry: 'Construction',
  },
  {
    id: 't4',
    name: 'David Thompson',
    role: 'Country Director',
    company: 'Global Education Trust',
    quote:
      'The audit was thorough, professional, and delivered ahead of schedule. Our donors commented on the quality of the financial statements. Highly recommended for any NGO.',
    rating: 5,
    industry: 'NGOs',
  },
  {
    id: 't5',
    name: 'Grace Atim',
    role: 'Managing Director',
    company: 'Savanna Retail Group',
    quote:
      'They integrated our POS with accounting across 12 stores and gave us real-time margin visibility. We cut inventory losses by 30% in the first quarter.',
    rating: 5,
    industry: 'Retail',
  },
  {
    id: 't6',
    name: 'Michael Ochieng',
    role: 'Chairman',
    company: 'Pinnacle Manufacturing',
    quote:
      'Their forensic audit uncovered a scheme we had suspected for years. Professional, discreet, and effective. They helped us recover assets and tighten controls.',
    rating: 5,
    industry: 'Manufacturing',
  },
];

export const clientLogos: { name: string; short: string }[] = [
  { name: 'Hope Health Initiative', short: 'HHI' },
  { name: 'TechBridge Africa', short: 'TB' },
  { name: 'GreenField Construction', short: 'GF' },
  { name: 'Global Education Trust', short: 'GET' },
  { name: 'Savanna Retail Group', short: 'SRG' },
  { name: 'Pinnacle Manufacturing', short: 'PM' },
  { name: 'Kampala Capital Holdings', short: 'KCH' },
  { name: 'Nile Hospitality Group', short: 'NHG' },
  { name: 'AgriGrow Cooperative', short: 'AGC' },
  { name: 'Orbit Software Labs', short: 'OSL' },
];

export const stats = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Clients Served', value: 500, suffix: '+' },
  { label: 'Countries Served', value: 12, suffix: '' },
  { label: 'Audit Success Rate', value: 100, suffix: '%' },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description:
      'We begin by understanding your business, goals, challenges, and current financial position through a comprehensive discovery session.',
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description:
      'Based on our assessment, we develop a tailored engagement plan with clear objectives, timelines, and deliverables aligned to your strategic priorities.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Our specialists execute the plan with precision — whether it is setting up accounting systems, conducting an audit, or providing ongoing advisory.',
  },
  {
    number: '04',
    title: 'Review & Reporting',
    description:
      'We deliver clear, actionable reports and review progress against objectives, keeping you informed at every stage with transparent communication.',
  },
  {
    number: '05',
    title: 'Continuous Improvement',
    description:
      'We do not just deliver and leave. We provide ongoing support, monitor outcomes, and continuously refine our approach as your business evolves.',
  },
];

export type FAQ = { question: string; answer: string; category: string };

export const faqs: FAQ[] = [
  {
    category: 'General',
    question: 'What industries do you serve?',
    answer:
      'We serve a wide range of industries including healthcare, education, construction, NGOs, retail, hospitality, manufacturing, technology, agriculture, government, and professional services. Our team has sector-specific expertise that allows us to deliver tailored solutions.',
  },
  {
    category: 'General',
    question: 'What size companies do you work with?',
    answer:
      'We work with organizations of all sizes — from early-stage startups and SMEs to large corporates, NGOs, and public institutions. Our services are scalable and tailored to your size, complexity, and budget.',
  },
  {
    category: 'General',
    question: 'Where are you located and which countries do you serve?',
    answer:
      'We are headquartered in Nairobi, Kenya, and serve clients across 12 countries in East Africa and beyond. We work with international donors, multinationals, and cross-border operations.',
  },
  {
    category: 'Services',
    question: 'Can you provide multiple services as an integrated package?',
    answer:
      'Yes. Many clients engage us for combined packages — for example, bookkeeping + payroll + tax, or accounting + audit + advisory. Integrated engagements deliver better value and seamless service delivery.',
  },
  {
    category: 'Services',
    question: 'Do you offer ongoing retainer-based services?',
    answer:
      'Yes. Bookkeeping, payroll, tax compliance, Virtual CFO, and internal audit are typically delivered on monthly retainer. Project-based services like audits and consulting are scoped and quoted per engagement.',
  },
  {
    category: 'Services',
    question: 'Can you work with our existing accounting software?',
    answer:
      'Yes. We are proficient in QuickBooks, Xero, Sage, Tally, Pastel, SAP, Oracle, Dynamics, and custom ERPs. We also provide software selection and implementation services if you need a new system.',
  },
  {
    category: 'Audit',
    question: 'Are you independent for audit engagements?',
    answer:
      'Yes. We maintain strict independence in accordance with International Standards on Auditing. We do not audit entities where we provide bookkeeping or accounting services in the same reporting period.',
  },
  {
    category: 'Audit',
    question: 'How should we prepare for an audit?',
    answer:
      'We provide a pre-audit checklist and work with you to ensure your records are audit-ready. Good bookkeeping throughout the year is the best preparation — if you are already our bookkeeping client, the audit preparation is minimal.',
  },
  {
    category: 'Pricing',
    question: 'How do you price your services?',
    answer:
      'Pricing depends on the scope, complexity, and frequency of services. Retainer services are priced monthly, while project-based engagements are quoted as fixed fees. We provide transparent quotes after an initial consultation.',
  },
  {
    category: 'Pricing',
    question: 'Do you offer a free initial consultation?',
    answer:
      'Yes. We offer a complimentary 30-minute consultation to understand your needs and recommend the right services. You can book through our consultation page or contact us directly.',
  },
  {
    category: 'Data Security',
    question: 'How do you protect our financial data?',
    answer:
      'We use encrypted client portals, role-based access controls, and strict confidentiality protocols. All our staff sign confidentiality agreements, and we comply with international data protection standards.',
  },
  {
    category: 'Data Security',
    question: 'Do you sign non-disclosure agreements?',
    answer:
      'Yes. We routinely sign NDAs before beginning any engagement and treat all client information with the highest level of confidentiality.',
  },
];

export const faqCategories = ['General', 'Services', 'Audit', 'Pricing', 'Data Security'];
