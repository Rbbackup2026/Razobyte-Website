import {
  Puzzle,
  Headphones,
  LayoutDashboard,
  Network,
  Palette,
  Plug,
  Gauge,
  Wrench,
  ShoppingBag,
  CreditCard,
  Smartphone,
  Shield,
  Package,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const shopifyHero = {
  title: "Shopify Development",
  subtitle: "Kick-start your business by launching an e-commerce store with Shopify.",
  description:
    "Bring in an array of versatile features to set up an online store rapidly and successfully with Shopify development services tailored to your brand, catalog, and growth goals.",
};

export const shopifyHighlights = [
  "Custom themes & storefronts",
  "App integrations & automations",
  "Payment & shipping setup",
  "SEO-ready store architecture",
] as const;

export function getShopifyStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: COMPANY_PROJECTS_PLUS, label: "Projects Completed" },
    { value: "14M+", label: "Revenue Generated" },
    { value: formatYearsPlus(), label: "Years Experience" },
  ];
}

export const shopifyIntroSections = [
  {
    id: "boost-sales",
    title: "Boost Sales with Top-notch Shopify App Development",
    description:
      "Focus on sales growth while unlocking new opportunities on the Shopify platform with development capabilities that match your enterprise standards — from custom checkout flows to inventory sync and marketing automations.",
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    id: "company",
    title: "Shopify Development Company",
    description:
      "In the dynamic world of online commerce, selecting the right platform can make all the difference. At Razobyte, we specialize in empowering businesses with effective e-commerce solutions, with Shopify standing out as a cornerstone of our offerings.",
    image: "/images/service-ecommerce.jpg",
  },
] as const;

export const whyShopifyFeatures = [
  {
    title: "Vast App Ecosystem",
    description:
      "Access thousands of extensions to enhance store functions — from email marketing and reviews to inventory, subscriptions, and loyalty programs without rebuilding from scratch.",
    icon: Puzzle,
  },
  {
    title: "Responsive Customer Support",
    description:
      "Shopify offers 24/7 support via email, live chat, and phone — backed by our own Razobyte team for custom development, migrations, and ongoing optimization.",
    icon: Headphones,
  },
  {
    title: "Intuitive User Interface",
    description:
      "Known for its user-friendly admin panel, Shopify makes it easy for anyone to manage products, orders, and customers — while we handle the technical depth behind the scenes.",
    icon: LayoutDashboard,
  },
  {
    title: "Central Commerce Hub",
    description:
      "Shopify acts as a central hub for all e-commerce operations — storefront, payments, shipping, analytics, and omnichannel sales in one cohesive platform.",
    icon: Network,
  },
] as const;

export const shopifyBenefits = [
  { label: "Fully Hosted E-commerce Platform", icon: ShoppingBag },
  { label: "Simple Customer Management System", icon: Headphones },
  { label: "Easy Product Catalog Management", icon: Package },
  { label: "User-friendly Order Management", icon: LayoutDashboard },
  { label: "Mobile App to Manage Your Store", icon: Smartphone },
  { label: "Support Various Payment Gateways", icon: CreditCard },
  { label: "Get 1000+ Extension Plugins", icon: Puzzle },
  { label: "Very Safe and Secure", icon: Shield },
] as const;

export const shopifyServices = [
  {
    title: "Custom Themes and Design",
    description:
      "Unique, brand-aligned storefronts with modern UX — mobile-first layouts, conversion-focused product pages, and design systems that scale with your catalog.",
    icon: Palette,
    gradient: "from-emerald-600 to-teal-700",
  },
  {
    title: "Advanced Functionality & Integrations",
    description:
      "Custom features and third-party integrations — ERPs, CRMs, accounting tools, marketplaces, and APIs that connect Shopify to your entire business stack.",
    icon: Plug,
    gradient: "from-razo-blue to-razo-blue-dark",
  },
  {
    title: "Performance Optimization & Scalability",
    description:
      "Fast load times, image optimization, app audits, and infrastructure tuning so your store handles traffic spikes and high-volume sales without breaking.",
    icon: Gauge,
    gradient: "from-violet-600 to-indigo-700",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "Continuous updates, security monitoring, theme fixes, and technical assistance so your store stays current, secure, and performing at its best.",
    icon: Wrench,
    gradient: "from-slate-600 to-slate-800",
  },
] as const;

