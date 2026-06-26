export type ProductCapability = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  href: string;
};

export const customProducts: ProductCapability[] = [
  {
    slug: "crm",
    title: "CRM Solutions",
    tagline: "Customer relationships, centralized",
    description:
      "Purpose-built CRM platforms that unify sales, support, and marketing — with workflows tailored to how your team actually operates.",
    highlights: [
      "Lead & pipeline management",
      "360° customer profiles",
      "Automated follow-ups & tasks",
      "REST API & third-party integrations",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
    href: "/crm",
  },
  {
    slug: "erp",
    title: "ERP Solutions",
    tagline: "Operations, end to end",
    description:
      "ERP consulting across ERPNext, Odoo, Dynamics 365, SAP, NetSuite, and Zoho — implementation, migration, customization, and integrations tailored to your business.",
    highlights: [
      "ERPNext & Frappe — primary platform",
      "Multi-platform implementation experience",
      "Legacy data migration & API integrations",
      "Tally, Salesforce, Shopify & WooCommerce connectors",
    ],
    techStack: ["Next.js", "Laravel", "MySQL", "AWS"],
    href: "/erp",
  },
  {
    slug: "custom-products",
    title: "Custom Products",
    tagline: "Built for your workflow",
    description:
      "From internal tools to customer-facing SaaS — we architect, build, and scale bespoke software aligned with your business logic.",
    highlights: [
      "API-first architecture",
      "Cloud-native deployment",
      "Legacy system modernization",
      "Ongoing DevOps & support",
    ],
    techStack: ["TypeScript", "Python", "Docker", "Kubernetes"],
    href: "/custom-products",
  },
];

export const productPageContent: Record<
  string,
  {
    title: string;
    subtitle: string;
    intro: string;
    features: { title: string; description: string }[];
    outcomes: string[];
  }
> = {
  crm: {
    title: "Custom CRM Development",
    subtitle: "Sales, support & retention — one platform",
    intro:
      "We engineer CRM systems that replace spreadsheets and disconnected tools with a single, secure platform — designed around your sales cycle, not a generic template.",
    features: [
      {
        title: "Pipeline & Lead Management",
        description:
          "Track leads from capture to close with custom stages, scoring rules, and automated assignments.",
      },
      {
        title: "Unified Customer Data",
        description:
          "Consolidate contacts, communication history, deals, and tickets in a searchable 360° profile.",
      },
      {
        title: "Workflow Automation",
        description:
          "Trigger emails, tasks, and notifications based on events — reducing manual follow-up overhead.",
      },
      {
        title: "Integrations & APIs",
        description:
          "Connect with email, telephony, payment gateways, and existing ERP or marketing tools via REST APIs.",
      },
    ],
    outcomes: [
      "Shorter sales cycles with automated nurturing",
      "Higher team adoption through role-specific dashboards",
      "Actionable analytics on conversion and retention",
    ],
  },
  erp: {
    title: "Custom ERP Development",
    subtitle: "Finance, inventory & ops — unified",
    intro:
      "Our ERP solutions eliminate data silos by linking procurement, warehousing, accounting, and HR into one auditable system — built to match your operational model.",
    features: [
      {
        title: "Inventory & Procurement",
        description:
          "Real-time stock levels, purchase orders, vendor management, and low-stock alerts across locations.",
      },
      {
        title: "Finance & Billing",
        description:
          "Automated invoicing, GST/tax compliance, ledger management, and financial reporting dashboards.",
      },
      {
        title: "HR & Payroll Modules",
        description:
          "Employee records, attendance, leave management, and payroll processing in one secure module.",
      },
      {
        title: "Multi-Entity Architecture",
        description:
          "Support for branches, warehouses, and departments with granular permissions and consolidated reporting.",
      },
    ],
    outcomes: [
      "Reduced operational errors through centralized data",
      "Faster month-end closing with automated reconciliation",
      "Scalable foundation as your business grows",
    ],
  },
  "custom-products": {
    title: "Custom Product Development",
    subtitle: "Software built around your business",
    intro:
      "When off-the-shelf software falls short, we design and ship custom products — from internal dashboards to full-scale SaaS platforms — using modern, maintainable architecture.",
    features: [
      {
        title: "Discovery & Architecture",
        description:
          "We map requirements, define system boundaries, and choose the right stack before writing code.",
      },
      {
        title: "Agile Delivery",
        description:
          "Iterative sprints with demos, feedback loops, and incremental releases to reduce project risk.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Cloud-native deployments with CI/CD pipelines, monitoring, and auto-scaling where needed.",
      },
      {
        title: "Long-Term Partnership",
        description:
          "Post-launch support, feature roadmaps, and performance optimization to keep your product competitive.",
      },
    ],
    outcomes: [
      "Software that fits your process — not the other way around",
      "Lower total cost of ownership vs. forced-fit SaaS stacks",
      "Full IP ownership and flexible licensing models",
    ],
  },
};
