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
          { label: "Html & Css Website", href: siteRoutes.htmlCssWebsite },
          { label: "Laravel Website", href: siteRoutes.laravelDevelopment },
          { label: "React js Website", href: siteRoutes.reactjsDevelopment },
          { label: "Angular js Website", href: siteRoutes.angularJsWebsite },
          { label: "E-commerce Website", href: siteRoutes.ecommerceWebsiteDevelopment },
          { label: "Payment Gateway", href: siteRoutes.paymentGateway },
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
          { label: "Search Engine Optimization", href: siteRoutes.seoSearchEngineOptimization },
          { label: "Search Engine Marketing", href: siteRoutes.semSearchEngineMarketing },
          { label: "Social Media Optimization", href: siteRoutes.smoSocialMediaOptimization },
          { label: "Social Media Marketing", href: siteRoutes.smmSocialMediaMarketing },
          { label: "Email Marketing", href: siteRoutes.emailMarketing },
          { label: "Performance Marketing", href: siteRoutes.performanceMarketing },
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
          { label: "Website Maintenance", href: siteRoutes.websiteMaintenance },
          { label: "Mobile App Maintenance", href: siteRoutes.mobileAppMaintenance },
          { label: "Domain & Hosting Maintenance", href: siteRoutes.domainHostingMaintenance },
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
          { label: "Android App", href: siteRoutes.androidAppDevelopment },
          { label: "IOS App", href: siteRoutes.iosAppDevelopment },
        ],
      },
    ],
  },
];
