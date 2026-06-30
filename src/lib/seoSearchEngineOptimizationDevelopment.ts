import {
  Search,
  Target,
  TrendingUp,
  Coins,
  Clock,
  Shield,
  FileText,
  Link2,
  Settings,
  BarChart3,
  Globe,
  Zap,
  LineChart,
  Eye,
  Users,
  Megaphone,
  PenTool,
  MapPin,
  ShoppingCart,
  CheckCircle2,
  Lightbulb,
  Gauge,
  RefreshCw,
  Layers,
  MousePointerClick,
  Award,
  BookOpen,
  Filter,
  Hash,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";
import { seoPricingRows } from "./pricing";

export const SEO_EMERALD = "#059669";
export const SEO_AMBER = "#D97706";

export const seoHero = {
  title: "Visibility Is Key in the Digital Age",
  subtitle: "Boost your online visibility with SEO excellence.",
  description:
    "A strong online presence ensures your business reaches millions — without it, your brand fades away. Razobyte delivers proven SEO services that drive organic traffic, authority, and measurable business growth.",
};

export const seoHighlights = [
  "On-page & off-page SEO",
  "Technical site audits",
  "Quality backlink building",
  "Keyword research",
  "Analytics-driven strategy",
  "Monthly performance reports",
] as const;

export function getSeoStats() {
  return [
    { value: "98%", label: "Client Retention" },
    { value: COMPANY_PROJECTS_PLUS, label: "Completed Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const seoIntro =
  "With over 3.5 billion Google searches every day, maintaining a strong digital presence is no longer optional — it's essential. Razobyte's Search Engine Optimization services combine content strategy, quality backlinks, and data-driven tactics to help your brand rank higher and convert more visitors into customers.";

export const seoBenefits = [
  { title: "Increased Brand Visibility", description: "Appear where your customers search — on page one of Google, Bing, and beyond.", icon: Target },
  { title: "Improved Search Rankings", description: "Climb SERPs with optimized content, meta tags, and authoritative backlinks.", icon: Search },
  { title: "Higher ROI & Awareness", description: "Organic traffic compounds over time — delivering leads without rising ad spend.", icon: Coins },
  { title: "Long-Term Results", description: "SEO builds sustainable growth that outlasts any single paid campaign.", icon: Clock },
  { title: "Secured Market Position", description: "Dominate your niche keywords and defend rankings against competitors.", icon: Shield },
] as const;

export const seoPillars = [
  {
    title: "On-Page SEO",
    description:
      "Strategically targeted content with authentic writing, optimized meta descriptions, H1 titles, and meta titles — every page engineered to rank and convert.",
    image: "/images/service-design.jpg",
    icon: FileText,
    accent: SEO_EMERALD,
  },
  {
    title: "Off-Page SEO",
    description:
      "High-quality backlinks, directory and forum activities, and human-centric outreach that builds domain authority and trust signals search engines reward.",
    image: "/images/service-marketing.jpg",
    icon: Link2,
    accent: SEO_AMBER,
  },
  {
    title: "Technical SEO",
    description:
      "Site auditing, indexing, crawling optimization, speed improvements, mobile-friendliness, and error troubleshooting — the foundation every ranking depends on.",
    image: "/images/service-web.jpg",
    icon: Settings,
    accent: "#3B82F6",
  },
  {
    title: "Strategic Analytics Pathway",
    description:
      "Analytics as your compass — actionable insights that drive campaign optimization, keyword refinement, and continuous performance improvement.",
    image: "/images/solutions.jpg",
    icon: BarChart3,
    accent: "#8B5CF6",
  },
] as const;

export const seoOptimizationProcess = [
  { title: "Real-Time Tracking & Analysis", description: "Live dashboards monitoring rankings, traffic, and conversions 24/7.", icon: Gauge },
  { title: "Site & SEO Auditing", description: "Comprehensive audits uncovering crawl errors, broken links, and content gaps.", icon: Search },
  { title: "Weekly Performance Analysis", description: "Weekly reports with keyword movement, competitor shifts, and action items.", icon: LineChart },
  { title: "Continuous Optimization", description: "Iterative improvements to content, links, and technical health every month.", icon: RefreshCw },
] as const;

export const seoTrustBadges = [
  { label: "Google Partner", sub: "Certified", icon: "🔍" },
  { label: "Meta Business Partner", sub: "Verified", icon: "📱" },
  { label: "Google Reviews", sub: "4.9 ★ Rating", icon: "⭐" },
  { label: "Clutch", sub: "Top Rated", icon: "🏆" },
] as const;

export const seoServices = [
  { title: "Keyword Research & Strategy", description: "Data-driven keyword mapping aligned with search intent and business goals.", icon: Hash },
  { title: "On-Page Optimization", description: "Meta tags, headings, internal linking, and content structure refinement.", icon: FileText },
  { title: "Off-Page Link Building", description: "Ethical outreach, guest posts, and authority backlinks from trusted domains.", icon: Link2 },
  { title: "Technical SEO Audits", description: "Crawlability, schema markup, Core Web Vitals, and indexation fixes.", icon: Settings },
  { title: "Local SEO", description: "Google Business Profile optimization and multi-location ranking strategies.", icon: MapPin },
  { title: "E-commerce SEO", description: "Product page optimization, category structure, and rich snippet markup.", icon: ShoppingCart },
  { title: "Content Marketing", description: "SEO-optimized blogs, landing pages, and pillar content that ranks.", icon: PenTool },
  { title: "Competitor Analysis", description: "Benchmark against rivals — uncover gaps and opportunities in your niche.", icon: Eye },
  { title: "Conversion Rate Optimization", description: "Turn organic traffic into leads with UX and CTA improvements.", icon: MousePointerClick },
  { title: "Analytics & Reporting", description: "GA4 setup, Search Console monitoring, and transparent monthly reports.", icon: BarChart3 },
  { title: "International SEO", description: "Hreflang, geo-targeting, and multilingual content strategies.", icon: Globe },
  { title: "Penalty Recovery", description: "Diagnose and recover from Google algorithm penalties and manual actions.", icon: Shield },
] as const;

export const seoTypeComparison = [
  { feature: "Meta Tags & Headings", onPage: true, offPage: false, technical: true },
  { feature: "Content Optimization", onPage: true, offPage: false, technical: false },
  { feature: "Backlink Building", onPage: false, offPage: true, technical: false },
  { feature: "Guest Posting & Outreach", onPage: false, offPage: true, technical: false },
  { feature: "Site Speed Optimization", onPage: false, offPage: false, technical: true },
  { feature: "Schema Markup", onPage: true, offPage: false, technical: true },
  { feature: "Mobile-Friendliness", onPage: true, offPage: false, technical: true },
  { feature: "Crawl & Index Management", onPage: false, offPage: false, technical: true },
  { feature: "Social Signals", onPage: false, offPage: true, technical: false },
  { feature: "XML Sitemap & Robots.txt", onPage: false, offPage: false, technical: true },
] as const;

export const seoPackages = [
  {
    id: "silver",
    name: "Silver",
    price: "$350",
    tagline: "Local startups & SMEs",
    keywords: "Up to 25",
    popular: false,
    accent: "#64748B",
  },
  {
    id: "gold",
    name: "Gold",
    price: "$650",
    tagline: "Growing regional brands",
    keywords: "Up to 50",
    popular: true,
    accent: SEO_AMBER,
  },
  {
    id: "diamond",
    name: "Diamond",
    price: "$1,050",
    tagline: "National visibility",
    keywords: "Up to 100",
    popular: false,
    accent: "#3B82F6",
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "$1,550",
    tagline: "Enterprise & e-commerce",
    keywords: "100+ Unlimited",
    popular: false,
    accent: "#7C3AED",
  },
] as const;

export { seoPricingRows };

export const seoAddOns = [
  { title: "Blog Content Writing", description: "SEO-optimized articles tailored to your audience and target keywords.", icon: PenTool },
  { title: "Landing Page Optimization", description: "Conversion-focused pages built to turn organic traffic into leads.", icon: MousePointerClick },
  { title: "Multi-Location SEO", description: "Rank across multiple cities with localized SEO strategies.", icon: MapPin },
  { title: "E-commerce Product SEO", description: "Product-level optimization for better visibility and sales.", icon: ShoppingCart },
] as const;

export const seoTechStack = [
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Search Console", icon: "/images/tech/google-workspace.svg", category: "Monitoring" },
  { name: "Semrush", icon: "/images/tech/google-workspace.svg", category: "Research" },
  { name: "Ahrefs", icon: "/images/tech/google-workspace.svg", category: "Backlinks" },
  { name: "Screaming Frog", icon: "/images/tech/google-workspace.svg", category: "Auditing" },
  { name: "Moz", icon: "/images/tech/google-workspace.svg", category: "Authority" },
  { name: "Google Tag Manager", icon: "/images/tech/google-workspace.svg", category: "Tracking" },
  { name: "Looker Studio", icon: "/images/tech/google-workspace.svg", category: "Reporting" },
  { name: "Yoast SEO", icon: "/images/tech/php.svg", category: "WordPress" },
  { name: "Rank Math", icon: "/images/tech/php.svg", category: "WordPress" },
  { name: "Hotjar", icon: "/images/tech/react.svg", category: "UX" },
  { name: "PageSpeed Insights", icon: "/images/tech/google-workspace.svg", category: "Performance" },
] as const;

export const seoProcess = [
  { step: "Discovery & Audit", description: "Website audit, competitor analysis, and keyword research." },
  { step: "Strategy Blueprint", description: "Custom SEO roadmap aligned with your business goals." },
  { step: "On-Page Execution", description: "Meta, content, and technical fixes implemented." },
  { step: "Off-Page Campaign", description: "Link building, outreach, and authority development." },
  { step: "Monitor & Report", description: "Weekly tracking with transparent monthly reports." },
  { step: "Scale & Optimize", description: "Continuous refinement for sustained growth." },
] as const;

export const seoTestimonials = [
  {
    name: "Admi King",
    role: "Business Owner",
    quote: "Razobyte transformed our online visibility. Within months we saw a significant jump in organic traffic and qualified leads. Their SEO team is knowledgeable, responsive, and truly invested in our success.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Carter King",
    role: "Marketing Director",
    quote: "The results speak for themselves — higher rankings, more conversions, and a clear ROI. Razobyte's data-driven SEO approach gave us the competitive edge we needed in a crowded market.",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
] as const;

export const seoRelated = [
  { label: "Website Maintenance", description: "Keep your SEO-optimized site fast, secure, and up to date.", href: siteRoutes.websiteMaintenance, icon: "/images/tech/cpanel.svg" },
  { label: "Website Design", description: "Beautiful, conversion-ready designs built for search engines.", href: siteRoutes.websiteDesign, icon: "/images/tech/react.svg" },
  { label: "E-Commerce Development", description: "Product-focused stores optimized for organic discovery.", href: siteRoutes.ecommerceWebsiteDevelopment, icon: "/images/tech/laravel.svg" },
  { label: "Pricing Plans", description: "Compare Silver, Gold, Diamond & Platinum SEO packages.", href: siteRoutes.pricing, icon: "/images/tech/google-workspace.svg" },
] as const;

export const seoProjects = [
  { id: "1", title: "Healthcare Portal SEO", description: "300% organic traffic growth in 8 months for a multi-location clinic.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
  { id: "2", title: "E-Commerce Rankings", description: "Top-3 Google rankings for 40+ product keywords in a competitive niche.", image: "/images/portfolio-ecommerce.jpg", tag: "E-Commerce" },
  { id: "3", title: "Fintech Lead Generation", description: "5x increase in organic leads through technical SEO and content strategy.", image: "/images/portfolio-fintech.jpg", tag: "Finance" },
] as const;

export const seoBlogs = [
  { title: "On-Page vs Off-Page SEO Explained", excerpt: "Understand the two pillars of search optimization and when to prioritize each.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Keyword Research in 2026", excerpt: "Tools, tactics, and intent mapping for modern SEO campaigns.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "Technical SEO Checklist", excerpt: "Core Web Vitals, schema, crawlability — everything your site needs.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const seoFaqs: ProductFaq[] = [
  { question: "What are SEO services?", answer: "SEO services are professional strategies to improve your website's visibility on search engines like Google. They include keyword research, on-page optimization, technical fixes, content creation, and link building to drive organic traffic and leads." },
  { question: "Why do businesses need SEO services?", answer: "Over 93% of online experiences begin with a search engine. Without SEO, your business is invisible to customers actively looking for your products or services — leaving revenue on the table for competitors." },
  { question: "What are the main types of SEO services?", answer: "The three core types are On-Page SEO (content and meta optimization), Off-Page SEO (backlinks and authority building), and Technical SEO (site speed, crawlability, and indexation)." },
  { question: "How do SEO services improve a website's ranking?", answer: "SEO aligns your site with search engine ranking factors — relevant content, authoritative backlinks, fast load times, mobile usability, and proper technical structure — signaling to Google that your site deserves higher positions." },
  { question: "What is On-page and Off-page SEO?", answer: "On-page SEO optimizes elements within your website (titles, content, URLs, internal links). Off-page SEO builds authority outside your site through backlinks, brand mentions, and social signals." },
  { question: "How long does it take for SEO services to show results?", answer: "Most businesses see measurable improvements within 3–6 months. Competitive industries may take longer, but SEO delivers compounding returns that grow steadily over time." },
  { question: "What is keyword research in SEO services?", answer: "Keyword research identifies the search terms your target audience uses. It guides content creation, on-page optimization, and campaign strategy to capture high-intent traffic." },
  { question: "What are backlinks, and why are they important for SEO?", answer: "Backlinks are links from other websites to yours. They act as votes of confidence — the more high-quality backlinks you earn, the more authority search engines assign to your domain." },
  { question: "Are SEO services necessary for a small business website?", answer: "Absolutely. Local SEO helps small businesses appear in 'near me' searches and Google Maps — often the highest-converting traffic source for service-based businesses." },
  { question: "What are some common SEO mistakes businesses should avoid?", answer: "Keyword stuffing, buying low-quality backlinks, ignoring mobile optimization, neglecting technical audits, duplicate content, and expecting overnight results are the most costly mistakes we help clients avoid." },
];
