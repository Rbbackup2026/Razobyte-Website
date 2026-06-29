import {
  Zap,
  Gauge,
  Library,
  Shield,
  TrendingUp,
  Layers,
  Globe,
  AppWindow,
  RefreshCw,
  Plug,
  Wrench,
  Sparkles,
  Route,
  Lock,
  FileCode,
  Settings,
  Database,
  Code2,
  TestTube,
  FolderTree,
  Layout,
  Bug,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const CI_ORANGE = "#DD4814";

export const codeigniterHero = {
  title: "CodeIgniter Development Services",
  subtitle: "Fast-paced, high-quality web apps through modular programming.",
  description:
    "Dive into your web application project with CodeIgniter — employ stress-free MVC coding, lightweight architecture, and cross-platform compatibility to build web apps that perform beautifully on every device.",
};

export const codeigniterHighlights = [
  "CodeIgniter 4 ready",
  "MVC architecture",
  "RESTful APIs",
  "Enterprise-grade security",
] as const;

export function getCodeigniterStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: "395+", label: "Projects Completed" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const whyCodeigniter = [
  { title: "Streamlined Development", description: "Clear conventions and minimal configuration mean faster builds and easier onboarding for your team.", icon: Zap },
  { title: "High Performance", description: "Lightweight core with no heavy dependencies — pages load fast even under demanding traffic.", icon: Gauge },
  { title: "Extensive Library Support", description: "Rich built-in libraries for sessions, encryption, email, file uploads, and more out of the box.", icon: Library },
  { title: "Enhanced Security", description: "CSRF protection, XSS filtering, and secure session handling baked into the framework.", icon: Shield },
  { title: "Scalability", description: "From startup MVPs to enterprise portals — architecture that grows with your user base and feature set.", icon: TrendingUp },
  { title: "MVC Architecture", description: "Clean separation of Model, View, and Controller keeps code maintainable and teams productive.", icon: Layers },
] as const;

export const codeigniterOfferings = [
  { title: "Custom CodeIgniter Website Development", description: "Tailored websites with custom themes, admin panels, and business logic.", icon: Globe },
  { title: "CodeIgniter Web App Development", description: "Full-featured web applications — dashboards, portals, and SaaS products.", icon: AppWindow },
  { title: "Migration & Upgradation", description: "Move from CI3 to CI4 or legacy PHP apps with data integrity and zero downtime goals.", icon: RefreshCw },
  { title: "Integration Services", description: "Payment gateways, CRMs, ERPs, and third-party APIs woven into your CI application.", icon: Plug },
  { title: "Maintenance & Support", description: "Ongoing updates, security patches, performance tuning, and feature enhancements.", icon: Wrench },
  { title: "Technology Advancements", description: "Modern PHP 8, Composer, PHPUnit, and CI4 best practices on every project.", icon: Sparkles },
] as const;

export const codeigniterBenefits = [
  "Lightweight and fast",
  "Versatile and flexible",
  "Minimum documentation needed",
  "Active community support",
  "Seamless third-party library integration",
] as const;

export const codeigniterCi4Features = [
  { title: "Introducing CodeIgniter 4", description: "Modern PHP 8 framework with improved routing, namespacing, and developer experience.", icon: Sparkles },
  { title: "Advanced Routing System", description: "Flexible URI routing with groups, filters, and RESTful resource controllers.", icon: Route },
  { title: "Improved Security", description: "Content Security Policy, enhanced encryption, and hardened session management.", icon: Lock },
  { title: "Modernized Templating", description: "Powerful view parser with layouts, partials, and clean separation from logic.", icon: FileCode },
  { title: "Simplified Configuration", description: ".env-based config, modular bootstrapping, and environment-aware settings.", icon: Settings },
  { title: "Powerful Query Builder", description: "Fluent database abstraction with migrations, seeds, and prepared statements.", icon: Database },
] as const;

export const expertServices = [
  { title: "API-Based Web Applications", description: "RESTful and JSON APIs built on CodeIgniter 4 — powering mobile apps, SPAs, and third-party integrations with clean, documented endpoints." },
  { title: "Third-Party Integration", description: "Connect payment gateways, shipping providers, marketing tools, and enterprise systems through secure, tested CodeIgniter modules." },
  { title: "App Upgrade Services", description: "Modernize legacy CodeIgniter 3 applications to CI4 — refactoring controllers, updating dependencies, and improving performance." },
  { title: "App Migration Services", description: "Migrate from WordPress, raw PHP, or other frameworks to CodeIgniter with preserved data, SEO URLs, and minimal business disruption." },
] as const;

export const bestPractices = [
  { title: "Default Application Structure", icon: FolderTree },
  { title: "Security From Third-Party Entities", icon: Shield },
  { title: "JavaScript & CSS Libraries", icon: Code2 },
  { title: "Realistic Dev & Testing", icon: TestTube },
  { title: "Custom Template Engine", icon: Layout },
  { title: "Website File Structure", icon: FolderTree },
  { title: "MVC-Friendly Workflow", icon: Layers },
  { title: "Error & Logging Config", icon: Bug },
] as const;

export const codeigniterStack = ["PHP 8", "CodeIgniter 4", "MySQL", "Composer", "PHPUnit", "Redis", "REST API", "Docker"] as const;

export const codeigniterProjects = [
  { id: "colorbar", title: "ColorBar Website", description: "Dynamic product catalog with custom admin and payment integration.", image: "/images/service-ecommerce.jpg", tag: "Retail" },
  { id: "classic", title: "Classic Website", description: "Corporate portal with role-based access and content management.", image: "/images/service-design.jpg", tag: "Corporate" },
  { id: "king-clean", title: "King Clean", description: "Service booking platform with real-time scheduling module.", image: "/images/service-web.jpg", tag: "Services" },
] as const;

export const codeigniterRelated = [
  { label: "PHP Website", href: homeRoutes.services },
  { label: "Laravel Website", href: homeRoutes.services },
  { label: "React JS Website", href: homeRoutes.services },
  { label: "Shopify", href: siteRoutes.shopifyDevelopment },
  { label: "WooCommerce", href: siteRoutes.woocommerceDevelopment },
  { label: "Magento", href: siteRoutes.magnetoDevelopment },
] as const;

export const codeigniterBlogs = [
  { title: "What is Edge Computing?", excerpt: "Distributed computing for faster, more resilient web applications.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "What is Cybersecurity?", excerpt: "Protecting your CodeIgniter apps from modern threats.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Cloud-Native Development", excerpt: "Deploying PHP applications in scalable cloud environments.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const codeigniterFaqs: ProductFaq[] = [
  { question: "What is CodeIgniter?", answer: "CodeIgniter is a powerful, lightweight PHP framework using MVC architecture. It enables rapid web application development with minimal configuration and excellent performance." },
  { question: "Why is CodeIgniter popular for web development?", answer: "Its small footprint, clear documentation, MVC structure, and flexibility make it ideal for custom web apps where developers need control without framework bloat." },
  { question: "How does CodeIgniter ensure website speed?", answer: "A lightweight core, efficient routing, query builder optimizations, and optional caching (file, Redis, Memcached) keep response times low." },
  { question: "What are the key features of CodeIgniter?", answer: "MVC pattern, form validation, session management, security filtering, database abstraction, email library, file uploading, and RESTful controller support." },
  { question: "Should I use CodeIgniter 3 or CodeIgniter 4?", answer: "CI4 is recommended for new projects — PHP 8 support, modern namespaces, improved security, and active maintenance. We help migrate CI3 apps to CI4." },
  { question: "Can CodeIgniter build REST APIs?", answer: "Yes. CodeIgniter 4 has excellent API support with resource controllers, JWT auth, CORS filters, and JSON response formatting for mobile and SPA frontends." },
  { question: "Is CodeIgniter suitable for e-commerce?", answer: "Absolutely. We've built catalogs, carts, checkout flows, and admin dashboards on CodeIgniter for retail and B2B clients." },
  { question: "How does CodeIgniter compare to Laravel?", answer: "CodeIgniter is lighter and faster to bootstrap; Laravel offers more built-in features and ecosystem. We recommend CI when you want lean, performant custom apps." },
];
