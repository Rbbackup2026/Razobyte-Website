import {
  Eye,
  Users,
  Smartphone,
  Accessibility,
  Globe,
  Code2,
  Search,
  type LucideIcon,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const websiteDesignIntro = {
  eyebrow: "Stand Out Where It Matters",
  description:
    "Website designing is a dynamic and multi-dimensional field that combines art and science. It is a multi-step process starting from research and brainstorming. Ideally, website designing is a continuous process of making changes and updating the design based on new trends as well as working on the user's feedback.",
};

export const webDesignStack = [
  "WordPress",
  "HTML5",
  "CSS3",
  "Figma",
  "Webflow",
  "React",
] as const;

export function getWebsiteDesignStats() {
  return [
    { value: "98%", label: "Client Retention" },
    { value: "395+", label: "Projects Finished" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export type WebsiteDesignPillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const websiteDesignPillars: WebsiteDesignPillar[] = [
  {
    id: "visual-impact",
    title: "Visual Impact",
    description:
      "First impressions matter. We craft visually striking websites that capture attention, communicate your brand identity instantly, and leave a lasting positive impression on every visitor who lands on your page.",
    icon: Eye,
    image: "/images/service-web.jpg",
  },
  {
    id: "user-centric",
    title: "User-Centric Approach",
    description:
      "Great design puts people first. We focus on user experience, intuitive navigation, and accessibility so visitors find what they need quickly — reducing bounce rates and turning browsers into engaged customers.",
    icon: Users,
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    id: "mobile-responsive",
    title: "Mobile Responsiveness",
    description:
      "With most traffic coming from mobile devices, responsive design isn't optional. We build websites that look and perform flawlessly across phones, tablets, and desktops — one seamless experience everywhere.",
    icon: Smartphone,
    image: "/images/blog-mobile.jpg",
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description:
      "The web should work for everyone. We follow inclusive design practices — readable contrast, keyboard navigation, semantic markup, and WCAG-aware patterns — because ethical, accessible sites reach more people and rank better.",
    icon: Accessibility,
    image: "/images/service-design.jpg",
  },
];

export const websiteDesignProjects = [
  {
    id: "classroom",
    title: "Classroom Website",
    description:
      "Education platform with course listings, enrollment flows, and a clean learning-focused interface.",
    image: "/images/portfolio-health.jpg",
    tag: "Education",
  },
  {
    id: "king-clean",
    title: "King Clean",
    description:
      "Cleaning services site with service pages, trust badges, and conversion-optimized booking CTAs.",
    image: "/images/service-web.jpg",
    tag: "Services",
  },
  {
    id: "mdrc",
    title: "MDRC",
    description:
      "Healthcare diagnostics portal with patient-friendly navigation, report access, and secure login.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const websiteDesignBlogs = [
  {
    title: "What is Cybersecurity?",
    excerpt:
      "How protecting systems and data builds trust in every website your customers visit.",
    image: "/images/blog-ai.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "Cloud Native Development",
    excerpt:
      "Building and deploying web applications in the cloud for speed, scale, and reliability.",
    image: "/images/blog-cloud.jpg",
    href: siteRoutes.blogs,
  },
  {
    title: "The Digital Transformation Journey",
    excerpt:
      "How businesses evolve their online presence from brochure sites to growth engines.",
    image: "/images/blog-mobile.jpg",
    href: siteRoutes.blogs,
  },
] as const;

export const websiteDesignRelated = [
  {
    title: "UI/UX Design",
    description: "Research-driven interfaces for apps and complex digital products.",
    icon: Globe,
    href: siteRoutes.uiUxDesign,
  },
  {
    title: "Website Development",
    description: "Turn designs into fast, secure, production-ready websites.",
    icon: Code2,
    href: homeRoutes.services,
  },
  {
    title: "Search Engine Optimization",
    description: "Design and structure that helps your site rank and convert.",
    icon: Search,
    href: homeRoutes.services,
  },
] as const;

export const websiteDesignDeliverables = [
  "Custom homepage & inner page layouts",
  "Mobile-first responsive design",
  "Brand-aligned color & typography systems",
  "SEO-friendly structure & performance",
  "CMS-ready or static handoff",
  "Ongoing design updates & support",
] as const;

export const websiteDesignFaqs: ProductFaq[] = [
  {
    question: "What is Website Design?",
    answer:
      "Website design is the process of planning and creating the visual layout, structure, and user experience of a website. It covers typography, color schemes, imagery, navigation, and how content is organized — all working together to represent your brand and guide visitors toward their goals.",
  },
  {
    question: "Why is responsive website design important?",
    answer:
      "Responsive design ensures your website adapts to any screen size — phone, tablet, or desktop. Google prioritizes mobile-friendly sites in search rankings, and users expect fast, readable experiences on every device. Without responsiveness, you lose traffic, trust, and conversions.",
  },
  {
    question: "What are the basic website design tools?",
    answer:
      "Common tools include Figma and Adobe XD for mockups, WordPress and Webflow for CMS-based sites, HTML/CSS/JavaScript for custom builds, and Photoshop or Illustrator for graphics. We choose the right stack based on your budget, timeline, and long-term maintenance needs.",
  },
  {
    question: "What are website design principles?",
    answer:
      "Key principles include visual hierarchy, consistency, whitespace, readability, fast load times, clear calls-to-action, and intuitive navigation. We apply proven UX patterns so visitors understand your offering within seconds and can take action without confusion.",
  },
  {
    question: "How does website design impact SEO?",
    answer:
      "Design directly affects SEO through page speed, mobile usability, heading structure, internal linking, image optimization, and Core Web Vitals. A well-designed site keeps users engaged longer, reduces bounce rates, and gives search engines clear signals that your content is valuable.",
  },
  {
    question: "What are some website design trends for 2023?",
    answer:
      "Trends include bold typography, micro-interactions, dark mode options, minimalist layouts, 3D elements, accessibility-first design, and AI-assisted personalization. We adopt trends selectively — only when they serve your brand and improve user experience, not just for novelty.",
  },
  {
    question: "What is the cost of website design in India 2023?",
    answer:
      "Costs vary by scope — a simple brochure site differs from a multi-page eCommerce or custom portal. Factors include number of pages, custom illustrations, CMS integration, and revision rounds. We offer transparent packages and custom quotes after understanding your requirements.",
  },
  {
    question: "How can small businesses benefit from professional website design?",
    answer:
      "A professional website builds credibility, works 24/7 as a sales channel, improves local visibility, and competes with larger brands. Small businesses gain lead capture forms, online booking, portfolio showcases, and marketing integration that DIY templates rarely deliver well.",
  },
  {
    question: "What is the difference between website design and website development?",
    answer:
      "Design focuses on how the site looks and feels — layout, colors, UX flows, and prototypes. Development is the technical build — writing code, setting up servers, databases, and integrations. Razobyte handles both so design and development stay aligned from day one.",
  },
  {
    question: "How do eCommerce websites differ in design?",
    answer:
      "eCommerce sites need product grids, filtering, cart flows, checkout optimization, trust signals, and payment UX designed to reduce abandonment. They require more complex information architecture, inventory displays, and mobile checkout patterns than standard brochure websites.",
  },
];
