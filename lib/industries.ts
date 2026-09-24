export type Industry = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  description: string;
  longDescription: string;
  challenges: string[];
  solutions: string[];
  whoFor: string;
};

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    short: 'Financial and compliance support for clinics, hospitals, and health organizations.',
    icon: 'HeartPulse',
    description:
      'We support healthcare providers with financial management, donor compliance, regulatory reporting, and operational efficiency — so they can focus on delivering quality care.',
    longDescription:
      'Healthcare providers in Kenya operate in a regulated environment with unique financial challenges. Clinics, hospitals, and health organizations must manage complex revenue cycles, handle medical insurance billing, maintain inventory for pharmaceuticals and medical supplies, and comply with regulatory requirements from the Kenya Medical Practitioners and Dentists Council and other health authorities. For donor-funded health programs, additional layers of grant compliance and reporting apply. Our team understands the financial pressures facing healthcare organizations, from managing cash flow under insurance reimbursement delays to tracking costs across departments and service lines. We provide fund accounting for grant-funded programs, revenue cycle optimization to reduce billing losses, and inventory cost control systems for medical supplies. Whether you run a single clinic or a multi-branch hospital network, we tailor our accounting and advisory services to the realities of Kenya\'s healthcare sector.',
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
    whoFor: 'Clinics, hospitals, pharmaceutical companies, health NGOs, and diagnostic laboratories in Kenya.',
  },
  {
    slug: 'education',
    title: 'Education',
    short: 'Financial management for schools, universities, and educational institutions.',
    icon: 'GraduationCap',
    description:
      'From fee management to staff payroll and institutional governance, we help educational institutions maintain financial health and regulatory compliance.',
    longDescription:
      'Educational institutions in Kenya face distinct financial management challenges. Schools, colleges, and universities must manage fee collection across terms, handle large payrolls with complex benefits structures including TSC and non-TSC staff, maintain compliance with the Ministry of Education and relevant regulatory bodies, and plan for capital projects such as new classrooms or laboratories. Private institutions additionally face competitive pressures and the need for sound financial planning to sustain operations. We help educational institutions streamline fee billing and collection, manage payroll for teaching and non-teaching staff, produce management accounts that give boards and proprietors clear visibility into financial performance, and plan for capital investments. For institutions receiving grants or donations, we provide fund accounting and donor compliance support. Our governance advisory services help school boards and university councils strengthen oversight and accountability.',
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
    whoFor: 'Private schools, international schools, colleges, universities, and vocational training institutions in Kenya.',
  },
  {
    slug: 'construction',
    title: 'Construction',
    short: 'Project accounting, cost control, and contract management for builders.',
    icon: 'HardHat',
    description:
      'Construction requires specialized project accounting and contract management. We provide cost tracking, progress billing, and financial oversight tailored to the construction industry.',
    longDescription:
      'Construction companies in Kenya operate on thin margins and long project cycles, making project accounting and cost control critical to profitability. Whether you are building residential developments, commercial properties, roads, or infrastructure projects, accurate cost tracking per project is essential. We provide specialized construction accounting including project-by-project profitability tracking, percentage-of-completion revenue recognition under IFRS 15, job cost reporting that breaks down materials, labor, and overheads, and progress billing management. We also help construction firms manage bonding and insurance compliance, handle subcontractor payments and withholding tax, and produce financial statements that give banks and bond providers confidence. For firms working on public projects, we understand the additional compliance requirements and can support you through the financial documentation demands of government contracts.',
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
    whoFor: 'Construction firms, civil engineering contractors, real estate developers, and road builders in Kenya.',
  },
  {
    slug: 'ngos',
    title: 'NGOs',
    short: 'Donor compliance, grant management, and governance for non-profits.',
    icon: 'HandHeart',
    description:
      'We are specialists in NGO financial management — donor compliance, grant accounting, institutional governance, and audit readiness for organizations working with international donors.',
    longDescription:
      'NGOs in Kenya operate in one of the most demanding compliance environments. Each donor — whether a bilateral agency, a foundation, or a corporate partner — has unique requirements for financial reporting, procurement, eligibility, and audit. Managing multiple grants simultaneously requires a chart of accounts that can produce donor-specific reports from a single ledger, robust procurement policies aligned with donor thresholds, and regular compliance self-assessments. Our NGO practice covers grant and donor fund accounting, donor-specific financial reporting, NGO governance and policy frameworks, and both statutory and donor audit support. We help NGOs prepare for the annual audit required by the NGO Coordination Board, design safeguarding and fraud prevention frameworks, and build the capacity of in-house finance teams through training and mentoring. For organizations transitioning from start-up to scale, we provide the financial infrastructure to manage growth responsibly.',
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
    whoFor: 'Local and international NGOs, community-based organizations, faith-based organizations, and non-profit foundations operating in Kenya.',
  },
  {
    slug: 'retail',
    title: 'Retail',
    short: 'Inventory accounting, POS integration, and margin optimization.',
    icon: 'ShoppingBag',
    description:
      'We help retailers manage inventory costs, integrate POS systems with accounting, and optimize margins across single and multi-store operations.',
    longDescription:
      'Retail businesses in Kenya face challenges around inventory shrinkage, POS-to-accounting integration, multi-store consolidation, and tight margin management. Whether you operate a single shop, a chain of supermarkets, or an e-commerce platform, accurate inventory accounting is critical. We help retailers integrate point-of-sale systems with accounting software, produce multi-store consolidated financial reports, implement inventory valuation and shrinkage controls, and analyze margins by product category and store. We also assist with VAT compliance for retail transactions, including the requirements around electronic tax register (ETR) invoicing. For growing retailers, we provide the financial dashboards and KPI tracking needed to make data-driven decisions about pricing, stock mix, and expansion.',
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
    whoFor: 'Single-store retailers, multi-branch chains, supermarkets, e-commerce businesses, and specialty shops in Kenya.',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    short: 'Financial management for hotels, restaurants, and tourism businesses.',
    icon: 'UtensilsCrossed',
    description:
      'From revenue management to cost control and payroll, we provide hospitality-specific financial services that keep your operations profitable and compliant.',
    longDescription:
      'The hospitality sector in Kenya — from lodges in the Maasai Mara to restaurants in Nairobi — operates on seasonal demand cycles and tight cost structures. Hotels must track revenue per available room (RevPAR), manage food and beverage costs as a percentage of revenue, handle seasonal staffing, and consolidate financial results across multiple properties. Restaurants face ingredient cost volatility, labour cost management, and the need for daily or weekly cost reporting to catch issues early. We provide hospitality-specific financial services including revenue management reporting, F&B cost control systems, seasonal payroll management, and multi-property financial consolidation. We also handle VAT compliance for the hospitality sector, including the treatment of service charges and tourism levies where applicable. For hospitality businesses seeking investment or expansion, we produce investor-grade financial reports and feasibility studies.',
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
    whoFor: 'Hotels, lodges, restaurants, bars, catering companies, and tour operators in Kenya.',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    short: 'Cost accounting, production tracking, and supply chain finance.',
    icon: 'Factory',
    description:
      'We provide manufacturing-specific cost accounting, production variance analysis, and supply chain financial management to optimize your operations.',
    longDescription:
      'Manufacturing companies in Kenya need precise cost accounting to remain competitive. Standard costing systems, variance analysis between expected and actual production costs, work-in-progress valuation, and raw material inventory management are all essential for understanding true production costs. We help manufacturers implement standard costing systems, track production variances by product line, value work-in-progress and finished goods inventory, and analyze supply chain costs including import duties and freight. We also support manufacturers with VAT compliance on raw material imports and finished goods sales, capital allowances on plant and machinery, and financial modeling for capacity expansion decisions. For manufacturers supplying to large buyers or exporting, we provide the financial reporting and compliance support needed to meet buyer and regulatory requirements.',
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
    whoFor: 'Food and beverage manufacturers, chemical producers, textile mills, assembly plants, and light industrial operations in Kenya.',
  },
  {
    slug: 'technology',
    title: 'Technology',
    short: 'SaaS metrics, R&D accounting, and fundraising support for tech companies.',
    icon: 'Cpu',
    description:
      'We understand tech. From SaaS metrics to R&D accounting, equity compensation, and investor reporting, we provide the financial infrastructure that scaling technology companies need.',
    longDescription:
      'Kenya\'s technology sector is growing rapidly, with startups and scale-ups in fintech, agritech, healthtech, and SaaS requiring specialized financial expertise. Tech companies need SaaS metrics tracking (MRR, ARR, churn, CAC, LTV), subscription revenue recognition under IFRS 15, R&D cost accounting and capitalization, equity and stock option accounting, and investor-grade financial reporting for fundraising rounds. We provide the financial infrastructure that scaling tech companies need — from implementing accounting systems that handle multi-currency and recurring billing, to producing cap tables and investor updates, to supporting due diligence during funding rounds. For tech companies operating across borders, we handle multi-jurisdiction tax compliance and transfer pricing. We also assist with the financial compliance requirements of local regulators and accelerators.',
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
    whoFor: 'Tech startups, SaaS companies, fintechs, agritech firms, and software development agencies in Kenya.',
  },
  {
    slug: 'agriculture',
    title: 'Agriculture',
    short: 'Agribusiness accounting, supply chain finance, and commodity risk management.',
    icon: 'Wheat',
    description:
      'We support agribusinesses with specialized accounting for crop and livestock operations, supply chain finance, and commodity risk management.',
    longDescription:
      'Agriculture is a cornerstone of Kenya\'s economy, and agribusinesses face unique accounting challenges including seasonal cash flow cycles, biological asset valuation under IAS 41, supply chain and cooperative accounting, and commodity price risk management. Whether you operate a large-scale farm, a processing facility, or an agricultural cooperative, we provide specialized accounting that reflects the realities of agricultural production. We help agribusinesses implement accounting systems that handle biological asset valuation, track costs by crop or livestock category, manage cooperative member accounts and produce seasonal cash flow forecasts. We also assist with VAT and tax compliance for agricultural inputs and outputs, and provide financial modeling for expansion into new crops, processing capacity, or export markets.',
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
    whoFor: 'Commercial farms, agribusiness processors, agricultural cooperatives, and export-oriented agricultural companies in Kenya.',
  },
  {
    slug: 'government',
    title: 'Government',
    short: 'IPSAS compliance, public sector audit, and institutional governance.',
    icon: 'Landmark',
    description:
      'We provide public sector financial management services including IPSAS compliance, performance audits, and governance advisory for government institutions and agencies.',
    longDescription:
      'Government institutions and public sector agencies in Kenya are increasingly required to adopt IPSAS (International Public Sector Accounting Standards) for financial reporting. This transition requires significant changes to chart of accounts, financial statement templates, and disclosure practices. We support public sector entities with IPSAS implementation and accrual accounting transition, performance and value-for-money audits, public procurement compliance advisory, and institutional governance frameworks. Our team understands the unique accountability requirements of the public sector, including reporting to parliament, the Auditor General, and oversight bodies. We help public entities strengthen internal controls, improve budget execution reporting, and build the capacity of finance teams to meet IPSAS requirements. For county governments and semi-autonomous agencies, we provide tailored support that reflects the Kenyan devolved governance structure.',
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
    whoFor: 'County governments, state corporations, semi-autonomous government agencies, and public institutions in Kenya.',
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    short: 'Practice management, partner accounting, and profitability advisory.',
    icon: 'BriefcaseBusiness',
    description:
      'We help professional service firms — law, architecture, engineering, consulting — manage practice finances, partner distributions, and project profitability.',
    longDescription:
      'Professional service firms in Kenya — law firms, architectural practices, engineering consultants, and management consultancies — have specific financial management needs that differ from other businesses. Revenue is driven by billable hours and utilization rates, work-in-progress must be tracked and recognized correctly, partner compensation and profit distributions require careful accounting, and practice profitability must be analyzed by partner, practice area, and client. We help professional service firms implement time tracking and billing systems, manage WIP and revenue recognition, handle partner accounting and profit-sharing distributions, and analyze practice profitability and utilization. We also assist with trust account management for law firms, professional indemnity insurance compliance, and the financial aspects of partner admissions, retirements, and mergers.',
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
    whoFor: 'Law firms, architectural practices, engineering consultants, management consultancies, and accounting firms in Kenya.',
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
