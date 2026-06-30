import {
  Smartphone,
  Monitor,
  Search,
  Code2,
  ShoppingBag,
  Cloud,
  Palette,
  Plug,
  Puzzle,
  AppWindow,
  RefreshCw,
  Layers,
  Gauge,
  Shield,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const magentoHero = {
  title: "Magento Development Services",
  subtitle: "Kick-start your business with enterprise-grade Magento 2 commerce.",
  description:
    "Bring versatile features to set up a powerful online store rapidly and successfully — custom modules, multi-store architecture, B2B catalogs, and Magento 2 expertise from certified Razobyte developers.",
};

export const magentoHighlights = [
  "Magento 2 & Adobe Commerce",
  "B2B & B2C storefronts",
  "Multi-store & multi-currency",
  "Enterprise scalability",
] as const;

export function getMagentoStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
    { value: "14M+", label: "Total Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const magentoIntroSections = [
  {
    id: "boost-sales",
    title: "Boost Sales with Top-notch Magento Development",
    description:
      "Focus on sales growth while unlocking new opportunities on the Magento platform with development capabilities that match enterprise standards — advanced catalog rules, personalized experiences, and conversion-optimized checkout flows.",
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    id: "award-winning",
    title: "Award-winning Magento Development Company",
    description:
      "Razobyte is a trusted Magento development partner for brands that need robust, scalable e-commerce. We combine deep platform knowledge with modern DevOps practices to deliver stores that perform under high traffic, complex catalogs, and demanding business rules.",
    image: "/images/service-ecommerce.jpg",
  },
] as const;

export const magentoCapabilities = [
  {
    title: "Mobile First Design",
    description:
      "Every storefront we build prioritizes mobile shoppers — touch-friendly navigation, fast product discovery, and checkout flows optimized for small screens.",
    icon: Smartphone,
  },
  {
    title: "Responsive Design",
    description:
      "Fluid layouts adapt flawlessly across phones, tablets, and desktops so your brand looks premium on every device your customers use.",
    icon: Monitor,
  },
  {
    title: "SEO Optimized",
    description:
      "Clean URL structures, schema markup, meta management, and performance tuning give your Magento store the technical foundation to rank and convert organically.",
    icon: Search,
  },
] as const;

export const magentoServices = [
  {
    title: "Custom Magento Development",
    description: "Tailored modules, workflows, and business logic built for your unique commerce requirements.",
    icon: Code2,
  },
  {
    title: "Magento E-commerce Development",
    description: "Full storefront builds — catalog, cart, checkout, and admin configured for your sales model.",
    icon: ShoppingBag,
  },
  {
    title: "Magento Cloud Hosting",
    description: "Adobe Commerce Cloud or optimized AWS/Azure deployments with CI/CD and monitoring.",
    icon: Cloud,
  },
  {
    title: "Intuitive Magento UI/UX Design",
    description: "Conversion-focused themes and custom design systems aligned with your brand identity.",
    icon: Palette,
  },
  {
    title: "Seamless Third Party Integration",
    description: "ERP, CRM, PIM, payment gateways, shipping APIs, and marketing tools connected seamlessly.",
    icon: Plug,
  },
  {
    title: "Theme and Extension Development",
    description: "Custom themes and extensions from scratch — or audited upgrades of existing codebases.",
    icon: Puzzle,
  },
  {
    title: "Magento App Development",
    description: "Companion mobile apps and progressive web experiences synced with your Magento backend.",
    icon: AppWindow,
  },
  {
    title: "Upgrade and Migration",
    description: "Magento 1 to 2 migrations, version upgrades, and data preservation with minimal downtime.",
    icon: RefreshCw,
  },
] as const;

export const magentoTechStack = [
  "Magento 2",
  "Adobe Commerce",
  "PHP 8",
  "Hyvä",
  "Elasticsearch",
  "Redis",
  "Varnish",
  "GraphQL",
] as const;

export const magentoProjects = [
  {
    id: "enterprise-retail",
    title: "Enterprise Retail Store",
    description: "Multi-category Magento 2 store with advanced pricing rules and ERP integration.",
    image: "/images/portfolio-fintech.jpg",
    tag: "Retail",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description: "Service-commerce Magento site with booking modules and local payment gateways.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
  {
    id: "mdrc",
    title: "MDRC",
    description: "Healthcare commerce portal with secure patient ordering and role-based access.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const magentoRelated = [
  { title: "WooCommerce Development", href: siteRoutes.woocommerceDevelopment },
  { title: "Shopify Development", href: siteRoutes.shopifyDevelopment },
  { title: "OpenCart Development", href: siteRoutes.opencartDevelopment },
] as const;

export const magentoBlogs = [
  {
    title: "What is Cybersecurity?",
    excerpt: "Protecting commerce platforms and customer data in an evolving threat landscape.",
    image: "/images/blog-ai.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "Cloud-Native Development",
    excerpt: "How cloud architecture powers scalable Magento deployments.",
    image: "/images/blog-cloud.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "The Digital Transformation Journey",
    excerpt: "Moving from legacy commerce to modern Magento 2 experiences.",
    image: "/images/blog-mobile.jpg",
    href: siteRoutes.blogs,
  },
] as const;

export const magentoTrustBadges = [
  { label: "Magento 2 experts", icon: Layers },
  { label: "Performance tuned", icon: Gauge },
  { label: "Enterprise secure", icon: Shield },
] as const;

export const magentoFaqs: ProductFaq[] = [
  {
    question: "What is Magento and who is it for?",
    answer:
      "Magento (Adobe Commerce) is an enterprise e-commerce platform for businesses with large catalogs, complex pricing, B2B needs, or multi-store requirements. It's ideal when Shopify or WooCommerce lack the depth your operations demand.",
  },
  {
    question: "What is the difference between Magento Open Source and Adobe Commerce?",
    answer:
      "Magento Open Source is free with community support; Adobe Commerce adds enterprise features, SLA support, B2B modules, and cloud hosting options. We help you choose based on budget, scale, and feature needs.",
  },
  {
    question: "Can you migrate from Magento 1 to Magento 2?",
    answer:
      "Yes. We handle data migration, theme rebuilds, extension replacements, URL redirects, and SEO preservation — planning carefully to minimize downtime and revenue disruption.",
  },
  {
    question: "What is Hyvä and do you use it?",
    answer:
      "Hyvä is a modern Magento 2 frontend that dramatically improves page speed by replacing Knockout.js with Alpine.js and Tailwind. We implement Hyvä for clients who need elite Core Web Vitals scores.",
  },
  {
    question: "How does Magento handle B2B commerce?",
    answer:
      "Adobe Commerce B2B offers company accounts, shared catalogs, negotiable quotes, and requisition lists. We configure and customize these for wholesale, distribution, and manufacturer sales models.",
  },
  {
    question: "What hosting does Magento require?",
    answer:
      "Magento needs robust PHP 8+, MySQL, Redis, Elasticsearch/OpenSearch, and Varnish for production. We deploy on Adobe Commerce Cloud, AWS, Azure, or managed Magento hosting with proper scaling.",
  },
  {
    question: "How long does a Magento project take?",
    answer:
      "Timelines vary — a theme customization may take weeks; enterprise builds with integrations span months. We provide phased roadmaps after discovery with clear milestones.",
  },
  {
    question: "Is Magento SEO-friendly?",
    answer:
      "Yes with proper configuration — SEO-friendly URLs, canonical tags, sitemaps, structured data, and fast Hyvä or optimized Luma frontends. We implement technical SEO best practices from launch.",
  },
  {
    question: "Can Magento integrate with our ERP?",
    answer:
      "Absolutely. We build bi-directional integrations with SAP, Oracle, NetSuite, Tally, and custom ERPs for inventory, orders, customers, and pricing sync.",
  },
  {
    question: "What does Magento development cost in India?",
    answer:
      "Costs depend on catalog complexity, custom modules, integrations, and migration scope. Magento projects are typically higher investment than small-store platforms but deliver unmatched enterprise capability. We provide transparent estimates after scoping.",
  },
];
