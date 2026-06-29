/** Standalone site pages */
export const siteRoutes = {
  about: "/about",
  ourClients: "/about/our-clients",
  /** @deprecated Use ourClients — kept for redirects */
  clients: "/about/our-clients",
  careers: "/about/careers",
  blogs: "/blogs",
  caseStudies: "/case-studies",
  pricing: "/about/pricing",
  healthcare: "/healthcare-solutions",
  itConsulting: "/it-consulting",
  productEngineering: "/product-engineering",
  crm: "/crm",
  erp: "/erp",
  customProducts: "/custom-products",
  contact: "/contact",
  uiUxDesign: "/services/design/ui/ux-design",
  websiteDesign: "/services/design/website-design",
  shopifyDevelopment: "/services/ecommerce-solutions/shopify-development",
  opencartDevelopment: "/services/ecommerce-solutions/opencart-development",
  woocommerceDevelopment: "/services/ecommerce-solutions/wocommerce-development",
  magnetoDevelopment: "/services/ecommerce-solutions/magneto-development",
  prestashopDevelopment: "/services/ecommerce-solutions/prestashop-development",
  game2d: "/services/game-development/2d",
  game3d: "/services/game-development/3d",
  gameMetaverse: "/services/game-development/metaverse",
  codeigniterWebsite: "/services/development/codeigniter-website-development",
  phpDevelopment: "/services/development/php-development",
} as const;

/** Homepage section links — always use from any route (e.g. /crm → /#home) */
export const homeRoutes = {
  home: "/#home",
  about: "/#about",
  aboutVideo: "/#about-video",
  services: "/#services",
  customProducts: "/#custom-products",
  industry: "/#industry",
  contact: "/contact",
} as const;

export function homeHash(section: string) {
  const id = section.replace(/^#\/?/, "").replace(/^\//, "");
  return `/#${id}`;
}

export function sectionIdFromHref(href: string) {
  const match = href.match(/#(.+)$/);
  return match?.[1] ?? href.replace(/^#\/?/, "");
}
