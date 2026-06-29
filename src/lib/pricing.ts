export type PlanTier = "silver" | "gold" | "diamond" | "platinum";

export type PlanId = PlanTier;

export type CellValue = string | boolean;

export type PricingRow = {
  feature: string;
  silver: CellValue;
  gold: CellValue;
  diamond: CellValue;
  platinum: CellValue;
  highlight?: boolean;
};

export const planMeta = {
  silver: {
    name: "Silver",
    color: "from-slate-400 to-slate-600",
    textColor: "text-slate-600",
    badge: "Starter",
  },
  gold: {
    name: "Gold",
    color: "from-amber-400 to-amber-600",
    textColor: "text-amber-600",
    badge: "Most Popular",
    popular: true,
  },
  diamond: {
    name: "Diamond",
    color: "from-sky-400 to-razo-blue",
    textColor: "text-razo-blue",
    badge: "Growth",
  },
  platinum: {
    name: "Platinum",
    color: "from-violet-500 to-purple-700",
    textColor: "text-purple-600",
    badge: "Enterprise",
  },
} as const;

export const pricingCategories = [
  { id: "seo", label: "SEO" },
  { id: "logo", label: "Logo Design" },
  { id: "web", label: "Website Development" },
  { id: "smm", label: "SMM (Paid)" },
  { id: "sem", label: "SEM" },
  { id: "google-ads", label: "Google Ads" },
  { id: "smo", label: "SMO Organic" },
] as const;

export type PricingCategoryId = (typeof pricingCategories)[number]["id"];

export const seoPricingRows: PricingRow[] = [
  {
    feature: "Monthly Price",
    silver: "$350",
    gold: "$650",
    diamond: "$1,050",
    platinum: "$1,550",
    highlight: true,
  },
  {
    feature: "Keywords",
    silver: "Up to 25",
    gold: "Up to 50",
    diamond: "Up to 100",
    platinum: "100+ Unlimited",
  },
  {
    feature: "Setup Cost",
    silver: "None",
    gold: "None",
    diamond: "None",
    platinum: "None",
  },
  {
    feature: "Yearly Discount",
    silver: "10% Off",
    gold: "10% Off",
    diamond: "10% Off",
    platinum: "15% Off",
  },
  {
    feature: "Custom Keyword Analysis",
    silver: false,
    gold: false,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Google Business Listing",
    silver: false,
    gold: true,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Website SEO Audit",
    silver: true,
    gold: true,
    diamond: true,
    platinum: true,
  },
  {
    feature: "On-Page SEO",
    silver: true,
    gold: true,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Off-Page SEO",
    silver: "Basic",
    gold: "Standard",
    diamond: "Advanced",
    platinum: "Premium",
  },
  {
    feature: "Technical SEO",
    silver: "Basic",
    gold: "Full",
    diamond: "Comprehensive",
    platinum: "Full + Advanced",
  },
  {
    feature: "Blog Content",
    silver: "—",
    gold: "1 Blog/mo",
    diamond: "4 Blogs/mo",
    platinum: "Unlimited",
  },
  {
    feature: "Backlink Building",
    silver: "Basic",
    gold: "Standard",
    diamond: "Advanced",
    platinum: "Premium",
  },
  {
    feature: "Competitor Monitoring",
    silver: false,
    gold: false,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Keyword Tracking",
    silver: false,
    gold: true,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Reporting Dashboard",
    silver: false,
    gold: false,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Dedicated SEO Support",
    silver: false,
    gold: true,
    diamond: true,
    platinum: true,
  },
  {
    feature: "Dedicated SEO Manager",
    silver: false,
    gold: false,
    diamond: true,
    platinum: true,
  },
  {
    feature: "24/7 Support & Strategy Calls",
    silver: true,
    gold: true,
    diamond: true,
    platinum: true,
  },
];

export const allPlansIncluded = [
  "In-depth Website SEO Audit",
  "On-Page SEO (meta tags, headings, content tweaks, etc.)",
  "Technical SEO (speed, crawlability, schema, etc.)",
  "Dedicated SEO Support Team",
  "Monthly Progress Reports",
  "High-Quality Backlink Building",
  "Keyword Strategy and Implementation",
] as const;

