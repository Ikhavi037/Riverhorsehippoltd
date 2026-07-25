export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string; // lucide icon name
  category: 'Accounting' | 'Tax' | 'Audit' | 'Advisory' | 'Corporate';
  description: string;
  features: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'accounting',
    title: 'Accounting',
    short: 'Full-cycle financial record-keeping that gives you clarity and control.',
    icon: 'Calculator',
    category: 'Accounting',
    description:
      'Our accounting service provides accurate, timely financial records that form the backbone of every decision you make. From ledger maintenance to financial statement preparation, we ensure your books are audit-ready at all times and compliant with IFRS, IPSAS, and local GAAP.',
    features: [
      'IFRS & IPSAS compliant reporting',
      'General ledger maintenance',
      'Trial balance & adjustment journals',
      'Monthly, quarterly & annual financial statements',
      'Fixed asset registers & depreciation schedules',
      'Inter-company reconciliations',
      'Consolidated group accounts',
    ],
    deliverables: [
      'Monthly management accounts',
      'Annual statutory financial statements',
      'Audit-ready working papers',
      'Custom financial dashboards',
    ],
    process: [
      { step: 'Discovery', detail: 'We map your chart of accounts, reporting cycles, and compliance requirements.' },
      { step: 'Setup', detail: 'Configure your accounting system, migration of opening balances, and user access.' },
      { step: 'Monthly close', detail: 'Record transactions, reconcile accounts, and produce management accounts.' },
      { step: 'Reporting', detail: 'Deliver statements with variance analysis and actionable commentary.' },
    ],
    faqs: [
      { q: 'Do you work with our existing accounting software?', a: 'Yes. We support QuickBooks, Xero, Sage, Tally, Pastel, and custom ERPs. We can also recommend the best fit if you are starting fresh.' },
      { q: 'Can you handle multi-currency and multi-entity accounting?', a: 'Absolutely. We manage consolidated group accounts with inter-company eliminations and foreign currency translation.' },
    ],
  },
  {
    slug: 'bookkeeping',
    title: 'Bookkeeping',
    short: 'Day-to-day transaction recording so your books are always current.',
    icon: 'BookMarked',
    category: 'Accounting',
    description:
      'Reliable bookkeeping is the foundation of sound financial management. We record, categorize, and reconcile every transaction, ensuring your books are always up to date and ready for tax filing, audit, or investor due diligence.',
    features: [
      'Daily transaction recording',
      'Bank & credit card reconciliations',
      'Accounts payable & receivable management',
      'Payroll journal entries',
      'Vendor & customer ledger maintenance',
      'Expense categorization',
      'Digital document filing',
    ],
    deliverables: [
      'Reconciled bank statements monthly',
      'Clean, categorized ledgers',
      'Aged AP/AR reports',
      'Cash flow snapshots',
    ],
    process: [
      { step: 'Onboarding', detail: 'Secure access to banking, payroll, and invoicing platforms via our client portal.' },
      { step: 'Daily recording', detail: 'Transactions captured and categorized within 48 hours.' },
      { step: 'Reconciliation', detail: 'Monthly bank and card reconciliations with exception reporting.' },
      { step: 'Review', detail: 'Senior bookkeeper review and delivery of monthly summaries.' },
    ],
    faqs: [
      { q: 'How do you access our financial documents securely?', a: 'Through our encrypted client portal with role-based access. You upload documents once and we handle the rest.' },
      { q: 'What happens if we fall behind on bookkeeping?', a: 'We offer catch-up bookkeeping engagements to bring your books current, then transition to an ongoing monthly cycle.' },
    ],
  },
  {
    slug: 'payroll',
    title: 'Payroll',
    short: 'Compliant, on-time payroll processing with full statutory deductions.',
    icon: 'Users',
    category: 'Corporate',
    description:
      'We manage the entire payroll cycle — from gross-to-net calculations to statutory deductions, payslip distribution, and payroll tax filings — so your team is paid accurately and on time, every time.',
    features: [
      'Gross-to-net payroll calculations',
      'PAYE, NSSF, and LST deductions',
      'Payslip generation & distribution',
      'Payroll tax filings & compliance',
      'Leave & attendance tracking',
      'Bonus, commission & overtime processing',
      'Severance & end-of-service calculations',
    ],
    deliverables: [
      'Monthly payroll register',
      'Individual digital payslips',
      'Statutory deduction summaries',
      'Payroll cost analysis reports',
    ],
    process: [
      { step: 'Setup', detail: 'Employee master data, salary structures, benefits, and statutory codes configured.' },
      { step: 'Run', detail: 'Monthly gross-to-net calculation with deductions and employer contributions.' },
      { step: 'Distribute', detail: 'Payslips delivered via secure portal; bank transfer files prepared.' },
      { step: 'Compliance', detail: 'Statutory returns filed with URA, NSSF, and local authorities.' },
    ],
    faqs: [
      { q: 'Can you handle payroll for staff in multiple countries?', a: 'Yes. We support multi-jurisdiction payroll with country-specific tax tables and compliance requirements.' },
      { q: 'Do you process contractor payments too?', a: 'We manage both employee payroll and contractor/consultant fee disbursements with appropriate tax treatment.' },
    ],
  },
  {
    slug: 'tax',
    title: 'Tax Services',
    short: 'Strategic tax planning, compliance, and representation that saves you money.',
    icon: 'Receipt',
    category: 'Tax',
    description:
      'From corporate income tax to VAT, withholding tax, and transfer pricing, we ensure full compliance while identifying legitimate opportunities to minimize your tax burden. Our tax team stays ahead of regulatory changes so you never miss a deadline or overpay.',
    features: [
      'Corporate income tax planning & filing',
      'VAT registration, filing & refund support',
      'Withholding tax management',
      'Transfer pricing documentation',
      'Tax health checks & due diligence',
      'Tax dispute resolution & representation',
      'International tax advisory',
      'Tax incentive & exemption advisory',
    ],
    deliverables: [
      'Annual tax plan',
      'Filed tax returns with proof of submission',
      'Tax position papers',
      'Tax savings opportunity report',
    ],
    process: [
      { step: 'Assessment', detail: 'Review of your tax position, obligations, and deadlines across jurisdictions.' },
      { step: 'Planning', detail: 'Identify deductions, incentives, and structuring opportunities to optimize tax.' },
      { step: 'Compliance', detail: 'Prepare and file all returns accurately and before deadlines.' },
      { step: 'Defense', detail: 'Represent you in audits, queries, and disputes with tax authorities.' },
    ],
    faqs: [
      { q: 'Can you help with past-due tax filings?', a: 'Yes. We specialize in tax regularization — bringing overdue filings current, negotiating penalties, and restoring compliance.' },
      { q: 'Do you handle transfer pricing for multinationals?', a: 'We prepare full transfer pricing documentation, benchmarking studies, and local file/master file packages per OECD guidelines.' },
    ],
  },
  {
    slug: 'audit',
    title: 'External Audit',
    short: 'Independent assurance that strengthens trust with stakeholders.',
    icon: 'ShieldCheck',
    category: 'Audit',
    description:
      'Our external audit provides an independent, evidence-based opinion on your financial statements. We go beyond compliance to identify control weaknesses, operational risks, and improvement opportunities — delivering assurance that investors, lenders, and regulators trust.',
    features: [
      'Statutory financial statement audits',
      'Donor & grant compliance audits',
      'Special purpose audit reports',
      'Agreed-upon procedures engagements',
      'Audit of donor-funded projects',
      'Group audits & component auditor coordination',
      'Internal control evaluation',
    ],
    deliverables: [
      'Independent auditor’s report',
      'Audited financial statements',
      'Management letter with findings',
      'Internal control recommendations',
    ],
    process: [
      { step: 'Planning', detail: 'Risk assessment, materiality determination, and audit strategy development.' },
      { step: 'Fieldwork', detail: 'Evidence gathering, substantive testing, and controls evaluation.' },
      { step: 'Reporting', detail: 'Draft audit report and management letter for review.' },
      { step: 'Issuance', detail: 'Final signed auditor’s report and delivery to stakeholders.' },
    ],
    faqs: [
      { q: 'Are you independent for audit purposes?', a: 'Yes. We maintain strict independence per International Standards on Auditing. We do not audit entities where we provide bookkeeping services in the same period.' },
      { q: 'How long does an audit take?', a: 'Typically 4–8 weeks depending on entity size and complexity. We provide a detailed timeline during planning.' },
    ],
  },
  {
    slug: 'internal-audit',
    title: 'Internal Audit',
    short: 'Proactive risk management and control assurance across your operations.',
    icon: 'Search',
    category: 'Audit',
    description:
      'Our internal audit function acts as your eyes and ears across the organization — evaluating controls, assessing risks, and providing management with independent, objective assurance that operations are efficient, compliant, and secure.',
    features: [
      'Internal audit charter & methodology setup',
      'Risk-based annual audit plans',
      'Operational & compliance audits',
      'IT & cybersecurity audits',
      'Process & efficiency reviews',
      'Fraud risk assessments',
      'Follow-up & remediation tracking',
    ],
    deliverables: [
      'Annual internal audit plan',
      'Audit reports with risk ratings',
      'Remediation tracker',
      'Board/audit committee reporting',
    ],
    process: [
      { step: 'Scoping', detail: 'Understand your risk universe, objectives, and control environment.' },
      { step: 'Planning', detail: 'Develop a risk-based audit plan aligned with strategic priorities.' },
      { step: 'Execution', detail: 'Conduct fieldwork, test controls, and document findings.' },
      { step: 'Reporting', detail: 'Issue reports with prioritized recommendations and track remediation.' },
    ],
    faqs: [
      { q: 'Can you function as our outsourced internal audit department?', a: 'Yes. Many SMEs outsource their entire internal audit function to us, including co-sourcing with existing teams.' },
      { q: 'Do you report to the audit committee or management?', a: 'We report to the audit committee or board for independence, with management copies for action.' },
    ],
  },
  {
    slug: 'forensic-audit',
    title: 'Forensic Audit',
    short: 'Fraud investigation, evidence gathering, and litigation support.',
    icon: 'Fingerprint',
    category: 'Audit',
    description:
      'When fraud is suspected or discovered, our forensic audit team investigates meticulously — tracing funds, quantifying losses, preserving evidence, and providing expert testimony. We help you understand what happened, recover assets, and prevent recurrence.',
    features: [
      'Fraud investigation & detection',
      'Asset tracing & recovery',
      'Financial evidence analysis',
      'Litigation support & expert testimony',
      'Anti-fraud policy & framework design',
      'Whistleblower hotline setup',
      'Fraud risk assessments',
    ],
    deliverables: [
      'Forensic investigation report',
      'Quantified loss schedule',
      'Evidence package for legal proceedings',
      'Fraud prevention recommendations',
    ],
    process: [
      { step: 'Intake', detail: 'Secure engagement under legal privilege; understand allegations and scope.' },
      { step: 'Investigation', detail: 'Data extraction, transaction tracing, interviews, and evidence preservation.' },
      { step: 'Analysis', detail: 'Quantify losses, identify perpetrators, and map the fraud scheme.' },
      { step: 'Resolution', detail: 'Deliver report, support legal action, and implement prevention controls.' },
    ],
    faqs: [
      { q: 'Is the investigation confidential?', a: 'Yes. All forensic engagements are conducted under strict confidentiality, often under legal privilege through your counsel.' },
      { q: 'Can you testify in court?', a: 'Our forensic specialists provide expert witness testimony in civil and criminal proceedings.' },
    ],
  },
  {
    slug: 'business-consulting',
    title: 'Business Consulting',
    short: 'Strategic advisory that turns challenges into growth opportunities.',
    icon: 'Briefcase',
    category: 'Advisory',
    description:
      'From market entry strategy to operational transformation, our business consulting practice helps you make confident, data-driven decisions. We combine deep financial expertise with commercial acumen to drive measurable results.',
    features: [
      'Strategic business planning',
      'Market entry & expansion strategy',
      'Business model optimization',
      'Feasibility & viability studies',
      'Performance improvement',
      'M&A advisory & due diligence',
      'Business valuations',
      'Restructuring & turnaround',
    ],
    deliverables: [
      'Strategic business plan',
      'Feasibility study report',
      'Business valuation report',
      'Implementation roadmap',
    ],
    process: [
      { step: 'Diagnosis', detail: 'Assess current state, market position, and growth barriers.' },
      { step: 'Strategy', detail: 'Develop tailored strategies with financial modeling and scenario analysis.' },
      { step: 'Roadmap', detail: 'Create a phased implementation plan with KPIs and milestones.' },
      { step: 'Execution support', detail: 'Provide ongoing advisory to guide implementation and course-correct.' },
    ],
    faqs: [
      { q: 'Do you work with startups at the idea stage?', a: 'Yes. We help founders validate business models, build financial projections, and prepare for fundraising.' },
      { q: 'Can you help with buying or selling a business?', a: 'We provide full M&A support — valuation, due diligence, deal structuring, and post-merger integration.' },
    ],
  },
  {
    slug: 'governance',
    title: 'Governance',
    short: 'Board advisory, policy frameworks, and compliance structures.',
    icon: 'Scale',
    category: 'Advisory',
    description:
      'Strong governance is the hallmark of sustainable organizations. We help boards and management design governance frameworks, policies, and structures that ensure accountability, transparency, and long-term value creation.',
    features: [
      'Board & committee structure design',
      'Corporate governance frameworks',
      'Policy & procedure development',
      'Board evaluation & effectiveness reviews',
      'Compliance management systems',
      'Risk governance frameworks',
      'ESG reporting & advisory',
    ],
    deliverables: [
      'Governance framework manual',
      'Board charter & committee terms of reference',
      'Policy library',
      'Compliance dashboard',
    ],
    process: [
      { step: 'Assessment', detail: 'Benchmark current governance practices against best practice codes.' },
      { step: 'Design', detail: 'Develop tailored governance structures, policies, and reporting lines.' },
      { step: 'Implementation', detail: 'Roll out frameworks with board and management training.' },
      { step: 'Monitoring', detail: 'Periodic effectiveness reviews and continuous improvement.' },
    ],
    faqs: [
      { q: 'Do you work with NGO boards and governance?', a: 'Yes. We specialize in NGO governance, including board constitutions, safeguarding policies, and donor compliance frameworks.' },
      { q: 'Can you help with ESG reporting?', a: 'We develop ESG frameworks aligned with GRI, SASB, and TCFD standards tailored to your sector.' },
    ],
  },
  {
    slug: 'hr-consulting',
    title: 'HR Consulting',
    short: 'People strategy, policies, and systems that build great teams.',
    icon: 'UserCog',
    category: 'Corporate',
    description:
      'Your people are your greatest asset. We provide end-to-end HR consulting — from organizational design and policy development to performance management, compensation benchmarking, and talent strategy — helping you attract, retain, and develop top talent.',
    features: [
      'Organizational structure design',
      'HR policy & handbook development',
      'Job evaluation & grading',
      'Compensation & benefits benchmarking',
      'Performance management systems',
      'Recruitment & onboarding support',
      'Training & capacity building',
      'Employee engagement surveys',
    ],
    deliverables: [
      'HR policy manual',
      'Organizational chart & grading structure',
      'Compensation benchmarking report',
      'Performance management framework',
    ],
    process: [
      { step: 'Audit', detail: 'Review current HR practices, structure, and compliance gaps.' },
      { step: 'Design', detail: 'Develop policies, structures, and systems aligned with your strategy.' },
      { step: 'Implementation', detail: 'Roll out with management training and employee communication.' },
      { step: 'Sustain', detail: 'Ongoing HR support and periodic reviews.' },
    ],
    faqs: [
      { q: 'Can you act as our outsourced HR department?', a: 'Yes. For SMEs without an in-house HR team, we provide fully managed HR support on retainer.' },
      { q: 'Do you handle labour law compliance?', a: 'We ensure all HR policies and practices comply with local employment law and represent you in labour disputes.' },
    ],
  },
  {
    slug: 'virtual-cfo',
    title: 'Virtual CFO',
    short: 'Executive-level financial leadership without the full-time cost.',
    icon: 'TrendingUp',
    category: 'Advisory',
    description:
      'Not ready for a full-time CFO? Our Virtual CFO service gives you senior financial leadership on a flexible basis — strategic planning, cash flow management, investor reporting, and board-level insight, scaled to your needs and budget.',
    features: [
      'Strategic financial planning',
      'Cash flow forecasting & management',
      'Budgeting & variance analysis',
      'Investor & board reporting',
      'Fundraising & capital structure advisory',
      'Financial modeling & scenario analysis',
      'KPI dashboard development',
      'Mentoring internal finance teams',
    ],
    deliverables: [
      'Monthly CFO report pack',
      '13-week rolling cash flow forecast',
      'Annual budget & financial model',
      'Board presentation materials',
    ],
    process: [
      { step: 'Engagement', detail: 'Define scope, time commitment, and reporting cadence based on your needs.' },
      { step: 'Assessment', detail: 'Deep-dive into your financial position, systems, and reporting gaps.' },
      { step: 'Execution', detail: 'Regular CFO-level oversight, planning, and stakeholder communication.' },
      { step: 'Evolution', detail: 'Scale the engagement up or down as your business grows.' },
    ],
    faqs: [
      { q: 'How much time does a Virtual CFO spend with us?', a: 'Typically 2–4 days per month, customizable. Some clients need weekly check-ins; others monthly strategic sessions.' },
      { q: 'Can the Virtual CFO attend board meetings?', a: 'Yes. Your Virtual CFO can attend board and audit committee meetings and present financial reports.' },
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    short: 'Technology advisory to modernize finance and operations.',
    icon: 'Cpu',
    category: 'Advisory',
    description:
      'We help you select, implement, and optimize digital tools that streamline finance, automate workflows, and unlock data-driven decision-making. From ERP selection to cloud accounting migration, we make technology work for your business.',
    features: [
      'ERP & accounting software selection',
      'System implementation & migration',
      'Process automation & workflow design',
      'Data analytics & dashboard development',
      'Cloud accounting setup',
      'Digital document management',
      'Integration with banking & payment platforms',
      'Staff training & change management',
    ],
    deliverables: [
      'Software selection report',
      'Implementation project plan',
      'Configured system with migrated data',
      'Custom dashboards & reports',
    ],
    process: [
      { step: 'Discovery', detail: 'Map current systems, pain points, and digital maturity.' },
      { step: 'Selection', detail: 'Evaluate and recommend the best-fit technology stack for your budget.' },
      { step: 'Implementation', detail: 'Configure, migrate data, and integrate with existing systems.' },
      { step: 'Adoption', detail: 'Train your team and provide post-go-live support.' },
    ],
    faqs: [
      { q: 'Which accounting software do you recommend?', a: 'It depends on your size and needs. We recommend QuickBooks/Sage for SMEs, Xero for service businesses, and full ERPs (SAP, Oracle, Dynamics) for larger operations.' },
      { q: 'Can you help automate our invoicing and collections?', a: 'Yes. We implement e-invoicing, automated payment reminders, and collections workflows that reduce DSO significantly.' },
    ],
  },
  {
    slug: 'business-registration',
    title: 'Business Registration',
    short: 'Company incorporation, licensing, and regulatory compliance.',
    icon: 'FileCheck',
    category: 'Corporate',
    description:
      'Starting a new venture? We handle the entire registration process — from company incorporation and tax registration to trade licensing and sector permits — so you can focus on building your business.',
    features: [
      'Company incorporation (limited, partnership, NGO)',
      'Tax registration (TIN, VAT, PAYE)',
      'Trade licensing & sector permits',
      'NGO & society registration',
      'Foreign investor registration',
      'Shareholder agreements & constitutions',
      'Annual returns & statutory filings',
      'Company secretarial services',
    ],
    deliverables: [
      'Certificate of incorporation',
      'Tax registration certificates',
      'Trade license & permits',
      'Company statutory registers',
    ],
    process: [
      { step: 'Advise', detail: 'Determine the optimal legal structure for your business objectives.' },
      { step: 'Prepare', detail: 'Draft incorporation documents and compile regulatory requirements.' },
      { step: 'File', detail: 'Submit applications and track through to issuance.' },
      { step: 'Comply', detail: 'Set up ongoing compliance calendar for returns and renewals.' },
    ],
    faqs: [
      { q: 'How long does incorporation take?', a: 'Typically 2–4 weeks depending on entity type and jurisdiction. Expedited options are available.' },
      { q: 'Can you register foreign companies and NGOs?', a: 'Yes. We handle foreign investor registration, NGO permits, and cross-border entity setup.' },
    ],
  },
  {
    slug: 'real-estate-advisory',
    title: 'Real Estate Advisory',
    short: 'Property investment, valuation, and transaction support.',
    icon: 'Building2',
    category: 'Advisory',
    description:
      'Whether acquiring, developing, or divesting property, our real estate advisory team provides the financial analysis, valuation, and transaction support you need to make confident real estate decisions.',
    features: [
      'Property investment analysis',
      'Real estate valuation',
      'Development feasibility studies',
      'Transaction due diligence',
      'Portfolio advisory',
      'Lease vs. buy analysis',
      'Property tax advisory',
      'Joint venture structuring',
    ],
    deliverables: [
      'Investment analysis report',
      'Property valuation report',
      'Feasibility study',
      'Transaction support memo',
    ],
    process: [
      { step: 'Define', detail: 'Clarify investment objectives, risk appetite, and timeline.' },
      { step: 'Analyze', detail: 'Financial modeling, market analysis, and valuation.' },
      { step: 'Advise', detail: 'Recommendations with risk-return assessment.' },
      { step: 'Execute', detail: 'Transaction support and post-acquisition monitoring.' },
    ],
    faqs: [
      { q: 'Do you provide property valuations for mortgage purposes?', a: 'Yes. Our valuations are accepted by major lenders and comply with International Valuation Standards.' },
      { q: 'Can you advise on commercial lease negotiations?', a: 'We provide lease vs. buy analysis and support commercial lease structuring and negotiation.' },
    ],
  },
  {
    slug: 'immigration-services',
    title: 'Immigration Services',
    short: 'Work permits, residency, and cross-border mobility support.',
    icon: 'Plane',
    category: 'Corporate',
    description:
      'For businesses employing international talent or investors relocating, we provide end-to-end immigration support — work permits, residency applications, and compliance — handled efficiently so your people can focus on their work.',
    features: [
      'Work permit applications & renewals',
      'Investor & residency permits',
      'Dependent & family relocation',
      'Immigration compliance advisory',
      'Cross-border payroll & tax coordination',
      'Visa support & processing',
      'Local registration & banking setup',
    ],
    deliverables: [
      'Approved work/residency permits',
      'Immigration compliance checklist',
      'Relocation timeline & support plan',
      'Ongoing permit renewal tracking',
    ],
    process: [
      { step: 'Assess', detail: 'Determine permit category and eligibility based on role and nationality.' },
      { step: 'Prepare', detail: 'Compile application package with all supporting documents.' },
      { step: 'Submit', detail: 'File application and liaise with immigration authorities.' },
      { step: 'Settle', detail: 'Support local registration, banking, and ongoing compliance.' },
    ],
    faqs: [
      { q: 'How long do work permits take to process?', a: 'Typically 4–8 weeks. We provide expedited options where available and keep you updated throughout.' },
      { q: 'Can you help with family relocation permits?', a: 'Yes. We handle dependent permits and full family relocation support including school registration assistance.' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories = ['Accounting', 'Tax', 'Audit', 'Advisory', 'Corporate'] as const;
