import {
  Users,
  Briefcase,
  Newspaper,
  FolderKanban,
  Tags,
  Info,
  type LucideIcon,
} from "lucide-react";
import { siteRoutes } from "./routes";

export type AboutNavItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const aboutNavItems: AboutNavItem[] = [
  {
    label: "Our Clients",
    description: "Brands and businesses we've partnered with",
    href: siteRoutes.ourClients,
    icon: Users,
  },
  {
    label: "Careers",
    description: "Join our growing digital team",
    href: siteRoutes.careers,
    icon: Briefcase,
  },
  {
    label: "Blogs",
    description: "Insights, trends & expert perspectives",
    href: siteRoutes.blogs,
    icon: Newspaper,
  },
  {
    label: "Case Studies",
    description: "Real projects, measurable outcomes",
    href: siteRoutes.caseStudies,
    icon: FolderKanban,
  },
  {
    label: "Pricing",
    description: "Transparent plans for every stage",
    href: siteRoutes.pricing,
    icon: Tags,
  },
];

export const aboutOverview = {
  label: "About Us",
  description: "Our story, values & digital journey since 2015",
  href: siteRoutes.about,
  icon: Info,
};

export const aboutSectionPaths = [
  siteRoutes.about,
  siteRoutes.ourClients,
  siteRoutes.careers,
  siteRoutes.blogs,
  siteRoutes.caseStudies,
  siteRoutes.pricing,
] as const;

/** True when current path is any About section (incl. /about/our-clients) */
export function isAboutSectionPath(pathname: string) {
  return (aboutSectionPaths as readonly string[]).includes(pathname);
}
