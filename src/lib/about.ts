import {
  Globe,
  Smartphone,
  Database,
  Megaphone,
  Palette,
  Layout,
  Boxes,
  Workflow,
  Handshake,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  Target,
  Users,
  BarChart3,
  Headphones,
  Rocket,
  Building2,
  Stethoscope,
  GraduationCap,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { formatYearsPlus } from "./company";

export type AboutCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function getAboutStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: "395+", label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const journeyServices = [
  { title: "Website Design & Development", icon: Globe },
  { title: "Mobile App Development", icon: Smartphone },
  { title: "Custom CRM Solutions", icon: Database },
  { title: "Digital Marketing", icon: Megaphone },
  { title: "Graphic Design", icon: Palette },
  { title: "UI/UX Design", icon: Layout },
  { title: "Software Product Development", icon: Boxes },
  { title: "Automation & Lead Management", icon: Workflow },
];

export const coreValues: AboutCard[] = [
  {
    title: "Client Partnership",
    icon: Handshake,
    description:
      "We work with our clients, not just for them. Every project starts with listening — understanding your goals, learning your business, and collaborating closely throughout.",
  },
  {
    title: "Technical Expertise",
    icon: Cpu,
    description:
      "From front-end design to back-end systems, our team brings the knowledge, tools, and creativity to deliver relevant, modern, and practical solutions.",
  },
  {
    title: "Reliable Execution",
    icon: ShieldCheck,
    description:
      "Deadlines matter. Quality matters more. Every deliverable is tested, refined, and built to last — with performance, speed, security, and ease of use in mind.",
  },
  {
    title: "Sustainable Growth",
    icon: TrendingUp,
    description:
      "Technology is only useful when it drives business growth. We focus on measurable outcomes — converting traffic, reaching the right audience, and scaling with you.",
  },
];

export const aboutServices: AboutCard[] = [
  {
    title: "Website Design & Development",
    icon: Globe,
    description:
      "Clean, responsive websites that look great and perform across devices — from corporate sites to e-commerce platforms that make a strong first impression.",
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    description:
      "Android and iOS apps built for smooth performance, user satisfaction, and real business workflows — not just features on a screen.",
  },
  {
    title: "CRM & Automation",
    icon: Database,
    description:
      "Custom CRM systems, lead tracking, workflows, and process automation designed to save time, reduce manual work, and improve team productivity.",
  },
  {
    title: "SEO & Digital Marketing",
    icon: Megaphone,
    description:
      "From search to social — SEO, Google Ads, and Facebook marketing aimed at generating real leads, visibility, and revenue for your brand.",
  },
  {
    title: "UI/UX & Graphics",
    icon: Palette,
    description:
      "Engaging interfaces, polished UX, and branding assets — logos, brochures, and visuals that represent your brand with clarity and confidence.",
  },
  {
    title: "Product Management — Scratch to Launch",
    icon: Rocket,
    description:
      "Got an idea? We handle product planning, design, development, testing, and go-live — so you don't need to juggle multiple vendors.",
  },
];

export const clientSegments = [
  {
    title: "Startups & MVPs",
    description: "Launching new platforms, products, or minimum viable products.",
    icon: Rocket,
  },
  {
    title: "Growing Businesses",
    description: "Expanding online presence, operations, and digital reach.",
    icon: TrendingUp,
  },
  {
    title: "Healthcare & Wellness",
    description: "Clinics, wellness brands, and healthcare providers going digital.",
    icon: Stethoscope,
  },
  {
    title: "Education Institutes",
    description: "Schools, colleges, and ed-tech platforms seeking modern solutions.",
    icon: GraduationCap,
  },
  {
    title: "Real Estate & Travel",
    description: "Firms exploring digital marketing, lead gen, and online booking.",
    icon: Plane,
  },
  {
    title: "Enterprise Operations",
    description: "Organizations automating workflows, CRM, and internal systems.",
    icon: Building2,
  },
];

export const differentiators = [
  {
    title: "Clear Thinking",
    description:
      "We don't confuse digital work with flashy trends. We focus on what actually moves your business forward.",
    icon: Lightbulb,
  },
  {
    title: "Practical Execution",
    description:
      "Whether it's a landing page or a full CRM setup, we get things done right — and on time.",
    icon: Target,
  },
  {
    title: "People Over Process",
    description:
      "We work with clients, not for them. Real conversations matter more than endless documentation.",
    icon: Users,
  },
  {
    title: "Results That Matter",
    description:
      "More leads. Faster performance. Better user journeys. That's how we define success.",
    icon: BarChart3,
  },
  {
    title: "Long-Term Support",
    description:
      "After delivery, we don't disappear. We stay for updates, support, and future planning.",
    icon: Headphones,
  },
];

export const contactServiceOptions = [
  "Website Design & Development",
  "Mobile App Development",
  "Custom CRM Solutions",
  "ERP Solutions",
  "Digital Marketing & SEO",
  "UI/UX & Graphic Design",
  "Software Product Development",
  "Automation & Lead Management",
  "Other / Not Sure Yet",
];
