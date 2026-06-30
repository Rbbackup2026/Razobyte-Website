import {
  Puzzle,
  TrendingUp,
  Boxes,
  Headphones,
  Layers,
  Sliders,
  Package,
  Palette,
  Plug,
  Gauge,
  Wrench,
  Search,
  CreditCard,
  Shield,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const woocommerceHero = {
  title: "WooCommerce Development Services",
  subtitle: "Turn your website into prosperous platforms to drive sales.",
  description:
    "Design pages that stimulate customer engagement, package products effectively, and deliver detailed WooCommerce customization — from theme design to payment gateways and performance tuning.",
};

export const woocommerceHighlights = [
  "WordPress + WooCommerce synergy",
  "Custom themes & plugins",
  "Scalable store architecture",
  "SEO & conversion optimized",
] as const;

export function getWoocommerceStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: COMPANY_PROJECTS_PLUS, label: "Projects Completed" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const woocommerceIntroSections = [
  {
    id: "appealing-stores",
    title: "Create Appealing e-stores with Our WooCommerce Services",
    description:
      "Focus on sales growth while unlocking new opportunities on the platform with development capabilities that match your enterprise standards — beautiful storefronts, streamlined checkout, and catalog structures built for conversion.",
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    id: "company",
    title: "Custom WooCommerce Development Company",
    description:
      "In the fast-paced world of online commerce, choosing the right platform is essential for success. At Razobyte, we specialize in empowering businesses with cutting-edge e-commerce solutions, with WooCommerce emerging as a cornerstone of our offerings.",
    image: "/images/service-ecommerce.jpg",
  },
] as const;

export const whyWoocommerceFeatures = [
  {
    title: "Seamless WordPress Integration",
    description:
      "Manage your e-commerce store alongside blog content, landing pages, and SEO-rich articles from one familiar WordPress dashboard.",
    icon: Layers,
  },
  {
    title: "Flexible & Extensible Platform",
    description:
      "Thousands of themes and plugins plus unlimited custom development — tailor every product page, checkout step, and admin workflow.",
    icon: Puzzle,
  },
  {
    title: "Scalability & Performance",
    description:
      "Built to handle growing traffic and order volume with optimized hosting, caching, database tuning, and CDN strategies.",
    icon: TrendingUp,
  },
  {
    title: "Comprehensive Feature Set",
    description:
      "Product management, variations, coupons, tax rules, shipping zones, subscriptions, and multi-currency support.",
    icon: Boxes,
  },
  {
    title: "Responsive Customer Support",
    description:
      "WooCommerce documentation and community resources, backed by Razobyte's expert team for custom builds and migrations.",
    icon: Headphones,
  },
] as const;

export const woocommerceDifferentiators = [
  {
    title: "WordPress Content Power",
    description:
      "Leverage WordPress CMS and SEO capabilities alongside your store — publish content that ranks and converts.",
    icon: Layers,
  },
  {
    title: "Limitless Customization",
    description:
      "Bespoke stores with custom themes, child themes, and plugin development beyond hosted SaaS limits.",
    icon: Sliders,
  },
  {
    title: "Plugin Extensibility",
    description:
      "Vast plugin library or private extensions for ERP sync, memberships, bookings, and B2B pricing.",
    icon: Package,
  },
] as const;

export const woocommerceServices = [
  {
    title: "Custom WooCommerce Themes",
    description:
      "Brand-aligned, mobile-first storefronts with conversion-focused product layouts and optimized cart experiences.",
    icon: Palette,
    accent: "from-violet-600 to-purple-800",
  },
  {
    title: "Plugin Development & Integrations",
    description:
      "Custom plugins, payment gateways, CRM/ERP connectors, shipping APIs, and marketing integrations.",
    icon: Plug,
    accent: "from-razo-blue to-indigo-700",
  },
  {
    title: "Performance & Scalability",
    description:
      "Object caching, image optimization, database cleanup, and server tuning for peak sales events.",
    icon: Gauge,
    accent: "from-fuchsia-600 to-pink-700",
  },
  {
    title: "Maintenance & Support",
    description:
      "WordPress updates, security hardening, backups, compatibility testing, and proactive monitoring.",
    icon: Wrench,
    accent: "from-slate-600 to-slate-800",
  },
] as const;

export const woocommerceProjects = [
  {
    id: "gisern",
    title: "Gisern Website",
    description: "Product-rich store with advanced filtering and category navigation.",
    image: "/images/service-ecommerce.jpg",
    tag: "Retail",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description: "Hybrid store with booking plugins and local payment gateways.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
  {
    id: "mdrc",
    title: "MDRC",
    description: "Healthcare commerce portal with secure checkout flows.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const woocommerceRelated = [
  { title: "Shopify Development", href: siteRoutes.shopifyDevelopment },
  { title: "OpenCart Development", href: siteRoutes.opencartDevelopment },
  { title: "Joomla Development", href: homeRoutes.services },
] as const;

export const woocommercePlugins = [
  "WooPayments",
  "Yoast SEO",
  "Elementor",
  "WP Rocket",
  "Mailchimp",
  "Razorpay",
] as const;

export const woocommerceTestimonials = [
  {
    name: "Abhi King",
    role: "Manager",
    rating: 5,
    quote:
      "Razobyte's WooCommerce expertise transformed our online store. Their team suggested innovative ideas, optimized checkout, and delivered measurable growth.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Carter King",
    role: "Manager",
    rating: 5,
    quote:
      "Highly recommend Razobyte for WooCommerce development — professional, responsive, and they built a scalable store our customers love.",
    image: "/images/avatar-2.jpg",
  },
] as const;

export const woocommerceTrustBadges = [
  { label: "PCI-ready checkout", icon: CreditCard },
  { label: "SEO optimized", icon: Search },
  { label: "Security hardened", icon: Shield },
] as const;

export const woocommerceFaqs: ProductFaq[] = [
  {
    question: "What is WooCommerce?",
    answer:
      "WooCommerce is a free, open-source e-commerce plugin for WordPress that adds product management, payments, shipping, taxes, and hundreds of extensions.",
  },
  {
    question: "How does WooCommerce compare to Shopify?",
    answer:
      "WooCommerce offers more customization and no monthly platform fees. Shopify is fully hosted with simpler setup. WooCommerce is ideal when you need WordPress content and commerce together.",
  },
  {
    question: "What hosting is recommended for WooCommerce?",
    answer:
      "Managed WordPress hosting or optimized VPS with PHP 8+, MySQL, SSL, Redis caching, and CDN. High-traffic stores need dedicated resources.",
  },
  {
    question: "What are WooCommerce plugins and themes?",
    answer:
      "Themes control appearance; plugins add subscriptions, bookings, marketplaces, and shipping. We also build custom plugins for unique needs.",
  },
  {
    question: "How does WooCommerce handle payment gateways?",
    answer:
      "Supports WooPayments, Stripe, PayPal, Razorpay, and 100+ gateways via plugins with secure checkout flows.",
  },
  {
    question: "Is WooCommerce secure and SEO-friendly?",
    answer:
      "Yes with proper setup — SSL, security plugins, updates, and SEO plugins like Yoast give clean URLs and schema markup.",
  },
  {
    question: "Can WooCommerce handle subscriptions?",
    answer:
      "Yes via WooCommerce Subscriptions for recurring billing, memberships, and tiered access.",
  },
  {
    question: "Can you migrate my store to WooCommerce?",
    answer:
      "Yes — we migrate products, customers, orders, and SEO URLs from Shopify, Magento, or OpenCart with minimal downtime.",
  },
  {
    question: "How long does a WooCommerce project take?",
    answer:
      "Basic setups take weeks; custom builds with integrations span several sprints. We share timelines after discovery.",
  },
  {
    question: "What does WooCommerce development cost in India?",
    answer:
      "Costs vary by theme, plugins, and integrations. Open-source WooCommerce keeps long-term costs lower than SaaS platforms.",
  },
];
