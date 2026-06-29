import {
  Zap,
  Gauge,
  Search,
  Accessibility,
  Globe,
  Smartphone,
  Layout,
  RefreshCw,
  FileCode,
  Palette,
  Sparkles,
  Truck,
  Users,
  Headphones,
  DollarSign,
  Code2,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const HTML_ORANGE = "#E34C26";
export const CSS_BLUE = "#264DE4";

export const htmlCssHero = {
  title: "HTML & CSS Development",
  subtitle: "Custom web development and innovative designs.",
  description:
    "Experience expert HTML & CSS development with Razobyte. We craft visually stunning, highly functional websites using the latest front-end standards — helping you establish a strong and captivating online presence.",
};

export const htmlCssHighlights = [
  "HTML5 semantic markup",
  "CSS3 & animations",
  "Fully responsive",
  "SEO-optimized structure",
] as const;

export function getHtmlCssStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: "395+", label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const htmlCssIntro = {
  title: "Tailored Solutions for Your Business",
  subtitle: "User-friendly interfaces and accessibility considerations",
  body: "Join our satisfied clients who have entrusted Razobyte with their HTML & CSS development needs. From startups to Fortune 500 companies, we deliver results-driven solutions that exceed expectations. Let Razobyte be your trusted partner for pixel-perfect front-end development — where clean code meets beautiful design.",
};

export const whyHtmlCss = [
  {
    title: "Versatility",
    description: "Unparalleled flexibility to create visually engaging, responsive websites adaptable to every device and screen size.",
    icon: Layout,
  },
  {
    title: "Performance",
    description: "Lightweight HTML & CSS sites load quickly — optimal performance, lower bounce rates, and better engagement.",
    icon: Gauge,
  },
  {
    title: "SEO-Friendly",
    description: "Semantic HTML markup and clean CSS structure help search engines understand and rank your content higher.",
    icon: Search,
  },
  {
    title: "Accessibility",
    description: "Standards-compliant markup and thoughtful styling enhance inclusivity and usability for all users.",
    icon: Accessibility,
  },
  {
    title: "Superior Speed",
    description: "Minimal dependencies mean blazing-fast page loads — critical for conversions and Core Web Vitals scores.",
    icon: Zap,
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Universally supported by every major browser — your site looks and functions consistently everywhere.",
    icon: Globe,
  },
] as const;

export const htmlCssServices = [
  "Custom Website Design",
  "Responsive Web Development",
  "Template Customization",
  "Website Redesign",
  "Landing Page Creation",
  "Component Library Development",
  "Staying Ahead with Latest HTML & CSS Technologies",
] as const;

export const htmlCssFeatures = [
  {
    title: "HTML5",
    description: "Harnessing semantic markup to create well-structured, SEO-friendly websites with modern elements.",
    icon: FileCode,
    color: HTML_ORANGE,
  },
  {
    title: "CSS3",
    description: "Utilizing modern CSS — flexbox, grid, variables, and custom properties for responsive, stunning layouts.",
    icon: Palette,
    color: CSS_BLUE,
  },
  {
    title: "Responsive Design",
    description: "Your website looks and functions seamlessly across phones, tablets, and desktops.",
    icon: Smartphone,
    color: "#2b8def",
  },
  {
    title: "CSS Animations",
    description: "Micro-interactions and transitions that bring your website to life and boost user engagement.",
    icon: Sparkles,
    color: "#8b5cf6",
  },
] as const;

export const htmlCssFrameworks = [
  {
    title: "Bootstrap",
    description: "Responsive, mobile-first websites with Bootstrap's powerful grid and component library.",
    letter: "B",
    color: "#7952b3",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling for rapid, consistent design systems and pixel-perfect custom layouts.",
    letter: "T",
    color: "#06b6d4",
  },
  {
    title: "Foundation",
    description: "Flexible grid systems and customizable UI components for modern, accessible web design.",
    letter: "F",
    color: "#1779ba",
  },
] as const;

export const htmlCssProcess = [
  { step: "Plan", description: "Discovery, sitemap, and content strategy." },
  { step: "Design", description: "Wireframes, mockups, and design approval." },
  { step: "Develop", description: "Semantic HTML, CSS architecture, and components." },
  { step: "Test", description: "Cross-browser, responsive, and accessibility QA." },
  { step: "Review", description: "Client feedback and refinement cycles." },
  { step: "Launch", description: "Deploy, monitor, and hand off documentation." },
] as const;

export const htmlCssMethodology =
  "Trust your HTML & CSS projects to our team of experienced developers, who combine technical expertise with creative vision to deliver bespoke solutions tailored to your business needs.";

export const htmlCssPillars = [
  { title: "Reusable Components", description: "Modular HTML/CSS blocks you can reuse across pages and campaigns." },
  { title: "Semantic Markup", description: "Clean, meaningful HTML that search engines and screen readers love." },
  { title: "Grid Systems", description: "Flexbox and CSS Grid layouts that scale from mobile to ultra-wide screens." },
  { title: "Cross-Browser Ready", description: "Tested on Chrome, Safari, Firefox, and Edge for consistent rendering." },
  { title: "Open Standards", description: "No vendor lock-in — pure web standards that last for years." },
  { title: "CDN-Friendly", description: "Optimized assets delivered fast via global content delivery networks." },
] as const;

export const htmlCssDifferentiators = [
  { title: "Speedy Delivery", icon: Truck },
  { title: "Agile Development", icon: Code2 },
  { title: "Skilled Developers", icon: Users },
  { title: "Competitive Pricing", icon: DollarSign },
  { title: "Active Support", icon: Headphones },
  { title: "Global Clientele", icon: Globe },
] as const;

export const htmlCssTechnologies = [
  { label: "PHP Website", href: siteRoutes.phpDevelopment, icon: "/images/tech/php.svg" },
  { label: "React JS", href: homeRoutes.services, icon: "/images/tech/react.svg" },
  { label: "Laravel", href: homeRoutes.services, icon: "/images/tech/laravel.svg" },
  { label: "CodeIgniter", href: siteRoutes.codeigniterWebsite, icon: "/images/tech/php.svg" },
  { label: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg" },
  { label: "WooCommerce", href: siteRoutes.woocommerceDevelopment, icon: "/images/erp/woocommerce.svg" },
  { label: "Magento", href: siteRoutes.magnetoDevelopment, icon: "/images/service-ecommerce.jpg" },
  { label: "PrestaShop", href: siteRoutes.prestashopDevelopment, icon: "/images/service-ecommerce.jpg" },
] as const;

export const htmlCssProjects = [
  {
    id: "cissern",
    title: "Cissern Website",
    description: "Minimalist interior design site with fluid CSS layouts and image galleries.",
    image: "/images/portfolio-fintech.jpg",
    tag: "Design",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description: "Responsive service site with step-by-step booking UI and mobile-first CSS.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
  {
    id: "mdrc",
    title: "MDRC",
    description: "Healthcare portal with accessible markup and structured content sections.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const htmlCssBlogs = [
  {
    title: "What is Cybersecurity?",
    excerpt: "Protecting your front-end assets and user data from modern threats.",
    image: "/images/blog-ai.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "Cloud-Native Development",
    excerpt: "Deploying static and dynamic sites in scalable cloud environments.",
    image: "/images/blog-cloud.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "The Digital Transformation Journey",
    excerpt: "How businesses stay ahead with modern web experiences.",
    image: "/images/blog-mobile.jpg",
    href: siteRoutes.blogs,
  },
] as const;

export const htmlCssFaqs: ProductFaq[] = [
  {
    question: "What are HTML and CSS used for?",
    answer: "HTML structures web page content — headings, paragraphs, images, and links. CSS styles that content — colors, layouts, fonts, and animations. Together they form the foundation of every website.",
  },
  {
    question: "Why are HTML and CSS essential for web development?",
    answer: "Every website — from simple landing pages to complex apps — relies on HTML for structure and CSS for presentation. They are universal, lightweight, and supported by every browser.",
  },
  {
    question: "What is a static HTML website?",
    answer: "A static HTML site serves fixed content without server-side processing. Ideal for portfolios, landing pages, and marketing sites where speed and simplicity matter most.",
  },
  {
    question: "How do CSS frameworks help in web development?",
    answer: "Frameworks like Bootstrap and Tailwind provide pre-built grids, components, and utilities — accelerating development while ensuring consistency and responsiveness.",
  },
  {
    question: "What are responsive designs in HTML & CSS?",
    answer: "Responsive design uses flexible grids, media queries, and fluid images so your site adapts beautifully to phones, tablets, and desktops without separate mobile URLs.",
  },
  {
    question: "Can HTML5 websites support multimedia?",
    answer: "Yes. HTML5 includes native <video>, <audio>, and <canvas> elements — no plugins required. We optimize media for fast loading and accessibility.",
  },
  {
    question: "How does CSS improve website performance?",
    answer: "Efficient CSS reduces render-blocking, minimizes file size through compression, and uses modern techniques like critical CSS inlining for faster first paint.",
  },
  {
    question: "How are HTML and CSS used for SEO?",
    answer: "Semantic HTML (h1–h6, article, nav) helps search engines understand content hierarchy. Clean CSS with fast load times improves Core Web Vitals — a ranking factor.",
  },
  {
    question: "What are some examples of HTML & CSS templates?",
    answer: "Landing pages, corporate sites, portfolios, email templates, and marketing microsites. We build custom templates or customize existing ones to match your brand.",
  },
  {
    question: "Is it easy to learn HTML & CSS for beginners?",
    answer: "HTML and CSS are among the most approachable programming languages. We also provide documentation and handoff support so your team can maintain the site confidently.",
  },
];
