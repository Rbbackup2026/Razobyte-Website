import {
  Heart,
  Users,
  TrendingUp,
  PartyPopper,
  Lightbulb,
  Shield,
  Globe2,
  Award,
  type LucideIcon,
} from "lucide-react";
import { COMPANY_PROJECTS_PLUS } from "./company";

export const careersStats = [
  { value: "98%", label: "Clients Satisfied" },
  { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
  { value: "14M+", label: "Total Lines of Code" },
  { value: "8+", label: "Years of Excellence" },
] as const;

export type WhyJoinItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  bg: string;
};

export const whyJoinRazobyte: WhyJoinItem[] = [
  {
    title: "Make a Difference",
    description:
      "Every project you work on is part of a bigger mission. You'll be contributing to solutions that make a real difference.",
    icon: Heart,
    accent: "text-emerald-600",
    bg: "from-emerald-50 to-emerald-100/50",
  },
  {
    title: "Collaborative Culture",
    description:
      "We foster a culture of collaboration and creativity. You'll work with talented people who inspire and challenge you.",
    icon: Users,
    accent: "text-rose-500",
    bg: "from-rose-50 to-rose-100/50",
  },
  {
    title: "Grow with Us",
    description:
      "We believe in investing in people, and that includes YOU. With endless learning opportunities, career growth, and a team that values mentorship, you'll always be moving forward.",
    icon: TrendingUp,
    accent: "text-slate-600",
    bg: "from-slate-50 to-slate-100/80",
  },
  {
    title: "Work Hard, Play Hard",
    description:
      "We balance productivity with fun. From team outings to hackathons, we make sure to celebrate every success along the way.",
    icon: PartyPopper,
    accent: "text-razo-blue",
    bg: "from-sky-50 to-razo-blue/10",
  },
];

export const innovationPillars = [
  "Brainstorm",
  "Vision",
  "Creativity",
  "Solution",
  "Imagination",
] as const;

export type CompanyValue = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  ring: string;
};

export const companyValues: CompanyValue[] = [
  {
    title: "Innovation",
    description: "We're always exploring new ideas and improving.",
    icon: Lightbulb,
    color: "text-emerald-600",
    ring: "ring-emerald-200 bg-emerald-50",
  },
  {
    title: "Integrity",
    description:
      "We believe in honesty and transparency in all aspects of our work.",
    icon: Shield,
    color: "text-rose-500",
    ring: "ring-rose-200 bg-rose-50",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "We celebrate our differences and know they make us stronger.",
    icon: Globe2,
    color: "text-razo-blue",
    ring: "ring-sky-200 bg-sky-50",
  },
  {
    title: "Excellence",
    description:
      "We push the boundaries of what's possible to deliver high-quality solutions.",
    icon: Award,
    color: "text-slate-600",
    ring: "ring-slate-200 bg-slate-50",
  },
];

export const jobOpenings = [
  {
    title: "Digital Marketing Intern",
    location: "Gurugram",
    type: "Internship",
    department: "Digital Marketing",
  },
  {
    title: "Web Designer Intern",
    location: "Delhi",
    type: "Internship",
    department: "Design",
  },
  {
    title: "Software Developer Intern",
    location: "Mumbai",
    type: "Internship",
    department: "Development",
  },
] as const;
