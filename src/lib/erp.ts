export type ErpPlatform = {
  name: string;
  description: string;
  primary?: boolean;
};

export type ErpTechnology = {
  name: string;
  icon: string;
  integration?: boolean;
};

export const erpPlatforms: ErpPlatform[] = [
  {
    name: "ERPNext & Frappe Framework",
    description:
      "Our primary implementation platform for developing scalable ERP solutions, custom workflows, enterprise applications, integrations, reporting dashboards, and business automation.",
    primary: true,
  },
  {
    name: "Odoo ERP",
    description:
      "Experience with business process customization, module configuration, workflow optimization, reporting, inventory management, CRM, and manufacturing operations.",
  },
  {
    name: "Microsoft Dynamics 365",
    description:
      "Support for organizations implementing integrated business applications covering finance, operations, customer engagement, and supply chain management.",
  },
  {
    name: "SAP Business One",
    description:
      "Exposure to ERP implementations for small and mid-sized enterprises, including financial operations, procurement, inventory control, production planning, and reporting.",
  },
  {
    name: "Oracle NetSuite",
    description:
      "Understanding of cloud ERP implementations supporting financial management, order processing, procurement, inventory, and business intelligence.",
  },
  {
    name: "Zoho ERP Ecosystem",
    description:
      "Configuration and integration of Zoho business applications including CRM, Finance, Inventory, Projects, and custom workflow automation.",
  },
];

export const erpConsultingServices = [
  "ERP implementation and deployment",
  "Business process analysis",
  "Solution architecture and planning",
  "ERP customization and module development",
  "Data migration from legacy systems",
  "Third-party API integrations",
  "Workflow automation",
  "User training and documentation",
  "Performance optimization",
  "Version upgrades and ongoing support",
  "Cloud deployment and infrastructure planning",
  "Business intelligence and reporting",
];

export const erpTechnologies: ErpTechnology[] = [
  { name: "ERPNext", icon: "/images/erp/erpnext.svg" },
  { name: "Frappe Framework", icon: "/images/erp/frappe.svg" },
  { name: "Odoo", icon: "/images/erp/odoo.svg" },
  { name: "Microsoft Dynamics 365", icon: "/images/erp/dynamics.svg" },
  { name: "SAP Business One", icon: "/images/erp/sap.svg" },
  { name: "Oracle NetSuite", icon: "/images/erp/netsuite.svg" },
  { name: "Zoho", icon: "/images/erp/zoho.svg" },
  { name: "TallyPrime", icon: "/images/erp/tally.svg", integration: true },
  { name: "Salesforce CRM", icon: "/images/erp/salesforce.svg", integration: true },
  { name: "Shopify", icon: "/images/erp/shopify.svg", integration: true },
  { name: "WooCommerce", icon: "/images/erp/woocommerce.svg", integration: true },
];
