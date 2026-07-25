export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'tech-startup-series-a',
    title: 'Scaling a Tech Startup to Series A Readiness',
    client: 'TechBridge Africa',
    industry: 'Technology',
    service: 'Virtual CFO',
    summary:
      'How our Virtual CFO service helped a fintech startup build the financial infrastructure that closed a $5M Series A round.',
    challenge:
      'TechBridge Africa, a fast-growing fintech startup, had strong traction but lacked the financial systems, reporting, and projections that institutional investors demand. Their books were months behind, there was no budget or forecast, and the founders could not answer basic investor questions about unit economics or cash runway.',
    solution:
      'We deployed a Virtual CFO who cleaned up the historical books, implemented cloud accounting with automated revenue recognition for their subscription model, built a 3-year financial model with SaaS metrics, and created investor-ready reporting packs. We also set up KPI dashboards tracking MRR, churn, CAC, and LTV.',
    results: [
      'Financial books brought current within 30 days',
      'Investor-grade financial model and pitch deck support delivered',
      'SaaS metrics dashboard implemented for real-time monitoring',
      'Board reporting cadence established with monthly CFO packs',
    ],
    metrics: [
      { label: 'Series A Raised', value: '$5M' },
      { label: 'Time to Close', value: '90 days' },
      { label: 'Reporting Cycle', value: 'Monthly' },
    ],
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'ngo-multi-donor-compliance',
    title: 'Transforming NGO Multi-Donor Compliance',
    client: 'Global Education Trust',
    industry: 'NGOs',
    service: 'Accounting & Audit',
    summary:
      'How we restructured a multi-donor NGO’s financial systems to achieve clean audits across 8 concurrent grants.',
    challenge:
      'Global Education Trust managed 8 concurrent grants from 5 different donors, each with unique reporting requirements. Their parallel accounting systems were unsustainable, leading to delayed reports, audit findings, and donor dissatisfaction. Two donors had threatened to withhold disbursements.',
    solution:
      'We implemented a unified chart of accounts with donor-specific cost centers, eliminating parallel systems. We developed donor-specific reporting templates, trained the finance team on compliance requirements, and conducted a pre-audit readiness assessment. We also provided the annual statutory and donor audits.',
    results: [
      'Eliminated parallel accounting systems',
      'All 8 grants received clean audit opinions',
      'Donor reporting turnaround reduced from 45 to 10 days',
      'All threatened disbursements released',
    ],
    metrics: [
      { label: 'Clean Audits', value: '8/8' },
      { label: 'Reporting Time', value: '-78%' },
      { label: 'Donor Retention', value: '100%' },
    ],
    image:
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'construction-cost-control',
    title: 'Rescuing Profitability on Major Construction Contracts',
    client: 'GreenField Construction',
    industry: 'Construction',
    service: 'Accounting & Advisory',
    summary:
      'Project accounting and cost control systems that saved two major contracts from significant losses.',
    challenge:
      'GreenField Construction was losing money on two large contracts but could not identify where. Their accounting system did not track project profitability, costs were lumped together, and progress billing was inconsistent. They needed granular visibility fast.',
    solution:
      'We implemented project-by-project accounting with job cost tracking, percentage-of-completion revenue recognition, and weekly cost variance reporting. We identified specific cost overruns in materials and subcontractor billing, renegotiated terms, and established a project profitability dashboard.',
    results: [
      'Identified and stopped $340K in cost leaks',
      'Both contracts returned to profitability',
      'Weekly project profitability reporting established',
      'Progress billing cycle reduced from 60 to 30 days',
    ],
    metrics: [
      { label: 'Cost Savings', value: '$340K' },
      { label: 'Contract Recovery', value: '100%' },
      { label: 'Billing Cycle', value: '-50%' },
    ],
    image:
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'forensic-fraud-recovery',
    title: 'Forensic Investigation and Asset Recovery',
    client: 'Pinnacle Manufacturing',
    industry: 'Manufacturing',
    service: 'Forensic Audit',
    summary:
      'A forensic investigation that uncovered a long-running procurement fraud scheme and recovered misappropriated assets.',
    challenge:
      'Pinnacle Manufacturing suspected procurement fraud but had no evidence. Supplier costs were rising without explanation, and the CFO had noticed irregularities in supplier payments. The board needed answers and recovery.',
    solution:
      'Our forensic team conducted a confidential investigation under legal privilege. We extracted and analyzed three years of procurement data, traced payments, identified shell suppliers, and quantified losses at $1.2M. We provided an evidence package for legal proceedings and implemented anti-fraud controls.',
    results: [
      'Fraud scheme identified and quantified at $1.2M',
      'Evidence package prepared for civil and criminal proceedings',
      'Perpetrators identified and dismissed with legal support',
      'Comprehensive anti-fraud control framework implemented',
    ],
    metrics: [
      { label: 'Loss Quantified', value: '$1.2M' },
      { label: 'Assets Recovered', value: '$780K' },
      { label: 'Controls Implemented', value: '24' },
    ],
    image:
      'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    slug: 'retail-pos-integration',
    title: 'Multi-Store Retail Financial Transformation',
    client: 'Savanna Retail Group',
    industry: 'Retail',
    service: 'Digital Transformation',
    summary:
      'POS-to-accounting integration across 12 stores that delivered real-time margin visibility and cut inventory losses by 30%.',
    challenge:
      'Savanna Retail Group operated 12 stores with disconnected POS systems and manual accounting. They had no real-time visibility into margins, inventory shrinkage was high, and monthly consolidation took three weeks.',
    solution:
      'We integrated all 12 POS systems with cloud accounting, implemented automated daily sales reconciliation, set up real-time inventory tracking with shrinkage alerts, and built a multi-store profitability dashboard with margin analysis by product category and location.',
    results: [
      'All 12 stores integrated into single accounting system',
      'Real-time margin visibility by product and store',
      'Inventory losses reduced by 30% in first quarter',
      'Monthly consolidation reduced from 3 weeks to 2 days',
    ],
    metrics: [
      { label: 'Inventory Loss', value: '-30%' },
      { label: 'Consolidation Time', value: '-90%' },
      { label: 'Stores Integrated', value: '12' },
    ],
    image:
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
