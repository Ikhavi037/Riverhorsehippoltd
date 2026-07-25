export type Industry = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    short: 'Financial and compliance support for clinics, hospitals, and health organizations.',
    icon: 'HeartPulse',
    description:
      'We support healthcare providers with financial management, donor compliance, regulatory reporting, and operational efficiency — so they can focus on delivering quality care.',
    challenges: [
      'Complex donor and grant funding accounting',
      'Regulatory compliance with health authorities',
      'Inventory management for medical supplies',
      'Insurance and billing reconciliation',
    ],
    solutions: [
      'Donor-specific fund accounting',
      'Health sector regulatory compliance',
      'Medical inventory cost control',
      'Revenue cycle optimization',
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    short: 'Financial management for schools, universities, and educational institutions.',
    icon: 'GraduationCap',
    description:
      'From fee management to staff payroll and institutional governance, we help educational institutions maintain financial health and regulatory compliance.',
    challenges: [
      'Fee collection and student billing',
      'Staff payroll and benefits management',
      'Accreditation and regulatory compliance',
      'Capital project financing',
    ],
    solutions: [
      'Student fee management systems',
      'Education-sector payroll services',
      'Institutional governance advisory',
      'Capital project financial planning',
    ],
  },
  {
    slug: 'construction',
    title: 'Construction',
    short: 'Project accounting, cost control, and contract management for builders.',
    icon: 'HardHat',
    description:
      'Construction requires specialized project accounting and contract management. We provide cost tracking, progress billing, and financial oversight tailored to the construction industry.',
    challenges: [
      'Project-by-project profitability tracking',
      'Progress billing and contract revenue recognition',
      'Material and labor cost control',
      'Bonding and insurance compliance',
    ],
    solutions: [
      'Project accounting and cost tracking',
      'Percentage-of-completion revenue recognition',
      'Job cost reporting and analysis',
      'Contract compliance and bonding support',
    ],
  },
  {
    slug: 'ngos',
    title: 'NGOs',
    short: 'Donor compliance, grant management, and governance for non-profits.',
    icon: 'HandHeart',
    description:
      'We are specialists in NGO financial management — donor compliance, grant accounting, institutional governance, and audit readiness for organizations working with international donors.',
    challenges: [
      'Multi-donor grant accounting and reporting',
      'Strict donor compliance requirements',
      'Governance and safeguarding frameworks',
      'Annual statutory and donor audits',
    ],
    solutions: [
      'Grant and donor fund accounting',
      'Donor-specific financial reporting',
      'NGO governance and policy frameworks',
      'Donor and statutory audit support',
    ],
  },
  {
    slug: 'retail',
    title: 'Retail',
    short: 'Inventory accounting, POS integration, and margin optimization.',
    icon: 'ShoppingBag',
    description:
      'We help retailers manage inventory costs, integrate POS systems with accounting, and optimize margins across single and multi-store operations.',
    challenges: [
      'Inventory valuation and shrinkage control',
      'POS and accounting system integration',
      'Multi-store financial consolidation',
      'Seasonal cash flow management',
    ],
    solutions: [
      'Inventory accounting and valuation',
      'POS-to-accounting integration',
      'Multi-store consolidation reporting',
      'Margin and pricing analysis',
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    short: 'Financial management for hotels, restaurants, and tourism businesses.',
    icon: 'UtensilsCrossed',
    description:
      'From revenue management to cost control and payroll, we provide hospitality-specific financial services that keep your operations profitable and compliant.',
    challenges: [
      'Revenue per available room (RevPAR) tracking',
      'Food and beverage cost control',
      'Seasonal staffing and payroll',
      'Multi-property consolidation',
    ],
    solutions: [
      'Hospitality revenue management reporting',
      'F&B cost control systems',
      'Seasonal payroll management',
      'Multi-property financial consolidation',
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    short: 'Cost accounting, production tracking, and supply chain finance.',
    icon: 'Factory',
    description:
      'We provide manufacturing-specific cost accounting, production variance analysis, and supply chain financial management to optimize your operations.',
    challenges: [
      'Standard costing and variance analysis',
      'Work-in-progress valuation',
      'Raw material and finished goods inventory',
      'Production cost optimization',
    ],
    solutions: [
      'Standard costing systems',
      'WIP and inventory valuation',
      'Production cost analysis',
      'Supply chain financial optimization',
    ],
  },
  {
    slug: 'technology',
    title: 'Technology',
    short: 'SaaS metrics, R&D accounting, and fundraising support for tech companies.',
    icon: 'Cpu',
    description:
      'We understand tech. From SaaS metrics to R&D accounting, equity compensation, and investor reporting, we provide the financial infrastructure that scaling technology companies need.',
    challenges: [
      'SaaS and subscription revenue recognition',
      'R&D and development cost capitalization',
      'Equity and stock option accounting',
      'Investor reporting and fundraising support',
    ],
    solutions: [
      'SaaS financial metrics and KPIs',
      'R&D accounting and capitalization',
      'Equity and ESOP accounting',
      'Investor-grade financial reporting',
    ],
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    short: 'Agribusiness accounting, supply chain finance, and commodity risk management.',
    icon: 'Wheat',
    description:
      'We support agribusinesses with specialized accounting for crop and livestock operations, supply chain finance, and commodity risk management.',
    challenges: [
      'Seasonal cash flow and production cycles',
      'Biological asset valuation',
      'Supply chain and cooperative accounting',
      'Commodity price risk management',
    ],
    solutions: [
      'Agribusiness accounting systems',
      'Biological asset valuation',
      'Supply chain financial management',
      'Commodity hedging advisory',
    ],
  },
  {
    slug: 'government',
    title: 'Government',
    short: 'IPSAS compliance, public sector audit, and institutional governance.',
    icon: 'Landmark',
    description:
      'We provide public sector financial management services including IPSAS compliance, performance audits, and governance advisory for government institutions and agencies.',
    challenges: [
      'IPSAS adoption and compliance',
      'Public procurement compliance',
      'Performance and value-for-money audits',
      'Public sector governance',
    ],
    solutions: [
      'IPSAS implementation and reporting',
      'Public sector audit services',
      'Performance and VFM audits',
      'Public institutional governance',
    ],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    short: 'Practice management, partner accounting, and profitability advisory.',
    icon: 'BriefcaseBusiness',
    description:
      'We help professional service firms — law, architecture, engineering, consulting — manage practice finances, partner distributions, and project profitability.',
    challenges: [
      'Time tracking and billable utilization',
      'WIP and revenue recognition',
      'Partner compensation and distributions',
      'Practice profitability analysis',
    ],
    solutions: [
      'Practice financial management',
      'WIP and revenue recognition',
      'Partner accounting and distributions',
      'Profitability and utilization analysis',
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