export const planRecommendations = [
  {
    tier: "Silver Plan",
    color: "text-amber-500",
    description:
      "Best for local startups and SMEs building their digital footprint.",
  },
  {
    tier: "Gold Plan",
    color: "text-yellow-500",
    description:
      "Perfect for growing brands looking to gain regional traction.",
  },
  {
    tier: "Diamond Plan",
    color: "text-sky-400",
    description:
      "Designed for businesses targeting national visibility and industry authority.",
  },
  {
    tier: "Platinum Plan",
    color: "text-purple-400",
    description:
      "Suited for large-scale operations, eCommerce, and global outreach efforts.",
  },
] as const;

export const addOnServices = [
  {
    title: "Blog Content Writing",
    description: "SEO-optimized articles tailored to your audience and keywords.",
    icon: "✍️",
  },
  {
    title: "Landing Page Optimization",
    description: "Conversion-focused pages built to turn traffic into leads.",
    icon: "📊",
  },
  {
    title: "Multi-location SEO",
    description: "Rank across multiple cities with localized SEO strategies.",
    icon: "📍",
  },
  {
    title: "E-commerce Product SEO",
    description: "Product-level optimization for better visibility and sales.",
    icon: "🛒",
  },
] as const;

export const pricingFaqs = [
  {
    question: "How does SEO help my business?",
    answer:
      "SEO improves your visibility on search engines, drives qualified organic traffic, builds brand credibility, and delivers long-term ROI compared to paid ads alone.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. As your business grows, you can scale your SEO efforts by upgrading your package anytime.",
  },
  {
    question: "How soon can I expect results from SEO?",
    answer:
      "Most clients see measurable improvements within 3–6 months. Competitive niches may take longer, but our structured approach ensures steady, sustainable growth.",
  },
  {
    question: "Will I get reports to track progress?",
    answer:
      "Yes. Diamond and Platinum plans include a reporting dashboard. All plans include monthly progress reports with keyword rankings, traffic insights, and action items.",
  },
] as const;

export const pricingStats = [
  { value: "98%", label: "Clients Satisfied" },
  { value: "395+", label: "Successful Projects" },
  { value: "14M+", label: "Total Lines of Code" },
  { value: "8+", label: "Years of Excellence" },
] as const;

export const otherCategoryHighlights: Record<
  Exclude<PricingCategoryId, "seo">,
  { title: string; description: string; features: string[] }
> = {
  logo: {
    title: "Logo Design Packages",
    description:
      "Professional brand identity packages — from concept sketches to final vector files.",
    features: [
      "Custom logo concepts",
      "Brand color palette",
      "Typography selection",
      "Social media kit",
      "Print-ready files",
    ],
  },
  web: {
    title: "Website Development",
    description:
      "Responsive websites built with modern stacks — Laravel, React, WordPress, and more.",
    features: [
      "UI/UX design",
      "Mobile-responsive build",
      "CMS integration",
      "SEO-ready structure",
      "Performance optimization",
    ],
  },
  smm: {
    title: "Social Media Marketing (Paid)",
    description:
      "Paid campaigns across Meta, Instagram, LinkedIn, and more to drive leads and sales.",
    features: [
      "Ad creative design",
      "Audience targeting",
      "Campaign management",
      "A/B testing",
      "ROI reporting",
    ],
  },
  sem: {
    title: "Search Engine Marketing",
    description:
      "Paid search strategies to capture high-intent customers on Google and Bing.",
    features: [
      "Keyword research",
      "Ad copywriting",
      "Bid management",
      "Landing page alignment",
      "Conversion tracking",
    ],
  },
  "google-ads": {
    title: "Google Ads Management",
    description:
      "Expert Google Ads setup and optimization for Search, Display, and Shopping campaigns.",
    features: [
      "Account setup",
      "Campaign structure",
      "Quality score optimization",
      "Remarketing",
      "Monthly performance reports",
    ],
  },
  smo: {
    title: "SMO Organic",
    description:
      "Organic social media growth — content calendars, community engagement, and brand building.",
    features: [
      "Content strategy",
      "Post design & scheduling",
      "Community management",
      "Hashtag research",
      "Growth analytics",
    ],
  },
};
