import {
  Shield,
  Server,
  Globe,
  Database,
  Gauge,
  Lock,
  RefreshCw,
  Cloud,
  Headphones,
  Zap,
  CheckCircle2,
  HardDrive,
  Mail,
  BarChart3,
  Settings,
  Wrench,
  Clock,
  Layers,
  Cpu,
  Network,
  FileText,
  Search,
  AlertTriangle,
  KeyRound,
  Monitor,
  Boxes,
  Wifi,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const HOST_INDIGO = "#4F46E5";
export const HOST_CYAN = "#06B6D4";

export const hostingHero = {
  title: "Reliable Domain & Hosting Maintenance",
  subtitle: "Expert server support, DNS management, and seamless hosting updates.",
  description:
    "Razobyte delivers premium domain and hosting maintenance services in India — from SSL management and malware scanning to CDN optimization, backups, and 24/7 server support.",
};

export const hostingHighlights = [
  "24/7 server support",
  "Free SSL certificates",
  "NVMe fast storage",
  "DNS management",
  "Daily backups",
  "Malware protection",
] as const;

export function getHostingStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: "395+", label: "Servers Managed" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const hostingIntro =
  "Get started with confidence — our domain and hosting maintenance plans keep your websites online, secure, and blazing fast. Premium web hosting services tailored for Indian businesses and global clients alike.";

export const hostingSupport =
  "24/7 assistance to ensure your website success. Expert help is at your fingertips with live chat and email support. We commit to resolving issues within minutes — our agents speak 10+ global languages.";

export const hostingSecurityFeatures = [
  { title: "Free SSL Certificates", description: "Protect client data with auto-renewed SSL on every domain.", icon: Lock },
  { title: "Malware Scanner", description: "Detect and remove harmful files before they cause damage.", icon: Shield },
  { title: "Privacy Protection", description: "Robust WHOIS privacy and data protection measures.", icon: KeyRound },
  { title: "Access Control", description: "Firewall rules, IP blocking, and brute-force protection.", icon: AlertTriangle },
] as const;

export const hostingPerformanceFeatures = [
  { title: "Lightning-Fast Speed", description: "Minimal latency with NVMe storage and optimized caching.", icon: Zap },
  { title: "CDN & LiteSpeed", description: "In-house CDN, ObjectCache, and LiteSpeed Web Server technology.", icon: Cloud },
  { title: "Unlimited Bandwidth", description: "Easily manage high traffic volumes without throttling.", icon: Wifi },
  { title: "Performance Monitoring", description: "Real-time server metrics, uptime alerts, and load tracking.", icon: Gauge },
] as const;

export const hostingPlans = [
  {
    id: "single" as const,
    name: "Single",
    tagline: "A great solution for beginners",
    priceInr: 69,
    originalInr: 399,
    save: "82%",
    websites: 1,
    visits: "~10,000/mo",
    storage: "50 GB NVMe",
    inodes: "200,000",
    accent: "#64748b",
    popular: false,
  },
  {
    id: "premium" as const,
    name: "Premium",
    tagline: "Everything you need to create your website",
    priceInr: 129,
    originalInr: 599,
    save: "78%",
    websites: 100,
    visits: "~25,000/mo",
    storage: "100 GB NVMe",
    inodes: "400,000",
    accent: HOST_CYAN,
    popular: false,
  },
  {
    id: "business" as const,
    name: "Business",
    tagline: "More power and enhanced features",
    priceInr: 249,
    originalInr: 699,
    save: "64%",
    websites: 100,
    visits: "~25,000/mo",
    storage: "200 GB NVMe",
    inodes: "600,000",
    accent: HOST_INDIGO,
    popular: true,
  },
  {
    id: "cloud" as const,
    name: "Cloud Startup",
    tagline: "Optimized performance & guaranteed resources",
    priceInr: 699,
    originalInr: 1699,
    save: "58%",
    websites: 300,
    visits: "~30,000/mo",
    storage: "200 GB NVMe",
    inodes: "200,000",
    accent: "#8B5CF6",
    popular: false,
  },
] as const;

export const hostingPlanComparison = [
  { feature: "Monthly Price (INR)", single: "₹69", premium: "₹129", business: "₹249", cloud: "₹699" },
  { feature: "Websites", single: "1", premium: "100", business: "100", cloud: "300" },
  { feature: "Monthly Visits", single: "~10K", premium: "~25K", business: "~25K", cloud: "~30K" },
  { feature: "NVMe Storage", single: "50 GB", premium: "100 GB", business: "200 GB", cloud: "200 GB" },
  { feature: "Free SSL", single: true, premium: true, business: true, cloud: true },
  { feature: "Free Email", single: "1 Account", premium: true, business: true, cloud: true },
  { feature: "Free Migration", single: true, premium: true, business: true, cloud: true },
  { feature: "Pre-Built Templates", single: true, premium: true, business: true, cloud: true },
  { feature: "Managed WordPress", single: true, premium: true, business: true, cloud: true },
  { feature: "Malware Scanner", single: false, premium: true, business: true, cloud: true },
  { feature: "Daily Backups", single: false, premium: true, business: true, cloud: true },
  { feature: "CDN Included", single: false, premium: false, business: true, cloud: true },
  { feature: "Priority Support", single: false, premium: false, business: true, cloud: true },
  { feature: "Dedicated Resources", single: false, premium: false, business: false, cloud: true },
] as const;

export const hostingMaintenanceComparison = [
  { feature: "Domain Renewal Alerts", basic: true, standard: true, premium: true },
  { feature: "DNS Management", basic: true, standard: true, premium: true },
  { feature: "SSL Auto-Renewal", basic: true, standard: true, premium: true },
  { feature: "Server Health Monitoring", basic: false, standard: true, premium: true },
  { feature: "Malware Scanning", basic: false, standard: true, premium: true },
  { feature: "Daily Off-Site Backups", basic: false, standard: true, premium: true },
  { feature: "Performance Optimization", basic: false, standard: false, premium: true },
  { feature: "CDN Configuration", basic: false, standard: false, premium: true },
  { feature: "24/7 Priority Support", basic: false, standard: false, premium: true },
  { feature: "Disaster Recovery", basic: false, standard: true, premium: true },
] as const;

export const hostingServices = [
  { title: "Domain Registration & Renewal", description: ".com, .in, .co.in, and 500+ TLD management with auto-renewal.", icon: Globe },
  { title: "DNS Management", description: "A, CNAME, MX, TXT records with propagation monitoring.", icon: Network },
  { title: "SSL Certificate Management", description: "Let's Encrypt, wildcard, and EV SSL provisioning and renewal.", icon: Lock },
  { title: "Server Monitoring", description: "CPU, RAM, disk, and network metrics with alert thresholds.", icon: Monitor },
  { title: "Website Migration", description: "Free automatic migration from any host with zero downtime.", icon: RefreshCw },
  { title: "Malware & Virus Removal", description: "Automated scans and manual cleanup for infected files.", icon: Shield },
  { title: "Backup & Recovery", description: "Daily automated backups with one-click restore.", icon: HardDrive },
  { title: "Email Hosting", description: "Professional email accounts with spam filtering and webmail.", icon: Mail },
  { title: "CDN Configuration", description: "Cloudflare, LiteSpeed CDN, and edge caching setup.", icon: Cloud },
  { title: "Database Optimization", description: "MySQL/MariaDB tuning, query optimization, and cleanup.", icon: Database },
  { title: "cPanel / Plesk Management", description: "Control panel updates, account provisioning, and security.", icon: Settings },
  { title: "Uptime Monitoring", description: "24/7 ping checks with SMS/email alerts on downtime.", icon: Clock },
] as const;

export const hostingMaintenanceTasks = [
  { title: "OS & Panel Updates", description: "Server OS patches, cPanel/Plesk updates, and PHP version management.", icon: RefreshCw },
  { title: "Security Hardening", description: "Firewall rules, fail2ban, ModSecurity, and SSH key management.", icon: Shield },
  { title: "Performance Tuning", description: "LiteSpeed, Redis, OPcache, and database query optimization.", icon: Gauge },
  { title: "Log Analysis", description: "Error log review, traffic analysis, and anomaly detection.", icon: Search },
  { title: "Storage Management", description: "Disk cleanup, inode monitoring, and quota management.", icon: Boxes },
  { title: "Scaling & Upgrades", description: "Resource upgrades, load balancing, and cloud scaling.", icon: Layers },
] as const;

export const hostingTechStack = [
  { name: "cPanel", icon: "/images/tech/cpanel.svg", category: "Control Panel" },
  { name: "Hostinger", icon: "/images/tech/hostinger.svg", category: "Hosting" },
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud" },
  { name: "LiteSpeed", icon: "/images/tech/nextjs.svg", category: "Web Server" },
  { name: "Cloudflare", icon: "/images/tech/google-workspace.svg", category: "CDN" },
  { name: "Docker", icon: "/images/tech/docker.svg", category: "Containers" },
  { name: "MySQL", icon: "/images/tech/mongodb.svg", category: "Database" },
  { name: "PHP", icon: "/images/tech/php.svg", category: "Runtime" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg", category: "Runtime" },
  { name: "Redis", icon: "/images/tech/docker.svg", category: "Cache" },
  { name: "WordPress", icon: "/images/tech/php.svg", category: "CMS" },
  { name: "SSL/TLS", icon: "/images/tech/aws.svg", category: "Security" },
] as const;

export const hostingProcess = [
  { step: "Audit", description: "Domain, DNS, server health, and SSL baseline review." },
  { step: "Plan", description: "Hosting tier selection and maintenance schedule setup." },
  { step: "Secure", description: "SSL, firewall, malware scanner, and backup activation." },
  { step: "Monitor", description: "24/7 uptime, performance, and security monitoring." },
  { step: "Maintain", description: "Updates, patches, optimizations, and DNS management." },
  { step: "Report", description: "Monthly uptime, performance, and security reports." },
] as const;

export const hostingRelated = [
  { label: "Website Maintenance", href: siteRoutes.websiteMaintenance, icon: "/images/service-web.jpg", description: "Full website care including content and plugin updates." },
  { label: "Mobile App Maintenance", href: siteRoutes.mobileAppMaintenance, icon: "/images/service-mobile.jpg", description: "iOS and Android app support and updates." },
  { label: "Payment Gateway", href: siteRoutes.paymentGateway, icon: "/images/portfolio-fintech.jpg", description: "Secure payment integration on your hosted site." },
  { label: "Laravel Development", href: siteRoutes.laravelDevelopment, icon: "/images/tech/laravel.svg", description: "Backend APIs hosted on our managed servers." },
] as const;

export const hostingProjects = [
  { id: "ecom-host", title: "E-commerce Hosting", description: "High-traffic WooCommerce on NVMe with CDN and daily backups.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
  { id: "corp-host", title: "Corporate Server Care", description: "Multi-domain hosting with SSL, email, and 99.9% uptime.", image: "/images/service-web.jpg", tag: "Corporate" },
  { id: "saas-host", title: "SaaS Cloud Hosting", description: "AWS cloud startup plan with auto-scaling and monitoring.", image: "/images/solutions.jpg", tag: "SaaS" },
] as const;

export const hostingBlogs = [
  { title: "Choosing the Right Hosting Plan", excerpt: "Single vs Premium vs Business — which plan fits your needs?", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "SSL Certificates Explained", excerpt: "Why free SSL matters and how we manage renewals automatically.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "DNS Management Best Practices", excerpt: "A, CNAME, MX records and why DNS health matters for uptime.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const hostingFaqs: ProductFaq[] = [
  { question: "What is domain and hosting maintenance?", answer: "Domain and hosting maintenance is the ongoing management of your domain registrations, DNS records, server health, SSL certificates, backups, and security — keeping your websites online and performant." },
  { question: "Why is domain maintenance important?", answer: "Expired domains can be lost permanently, causing email and website outages. Proactive renewal alerts and DNS monitoring prevent costly downtime." },
  { question: "What tasks are included in hosting maintenance?", answer: "Server monitoring, OS updates, SSL management, malware scanning, backups, performance tuning, DNS management, email hosting, and 24/7 technical support." },
  { question: "How are SSL certificates managed in hosting maintenance?", answer: "We provision free Let's Encrypt SSL on all plans, auto-renew before expiry, and monitor certificate health across all domains." },
  { question: "What is the cost of domain renewal in India?", answer: ".com domains typically cost ₹800–1,200/year, .in domains ₹500–800/year. Our maintenance plans include renewal alerts and management assistance." },
  { question: "How does hosting maintenance improve website performance?", answer: "NVMe storage, CDN, LiteSpeed, Redis caching, database optimization, and regular performance audits deliver faster load times and better Core Web Vitals." },
  { question: "What happens if a domain is not renewed on time?", answer: "The domain enters a grace period, then redemption, and may be released for public registration — causing complete loss of your website and email." },
  { question: "How are hosting backups handled?", answer: "Daily automated backups stored off-site with one-click restore. Business and Cloud plans include multiple restore points." },
  { question: "What tools are used for hosting performance monitoring?", answer: "UptimeRobot, New Relic, cPanel metrics, LiteSpeed stats, Cloudflare analytics, and custom server dashboards." },
  { question: "Why is DNS management important in domain maintenance?", answer: "Correct DNS records ensure email delivery, website accessibility, SSL validation, and third-party service integration. Misconfigured DNS causes widespread outages." },
];
