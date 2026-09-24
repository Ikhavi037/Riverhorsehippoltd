export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  lastUpdated: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
  faqs?: { q: string; a: string }[];
};

// Draft blog post titles for future writing (Kenya-focused):
// 1. "KRA iTax Filing Deadlines: A Calendar for Kenyan Businesses"
// 2. "Finance Act Changes: What Kenyan Companies Need to Know This Year"
// 3. "SHIF, NSSF and the Affordable Housing Levy: A Payroll Compliance Guide"

export const blogPosts: BlogPost[] = [
  {
    slug: 'ifrs-18-financial-statement-presentation',
    title: 'IFRS 18 Explained: What Changes in Financial Statement Presentation',
    excerpt:
      'IFRS 18 replaces IAS 1 with new income statement categories, defined subtotals, and rules on management-defined performance measures. Here is what changes and how to prepare.',
    category: 'Accounting',
    author: 'Sarah Kiggundu',
    authorRole: 'Audit Partner',
    date: '2025-06-15',
    lastUpdated: '2026-09-21',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    content: [
      'The International Accounting Standards Board (IASB) issued IFRS 18, "Presentation and Disclosure in Financial Statements," to replace IAS 1. The standard applies to annual reporting periods beginning on or after 1 January 2027, with earlier application permitted. Unlike IFRS 15 (revenue recognition) or IFRS 16 (leases), IFRS 18 does not change what income or expenses a company recognizes — it changes how those amounts are presented and disclosed in the financial statements.',
      'The core objective is to improve comparability across companies. Under IAS 1, entities had significant flexibility in how they structured the income statement, which made it difficult for investors to compare performance across companies in the same industry. IFRS 18 introduces tighter requirements so that similar transactions are presented consistently.',
      'Three required categories in the income statement. IFRS 18 requires all income and expenses to be classified into one of three categories on the face of the income statement: operating, investing, and financing. The operating category includes income and expenses from an entity\'s main business activities. The investing category includes returns on investments and other investing activities. The financing category includes costs related to the entity\'s financing structure. Previously, companies could choose between a by-function (cost of sales model) and by-nature presentation — IFRS 18 requires classification by function for the operating category.',
      'New defined subtotals. IFRS 18 introduces two new required subtotals on the income statement. The first is "operating profit," which includes all operating income and expenses and excludes investing and financing items. The second is "operating profit before investing and financing income and expenses," which is equivalent to the current operating profit subtotal but defined more precisely. These defined subtotals mean that companies can no longer use their own labels for intermediate profit measures on the face of the income statement — the defined subtotals must be presented.',
      'Management-defined performance measures (MPMs). One of the most significant changes is the requirement to disclose management-defined performance measures — commonly known as non-GAAP or alternative performance measures. If management uses a performance measure that is not defined by IFRS in its public communications (for example, EBITDA adjusted for one-time items), that measure must now be disclosed in the financial statements with a reconciliation to the nearest IFRS-defined subtotal, a explanation of why it is useful, and the tax and non-controlling interest effects.',
      'Tighter rules on grouping information. IFRS 18 introduces new requirements for how information is grouped and presented. Entities must not combine items of a different nature into a single line item, and must not offset income and expenses unless explicitly permitted by another IFRS. The standard also requires that line items, headings and subtotals on the face of the income statement be clearly identified, with subtotals that are not defined by IFRS clearly distinguished from those that are.',
      'How to prepare. Companies should begin by assessing the impact of the new income statement structure on their current chart of accounts and reporting systems. Map each existing line item to its new category (operating, investing, or financing). Review any MPMs used in investor presentations or management reports and prepare the required reconciliations. Update accounting manuals and financial statement templates. Train finance teams on the new presentation requirements. For groups, consider whether subsidiary reporting needs to be aligned to produce compliant consolidated statements.',
      'For Kenyan companies, the transition is particularly relevant for listed entities on the Nairobi Securities Exchange, which will need to align their published financial statements with IFRS 18. Private companies should also prepare, as lenders and investors increasingly expect IFRS-compliant presentation. Our team at Riverhorse Hippo can assist with gap assessments, chart of accounts mapping, template redesign, and team training to ensure a smooth transition before the 2027 effective date.',
    ],
    faqs: [
      { q: 'When does IFRS 18 become effective?', a: 'IFRS 18 applies to annual reporting periods beginning on or after 1 January 2027. Earlier application is permitted, so companies that wish to adopt it sooner can do so.' },
      { q: 'Does IFRS 18 change how much profit a company reports?', a: 'No. IFRS 18 does not change the recognition or measurement of income and expenses. It changes how those amounts are categorized, presented, and disclosed in the financial statements.' },
      { q: 'What is the difference between IFRS 18 and IFRS 15?', a: 'IFRS 15 is about revenue recognition — when and how much revenue to recognize. IFRS 18 is about presentation and disclosure — how income and expenses are categorized and displayed in the financial statements. They are separate standards addressing different aspects of financial reporting.' },
      { q: 'What are management-defined performance measures (MPMs)?', a: 'MPMs are performance measures that management uses in public communications but that are not defined by IFRS — sometimes called non-GAAP measures. Under IFRS 18, if management uses such measures, they must be disclosed in the financial statements with a reconciliation to the nearest IFRS-defined subtotal.' },
      { q: 'What should Kenyan companies do to prepare?', a: 'Begin by mapping your current income statement line items to the new operating, investing, and financing categories. Review any non-GAAP measures you use publicly and prepare the required reconciliations. Update financial statement templates and train your finance team on the new requirements. A gap assessment with a qualified advisor can help prioritize the work.' },
    ],
  },
  {
    slug: 'tax-planning-strategies-for-smes',
    title: '5 Tax Planning Strategies Every SME Should Implement This Year',
    excerpt:
      'Legitimate tax planning strategies that can save your SME significant money while keeping you fully compliant.',
    category: 'Tax',
    author: 'Daniel Okware',
    authorRole: 'Tax Director',
    date: '2025-05-28',
    lastUpdated: '2025-05-28',
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Tax planning is not about evasion — it is about using the law to your advantage. Here are five strategies every SME should consider.',
      'First, take advantage of capital allowances. Investments in plant and machinery, buildings, and intangible assets may qualify for accelerated depreciation or investment deductions that reduce your taxable income.',
      'Second, structure your entity correctly. The choice between a limited company, partnership, or sole proprietorship has significant tax implications. The optimal structure depends on your profit levels, growth plans, and ownership.',
      'Third, optimize your compensation mix. A combination of salary, dividends, and benefits can reduce the overall tax burden for business owners while remaining fully compliant.',
      'Fourth, leverage available tax incentives. Kenya offers investment incentives, export promotion schemes, and sector-specific exemptions that businesses often overlook.',
      'Fifth, keep immaculate records. The best tax planning fails without proper documentation. Good bookkeeping ensures you can substantiate every deduction and credit you claim.',
    ],
  },
  {
    slug: 'ngo-donor-compliance-guide',
    title: 'The Complete Guide to NGO Donor Compliance',
    excerpt:
      'Navigating multi-donor compliance is one of the biggest challenges for NGOs. This guide breaks down what you need to know.',
    category: 'Advisory',
    author: 'Patricia Nakimera',
    authorRole: 'NGO Advisory Lead',
    date: '2025-05-10',
    lastUpdated: '2025-05-10',
    readTime: '10 min read',
    image:
      'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'NGOs operate in one of the most complex compliance environments. Each donor has unique requirements for financial reporting, procurement, eligibility, and audit. Managing multiple donors simultaneously is a significant operational challenge.',
      'The foundation of donor compliance is a robust chart of accounts that can produce donor-specific reports from a single ledger. This avoids parallel accounting systems and ensures consistency across reports.',
      'Procurement compliance is another critical area. Most donors have thresholds for competitive bidding, sole source justification, and eligibility restrictions. A clear procurement policy aligned with donor requirements is essential.',
      'Regular internal compliance reviews help identify issues before they become audit findings. We recommend quarterly compliance self-assessments using a checklist tailored to each active grant.',
      'Finally, invest in your finance team. Donor compliance is only as strong as the people executing it. Training on donor-specific requirements, documentation standards, and audit readiness pays for itself many times over.',
    ],
  },
  {
    slug: 'virtual-cfo-when-to-hire',
    title: 'When Does Your Business Need a Virtual CFO?',
    excerpt:
      'A Virtual CFO provides executive financial leadership at a fraction of the cost. Here are the signs it is time to engage one.',
    category: 'Advisory',
    author: 'Sarah Kiggundu',
    authorRole: 'Audit Partner',
    date: '2025-04-22',
    lastUpdated: '2025-04-22',
    readTime: '5 min read',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Many growing businesses reach a point where they need senior financial leadership but cannot justify a full-time CFO. This is where a Virtual CFO becomes invaluable.',
      'The first sign is rapid growth. When revenue is scaling fast, you need someone who can model cash flow, build budgets, and provide strategic financial guidance to navigate the growth curve.',
      'The second sign is fundraising preparation. Investors expect professional financial reporting, projections, and due diligence readiness. A Virtual CFO prepares you for these conversations with confidence.',
      'The third sign is decision complexity. If you are evaluating new markets, acquisitions, or major investments, you need CFO-level analysis to make informed decisions.',
      'The fourth sign is board or investor reporting requirements. If your stakeholders expect regular financial reporting and strategic commentary, a Virtual CFO can produce board-ready materials.',
      'Finally, if your finance team needs mentoring and leadership but you are not ready for a full-time hire, a Virtual CFO bridges the gap while building internal capacity.',
    ],
  },
  {
    slug: 'preventing-fraud-in-your-business',
    title: 'Preventing Fraud: Building a Culture of Integrity and Control',
    excerpt:
      'Fraud costs businesses billions annually. Learn how to build anti-fraud frameworks that protect your organization.',
    category: 'Audit',
    author: 'Michael Ssali',
    authorRole: 'Forensic Services Lead',
    date: '2025-04-05',
    lastUpdated: '2025-04-05',
    readTime: '7 min read',
    image:
      'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Fraud is not just a financial loss — it damages reputation, morale, and trust. The most effective fraud prevention combines strong controls with a culture of integrity.',
      'The fraud triangle explains why fraud occurs: opportunity, pressure, and rationalization. Strong internal controls eliminate opportunity, the most actionable of the three factors.',
      'Segregation of duties is the cornerstone of fraud prevention. No single person should have control over all aspects of a transaction — authorization, recording, custody, and reconciliation must be separated.',
      'A whistleblower mechanism is one of the most effective fraud detection tools. Organizations with hotlines detect fraud earlier and suffer smaller losses than those without.',
      'Regular fraud risk assessments identify where your organization is vulnerable. We recommend annual assessments that map fraud schemes to your processes and evaluate the adequacy of existing controls.',
      'Finally, tone at the top matters. When leadership demonstrates ethical behavior and takes fraud seriously, it sets the standard for the entire organization.',
    ],
  },
  {
    slug: 'digital-transformation-finance-function',
    title: 'Digital Transformation of the Finance Function: A Practical Roadmap',
    excerpt:
      'Modernizing your finance function with technology drives efficiency and better decision-making. Here is how to do it right.',
    category: 'Advisory',
    author: 'Daniel Okware',
    authorRole: 'Tax Director',
    date: '2025-03-18',
    lastUpdated: '2025-03-18',
    readTime: '9 min read',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'The finance function is undergoing a digital revolution. Manual processes, spreadsheets, and paper are being replaced by cloud accounting, automation, and real-time analytics.',
      'Step one is assessing your current digital maturity. Where are your bottlenecks? Which processes consume the most time? What data do you need that you cannot currently access?',
      'Step two is selecting the right technology. The best system is not always the most expensive — it is the one that fits your size, complexity, and team capabilities.',
      'Step three is process automation. Accounts payable, receivable, bank reconciliation, and reporting can all be automated to varying degrees, freeing your team for higher-value analysis.',
      'Step four is data and analytics. Modern systems provide real-time dashboards that transform how you monitor performance and make decisions.',
      'Step five is change management. Technology alone does not transform — people do. Invest in training, communicate the benefits, and support your team through the transition.',
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = ['All', 'Accounting', 'Tax', 'Audit', 'Advisory'];
