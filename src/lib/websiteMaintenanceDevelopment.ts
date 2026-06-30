import {
  Shield,
  Wrench,
  RefreshCw,
  Clock,
  FileText,
  Search,
  Database,
  Gauge,
  Bug,
  Cloud,
  Settings,
  Headphones,
  Lock,
  Smartphone,
  TrendingUp,
  ClipboardList,
  Server,
  Link2,
  Mail,
  BarChart3,
  Zap,
  CheckCircle2,
  AlertTriangle,
  HardDrive,
  Globe,
  Code2,
  Layers,
  Monitor,
  PenTool,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const MAINT_SKY = "#0EA5E9";
export const MAINT_AMBER = "#F59E0B";

export const maintenanceHero = {
  title: "Website Maintenance Services With 100% Website Care & Support",
  subtitle: "Let our experts handle your website maintenance with comprehensive packages.",
  description:
    "Razobyte keeps your website fast, secure, and up to date — from monthly backups and security scans to content updates, plugin patches, and 24/7 technical support.",
};

export const maintenanceHighlights = [
  "Monthly backups",
  "Security scanning",
  "Performance optimization",
  "24/7 support",
  "Content updates",
  "SEO monitoring",
] as const;

export function getMaintenanceStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: COMPANY_PROJECTS_PLUS, label: "Websites Maintained" },
    { value: "99.9%", label: "Uptime Monitored" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const maintenanceTrustIntro =
  "We are the company you can trust for long-term website care. Our dedicated maintenance team treats every site like our own — proactive monitoring, transparent reporting, and rapid response when issues arise.";

export const maintenanceIntro =
  "A website maintenance service keeps your site up to date, functioning quickly, safe from hackers, and looking great. Tasks include adding new content, updating blogs, adding products, fixing broken links, and uploading media — so you can focus on growing your business.";

export const maintenanceOutsourcing =
  "There are many advantages to outsourcing your website maintenance — increased productivity, reduced costs without in-house staff, access to professional web experts with diverse skill sets, and flexible pricing tailored to your needs.";

export const maintenancePillars = [
  { title: "Performance Checkup", description: "Our intensive maintenance checklist ensures your website performs at peak speed with optimized assets and Core Web Vitals.", icon: Gauge },
  { title: "Fixes & Enhancement", description: "Regular bug fixes, website health checks, and incremental improvements to keep everything running smoothly.", icon: Bug },
  { title: "Content & Backup", description: "Add, edit, and update content whenever needed — backed by reliable offline and off-site backup schedules.", icon: Cloud },
  { title: "Functionality Check", description: "We verify all forms, inquiry flows, checkout steps, and third-party integrations work flawlessly.", icon: Settings },
  { title: "Tech Support", description: "Auto ticket management with call and email support — majority of tickets resolved within 24–48 hours.", icon: Headphones },
  { title: "Hack & Virus Proof", description: "Security implementations prevent hacking, malware, and viruses — priority response until 100% clean.", icon: Lock },
  { title: "Mobile & Browser Optimization", description: "We fix non-responsive sections so your site looks perfect on every device and browser.", icon: Smartphone },
  { title: "Conversion Rate Boost", description: "Expertly engineered maintenance ensures smooth UX that converts visitors into customers.", icon: TrendingUp },
  { title: "Disaster Recovery", description: "Rapid restore from backups with domain, hosting, and SSL monitoring to prevent downtime surprises.", icon: HardDrive },
] as const;

export const maintenanceCoreServices = [
  { title: "Protect", description: "Website codes, databases, and credentials are fully secured and maintained against threats.", icon: Shield },
  { title: "Update", description: "Our team handles all required updates — CMS, plugins, frameworks, and content changes you request.", icon: RefreshCw },
  { title: "Report", description: "Complete transparency with monthly or quarterly website traffic and health reports.", icon: ClipboardList },
] as const;

export const maintenanceServices = [
  { title: "Monthly Backup & Recovery", description: "Offline and off-site backups with tested disaster recovery procedures.", icon: Database },
  { title: "Security Scanning", description: "Malware scans, vulnerability checks, and firewall rule updates.", icon: Shield },
  { title: "SSL & Domain Monitoring", description: "Certificate expiry alerts and domain renewal reminders.", icon: Globe },
  { title: "Plugin & Core Updates", description: "WordPress, Laravel, and CMS core updates with staging validation.", icon: Code2 },
  { title: "Broken Link Fixes", description: "Automated crawls and manual fixes for 404s and redirect chains.", icon: Link2 },
  { title: "Performance Optimization", description: "Caching, image compression, and database cleanup for faster loads.", icon: Zap },
  { title: "Content Updates", description: "Blog posts, product pages, banners, and media uploads on demand.", icon: FileText },
  { title: "SEO Monitoring", description: "Search Console, analytics setup, and basic on-page SEO health checks.", icon: Search },
  { title: "Webmail Support", description: "Email account setup, troubleshooting, and deliverability guidance.", icon: Mail },
  { title: "Google Analytics Setup", description: "GA4 configuration, goals, and conversion tracking maintenance.", icon: BarChart3 },
  { title: "New Page Creation", description: "Landing pages and section builds within your monthly hour allocation.", icon: Layers },
  { title: "24/7 Ticket Support", description: "Round-the-clock helpdesk with priority escalation for critical issues.", icon: Clock },
] as const;

export type MaintenanceTier = "bronze" | "silver" | "gold" | "platinum";

export const maintenancePackages = [
  {
    id: "bronze" as const,
    name: "Bronze",
    priceUsd: 250,
    priceInr: 15000,
    hours: 2,
    accent: "#cd7f32",
    popular: false,
  },
  {
    id: "silver" as const,
    name: "Silver",
    priceUsd: 350,
    priceInr: 22000,
    hours: 5,
    accent: "#94a3b8",
    popular: false,
  },
  {
    id: "gold" as const,
    name: "Gold",
    priceUsd: 500,
    priceInr: 40000,
    hours: 7,
    accent: MAINT_AMBER,
    popular: true,
  },
  {
    id: "platinum" as const,
    name: "Platinum",
    priceUsd: 700,
    priceInr: 55000,
    hours: 15,
    accent: "#a855f7",
    popular: false,
  },
] as const;

export const maintenanceComparisonRows: {
  feature: string;
  bronze: boolean | string;
  silver: boolean | string;
  gold: boolean | string;
  platinum: boolean | string;
}[] = [
  { feature: "Monthly Hours", bronze: "2 hrs", silver: "5 hrs", gold: "7 hrs", platinum: "15 hrs" },
  { feature: "Yearly Price (USD)", bronze: "$250", silver: "$350", gold: "$500", platinum: "$700" },
  { feature: "Yearly Price (INR)", bronze: "₹15,000", silver: "₹22,000", gold: "₹40,000", platinum: "₹55,000" },
  { feature: "Monthly Offline Backup", bronze: true, silver: false, gold: true, platinum: true },
  { feature: "Two Off-Site Backups Monthly", bronze: false, silver: true, gold: false, platinum: false },
  { feature: "Monthly Security Scanning", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Malware Scanning", bronze: false, silver: false, gold: false, platinum: true },
  { feature: "Broken Link Check & Fix", bronze: false, silver: true, gold: true, platinum: true },
  { feature: "Disaster Recovery", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Domain & Hosting Support", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "SSL Certificate Monitoring", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Domain Expiration Alert", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Basic Website Updates", bronze: false, silver: true, gold: true, platinum: true },
  { feature: "Website Performance Monitoring", bronze: false, silver: false, gold: false, platinum: true },
  { feature: "Google Analytics Setup", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Search Console Setup", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "Webmail Support", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "WP Core & Plugins Update", bronze: true, silver: true, gold: true, platinum: true },
  { feature: "New Page Creation", bronze: true, silver: true, gold: true, platinum: true },
];

export const maintenanceInfoCards = [
  { title: "What are website maintenance services?", description: "Ongoing care that keeps your site secure, fast, and current — backups, updates, monitoring, and support.", icon: Monitor },
  { title: "How does website maintenance work?", description: "You pick a package, we monitor and maintain on a schedule, and you get monthly reports plus on-demand support hours.", icon: Wrench },
  { title: "Benefits of website maintenance?", description: "Fewer outages, better SEO, stronger security, faster performance, and peace of mind.", icon: TrendingUp },
  { title: "Types of maintenance available?", description: "Bronze to Platinum tiers — from basic backups to full performance monitoring and malware scanning.", icon: Layers },
  { title: "How much does maintenance cost?", description: "Plans start at $250/year (₹15,000) with 2 monthly hours — see our comparison table for full details.", icon: BarChart3 },
] as const;

export const maintenanceTechStack = [
  { name: "WordPress", icon: "/images/tech/php.svg", category: "CMS" },
  { name: "Laravel", icon: "/images/tech/laravel.svg", category: "Framework" },
  { name: "React", icon: "/images/tech/react.svg", category: "Frontend" },
  { name: "cPanel", icon: "/images/tech/cpanel.svg", category: "Hosting" },
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud" },
  { name: "Docker", icon: "/images/tech/docker.svg", category: "DevOps" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Cloudflare", icon: "/images/tech/hostinger.svg", category: "CDN" },
  { name: "MongoDB", icon: "/images/tech/mongodb.svg", category: "Database" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg", category: "Runtime" },
  { name: "Shopify", icon: "/images/erp/shopify.svg", category: "Ecommerce" },
  { name: "WooCommerce", icon: "/images/erp/woocommerce.svg", category: "Ecommerce" },
] as const;

export const maintenanceProcess = [
  { step: "Audit", description: "Site health, security, and performance baseline review." },
  { step: "Plan", description: "Package selection and maintenance schedule setup." },
  { step: "Protect", description: "Backups, SSL, and security hardening activated." },
  { step: "Maintain", description: "Updates, monitoring, and content changes on schedule." },
  { step: "Report", description: "Monthly traffic, uptime, and task summary delivered." },
  { step: "Optimize", description: "Continuous performance and conversion improvements." },
] as const;

export const maintenanceRelated = [
  { label: "Website Design", href: siteRoutes.websiteDesign, icon: "/images/service-design.jpg", description: "Fresh designs that pair perfectly with ongoing maintenance." },
  { label: "Laravel Development", href: siteRoutes.laravelDevelopment, icon: "/images/tech/laravel.svg", description: "Robust backends we maintain and scale for you." },
  { label: "E-commerce Website", href: siteRoutes.ecommerceWebsiteDevelopment, icon: "/images/service-ecommerce.jpg", description: "Store maintenance including products, payments, and inventory." },
  { label: "Payment Gateway", href: siteRoutes.paymentGateway, icon: "/images/portfolio-fintech.jpg", description: "Secure payment integrations kept up to date." },
] as const;

export const maintenanceProjects = [
  { id: "retail-store", title: "Retail Store Care", description: "Monthly WooCommerce maintenance with 99.9% uptime.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
  { id: "corporate-portal", title: "Corporate Portal", description: "Laravel app updates, security patches, and content support.", image: "/images/service-web.jpg", tag: "Corporate" },
  { id: "healthcare-site", title: "Healthcare Website", description: "HIPAA-aware maintenance with SSL and backup monitoring.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
] as const;

export const maintenanceBlogs = [
  { title: "Why Website Maintenance Matters", excerpt: "The hidden costs of neglecting updates, backups, and security.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "WordPress Maintenance Checklist", excerpt: "Essential monthly tasks every WP site owner should know.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Speed Up Your Website in 2026", excerpt: "Performance optimization tips our maintenance team swears by.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const maintenanceFaqs: ProductFaq[] = [
  { question: "What is website maintenance?", answer: "Website maintenance is the ongoing process of keeping your site secure, fast, and up to date — including backups, updates, monitoring, content changes, and technical support." },
  { question: "Why is website maintenance important?", answer: "Without maintenance, sites become vulnerable to hacks, slow down, break after updates, and lose search rankings — costing you traffic, trust, and revenue." },
  { question: "What tasks are included in website maintenance?", answer: "Backups, security scans, plugin/CMS updates, broken link fixes, SSL monitoring, content updates, performance checks, analytics setup, and technical support." },
  { question: "How often should a website be maintained?", answer: "At minimum monthly for backups and security. High-traffic or ecommerce sites benefit from weekly monitoring and more frequent updates." },
  { question: "What is the cost of website maintenance in India?", answer: "Our packages start at ₹15,000/year (Bronze, 2 hrs/month) up to ₹55,000/year (Platinum, 15 hrs/month). Custom enterprise plans are available." },
  { question: "Does website maintenance include SEO?", answer: "Yes — our plans include Search Console setup, basic SEO health monitoring, broken link fixes, and performance optimization that supports rankings." },
  { question: "How are website backups handled?", answer: "We run monthly offline backups (and off-site for Silver+) with tested disaster recovery so your site can be restored quickly if anything goes wrong." },
  { question: "What is the role of security updates in website maintenance?", answer: "Security updates patch known vulnerabilities in CMS cores, plugins, and server software — the first line of defense against hacks and malware." },
  { question: "Can WordPress websites be maintained easily?", answer: "Absolutely. WP core, plugin, and theme updates are included in all our packages, with staging tests before production deployment." },
  { question: "How does website maintenance improve performance?", answer: "We optimize images, clean databases, enable caching, fix broken scripts, and monitor Core Web Vitals — delivering faster load times and better UX." },
];
