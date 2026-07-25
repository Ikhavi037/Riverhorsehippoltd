export type Career = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  level: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const careers: Career[] = [
  {
    slug: 'senior-audit-manager',
    title: 'Senior Audit Manager',
    department: 'Audit & Assurance',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    level: 'Manager',
    description:
      'We are seeking a seasoned audit professional to lead our audit engagements and mentor our growing audit team. You will manage a portfolio of clients across multiple industries and drive audit quality.',
    responsibilities: [
      'Lead audit engagements from planning to issuance',
      'Manage and mentor a team of 8-10 auditors',
      'Review audit working papers and ensure compliance with ISAs',
      'Build and maintain client relationships',
      'Identify cross-selling opportunities and support business development',
    ],
    requirements: [
      'CPA/ACCA qualification',
      '7+ years of audit experience in a professional services firm',
      'Big Four experience is a strong advantage',
      'Excellent leadership and communication skills',
      'IFRS and IPSAS expertise',
    ],
  },
  {
    slug: 'tax-associate',
    title: 'Tax Associate',
    department: 'Tax Services',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    level: 'Associate',
    description:
      'Join our tax practice and help clients navigate complex tax compliance and planning. You will work across corporate tax, VAT, and international tax matters.',
    responsibilities: [
      'Prepare and file tax returns for corporate clients',
      'Conduct tax research and prepare tax position papers',
      'Support tax planning and advisory engagements',
      'Assist with tax audit and dispute resolution',
      'Stay current on tax law changes and communicate to clients',
    ],
    requirements: [
      'Degree in Accounting, Finance, or Law',
      'CPA/ACCA progress or qualification',
      '2+ years of tax experience',
      'Knowledge of local and international tax law',
      'Strong analytical and writing skills',
    ],
  },
  {
    slug: 'virtual-cfo-consultant',
    title: 'Virtual CFO Consultant',
    department: 'Advisory',
    location: 'Nairobi, Kenya (Hybrid)',
    type: 'Full-time',
    level: 'Senior',
    description:
      'Provide CFO-level financial leadership to multiple clients across industries. You will be the trusted financial advisor that growing businesses rely on.',
    responsibilities: [
      'Serve as Virtual CFO for 4-6 client companies',
      'Build financial models, budgets, and forecasts',
      'Produce monthly CFO report packs and board presentations',
      'Advise on fundraising, M&A, and strategic decisions',
      'Mentor client finance teams',
    ],
    requirements: [
      'CPA/ACCA or MBA qualification',
      '8+ years of finance experience, including leadership roles',
      'Strong financial modeling and analytical skills',
      'Experience with SaaS, manufacturing, or NGO finance',
      'Excellent presentation and stakeholder management skills',
    ],
  },
  {
    slug: 'graduate-trainee-audit',
    title: 'Graduate Trainee — Audit',
    department: 'Audit & Assurance',
    location: 'Nairobi, Kenya',
    type: 'Full-time',
    level: 'Entry',
    description:
      'Start your professional career in our structured graduate program. You will rotate across audit, tax, and advisory while studying for your professional qualification.',
    responsibilities: [
      'Support audit fieldwork and documentation',
      'Assist with tax return preparation',
      'Participate in advisory research and analysis',
      'Study for CPA/ACCA qualification with firm support',
    ],
    requirements: [
      'Recent graduate in Accounting, Finance, or Commerce',
      'First class or second upper degree',
      'Strong analytical and communication skills',
      'Commitment to pursuing professional qualification',
      'Eagerness to learn and grow',
    ],
  },
];

export function getCareer(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}
