import {
  Palette,
  Smartphone,
  Code2,
  Search,
  RefreshCw,
  Wrench,
  Brain,
  Mic,
  Glasses,
  CreditCard,
  BarChart3,
  Award,
  Wallet,
  Sliders,
  Headphones,
  Globe,
  Layers,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const prestashopHero = {
  title: "Custom PrestaShop Development Services",
  subtitle: "Effortless, Flexible & Scalable E-Commerce Solutions.",
  description:
    "Launch your store, manage products with ease, and deliver exceptional shopping experiences — Razobyte's PrestaShop experts build flexible, feature-rich online stores tailored to your brand and growth goals.",
};

export const prestashopHighlights = [
  "Open-source flexibility",
  "Multi-language & multi-currency",
  "Rich module marketplace",
  "European commerce leader",
] as const;

export function getPrestashopStats() {
  return [
    { value: "97%", label: "Client Retention" },
    { value: "390+", label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Industry Experience" },
  ];
}

export const prestashopWhy = {
  title: "Take Your Business to New Heights with PrestaShop",
  subtitle: "The Ultimate eCommerce Solution",
  description:
    "In today's digital marketplace, a powerful online store is essential. PrestaShop is a flexible, customizable, and feature-rich platform trusted by merchants worldwide. Razobyte provides expert PrestaShop developers who build stores that drive traffic, maximize sales, and scale with your ambitions — from boutique catalogs to international multi-store operations.",
  image: "/images/team.jpg",
};

export const prestashopOfferings = [
  {
    title: "Custom Store Design",
    description: "Unique layouts and visual identities tailored to your brand — not generic templates.",
    icon: Palette,
  },
  {
    title: "Mobile-First Responsive Design",
    description: "Flawless experiences on every screen size with touch-optimized navigation and checkout.",
    icon: Smartphone,
  },
  {
    title: "Next-Level PrestaShop Development",
    description: "Clean, maintainable code — custom modules, hooks, and overrides built to PrestaShop standards.",
    icon: Code2,
  },
  {
    title: "SEO That Gets You Noticed",
    description: "Technical SEO, friendly URLs, meta management, and speed optimization for organic growth.",
    icon: Search,
  },
  {
    title: "Seamless Migration",
    description: "Move from WooCommerce, Magento, OpenCart, or legacy platforms with data integrity preserved.",
    icon: RefreshCw,
  },
  {
    title: "Continuous Maintenance & Support",
    description: "Updates, security patches, module compatibility, and proactive monitoring post-launch.",
    icon: Wrench,
  },
] as const;

export const prestashopTechnologies = [
  {
    title: "AI-Powered Recommendations",
    description: "Smart product suggestions that increase average order value and personalize shopping journeys.",
    icon: Brain,
  },
  {
    title: "Voice Search Optimization",
    description: "Structured data and content patterns ready for voice-activated product discovery.",
    icon: Mic,
  },
  {
    title: "Augmented Reality (AR)",
    description: "Let customers visualize products in their space — ideal for furniture, fashion, and decor.",
    icon: Glasses,
  },
  {
    title: "Payment Gateway Integration",
    description: "Razorpay, Stripe, PayPal, and local methods configured for secure global checkout.",
    icon: CreditCard,
  },
  {
    title: "Advanced Analytics",
    description: "GA4, heatmaps, and custom dashboards for data-driven merchandising decisions.",
    icon: BarChart3,
  },
] as const;

export const prestashopAdvantages = [
  {
    title: "Experience",
    description: "Skilled developers fluent in PrestaShop architecture, hooks, modules, and theme inheritance.",
    icon: Award,
  },
  {
    title: "Affordable Packages",
    description: "Enterprise-quality PrestaShop development without enterprise-only price tags.",
    icon: Wallet,
  },
  {
    title: "Tailored Solutions",
    description: "Every module, theme, and workflow customized for your catalog, market, and operations.",
    icon: Sliders,
  },
  {
    title: "Priority Support",
    description: "Dedicated technical support with fast response times when your store needs attention.",
    icon: Headphones,
  },
] as const;

export const prestashopModules = [
  "PrestaShop 8",
  "PHP 8",
  "Symfony",
  "Twig",
  "MySQL",
  "Redis",
  "Elasticsearch",
  "Docker",
] as const;

export const prestashopRelated = [
  { title: "Shopify Development", href: siteRoutes.shopifyDevelopment },
  { title: "WooCommerce Development", href: siteRoutes.woocommerceDevelopment },
  { title: "Magento Development", href: siteRoutes.magnetoDevelopment },
] as const;

export const prestashopTestimonials = [
  {
    name: "Adrienne King",
    role: "Store Owner",
    rating: 5,
    quote:
      "Razobyte transformed our PrestaShop store with a beautiful custom theme and seamless payment integration. Sales improved noticeably within the first two months of launch.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Eunice King",
    role: "E-commerce Director",
    rating: 5,
    quote:
      "Professional, responsive, and deeply knowledgeable about PrestaShop. Their team handled our migration flawlessly and continues to provide excellent ongoing support.",
    image: "/images/avatar-2.jpg",
  },
] as const;

export const prestashopTrustBadges = [
  { label: "PrestaShop 8 ready", icon: Layers },
  { label: "Multi-store capable", icon: Globe },
  { label: "GDPR aware builds", icon: Award },
] as const;

export const prestashopFaqs: ProductFaq[] = [
  {
    question: "What is PrestaShop?",
    answer:
      "PrestaShop is a free, open-source e-commerce platform written in PHP. It powers over 300,000 online stores worldwide with multi-language support, a rich module marketplace, and flexible theming — popular across Europe and growing globally.",
  },
  {
    question: "How does PrestaShop compare to WooCommerce or Shopify?",
    answer:
      "PrestaShop is a dedicated e-commerce platform (not a plugin) with strong multi-store and international features. WooCommerce adds commerce to WordPress; Shopify is fully hosted. PrestaShop offers more control than Shopify and deeper commerce features than basic WooCommerce setups.",
  },
  {
    question: "Is PrestaShop good for SEO?",
    answer:
      "Yes. PrestaShop includes SEO-friendly URLs, meta tags, sitemaps, and structured data. Combined with our speed optimization and content strategy, your store can rank competitively in search results.",
  },
  {
    question: "Can PrestaShop handle multiple languages and currencies?",
    answer:
      "Absolutely. PrestaShop excels at international commerce — multiple languages, currencies, tax rules, and localized checkout experiences from a single admin panel.",
  },
  {
    question: "What are PrestaShop modules?",
    answer:
      "Modules are extensions that add functionality — payments, shipping, marketing, SEO, and more. Thousands are available on PrestaShop Addons; we also develop custom private modules.",
  },
  {
    question: "Can you migrate my existing store to PrestaShop?",
    answer:
      "Yes. We migrate products, categories, customers, orders, and SEO URLs from WooCommerce, Magento, OpenCart, and other platforms with careful planning to minimize downtime.",
  },
  {
    question: "What hosting does PrestaShop need?",
    answer:
      "PrestaShop runs on PHP 8+, MySQL, and standard LAMP/LEMP stacks. Production stores benefit from SSD hosting, SSL, Redis caching, and CDN. We recommend and configure optimized hosting environments.",
  },
  {
    question: "Does PrestaShop support B2B commerce?",
    answer:
      "Yes via modules and custom development — customer groups, wholesale pricing, quote requests, and restricted catalogs for B2B buyers.",
  },
  {
    question: "How long does a PrestaShop project take?",
    answer:
      "A theme customization may take a few weeks; full custom builds with migrations and integrations span one to three months depending on scope. We provide phased timelines after discovery.",
  },
  {
    question: "What does PrestaShop development cost in India?",
    answer:
      "Costs depend on theme complexity, custom modules, integrations, and migration needs. PrestaShop's open-source model keeps licensing free — you invest in development and hosting. We provide transparent quotes after scoping your project.",
  },
];
