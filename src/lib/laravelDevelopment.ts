import {
  Zap,
  TrendingUp,
  Shield,
  Wrench,
  Clock,
  Layers,
  FileCode,
  Database,
  Users,
  Globe,
  AppWindow,
  TestTube,
  RefreshCw,
  Building2,
  Puzzle,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Route,
  Package,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const LARAVEL_RED = "#FF2D20";
export const LARAVEL_DARK = "#E62919";

export const laravelHero = {
  title: "Laravel Development",
  subtitle: "Fast-paced, high-quality web apps through modular programming.",
  description:
    "Dive into your web app development project with Laravel — employ stress-free coding compatible across platforms and devices. Build scalable B2B portals, SaaS CRMs, and custom web applications with elegance and speed.",
};

export const laravelHighlights = [
  "Laravel 11 ready",
  "Blade & Livewire",
  "RESTful APIs",
  "Enterprise security",
] as const;

export function getLaravelStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const laravelOverview = {
  title: "Laravel Development",
  body: "With vast usage, Laravel is a complete framework that includes a rich set of components, making development fast and easy. Laravel can be used for a wide variety of projects — from B2B portals to SaaS-based apps like CRM. It is perfect for both small and large-scale businesses while building custom web applications.",
};

export const laravelGoodFor = {
  title: "Is Laravel Development Good for Websites?",
  body: "If you are looking for fast and easy development without compromising quality, Laravel stands out as one of the leading PHP frameworks for web application development. Its elegant syntax, robust features, and extensive ecosystem make it a top choice for building scalable, secure, and high-performing websites. Whether you're launching a simple blog or a complex e-commerce platform, Laravel empowers developers to streamline the development process and deliver exceptional results.",
};

export const laravelAdvantages = [
  { title: "Rapid Development", description: "Streamlined development with elegant syntax and built-in features for faster time-to-market.", icon: Zap },
  { title: "Scalability", description: "Built to grow with your business — handling increased traffic and workload without compromising performance.", icon: TrendingUp },
  { title: "Robust Security", description: "Hashed passwords, CSRF protection, and role-based access control keep your application secure.", icon: Shield },
  { title: "Modern Tools & Features", description: "Blade templating, Eloquent ORM, and Artisan CLI enhance productivity and maintainability.", icon: Wrench },
  { title: "Task Scheduling & Queues", description: "Intuitive scheduling and queueing for recurring tasks and background jobs — smoother performance guaranteed.", icon: Clock },
] as const;

export const laravelServicesIntro =
  "When your journey is different, why should your website look like a template? We provide solutions catering to your specific needs, ensuring you get a website that represents the journey and values you stand for.";

export const laravelServices = [
  { title: "Custom Laravel Web Apps", description: "Tailored applications with custom business logic, dashboards, and admin panels.", icon: AppWindow },
  { title: "Laravel API Development", description: "RESTful and JSON APIs powering mobile apps, SPAs, and third-party integrations.", icon: Globe },
  { title: "Laravel QA & Testing", description: "PHPUnit, Pest, and feature tests ensuring bug-free, reliable deployments.", icon: TestTube },
  { title: "Laravel Migration & Upgradation", description: "Seamless upgrades from legacy PHP or older Laravel versions with data integrity.", icon: RefreshCw },
  { title: "Laravel Enterprise Solutions", description: "Multi-tenant, role-based, and high-availability systems for large organizations.", icon: Building2 },
  { title: "Laravel Extension Development", description: "Custom packages, modules, and Composer libraries extending Laravel's ecosystem.", icon: Puzzle },
  { title: "Laravel Ecommerce Solutions", description: "Online stores with carts, checkout, payment gateways, and inventory management.", icon: ShoppingCart },
  { title: "Laravel App Maintenance", description: "Ongoing updates, security patches, performance tuning, and feature enhancements.", icon: Smartphone },
] as const;

export const laravelFrameworkAdvantages = [
  { title: "MVC Architecture", description: "Model-View-Controller promotes code organization and separation of concerns for maintainability and scalability.", icon: Layers },
  { title: "Blade Templating Engine", description: "Clean, expressive syntax for dynamic and reusable views — boosting developer productivity.", icon: FileCode },
  { title: "Eloquent ORM", description: "Intuitive query builder and ActiveRecord implementation that reduces development time and complexity.", icon: Database },
  { title: "Laravel Community", description: "A vibrant global community providing resources, packages, support, and continuous innovation.", icon: Users },
] as const;

export const laravelProjects = [
  { id: "blog", title: "Blog System", description: "Content management and publishing platform with categories, tags, and SEO.", image: "/images/blog-mobile.jpg", tag: "Ecommerce" },
  { id: "colorbar", title: "ColorBar Website", description: "Dynamic product catalog with custom admin and payment integration.", image: "/images/service-ecommerce.jpg", tag: "Retail" },
  { id: "cissern", title: "Cissern Website", description: "Corporate portal with role-based access and content management.", image: "/images/portfolio-fintech.jpg", tag: "Corporate" },
] as const;

export const laravelTestimonials = [
  {
    name: "Alvin Hong",
    role: "Manager",
    quote: "I had a great experience working with Razobyte for our digital marketing needs. From the very beginning, their team understood our business goals and crafted a strategy that delivered real results.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Eunice Yong",
    role: "Director",
    quote: "They have been very good to boost my business through SEO campaign and Google AdWords. Razobyte offers a full range of consultancy and solutions for sustainable growth.",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
] as const;

export const laravelVersions = {
  title: "Leveraging Latest Laravel Versions and Features",
  body: "We stay current with Laravel's evolving ecosystem — improved routing, refined rate limiting, Blade components and slots for reusable UI, Vite-powered asset compilation, and Laravel Nova for elegant admin panels.",
  features: [
    { title: "Laravel 11", description: "Modern routing, job middleware, and performance improvements.", icon: Sparkles },
    { title: "Blade Components & Slots", description: "Reusable UI components that simplify views and improve maintainability.", icon: FileCode },
    { title: "Laravel Nova", description: "Customizable admin panels with an intuitive interface for your team.", icon: Package },
    { title: "Vite & Laravel Mix", description: "Fast asset compilation and preprocessing for CSS, JavaScript, and images.", icon: Route },
  ],
} as const;

export const laravelSupport = [
  "90-day no-cost bug-free warranty for updates and security patches",
  "Access to ad-hoc developers for maintaining and upgrading web solutions",
  "Retained service agreements with fixed man-hours alongside your existing contract",
  "Flexible support packages — add features, decide time frames, scale as needed",
] as const;

export const laravelRelated = [
  { label: "CodeIgniter", href: siteRoutes.codeigniterWebsite, icon: "/images/tech/php.svg", description: "Lightweight PHP framework for lean, high-performance custom web applications." },
  { label: "PHP Development", href: siteRoutes.phpDevelopment, icon: "/images/tech/php.svg", description: "Expert PHP web app development — complex processes, robust websites, and enterprise solutions." },
  { label: "HTML & CSS", href: siteRoutes.htmlCssWebsite, icon: "/images/tech/javascript.svg", description: "Pixel-perfect front-end development with responsive, SEO-friendly HTML5 and CSS3." },
] as const;

export const laravelExpertise = [
  { label: "PHP Website", href: siteRoutes.phpDevelopment, icon: "/images/tech/php.svg" },
  { label: "HTML & CSS", href: siteRoutes.htmlCssWebsite, icon: "/images/tech/javascript.svg" },
  { label: "React JS", href: siteRoutes.reactjsDevelopment, icon: "/images/tech/react.svg" },
  { label: "CodeIgniter", href: siteRoutes.codeigniterWebsite, icon: "/images/tech/php.svg" },
  { label: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg" },
  { label: "WooCommerce", href: siteRoutes.woocommerceDevelopment, icon: "/images/erp/woocommerce.svg" },
  { label: "Magento", href: siteRoutes.magnetoDevelopment, icon: "/images/service-ecommerce.jpg" },
  { label: "PrestaShop", href: siteRoutes.prestashopDevelopment, icon: "/images/service-ecommerce.jpg" },
] as const;

export const laravelBlogs = [
  { title: "What is Cybersecurity?", excerpt: "Protecting your Laravel applications from modern security threats.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Cloud-Native Development", excerpt: "Deploying Laravel apps in scalable, containerized cloud environments.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "The Digital Transformation Journey", excerpt: "How businesses stay ahead with modern web application stacks.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const laravelFaqs: ProductFaq[] = [
  { question: "What is Laravel?", answer: "Laravel is a modern PHP framework with elegant syntax, MVC architecture, and a rich ecosystem. It simplifies routing, authentication, caching, and database work for web application development." },
  { question: "Why is Laravel preferred for web development?", answer: "Laravel offers rapid development, built-in security, excellent documentation, and a vast package ecosystem — making it ideal for everything from MVPs to enterprise applications." },
  { question: "How does Laravel compare to CodeIgniter?", answer: "Laravel provides more built-in features, ORM, queues, and tooling out of the box. CodeIgniter is lighter and faster to bootstrap. We recommend Laravel for feature-rich apps and CI for lean projects." },
  { question: "What are Laravel Blade templates?", answer: "Blade is Laravel's templating engine — a clean syntax for layouts, components, slots, and directives that compile to plain PHP for maximum performance." },
  { question: "Can Laravel be used for eCommerce websites?", answer: "Absolutely. We build Laravel e-commerce with custom carts, payment gateways (Razorpay, Stripe), inventory management, and admin dashboards." },
  { question: "What hosting is best for Laravel websites?", answer: "Laravel Forge, DigitalOcean, AWS, or VPS with PHP 8+, Composer, Redis, and queue workers. We configure Nginx, SSL, and deployment pipelines for production." },
  { question: "How does Laravel ensure website security?", answer: "CSRF tokens, bcrypt hashing, SQL injection protection via Eloquent, XSS filtering, rate limiting, and Sanctum/Passport for API authentication." },
  { question: "What is the role of REST API in Laravel?", answer: "Laravel excels at API development with resource controllers, API resources, Sanctum auth, and automatic JSON formatting — powering mobile apps and SPAs." },
  { question: "How can Laravel improve website performance?", answer: "Route caching, config caching, Redis queues, database indexing, eager loading, CDN integration, and Horizon for queue monitoring." },
  { question: "What are some examples of websites built with Laravel?", answer: "Invoice Ninja, Alison, Laracasts, and many SaaS platforms. Our portfolio includes blog systems, corporate portals, and e-commerce sites on Laravel." },
];