export const shopifyProjects = [
  {
    id: "gleam",
    title: "Gleam Website",
    description: "Beauty & lifestyle Shopify store with curated collections and smooth checkout.",
    image: "/images/service-ecommerce.jpg",
    tag: "Beauty",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description: "Service-business storefront with booking integration and local SEO structure.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
  {
    id: "mdrc",
    title: "MDRC",
    description: "Healthcare e-commerce portal with secure ordering and patient-friendly UX.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const shopifyRelated = [
  { title: "WooCommerce Development", href: homeRoutes.services },
  { title: "Magento Development", href: homeRoutes.services },
  { title: "Joomla Development", href: homeRoutes.services },
] as const;

export const shopifyTestimonials = [
  {
    name: "Abhi King",
    role: "Manager",
    rating: 5,
    quote:
      "Razobyte's Shopify expertise transformed our online store. Their team understood our catalog complexity, delivered a beautiful theme, and provided ongoing support that kept our sales growing month over month.",
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Earon King",
    role: "Owner",
    rating: 5,
    quote:
      "Professional, responsive, and results-driven. From custom integrations to performance optimization, Razobyte handled everything. Our Shopify store now runs faster and converts better than we imagined.",
    image: "/images/avatar-2.jpg",
  },
] as const;

export const shopifyProcess = [
  { step: "01", title: "Discovery", detail: "Goals, catalog, competitors & tech audit" },
  { step: "02", title: "Design", detail: "Theme, UX flows & brand-aligned storefront" },
  { step: "03", title: "Build", detail: "Development, apps, payments & integrations" },
  { step: "04", title: "Launch", detail: "QA, migration, training & go-live support" },
] as const;

export const shopifyFaqs: ProductFaq[] = [
  {
    question: "What is Shopify and how does it work?",
    answer:
      "Shopify is a hosted e-commerce platform that lets you build an online store, manage products, process payments, and fulfill orders without managing servers. You get a storefront, admin dashboard, and app marketplace — we customize and extend it for your business needs.",
  },
  {
    question: "What are Shopify themes?",
    answer:
      "Themes control your store's look and layout. Shopify offers free and paid themes; we also build fully custom themes or heavily customize existing ones to match your brand, improve conversions, and support unique product types.",
  },
  {
    question: "Can Shopify be used for dropshipping?",
    answer:
      "Yes. Shopify integrates with dropshipping apps like Oberlo, DSers, and Spocket. We set up product imports, automated fulfillment workflows, and storefront designs optimized for dropshipping business models.",
  },
  {
    question: "What is Shopify POS?",
    answer:
      "Shopify POS is a point-of-sale system that syncs in-person sales with your online inventory. It's ideal for retail brands selling both online and in physical locations from one unified platform.",
  },
  {
    question: "How does Shopify compare to WooCommerce?",
    answer:
      "Shopify is fully hosted with simpler setup and built-in hosting, security, and support. WooCommerce runs on WordPress and offers more flexibility for developers but requires separate hosting and maintenance. We help you choose based on budget, scale, and technical needs.",
  },
  {
    question: "How can I improve my Shopify store's SEO?",
    answer:
      "We optimize page titles, meta descriptions, URL structure, site speed, mobile usability, schema markup, and content strategy. Shopify's built-in SEO tools plus our technical optimizations help your products rank in Google and drive organic traffic.",
  },
  {
    question: "What are some common Shopify store mistakes?",
    answer:
      "Common mistakes include slow themes overloaded with apps, poor mobile UX, weak product descriptions, missing trust signals, complicated checkout, and neglecting analytics. We audit stores and fix these issues systematically.",
  },
  {
    question: "What tools does Shopify provide for payments?",
    answer:
      "Shopify Payments supports cards and local methods; Shopify also integrates with Razorpay, PayPal, Stripe, and 100+ gateways. We configure the right payment stack for Indian and international customers.",
  },
  {
    question: "Can developers customize Shopify stores?",
    answer:
      "Absolutely. Developers customize themes with Liquid, build private apps, use Shopify APIs, and integrate third-party systems. Razobyte specializes in deep customizations beyond what standard themes offer.",
  },
  {
    question: "How much does Shopify cost in Indian Rs?",
    answer:
      "Shopify plans start from basic monthly tiers (typically ₹1,500–₹8,000+ depending on plan and billing). Custom development, themes, and integrations are quoted separately based on scope. We provide transparent estimates after understanding your requirements.",
  },
];
