import {
  Users,
  Route,
  Palette,
  Sparkles,
  Layout,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const uiUxQuote = {
  text: "Design is not just what it looks like and feels like. Design is how it works.",
  author: "Steve Jobs",
};

export const designTools = [
  "Figma",
  "Sketch",
  "Adobe XD",
  "WordPress",
  "InVision",
  "Framer",
] as const;

export function getUiUxStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: "395+", label: "Projects Completed" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export type UiUxPillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const uiUxPillars: UiUxPillar[] = [
  {
    id: "user-centricity",
    title: "User Centricity",
    description:
      "We place user needs, preferences, and behaviors at the core of every design decision. Our interfaces are intuitive, accessible, and built to resonate with real people — not just look good in a mockup.",
    icon: Users,
    image: "/images/service-design.jpg",
  },
  {
    id: "smooth-journey",
    title: "Smooth User Journey",
    description:
      "The difference between frustration and delight often comes down to flow. We map seamless transitions, intuitive navigation, and thoughtful interaction design that keeps users engaged from first tap to final conversion.",
    icon: Route,
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    id: "sleek-design",
    title: "Sleek Design",
    description:
      "Modern aesthetics meet usability. We craft typography, color palettes, and layouts that elevate your brand identity while maintaining clarity — so every screen feels polished and purposeful.",
    icon: Palette,
    image: "/images/portfolio-fintech.jpg",
  },
  {
    id: "custom-looks",
    title: "Custom Looks",
    description:
      "No generic templates. Every interface we build is tailor-made to reflect your brand's unique identity and stand out in a crowded digital world — whether it's a mobile app, dashboard, or marketing site.",
    icon: Sparkles,
    image: "/images/service-web.jpg",
  },
];

export const uiUxProjects = [
  {
    id: "modern-retail",
    title: "Modern Retail App",
    category: "UI/UX Design",
    description: "E-commerce mobile experience with streamlined checkout and product discovery.",
    image: "/images/portfolio-ecommerce.jpg",
    tag: "Mobile App",
  },
  {
    id: "healthcare-care",
    title: "Healthcare & Elder Care",
    category: "UI/UX Design",
    description: "Accessible patient-facing app designed for clarity across all age groups.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
] as const;

export const webDesignProjects = [
  {
    id: "colorbar",
    title: "ColorBar Website",
    category: "Web Design",
    description: "Beauty & cosmetics brand site with bold visuals and conversion-focused layout.",
    image: "/images/service-ecommerce.jpg",
  },
  {
    id: "classic-interiors",
    title: "Classic Interiors",
    category: "Web Design",
    description: "Architecture & interior portfolio with immersive imagery and elegant typography.",
    image: "/images/service-design.jpg",
  },
  {
    id: "king-clean",
    title: "King Clean",
    category: "Web Design",
    description: "Cleaning services website with trust signals, booking flow, and local SEO structure.",
    image: "/images/service-web.jpg",
  },
] as const;

export const relatedServices = [
  {
    title: "Social Media Optimization",
    description: "Boost visibility and engagement across social platforms.",
    icon: Layout,
    href: homeRoutes.services,
  },
  {
    title: "Social Media Marketing",
    description: "Targeted campaigns that turn followers into customers.",
    icon: ShoppingBag,
    href: homeRoutes.services,
  },
] as const;

export const uiUxBlogPosts = [
  {
    title: "What is Edge Computing?",
    excerpt:
      "Explore how distributed computing brings processing closer to data sources — and what it means for modern product design.",
    image: "/images/blog-cloud.jpg",
    href: "/blogs",
  },
  {
    title: "What is Cybersecurity?",
    excerpt:
      "Understand how protecting systems and networks shapes trustworthy digital experiences users can rely on.",
    image: "/images/blog-ai.jpg",
    href: "/blogs",
  },
  {
    title: "Cloud-Native Development",
    excerpt:
      "Learn how building and running applications in the cloud enables faster, more scalable product delivery.",
    image: "/images/blog-mobile.jpg",
    href: "/blogs",
  },
] as const;

export const uiUxProcess = [
  { step: "01", title: "Discover", detail: "Research users, goals, and competitive landscape." },
  { step: "02", title: "Define", detail: "Wireframes, user flows, and information architecture." },
  { step: "03", title: "Design", detail: "High-fidelity UI, prototypes, and design systems." },
  { step: "04", title: "Deliver", detail: "Handoff, development support, and iteration." },
] as const;

export const uiUxFaqs: ProductFaq[] = [
  {
    question: "What is UI/UX Design?",
    answer:
      "UI (User Interface) design focuses on the visual elements users interact with — buttons, typography, colors, and layout. UX (User Experience) design covers the overall journey — how easy, efficient, and enjoyable a product is to use. Together, they ensure digital products look great and work intuitively.",
  },
  {
    question: "Why is UI/UX Design important?",
    answer:
      "Strong UI/UX directly impacts user satisfaction, conversion rates, and brand perception. Poor design leads to abandoned carts, high bounce rates, and lost trust. Investing in thoughtful design reduces support costs, improves retention, and gives your business a competitive edge.",
  },
  {
    question: "What are the basic UI/UX design tools?",
    answer:
      "Industry-standard tools include Figma and Sketch for interface design, Adobe XD for prototyping, InVision and Framer for interactive mockups, and WordPress or Webflow for web implementation. We select tools based on your project scope and team workflow.",
  },
  {
    question: "What are the core principles of UI/UX Design?",
    answer:
      "Core principles include user centricity, consistency, accessibility, clear hierarchy, feedback on actions, minimal cognitive load, and iterative testing. We apply these across every screen so users can accomplish goals with confidence.",
  },
  {
    question: "How is UI/UX applied in eCommerce?",
    answer:
      "In eCommerce, UI/UX drives product discovery, frictionless checkout, trust badges, mobile responsiveness, and personalized recommendations. We optimize navigation, search, cart flows, and payment steps to reduce abandonment and increase average order value.",
  },
  {
    question: "What is the UI/UX design process?",
    answer:
      "Our process typically moves through discovery and research, user personas and journey mapping, wireframing, visual design and prototyping, usability testing, developer handoff, and post-launch iteration based on real user data.",
  },
  {
    question: "How does UI/UX affect mobile app success?",
    answer:
      "Mobile users expect speed and simplicity. Touch-friendly targets, thumb-zone navigation, offline states, push notification UX, and onboarding flows all influence app store ratings and retention. A well-designed app keeps users coming back.",
  },
  {
    question: "What are some famous UI/UX case studies?",
    answer:
      "Notable examples include Airbnb's booking simplification, Spotify's personalized discovery, and Apple's focus on minimal, task-oriented interfaces. We draw lessons from industry leaders while tailoring solutions to your specific audience and goals.",
  },
  {
    question: "How can designers build a strong UI/UX portfolio?",
    answer:
      "A strong portfolio showcases problem-solving — not just pretty screens. Include case studies with context, user research, before/after comparisons, and measurable outcomes. We help clients document project impact for their own brand storytelling.",
  },
];