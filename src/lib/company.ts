/** Official Razobyte logo (Cloudinary CDN) */
export const COMPANY_LOGO_URL =
  "https://res.cloudinary.com/ddcx08e0s/image/upload/v1782451137/COMPANY_LOGO_-razobyte-01_mzpe9n.png";

/** Razobyte was founded in 2015 — used for dynamic experience counters site-wide */
export const COMPANY_FOUNDED_YEAR = 2015;

/** Company-wide metrics shown across the site */
export const COMPANY_PROJECTS_PLUS = "750+";
export const COMPANY_COUNTRIES_PLUS = "20+";

/** Full years since founding (e.g. 2025 → 10, 2026 → 11) */
export function getYearsOfExperience(referenceDate: Date = new Date()): number {
  return Math.max(0, referenceDate.getFullYear() - COMPANY_FOUNDED_YEAR);
}

/** Display label e.g. "10+" — updates automatically each calendar year */
export function formatYearsPlus(referenceDate: Date = new Date()): string {
  return `${getYearsOfExperience(referenceDate)}+`;
}
