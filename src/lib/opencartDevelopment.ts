import {
  LayoutDashboard,
  Sliders,
  Boxes,
  Headphones,
  Store,
  Wallet,
  Layers,
  TrendingUp,
  Palette,
  Plug,
  Gauge,
  Wrench,
  Package,
  Globe,
  Search,
  Smartphone,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const opencartHero = {
  title: "OpenCart eCommerce Development",
  subtitle: "Build a powerful, flexible online store with OpenCart.",
  description:
    "Razobyte delivers professional OpenCart development — from store setup and custom themes to module integrations and performance tuning — so your business gains robust e-commerce capabilities without enterprise-level complexity.",
};

export const opencartHighlights = [
  "Open-source & cost-effective",
  "Multi-store from one admin",
  "1000+ extensions & themes",
  "Full catalog & order control",
] as const;

export function getOpencartStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: "395+", label: "Projects Completed" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const opencartIntroduction = {
  title: "Introduction to OpenCart Ecommerce Solutions",
  description:
    "OpenCart is a free, open-source e-commerce platform trusted by hundreds of thousands of merchants worldwide. At Razobyte, we leverage its flexibility to build stores that match your brand, scale with your catalog, and integrate seamlessly with payment gateways, shipping providers, and business tools — giving you full ownership of your online commerce engine.",
  image: "/images/service-ecommerce.jpg",
};

export const whyOpencartFeatures = [
  {
    title: "User-Friendly Interface",
    description:
      "OpenCart's admin panel is intuitive for store owners and developers alike — manage products, orders, customers, and reports without a steep learning curve.",
    icon: LayoutDashboard,
  },
  {
    title: "Flexibility & Customization",
    description:
      "Choose from thousands of themes and extensions, or let us build fully custom modules and layouts tailored to your industry and workflow.",
    icon: Sliders,
  },
  {
    title: "Comprehensive Feature Set",
    description:
      "Built-in tools for inventory management, multi-currency support, tax rules, shipping methods, coupons, and affiliate programs — everything a growing store needs.",
    icon: Boxes,
  },
  {
    title: "Extension Marketplace",
    description:
      "Tap into OpenCart's vast marketplace of vetted extensions for payments, SEO, marketing, and logistics — or commission custom modules from our team.",
    icon: Package,
  },
  {
    title: "Responsive Customer Support",
    description:
      "Active community forums plus Razobyte's dedicated support for installations, upgrades, security patches, and troubleshooting when you need expert help.",
    icon: Headphones,
  },
] as const;

export const opencartDifferentiators = [
  {
    title: "Affordability",
    description:
      "Open-source at its core — no monthly platform fees like hosted solutions. You invest in development and hosting, keeping long-term costs predictable as you grow.",
    icon: Wallet,
  },
  {
    title: "Extensive Customization",
    description:
      "Unlike rigid templates, OpenCart gives developers deep access to code, databases, and architecture — enabling bespoke features Shopify or SaaS platforms can't easily match.",
    icon: Layers,
  },
  {
    title: "Scalability",
    description:
      "From a single-product boutique to multi-category catalogs and multiple storefronts, OpenCart scales with optimized hosting, caching, and modular architecture.",
    icon: TrendingUp,
  },
] as const;

export const opencartServices = [
  {
    title: "Custom Themes & Design for OpenCart",
    description:
      "Brand-aligned storefronts with responsive layouts, conversion-focused product pages, and visual identities that stand apart from default templates.",
    icon: Palette,
    accent: "from-cyan-600 to-sky-700",
  },
  {
    title: "Advanced Functionality & Integrations",
    description:
      "Custom modules, ERP/CRM connectors, payment gateways, shipping APIs, and third-party tools woven into your OpenCart ecosystem.",
    icon: Plug,
    accent: "from-orange-500 to-amber-600",
  },
  {
    title: "Performance Optimization & Scalability",
    description:
      "Database tuning, caching layers, CDN setup, image optimization, and code audits so your store loads fast under peak traffic and large catalogs.",
    icon: Gauge,
    accent: "from-razo-blue to-razo-blue-dark",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Version upgrades, security monitoring, extension compatibility fixes, backups, and proactive technical assistance to keep your store secure and current.",
    icon: Wrench,
    accent: "from-slate-600 to-slate-800",
  },
] as const;

export const opencartProjects = [
  {
    id: "colorbar",
    title: "ColorBar Website",
    description: "Beauty & cosmetics storefront with rich product galleries and smooth checkout.",
    image: "/images/service-ecommerce.jpg",
    tag: "Retail",
  },
  {
    id: "classic",
    title: "Classic Interiors",
    description: "Furniture & interior design portfolio store with immersive category browsing.",
    image: "/images/service-design.jpg",
    tag: "Interiors",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description: "Service-commerce hybrid with booking flows and local payment integration.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
] as const;

export const opencartRelated = [
  { title: "WooCommerce Development", href: homeRoutes.services },
  { title: "Shopify Development", href: siteRoutes.shopifyDevelopment },
  { title: "Joomla Development", href: homeRoutes.services },
] as const;

export const opencartProcess = [
  { step: "01", title: "Plan", detail: "Requirements, catalog structure & hosting strategy" },
  { step: "02", title: "Design", detail: "Theme, UX flows & extension selection" },
  { step: "03", title: "Develop", detail: "Setup, modules, payments & integrations" },
  { step: "04", title: "Launch", detail: "Testing, migration, training & go-live" },
] as const;

export const opencartCapabilities = [
  { label: "Multi-store management", icon: Store },
  { label: "SEO-friendly URLs", icon: Search },
  { label: "Mobile-responsive themes", icon: Smartphone },
  { label: "Global shipping & tax", icon: Globe },
] as const;

export const opencartTestimonials = [
  {
    name: "Adhiraj King",
    role: "Business Owner",
    rating: 5,
    quote:
      "Razobyte's dedication to our OpenCart project was outstanding. They understood our catalog needs, delivered on time, and the results exceeded our sales expectations within the first quarter.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Ranbir Virig",
    role: "E-commerce Manager",
    rating: 5,
    quote:
      "The quality of OpenCart development from Razobyte is top-notch. Custom modules, clean code, and responsive support — our store runs smoothly and our team manages it with confidence.",
    image: "/images/avatar-3.jpg",
  },
] as const;

export const opencartFaqs: ProductFaq[] = [
  {
    question: "What is OpenCart?",
    answer:
      "OpenCart is a free, open-source PHP e-commerce platform for building online stores. It includes product management, order processing, customer accounts, multiple payment and shipping methods, and a large extension marketplace — ideal for businesses wanting full control over their store.",
  },
  {
    question: "How does OpenCart compare to Magento?",
    answer:
      "OpenCart is lighter and easier to set up, with lower hosting requirements and faster time-to-market. Magento offers enterprise-grade complexity for very large catalogs but needs more resources. We help you choose based on catalog size, budget, and customization needs.",
  },
  {
    question: "What are OpenCart themes and how do they work?",
    answer:
      "Themes control your storefront's appearance. OpenCart supports free and premium themes installable via the admin panel. We also build custom themes from scratch or heavily modify existing ones for unique branding and better conversion rates.",
  },
  {
    question: "What are OpenCart modules (extensions)?",
    answer:
      "Modules add functionality — payment gateways, shipping calculators, SEO tools, marketing popups, and more. Thousands are available in the OpenCart marketplace; we also develop private modules for features not available off-the-shelf.",
  },
  {
    question: "How can I improve OpenCart SEO?",
    answer:
      "We optimize URL structures, meta titles and descriptions, schema markup, site speed, mobile responsiveness, and content hierarchy. SEO extensions plus server-level caching and clean code give your products the best chance to rank organically.",
  },
  {
    question: "Does OpenCart support mobile commerce?",
    answer:
      "Yes. Responsive themes ensure your store works on all devices. We also optimize touch-friendly navigation, mobile checkout flows, and page speed for mobile shoppers who make up the majority of e-commerce traffic.",
  },
  {
    question: "Can OpenCart be fully customized?",
    answer:
      "Absolutely. As open-source software, every file, template, and database table is accessible. Our developers build custom features, redesign admin workflows, and integrate any API your business requires.",
  },
  {
    question: "What are the hosting requirements for OpenCart?",
    answer:
      "OpenCart runs on PHP and MySQL/MariaDB with standard LAMP/LEMP stacks. Minimum requirements are modest, but we recommend optimized VPS or cloud hosting with SSL, regular backups, and CDN for production stores handling real traffic.",
  },
  {
    question: "Can OpenCart run multiple stores from one admin?",
    answer:
      "Yes. OpenCart's multi-store feature lets you manage several storefronts — different domains, languages, or brands — from a single admin panel, sharing or separating catalogs as needed.",
  },
  {
    question: "How much does OpenCart development cost in India?",
    answer:
      "Costs depend on theme complexity, number of products, custom modules, integrations, and migration needs. A basic store setup differs greatly from a multi-store enterprise build. We provide detailed quotes after a discovery call — typically more affordable than proprietary platforms long-term.",
  },
];
