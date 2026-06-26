import {
  Stethoscope,
  MonitorCog,
  CircuitBoard,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { siteRoutes, homeRoutes } from "./routes";

export type IndustryNavItem = {
  label: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const industryNavItems: IndustryNavItem[] = [
  {
    label: "Healthcare Solutions",
    description: "Digital systems for clinics, wellness & care providers",
    href: siteRoutes.healthcare,
    icon: Stethoscope,
  },
  {
    label: "IT Consulting",
    description: "Strategy, infrastructure & enterprise technology advisory",
    href: siteRoutes.itConsulting,
    icon: MonitorCog,
  },
  {
    label: "Product Engineering",
    description: "End-to-end software product design & development",
    href: siteRoutes.productEngineering,
    icon: CircuitBoard,
  },
];

export const industryOverview = {
  label: "Industries We Serve",
  description: "Sector-focused solutions across healthcare, IT & product builds",
  href: homeRoutes.industry,
  icon: Building2,
};

export const industrySectionPaths = [
  siteRoutes.healthcare,
  siteRoutes.itConsulting,
  siteRoutes.productEngineering,
] as const;
