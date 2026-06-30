import {
  Zap,
  DollarSign,
  Gauge,
  TrendingUp,
  Globe,
  Layers,
  Plug,
  Boxes,
  Database,
  Wrench,
  RefreshCw,
  Shield,
  Sparkles,
  Bug,
  Cpu,
  Braces,
  GitBranch,
  Server,
  Layout,
  Code2,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

/** Official PHP brand purple — paired with Razobyte blue in UI */
export const PHP_PURPLE = "#777BB4";
export const PHP_DARK = "#4F5B93";

export const phpHero = {
  title: "Custom PHP Development Services",
  subtitle: "A custom PHP web development company to take your business to the next level.",
  description:
    "Drive large-scale transformation with robust PHP websites — from lean MVPs to enterprise portals. We design, develop, and deliver high-performing PHP projects for startups, mid-size businesses, and global enterprises.",
};

export const phpHighlights = [
  "PHP 8 ready",
  "Laravel & CodeIgniter",
  "RESTful APIs",
  "Enterprise security",
] as const;

export function getPhpStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const phpIntroduction = {
  title: "PHP Web Application Development Services",
  body: "Ranked among India's trusted PHP development partners, Razobyte's expert PHP developers deliver complex web development processes and build robust, scalable PHP websites. We have successfully designed, developed, and delivered hundreds of top-performing PHP projects — helping organizations leverage PHP's strength, continuously augment web capabilities, and build experiences that delight customers. With deep expertise in Laravel, CodeIgniter, and custom PHP, we drive web development services across healthcare, retail, fintech, and enterprise domains.",
};

export const whyPhp = [
  {
    title: "Cost-Effectiveness",
    description:
      "Being open-source, PHP eliminates expensive licensing fees — a cost-effective option for businesses of every size.",
    icon: DollarSign,
  },
  {
    title: "Rapid Development",
    description:
      "Intuitive syntax and a vast ecosystem of tools and frameworks enable rapid prototyping, reducing time-to-market.",
    icon: Zap,
  },
  {
    title: "Scalability & Performance",
    description:
      "Lightweight footprint and efficient execution deliver seamless scalability — your site handles growing traffic with ease.",
    icon: TrendingUp,
  },
] as const;

export const phpServices = [
  { title: "Custom PHP Web Development", description: "Tailored websites with custom themes, admin panels, and business logic.", icon: Globe },
  { title: "Full-Stack PHP Development", description: "End-to-end front-end and back-end solutions on a unified PHP stack.", icon: Layers },
  { title: "PHP API Development & Integrations", description: "RESTful APIs and third-party integrations for mobile apps and SPAs.", icon: Plug },
  { title: "PHP Framework Development", description: "Laravel, CodeIgniter, and Symfony apps built to framework best practices.", icon: Boxes },
  { title: "PHP CMS & Platforms Development", description: "WordPress, Drupal, and custom CMS platforms for content-heavy sites.", icon: Layout },
  { title: "PHP Back-End & Web Services", description: "Microservices, cron jobs, queues, and server-side logic at scale.", icon: Server },
  { title: "Custom CRM, ERP & Portal Development", description: "Business portals, dashboards, and internal tools on PHP.", icon: Database },
  { title: "PHP Website Support & Maintenance", description: "Security patches, uptime monitoring, and ongoing feature updates.", icon: Wrench },
  { title: "PHP Web App Upgradation & Migration", description: "Legacy PHP upgrades, PHP 8 migrations, and platform moves with zero data loss.", icon: RefreshCw },
] as const;

export const php8Features = [
  {
    title: "Embracing PHP 8",
    description: "Leveraging PHP 8's newest features and performance improvements to enhance functionality and efficiency.",
    icon: Sparkles,
  },
  {
    title: "Improved Error Handling",
    description: "Enhanced error handling mechanisms for robustness and reliability across production applications.",
    icon: Bug,
  },
  {
    title: "JIT Compilation",
    description: "Just-in-time compilation for CPU-intensive tasks — faster execution and improved responsiveness.",
    icon: Cpu,
  },
  {
    title: "Union Types",
    description: "Union type support for stronger type safety and clearer, more maintainable codebases.",
    icon: Braces,
  },
  {
    title: "Match Expression",
    description: "Match expressions that simplify conditional logic and improve code readability.",
    icon: GitBranch,
  },
  {
    title: "Named Arguments & Attributes",
    description: "Modern PHP syntax for cleaner APIs and declarative metadata on classes and methods.",
    icon: Code2,
  },
] as const;

export const phpFrameworkAdvantages = [
  {
    title: "Rapid Development",
    description: "Frameworks provide a solid foundation with extensive libraries and built-in functionality for faster builds.",
  },
  {
    title: "Security",
    description: "Built-in input validation, CSRF protection, and secure session handling mitigate common threats.",
  },
  {
    title: "Maintainability",
    description: "MVC patterns and conventions keep large codebases organized as your team and feature set grow.",
  },
  {
    title: "Rich Ecosystem",
    description: "Composer packages, ORMs, testing tools, and community plugins accelerate every sprint.",
  },
] as const;

export const phpStack = [
  { name: "PHP", icon: "/images/tech/php.svg" },
  { name: "Laravel", icon: "/images/tech/laravel.svg" },
  { name: "MySQL", icon: "/images/tech/mongodb.svg" },
  { name: "JavaScript", icon: "/images/tech/javascript.svg" },
  { name: "Docker", icon: "/images/tech/docker.svg" },
  { name: "cPanel", icon: "/images/tech/cpanel.svg" },
] as const;

export const phpProjects = [
  {
    id: "cissern",
    title: "Cissern Website",
    description: "Interior design showcase with immersive galleries and lead capture.",
    image: "/images/portfolio-fintech.jpg",
    tag: "Corporate",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description: "Service booking platform with scheduling and multi-step checkout.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
  {
    id: "mdrc",
    title: "MDRC",
    description: "Healthcare portal with test packages, doctor listings, and patient flows.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const phpRelated = [
  { label: "CodeIgniter", href: siteRoutes.codeigniterWebsite, icon: "/images/tech/php.svg" },
  { label: "Laravel", href: siteRoutes.laravelDevelopment, icon: "/images/tech/laravel.svg" },
  { label: "HTML & CSS", href: siteRoutes.htmlCssWebsite, icon: "/images/tech/javascript.svg" },
  { label: "React JS", href: siteRoutes.reactjsDevelopment, icon: "/images/tech/react.svg" },
  { label: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg" },
  { label: "WooCommerce", href: siteRoutes.woocommerceDevelopment, icon: "/images/erp/woocommerce.svg" },
  { label: "Magento", href: siteRoutes.magnetoDevelopment, icon: "/images/service-ecommerce.jpg" },
  { label: "PrestaShop", href: siteRoutes.prestashopDevelopment, icon: "/images/service-ecommerce.jpg" },
] as const;

export const phpBlogs = [
  {
    title: "The Digital Transformation Journey",
    excerpt: "How businesses can stay ahead in a rapidly evolving market.",
    image: "/images/blog-cloud.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "How Social Media Is Changing",
    excerpt: "Social platforms evolved from communication tools to powerful marketing engines.",
    image: "/images/blog-ai.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "10 Tips to Improve Your Website SEO",
    excerpt: "Practical steps to boost rankings, traffic, and conversions.",
    image: "/images/blog-mobile.jpg",
    href: siteRoutes.blogs,
  },
] as const;

export const phpFaqs: ProductFaq[] = [
  {
    question: "What is a PHP website?",
    answer: "A PHP website is built using PHP — a server-side scripting language that generates dynamic HTML. PHP powers everything from blogs and corporate sites to complex web applications and APIs.",
  },
  {
    question: "Why is PHP popular for website development?",
    answer: "PHP is open-source, runs on virtually every hosting provider, has a massive developer community, and pairs seamlessly with MySQL, Laravel, and WordPress — making it ideal for fast, cost-effective web projects.",
  },
  {
    question: "What are some popular PHP frameworks?",
    answer: "Laravel, CodeIgniter, Symfony, and Yii are among the most widely used. We recommend Laravel for feature-rich apps and CodeIgniter for lightweight, high-performance projects.",
  },
  {
    question: "How does PHP compare to JavaScript?",
    answer: "PHP runs on the server and generates pages or APIs; JavaScript runs in the browser (and on servers via Node.js). Most modern apps use both — PHP for back-end logic and JavaScript for interactive front-ends.",
  },
  {
    question: "What hosting is best for PHP websites?",
    answer: "Shared hosting works for small sites; VPS or cloud (AWS, DigitalOcean) suits growing apps. We deploy on cPanel, Docker, or managed PHP hosting with OPcache, SSL, and automated backups.",
  },
  {
    question: "Can PHP be used for eCommerce websites?",
    answer: "Yes. WooCommerce, Magento, PrestaShop, OpenCart, and custom PHP stores power millions of online shops. We build catalogs, carts, payment flows, and admin dashboards on PHP.",
  },
  {
    question: "How can PHP improve website performance?",
    answer: "PHP 8 JIT, OPcache, query optimization, Redis caching, CDN integration, and lean framework choices dramatically cut response times. We profile and tune every production deployment.",
  },
  {
    question: "How secure are PHP websites?",
    answer: "With proper practices — prepared statements, CSRF tokens, input sanitization, HTTPS, and regular updates — PHP apps are highly secure. We follow OWASP guidelines on every project.",
  },
  {
    question: "What are some examples of PHP websites?",
    answer: "Facebook, Wikipedia, WordPress.com, Slack, and Etsy all use PHP. Our portfolio includes healthcare portals, service booking platforms, and corporate sites built on custom PHP.",
  },
  {
    question: "What is PHP CMS, and how is it used?",
    answer: "A PHP CMS (like WordPress or Drupal) lets non-technical teams manage content through an admin panel. We customize themes, plugins, and workflows to match your brand and business rules.",
  },
];
