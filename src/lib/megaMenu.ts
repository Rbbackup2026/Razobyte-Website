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
import { homeRoutes } from "./routes";

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
          { label: "UI/UX Design", href: homeRoutes.services },
          { label: "Website Design", href: homeRoutes.services },
        ],
      },
      {
        title: "Ecommerce Solutions",
        icon: ShoppingCart,
        items: [
          { label: "Shopify", href: homeRoutes.services },
          { label: "OpenCart", href: homeRoutes.services },
          { label: "Woocommerce", href: homeRoutes.services },
          { label: "Magento", href: homeRoutes.services },
          { label: "Prestashop", href: homeRoutes.services },
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
          { label: "CodeIgniter Website", href: homeRoutes.services },
          { label: "Php Website", href: homeRoutes.services },
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
          { label: "2D", href: homeRoutes.services },
          { label: "3D", href: homeRoutes.services },
          { label: "Meta Verse", href: homeRoutes.services },
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
