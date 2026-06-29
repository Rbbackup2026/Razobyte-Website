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
