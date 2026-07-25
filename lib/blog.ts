export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ifrs-18-new-revenue-recognition-standard',
    title: 'IFRS 18: What the New Revenue Recognition Standard Means for Your Business',
    excerpt:
      'The new revenue recognition standard changes how companies report income. Here is what you need to know and how to prepare.',
    category: 'Accounting',
    author: 'Sarah Kiggundu',
    authorRole: 'Audit Partner',
    date: '2025-06-15',
    readTime: '8 min read',
    image:
      'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
    content: [
      'The International Accounting Standards Board (IASB) has issued IFRS 18, a new standard that replaces IAS 18 and IAS 11. The core principle is that revenue is recognized when goods or services are transferred to the customer, reflecting the amount the entity expects to be entitled to in exchange.',
      'For most businesses, this means a shift from a risk-and-reward model to a control-based model for revenue recognition. The five-step model requires entities to identify the contract, identify performance obligations, determine the transaction price, allocate the price, and recognize revenue as performance obligations are satisfied.',
      'The impact varies by industry. Construction companies using percentage-of-completion will see minimal change, while telecommunications, software, and real estate companies may see significant shifts in timing and amount of recognized revenue.',
      'Preparation should begin now. We recommend a gap assessment to identify contracts and revenue streams affected, evaluate systems and processes for the additional disclosure requirements, and train finance teams on the new framework.',
      'Our team at Riverhorse Hippo is ready to help you navigate this transition. From initial assessment to implementation and training, we provide end-to-end support to ensure a smooth and compliant adoption.',
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
    readTime: '6 min read',
    image:
      'https://images.pexels.com/photos/6863251/pexels-photo-6863251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      'Tax planning is not about evasion — it is about using the law to your advantage. Here are five strategies every SME should consider.',
      'First, take advantage of capital allowances. Investments in plant and machinery, buildings, and intangible assets may qualify for accelerated depreciation or investment deductions that reduce your taxable income.',
      'Second, structure your entity correctly. The choice between a limited company, partnership, or sole proprietorship has significant tax implications. The optimal structure depends on your profit levels, growth plans, and ownership.',
      'Third, optimize your compensation mix. A combination of salary, dividends, and benefits can reduce the overall tax burden for business owners while remaining fully compliant.',
      'Fourth, leverage available tax incentives. Many jurisdictions offer investment incentives, export promotion schemes, and sector-specific exemptions that businesses overlook.',
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
