import {
  Zap,
  Layers,
  Braces,
  RefreshCw,
  Globe,
  Smartphone,
  ShoppingCart,
  BarChart3,
  TestTube,
  Plug,
  Palette,
  Rocket,
  Shield,
  Gauge,
  Users,
  GitBranch,
  Box,
  Database,
  Layout,
  AppWindow,
  Server,
  Monitor,
  Wrench,
  TrendingUp,
  Cloud,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const REACT_CYAN = "#61DAFB";
export const REACT_DARK = "#20232A";

export const reactHero = {
  title: "ReactJS Development Company",
  subtitle: "Build modern, easily navigable apps adhering to W3C and ECMAScript standards.",
  description:
    "Hire expert React developers at Razobyte to craft high-performance single-page applications, dashboards, and enterprise portals — with component-driven architecture, blazing-fast UIs, and seamless user experiences.",
};

export const reactHighlights = [
  "React 19 ready",
  "Next.js & TypeScript",
  "SPA & PWA",
  "Enterprise scale",
] as const;

export function getReactStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const reactTrustStats = [
  { value: "100+", label: "5-Star Client Reviews" },
  { value: "25+", label: "Market-Tested Solutions" },
  { value: formatYearsPlus(), label: "Years Building Tech Solutions" },
  { value: "93%", label: "Client Retention Ratio" },
] as const;

export const reactFullScale = {
  title: "Full-Scale ReactJS Development Services",
  body: "From MVPs to enterprise-grade platforms, Razobyte delivers end-to-end ReactJS development — architecture design, component libraries, API integration, testing, deployment, and long-term support. We build apps that scale with your business and delight your users.",
};

export const reactHireTeam = {
  title: "Hire React JS App Development Team",
  body: "Our dedicated React engineers embed with your product team or work as an autonomous squad — sprint planning, daily standups, code reviews, and transparent delivery. Flexible engagement models: fixed-scope projects, dedicated teams, or staff augmentation.",
};

export const reactFeaturesIntro =
  "Ultimate features of ReactJS with a top React development company — harnessing modern patterns, performance optimizations, and battle-tested architecture for production-ready applications.";

export const reactFeatures = [
  { title: "One-Way Data Binding", description: "Data flows from parent to child unidirectionally — predictable state updates and manageable application logic.", icon: GitBranch },
  { title: "Virtual DOM", description: "A lightweight in-memory DOM enables efficient reconciliation and blazing-fast UI updates.", icon: Layers },
  { title: "Component Approach", description: "Reusable, self-contained UI building blocks promote modular, maintainable code.", icon: Box },
  { title: "JavaScript XML (JSX)", description: "Write HTML-like syntax in JavaScript — intuitive components without createElement boilerplate.", icon: Braces },
  { title: "React Hooks", description: "useState, useEffect, useContext, and custom hooks for clean functional components.", icon: Zap },
  { title: "Server Components", description: "Next.js server components reduce client bundle size and improve initial load performance.", icon: Server },
  { title: "State Management", description: "Redux, Zustand, React Query, and Context API for local, global, and server state.", icon: Database },
  { title: "React Router", description: "Client-side routing with nested routes, lazy loading, and protected route guards.", icon: Globe },
] as const;

export const reactServicesIntro =
  "React development services to meet your business needs — custom solutions, full-cycle delivery, and performance at scale.";

export const reactServices = [
  { title: "Custom Application Development", description: "Tailored React solutions aligned with your unique business requirements and workflows.", icon: AppWindow },
  { title: "Full-Cycle Development", description: "Planning, design, development, testing, deployment, and maintenance under one roof.", icon: RefreshCw },
  { title: "Scalability & Performance", description: "Scalable architectures, code splitting, and lazy loading for high-traffic applications.", icon: TrendingUp },
  { title: "Single-Page Applications", description: "Fast, fluid SPAs with client-side routing and instant navigation.", icon: Monitor },
  { title: "Progressive Web Apps", description: "Offline-capable PWAs with service workers and installable experiences.", icon: Smartphone },
  { title: "React Ecommerce", description: "Product catalogs, carts, checkout flows, and admin dashboards on React.", icon: ShoppingCart },
  { title: "Dashboard & Analytics", description: "Data-rich admin panels, charts, and real-time reporting interfaces.", icon: BarChart3 },
  { title: "API Integration", description: "REST and GraphQL integration with secure authentication and caching.", icon: Plug },
  { title: "UI Component Libraries", description: "Material UI, Ant Design, Chakra, and custom design systems.", icon: Palette },
  { title: "Migration to React", description: "Modernize legacy jQuery, Angular, or PHP front-ends to React incrementally.", icon: Rocket },
  { title: "Testing & QA", description: "Jest, React Testing Library, Cypress, and Playwright for reliable releases.", icon: TestTube },
  { title: "Maintenance & Support", description: "Ongoing updates, security patches, dependency upgrades, and feature additions.", icon: Wrench },
] as const;

export const reactWhyChoose = {
  title: "Hit Bulls Eye with the Top ReactJS Web Development Company",
  points: [
    "Solid track record of successfully delivering ReactJS projects — check our portfolio for proof.",
    "Experienced React developers proficient in the latest technologies and best practices.",
    "Customized solutions tailored to your business — no one-size-fits-all approaches.",
    "Agile methodologies for flexibility, iterative development, and continuous feedback.",
    "Full-cycle services: planning, design, development, testing, deployment, and post-launch support.",
  ],
  expertise: [
    "Certified professionals skilled in Virtual DOM, JSX, and modern JavaScript (ES6+).",
    "Harnessing trending technologies to craft ultimate ReactJS applications.",
    "JSX approach supporting HTML elements in JavaScript placed in the DOM efficiently.",
    "Complete in-depth consultation and roadmap mapping by project experts.",
  ],
} as const;

export const reactUseCases = [
  { title: "SaaS Platforms", description: "Multi-tenant dashboards, billing, and user management.", icon: Cloud },
  { title: "Healthcare Portals", description: "Patient flows, appointments, and HIPAA-aware interfaces.", icon: Shield },
  { title: "Fintech Apps", description: "Real-time data, secure transactions, and KYC workflows.", icon: Gauge },
  { title: "Content Platforms", description: "CMS front-ends, media galleries, and editorial tools.", icon: Layout },
  { title: "Marketplaces", description: "Vendor listings, search, filters, and checkout experiences.", icon: ShoppingCart },
  { title: "Internal Tools", description: "CRM, ERP, and operations dashboards for enterprise teams.", icon: Users },
] as const;

export const reactTechStack = [
  { name: "React", icon: "/images/tech/react.svg", category: "Core" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg", category: "Framework" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg", category: "Language" },
  { name: "Redux", icon: "/images/tech/javascript.svg", category: "State" },
  { name: "React Query", icon: "/images/tech/nodejs.svg", category: "Data" },
  { name: "Tailwind CSS", icon: "/images/tech/typescript.svg", category: "Styling" },
  { name: "Vite", icon: "/images/tech/react.svg", category: "Build" },
  { name: "GraphQL", icon: "/images/tech/javascript.svg", category: "API" },
  { name: "Jest", icon: "/images/tech/nodejs.svg", category: "Testing" },
  { name: "Cypress", icon: "/images/tech/react.svg", category: "E2E" },
  { name: "Material UI", icon: "/images/tech/react.svg", category: "UI" },
  { name: "Framer Motion", icon: "/images/tech/react.svg", category: "Animation" },
] as const;

export const reactProcess = [
  { step: "Discover", description: "Requirements, user research, and technical audit." },
  { step: "Architect", description: "Component hierarchy, state strategy, and API design." },
  { step: "Design", description: "Wireframes, UI kit, and interactive prototypes." },
  { step: "Develop", description: "Sprint-based React development with code reviews." },
  { step: "Test", description: "Unit, integration, and E2E testing across browsers." },
  { step: "Deploy", description: "CI/CD, monitoring, and performance optimization." },
] as const;

export const reactRelated = [
  { label: "Vue.js", href: homeRoutes.services, icon: "/images/tech/javascript.svg", description: "Progressive JavaScript framework for building user interfaces and single-page applications." },
  { label: "Angular", href: siteRoutes.angularJsWebsite, icon: "/images/tech/typescript.svg", description: "Full TypeScript framework with routing, forms, DI, and enterprise tooling for large applications." },
  { label: "Frontend Development", href: siteRoutes.htmlCssWebsite, icon: "/images/tech/react.svg", description: "Client-side development for responsive, accessible, and performant web experiences." },
  { label: "Next.js", href: homeRoutes.services, icon: "/images/tech/nextjs.svg", description: "Full-stack React framework with SSR, SSG, and API routes for production apps." },
] as const;

export const reactExpertise = [
  { label: "PHP Website", href: siteRoutes.phpDevelopment, icon: "/images/tech/php.svg" },
  { label: "Laravel", href: siteRoutes.laravelDevelopment, icon: "/images/tech/laravel.svg" },
  { label: "HTML & CSS", href: siteRoutes.htmlCssWebsite, icon: "/images/tech/javascript.svg" },
  { label: "CodeIgniter", href: siteRoutes.codeigniterWebsite, icon: "/images/tech/php.svg" },
  { label: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg" },
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/tech/react.svg" },
] as const;

export const reactProjects = [
  { id: "saas", title: "SaaS Dashboard", description: "Multi-tenant analytics platform with real-time charts and role-based access.", image: "/images/portfolio-fintech.jpg", tag: "SaaS" },
  { id: "ecommerce", title: "Ecommerce Storefront", description: "React storefront with cart, wishlist, and payment gateway integration.", image: "/images/portfolio-ecommerce.jpg", tag: "Retail" },
  { id: "health", title: "Healthcare Portal", description: "Patient booking, test packages, and doctor directory on React.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
] as const;

export const reactBlogs = [
  { title: "What is Cybersecurity?", excerpt: "Protecting your React applications and user data from modern threats.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Cloud-Native Development", excerpt: "How it's shaping the future of software development.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "The Digital Transformation Journey", excerpt: "How businesses stay ahead in a rapidly evolving market.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const reactFaqs: ProductFaq[] = [
  { question: "What is React.js?", answer: "React.js is a JavaScript library for building user interfaces using reusable components. Developed by Meta, it powers some of the world's most popular web applications." },
  { question: "Why is React.js popular for web development?", answer: "React's component model, Virtual DOM, large ecosystem, and strong community make it ideal for fast, maintainable, and scalable front-end development." },
  { question: "What is the difference between React.js and Angular?", answer: "React is a UI library focused on the view layer; Angular is a full framework with built-in routing, forms, and DI. React offers more flexibility; Angular provides more structure out of the box." },
  { question: "Can React.js be used for eCommerce websites?", answer: "Yes. React powers headless commerce storefronts, custom carts, and admin dashboards — often paired with Shopify, WooCommerce APIs, or custom backends." },
  { question: "What are React.js components?", answer: "Components are reusable pieces of UI — functions or classes that accept props and return JSX. They encapsulate markup, logic, and styling." },
  { question: "What is a single-page application in React.js?", answer: "An SPA loads once and updates content dynamically via JavaScript — no full page reloads. React Router enables seamless client-side navigation." },
  { question: "How can React.js improve website performance?", answer: "Virtual DOM diffing, code splitting, lazy loading, memoization, and server-side rendering (Next.js) dramatically improve perceived and actual performance." },
  { question: "Is React.js SEO-friendly?", answer: "Client-only React needs SSR or SSG for SEO. We use Next.js for server-rendered pages that search engines index perfectly." },
  { question: "What are React.js hooks?", answer: "Hooks let functional components use state and lifecycle features — useState, useEffect, useContext, useReducer, and custom hooks." },
  { question: "What are some examples of websites built with React.js?", answer: "Facebook, Instagram, Netflix, Airbnb, and Discord use React. Our portfolio includes SaaS dashboards, e-commerce stores, and healthcare portals." },
];
