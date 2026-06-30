import {
  Zap,
  RefreshCw,
  Globe,
  Smartphone,
  Plug,
  MessageSquare,
  Wrench,
  Layers,
  GitBranch,
  Code2,
  Box,
  Monitor,
  Shield,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Search,
  Palette,
  TestTube,
  Rocket,
  ShoppingCart,
  Heart,
  BookOpen,
  Wallet,
  Plane,
  AppWindow,
  Database,
  Gauge,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const ANGULAR_RED = "#DD0031";
export const ANGULAR_DARK = "#C3002F";

export const angularHero = {
  title: "Dynamic, Scalable & Feature-Rich Solutions with AngularJS",
  subtitle: "From single-page apps to enterprise solutions — seamless, innovative, and scalable results.",
  description:
    "We turn your vision into reality with robust, scalable, high-performing AngularJS solutions. Trusted by businesses worldwide, Angular is the go-to framework for dynamic, feature-rich web applications that enhance user experience and drive success.",
};

export const angularHighlights = [
  "Angular 17+ ready",
  "TypeScript first",
  "SPA & enterprise",
  "Google-backed framework",
] as const;

export function getAngularStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const angularIntro =
  "We turn your vision into reality with robust, scalable, and high-performing AngularJS solutions. Trusted by businesses worldwide, Angular is the go-to framework for building dynamic, feature-rich web applications. With our expertise, your business can leverage the full potential of Angular to create cutting-edge solutions that enhance user experience and drive success.";

export const angularWhyIntro =
  "AngularJS, developed and maintained by Google, is an open-source JavaScript framework that simplifies front-end development. Its modular approach, two-way data binding, and real-time synchronization make it a preferred choice for highly responsive web and mobile applications.";

export const angularWhyFeatures = [
  { title: "Two-Way Data Binding", description: "Automate synchronization between the model and the view for reactive UIs.", icon: RefreshCw },
  { title: "Dependency Injection", description: "Manage application components effortlessly for better code readability.", icon: GitBranch },
  { title: "Directives", description: "Extend HTML with reusable components for enriched user interfaces.", icon: Code2 },
  { title: "MVC Architecture", description: "Split logic into manageable modules for cleaner, maintainable code.", icon: Layers },
  { title: "Cross-Platform Compatibility", description: "Build applications that work seamlessly across devices and browsers.", icon: Globe },
  { title: "TypeScript Support", description: "Strong typing, interfaces, and tooling for enterprise-grade applications.", icon: Box },
  { title: "RxJS Observables", description: "Reactive programming for async data streams, events, and real-time updates.", icon: Zap },
  { title: "Angular CLI", description: "Scaffolding, builds, testing, and deployment from a powerful command-line tool.", icon: Monitor },
] as const;

export const angularServicesIntro =
  "We provide end-to-end AngularJS development services tailored to meet your business needs.";

export const angularServices = [
  { title: "Custom Web Application Development", description: "Bespoke solutions aligned with your requirements and seamless user experience.", icon: AppWindow },
  { title: "Single Page Applications (SPAs)", description: "Lightweight, fast SPAs with native app-like experience.", icon: Monitor },
  { title: "AngularJS Migration & Upgrade", description: "Modernize legacy systems and migrate to Angular without downtime or data loss.", icon: Rocket },
  { title: "API Development & Integration", description: "Third-party API integration for unified, extended application functionality.", icon: Plug },
  { title: "Real-Time Applications", description: "Chat systems, dashboards, and collaborative tools with event-driven architecture.", icon: MessageSquare },
  { title: "AngularJS Maintenance & Support", description: "Round-the-clock updates, security patches, and performance optimization.", icon: Wrench },
  { title: "Enterprise Angular Solutions", description: "Multi-module, role-based systems for large organizations and teams.", icon: Database },
  { title: "Angular UI/UX Development", description: "Material Design, custom themes, and accessible component libraries.", icon: Palette },
  { title: "Progressive Web Apps", description: "Offline-capable PWAs with service workers and installable experiences.", icon: Smartphone },
  { title: "Angular Testing & QA", description: "Jasmine, Karma, and Protractor for reliable, bug-free releases.", icon: TestTube },
  { title: "Micro-Frontend Architecture", description: "Modular front-ends that scale across teams and codebases.", icon: Layers },
  { title: "Performance Optimization", description: "Lazy loading, AoT compilation, and bundle size reduction.", icon: Gauge },
] as const;

export const angularPartners = [
  { title: "Expert Developers", description: "Certified Angular developers with years of experience across diverse industries.", icon: Users },
  { title: "Agile Methodology", description: "Iterative development and client collaboration for faster, aligned results.", icon: Zap },
  { title: "Innovative Solutions", description: "Creative, scalable applications leveraging Angular's full potential.", icon: Lightbulb },
  { title: "Focus on Quality", description: "Best coding practices — bug-free, secure, and high-performing applications.", icon: Shield },
  { title: "Client-Centric Approach", description: "From ideation to delivery — informed and involved at every stage.", icon: Target },
] as const;

export const angularIndustries = [
  { title: "eCommerce", description: "Shopping carts, real-time recommendations, and secure payment gateways.", icon: ShoppingCart },
  { title: "Healthcare", description: "Patient portals, appointment management, and telemedicine solutions.", icon: Heart },
  { title: "Education", description: "E-learning platforms, interactive quizzes, and student tracking.", icon: BookOpen },
  { title: "Finance", description: "Banking portals, investment tracking, and financial analytics dashboards.", icon: Wallet },
  { title: "Travel & Hospitality", description: "Dynamic booking, itinerary planners, and personalized experiences.", icon: Plane },
  { title: "SaaS & Enterprise", description: "Multi-tenant dashboards, billing, and workflow automation.", icon: TrendingUp },
] as const;

export const angularProcess = [
  { step: "Planning & Research", description: "Requirements, goals, competitor analysis, and sitemap.", order: "1st" },
  { step: "Design & Development", description: "Wireframes, front-end, back-end, responsiveness, CMS integration.", order: "2nd" },
  { step: "Testing & Optimization", description: "Functionality, compatibility, performance, and bug fixes.", order: "3rd" },
  { step: "Launch & Support", description: "Monitoring, feedback, SEO optimization, and ongoing support.", order: "4th" },
] as const;

export const angularDevFlow = [
  { step: "Analysis", description: "Discovery workshops and technical feasibility.", icon: Search },
  { step: "Design", description: "UI kit, component library, and prototypes.", icon: Palette },
  { step: "Develop", description: "Sprint-based Angular development with reviews.", icon: Code2 },
  { step: "Test", description: "Unit, integration, and E2E across browsers.", icon: TestTube },
  { step: "Deploy", description: "CI/CD, cloud hosting, and monitoring.", icon: Rocket },
  { step: "Maintain", description: "Updates, patches, and feature enhancements.", icon: Wrench },
] as const;

export const angularTechStack = [
  { name: "Angular", icon: "/images/tech/typescript.svg", category: "Framework" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg", category: "Language" },
  { name: "RxJS", icon: "/images/tech/javascript.svg", category: "Reactive" },
  { name: "NgRx", icon: "/images/tech/react.svg", category: "State" },
  { name: "Angular Material", icon: "/images/tech/typescript.svg", category: "UI" },
  { name: "Bootstrap", icon: "/images/tech/javascript.svg", category: "CSS" },
  { name: "REST API", icon: "/images/tech/nodejs.svg", category: "Backend" },
  { name: "GraphQL", icon: "/images/tech/javascript.svg", category: "API" },
  { name: "Firebase", icon: "/images/tech/nodejs.svg", category: "BaaS" },
  { name: "Jest", icon: "/images/tech/nodejs.svg", category: "Testing" },
  { name: "Docker", icon: "/images/tech/docker.svg", category: "DevOps" },
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud" },
] as const;

export const angularRelated = [
  { label: "React JS", href: siteRoutes.reactjsDevelopment, icon: "/images/tech/react.svg", description: "Component-based UI library for fast, interactive single-page applications." },
  { label: "Vue.js", href: homeRoutes.services, icon: "/images/tech/javascript.svg", description: "Progressive framework for building user interfaces and SPAs." },
  { label: "HTML & CSS", href: siteRoutes.htmlCssWebsite, icon: "/images/tech/javascript.svg", description: "Semantic markup and responsive styling for modern web experiences." },
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/tech/react.svg", description: "User-centered design that complements your Angular front-end." },
] as const;

export const angularExpertise = [
  { label: "React JS", href: siteRoutes.reactjsDevelopment, icon: "/images/tech/react.svg" },
  { label: "Laravel", href: siteRoutes.laravelDevelopment, icon: "/images/tech/laravel.svg" },
  { label: "PHP Website", href: siteRoutes.phpDevelopment, icon: "/images/tech/php.svg" },
  { label: "Next.js", href: homeRoutes.services, icon: "/images/tech/nextjs.svg" },
  { label: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg" },
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/tech/react.svg" },
] as const;

export const angularProjects = [
  { id: "enterprise", title: "Enterprise Dashboard", description: "Multi-module admin portal with role-based access and real-time analytics.", image: "/images/portfolio-fintech.jpg", tag: "Enterprise" },
  { id: "healthcare", title: "Healthcare Portal", description: "Patient booking, test packages, and doctor directory on Angular.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
  { id: "ecommerce", title: "Ecommerce SPA", description: "Product catalog, cart, and checkout with Angular Material UI.", image: "/images/portfolio-ecommerce.jpg", tag: "Retail" },
] as const;

export const angularTestimonials = [
  { name: "Alvin Hong", role: "Manager", quote: "Razobyte delivered our Angular application on time with exceptional quality. Their team understood our complex requirements and built a scalable solution.", avatar: "/images/avatar-1.jpg", rating: 5 },
  { name: "Eunice Yong", role: "Director", quote: "Professional, responsive, and technically excellent. Our Angular SPA performs beautifully across all devices.", avatar: "/images/avatar-2.jpg", rating: 5 },
] as const;

export const angularBlogs = [
  { title: "What is Cybersecurity?", excerpt: "Protecting your Angular applications from modern security threats.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Cloud-Native Development", excerpt: "Deploying Angular apps in scalable cloud environments.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "The Digital Transformation Journey", excerpt: "How businesses stay ahead with modern front-end frameworks.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const angularFaqs: ProductFaq[] = [
  { question: "What is Angular.js?", answer: "Angular (formerly AngularJS) is a TypeScript-based framework by Google for building dynamic web applications with components, modules, and powerful tooling." },
  { question: "Why is Angular.js popular for dynamic websites?", answer: "Two-way binding, dependency injection, directives, and a complete ecosystem make Angular ideal for complex, data-driven applications." },
  { question: "What is the difference between Angular.js and React.js?", answer: "Angular is a full framework with routing, forms, and DI built in. React is a UI library — more flexible but requires additional libraries for full apps." },
  { question: "How does Angular.js handle components?", answer: "Components encapsulate template, styles, and logic. They communicate via @Input/@Output, services, and RxJS observables." },
  { question: "What types of websites can be built with Angular.js?", answer: "SPAs, enterprise dashboards, e-commerce, healthcare portals, e-learning platforms, and real-time collaboration tools." },
  { question: "How does Angular.js optimize website performance?", answer: "Ahead-of-time compilation, lazy loading, tree shaking, OnPush change detection, and service workers for PWAs." },
  { question: "Can Angular.js integrate with REST APIs?", answer: "Yes. HttpClient module provides typed requests, interceptors, and error handling for REST and GraphQL APIs." },
  { question: "What are some popular websites built with Angular.js?", answer: "Google Ads, Gmail, Forbes, Upwork, and Samsung use Angular. We build enterprise portals and SPAs for global clients." },
  { question: "What hosting is best for Angular.js websites?", answer: "Static hosting (Netlify, Vercel, AWS S3 + CloudFront) for SPAs, or Node.js servers for SSR with Angular Universal." },
  { question: "Is Angular.js still relevant in modern web development?", answer: "Absolutely. Angular continues to evolve with Google backing, TypeScript, and enterprise adoption — ideal for large, maintainable codebases." },
];
