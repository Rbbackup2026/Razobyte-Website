export type ProductFaq = {
  question: string;
  answer: string;
};

export const crmFaqs: ProductFaq[] = [
  {
    question: "What is a custom CRM and how is it different from off-the-shelf software?",
    answer:
      "A custom CRM is built around your sales process, team structure, and communication channels — not a generic template. Off-the-shelf tools often require your team to adapt to fixed workflows. We configure lead stages, assignment rules, dashboards, and integrations to match how your business actually operates.",
  },
  {
    question: "Can you integrate WhatsApp and cloud telephony into the CRM?",
    answer:
      "Yes. We integrate approved WhatsApp Business API providers for messaging, quotations, and customer updates, along with cloud telephony for click-to-call, automatic call logging, and live customer context during conversations — all recorded in a single customer timeline.",
  },
  {
    question: "How long does a typical CRM implementation take?",
    answer:
      "Timeline depends on scope — number of users, integrations, data migration, and custom modules. A focused lead-management rollout can take a few weeks; a full CRM with telephony, WhatsApp, ERP connectors, and automation typically spans several sprints. We share a clear roadmap after the discovery phase.",
  },
  {
    question: "Can the CRM connect with our existing ERP or accounting system?",
    answer:
      "Absolutely. We build API integrations and data sync between your CRM and ERP, accounting, payment gateways, or marketing tools so sales, finance, and operations work from consistent customer and order data without duplicate entry.",
  },
  {
    question: "Do you support automated lead assignment and pipeline workflows?",
    answer:
      "Yes. We configure rules to auto-assign leads by region, product, campaign, or round-robin; trigger follow-up tasks and reminders; and move deals through custom pipeline stages with notifications so nothing falls through the cracks.",
  },
  {
    question: "Can we migrate data from spreadsheets or another CRM?",
    answer:
      "We handle data migration from Excel, Google Sheets, legacy CRMs, and other sources. Records are cleaned, deduplicated, and mapped to your new structure before go-live so your team starts with reliable historical data.",
  },
  {
    question: "Is user training included after go-live?",
    answer:
      "Training and onboarding are part of our implementation approach. We provide role-based sessions, documentation, and hands-on support so sales, support, and management teams are confident using the system from day one.",
  },
  {
    question: "What ongoing support do you provide after launch?",
    answer:
      "We offer continuous technical support, performance optimization, feature enhancements, and version updates. As your sales process evolves, we help extend workflows, add integrations, and refine reporting without disrupting daily operations.",
  },
];

export const erpFaqs: ProductFaq[] = [
  {
    question: "Which ERP platform does Razobyte recommend?",
    answer:
      "ERPNext on the Frappe Framework is our primary platform for scalable, customizable solutions. However, we evaluate your processes, industry, budget, and growth plans first — and may recommend Odoo, Microsoft Dynamics 365, SAP Business One, Oracle NetSuite, Zoho, or a hybrid setup when that better fits your needs.",
  },
  {
    question: "Do you only implement ERPNext, or do you work with other ERP systems?",
    answer:
      "We work across multiple ecosystems. Our team has hands-on experience with ERPNext, Odoo, Dynamics 365, SAP Business One, NetSuite, and Zoho — covering customization, migration, integration, reporting, and ongoing support on each platform.",
  },
  {
    question: "How long does an ERP implementation typically take?",
    answer:
      "Duration varies by modules (finance, inventory, HR, manufacturing), number of branches, integrations, and data migration complexity. A phased rollout for core modules may take a few months; enterprise-wide deployments with legacy migration and custom development follow a structured multi-phase plan defined during discovery.",
  },
  {
    question: "Can you migrate data from our legacy ERP or spreadsheets?",
    answer:
      "Yes. We plan and execute data migration from legacy ERPs, Tally, spreadsheets, and disconnected tools — including master data, transactions, inventory, and historical records — with validation and reconciliation before cutover.",
  },
  {
    question: "Can you integrate Tally, Shopify, WooCommerce, or Salesforce with our ERP?",
    answer:
      "We build integrations with TallyPrime, Salesforce CRM, Shopify, WooCommerce, and other third-party systems via APIs and middleware so orders, inventory, finance, and customer data stay synchronized across your stack.",
  },
  {
    question: "What is included in your ERP consulting services?",
    answer:
      "Our services cover business process analysis, solution architecture, implementation and deployment, module customization, data migration, API integrations, workflow automation, user training, performance tuning, version upgrades, cloud infrastructure planning, and business intelligence reporting.",
  },
  {
    question: "Do you support multi-branch or multi-warehouse operations?",
    answer:
      "Yes. We configure multi-entity structures with branch-wise inventory, consolidated reporting, role-based access, and inter-branch transfers — whether on ERPNext or other platforms that support distributed operations.",
  },
  {
    question: "How do you decide which ERP is right for our business?",
    answer:
      "We assess operational workflows, scalability needs, industry requirements, existing technology, and future growth — then recommend a platform aligned with business objectives rather than a one-size-fits-all choice. Our goal is the right fit, not a forced software preference.",
  },
];
