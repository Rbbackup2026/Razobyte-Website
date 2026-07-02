import { servicesMegaMenu } from "./megaMenu";
import { aboutNavItems, aboutOverview } from "./aboutNav";
import { industryNavItems, industryOverview } from "./industryNav";
import { homeRoutes, siteRoutes } from "./routes";

export type SiteSearchItem = {
  id: string;
  label: string;
  href: string;
  category: string;
  keywords: string[];
};

function item(
  id: string,
  label: string,
  href: string,
  category: string,
  keywords: string[] = []
): SiteSearchItem {
  return {
    id,
    label,
    href,
    category,
    keywords: [label, category, ...keywords].map((k) => k.toLowerCase()),
  };
}

/** All searchable pages & sections on the Razobyte site */
export const siteSearchIndex: SiteSearchItem[] = [
  item("home", "Home", homeRoutes.home, "Main", ["homepage", "razobyte"]),
  item("contact", "Contact Us", siteRoutes.contact, "Main", [
    "reach us",
    "book session",
    "consultation",
    "phone",
  ]),
  item("about", aboutOverview.label, aboutOverview.href, "About", [
    "company",
    "story",
    "who we are",
  ]),
  ...aboutNavItems.map((nav) =>
    item(nav.label, nav.label, nav.href, "About", [nav.description])
  ),
  item("industry", industryOverview.label, industryOverview.href, "Industry", [
    "sectors",
    "verticals",
  ]),
  ...industryNavItems.map((nav) =>
    item(nav.label, nav.label, nav.href, "Industry", [nav.description])
  ),
  ...servicesMegaMenu.flatMap((card) =>
    card.categories.flatMap((cat) =>
      cat.items.map((link) =>
        item(
          `${card.id}-${link.href}`,
          link.label,
          link.href,
          cat.title,
          [
            cat.title,
            link.label,
            ...(link.label.toLowerCase().includes("seo")
              ? ["search engine optimization"]
              : []),
            ...(link.label.toLowerCase().includes("sem")
              ? ["search engine marketing", "ppc", "google ads"]
              : []),
            ...(link.label.toLowerCase().includes("social media")
              ? ["smm", "smo", "facebook", "instagram"]
              : []),
          ]
        )
      )
    )
  ),
  item("crm", "CRM Solutions", siteRoutes.crm, "Products", [
    "customer relationship",
    "sales",
    "leads",
  ]),
  item("erp", "ERP Solutions", siteRoutes.erp, "Products", [
    "enterprise resource",
    "business software",
  ]),
  item(
    "custom-products",
    "Custom Products",
    siteRoutes.customProducts,
    "Products",
    ["software", "saas", "platform"]
  ),
  item("services", "Our Services", homeRoutes.services, "Main", [
    "web",
    "mobile",
    "marketing",
    "development",
  ]),
  item("web-dev", "Web Development", homeRoutes.services, "Services", [
    "website",
    "php",
    "laravel",
    "react",
  ]),
  item("mobile-dev", "Mobile App Development", homeRoutes.services, "Services", [
    "android",
    "ios",
    "app",
  ]),
  item("digital-marketing", "Digital Marketing", homeRoutes.services, "Services", [
    "seo",
    "sem",
    "ads",
    "campaign",
  ]),
  item("ecommerce", "E-Commerce Solutions", homeRoutes.services, "Services", [
    "shopify",
    "woocommerce",
    "online store",
  ]),
  item("maintenance", "Maintenance & Support", siteRoutes.websiteMaintenance, "Services", [
    "support",
    "hosting",
    "updates",
  ]),
];

const POPULAR_HREFS: string[] = [
  siteRoutes.contact,
  siteRoutes.seoSearchEngineOptimization,
  siteRoutes.androidAppDevelopment,
  siteRoutes.about,
  siteRoutes.shopifyDevelopment,
  siteRoutes.crm,
  siteRoutes.caseStudies,
  homeRoutes.services,
];

function scoreItem(entry: SiteSearchItem, q: string): number {
  const label = entry.label.toLowerCase();
  const category = entry.category.toLowerCase();

  if (label === q) return 100;
  if (label.startsWith(q)) return 80;
  if (label.includes(q)) return 60;
  if (category.includes(q)) return 40;
  if (entry.keywords.some((k) => k.includes(q))) return 30;
  if (entry.keywords.some((k) => k.split(" ").some((w) => w.startsWith(q)))) return 20;
  return 0;
}

export function searchSite(query: string, limit = 8): SiteSearchItem[] {
  const q = query.trim().toLowerCase();

  if (!q) {
    const popular = POPULAR_HREFS.map((href) =>
      siteSearchIndex.find((e) => e.href === href)
    ).filter(Boolean) as SiteSearchItem[];

    return popular.slice(0, limit);
  }

  return siteSearchIndex
    .map((entry) => ({ entry, score: scoreItem(entry, q) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.label.localeCompare(b.entry.label))
    .slice(0, limit)
    .map(({ entry }) => entry);
}

export function getBestSearchMatch(query: string): SiteSearchItem | null {
  const results = searchSite(query, 1);
  return results[0] ?? null;
}
