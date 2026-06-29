import {
  PenTool,
  ShoppingCart,
  Code2,
  BarChart3,
  Gamepad2,
  Headphones,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { homeRoutes, siteRoutes } from "./routes";

export type MegaMenuItem = {
  label: string;
  href: string;
};

export type MegaMenuCategory = {
  title: string;
  icon: LucideIcon;
  items: MegaMenuItem[];
};

export type MegaMenuCard = {
  id: string;
  categories: MegaMenuCategory[];
};

export const servicesMegaMenu: MegaMenuCard[] = [
  {
    id: "design-ecommerce",
    categories: [
      {
        title: "Design",
        icon: PenTool,
        items: [
          { label: "UI/UX Design", href: siteRoutes.uiUxDesign },
          { label: "Website Design", href: siteRoutes.websiteDesign },
        ],
      },
      {
        title: "Ecommerce Solutions",
        icon: ShoppingCart,
        items: [
          { label: "Shopify", href: siteRoutes.shopifyDevelopment },
          { label: "OpenCart", href: siteRoutes.opencartDevelopment },
          { label: "Woocommerce", href: siteRoutes.woocommerceDevelopment },
          { label: "Magento", href: siteRoutes.magnetoDevelopment },
          { label: "Prestashop", href: siteRoutes.prestashopDevelopment },
        ],
      },
    ],
  },
  {
    id: "web-dev",
    categories: [
      {
        title: "Website Development",
        icon: Code2,
        items: [
          { label: "CodeIgniter Website", href: siteRoutes.codeigniterWebsite },
          { label: "Php Website", href: siteRoutes.phpDevelopment },
          { label: "Html & Css Website", href: homeRoutes.services },
          { label: "Laravel Website", href: homeRoutes.services },
          { label: "React js Website", href: homeRoutes.services },
          { label: "Angular js Website", href: homeRoutes.services },
          { label: "E-commerce Website", href: homeRoutes.services },
          { label: "Payment Gateway", href: homeRoutes.services },
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    categories: [
      {
        title: "Digital Marketing",
        icon: BarChart3,
        items: [
          { label: "Search Engine Optimization", href: homeRoutes.services },
          { label: "Search Engine Marketing", href: homeRoutes.services },
          { label: "Social Media Optimization", href: homeRoutes.services },
          { label: "Social Media Marketing", href: homeRoutes.services },
          { label: "Email Marketing", href: homeRoutes.services },
          { label: "Performance Marketing", href: homeRoutes.services },
        ],
      },
    ],
  },
  {
    id: "game-dev",
    categories: [
      {
        title: "Game Development",
        icon: Gamepad2,
        items: [
          { label: "2D", href: siteRoutes.game2d },
          { label: "3D", href: siteRoutes.game3d },
          { label: "Meta Verse", href: siteRoutes.gameMetaverse },
        ],
      },
    ],
  },
  {
    id: "maintenance",
    categories: [
      {
        title: "Maintenance & Support",
        icon: Headphones,
        items: [
          { label: "Website Maintenance", href: homeRoutes.services },
          { label: "Mobile App Maintenance", href: homeRoutes.services },
          { label: "Domain & Hosting Maintenance", href: homeRoutes.services },
        ],
      },
    ],
  },
  {
    id: "mobile-apps",
    categories: [
      {
        title: "Mobile Applications Development",
        icon: Smartphone,
        items: [
          { label: "Android App", href: homeRoutes.services },
          { label: "IOS App", href: homeRoutes.services },
        ],
      },
    ],
  },
];
