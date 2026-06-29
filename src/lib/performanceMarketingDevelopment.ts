import {
  Megaphone,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Eye,
  Coins,
  LineChart,
  Award,
  RefreshCw,
  Layers,
  MousePointerClick,
  Sparkles,
  Search,
  Filter,
  Gauge,
  Split,
  Globe,
  Share2,
  UserCheck,
  PieChart,
  Workflow,
  Settings,
  MonitorPlay,
  ShoppingCart,
  Link2,
  Rocket,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const PERF_EMERALD = "#059669";
export const PERF_GOLD = "#D97706";

export const perfHero = {
  title: "More Clicks to Conversions — Your Growth Story Starts Here",
  subtitle: "Design. Engage. Perform. Repeat.",
  description:
    "Razobyte is a global Performance Marketing company delivering ROI-driven strategies — paid search, display, social ads, CRO, affiliate marketing, and real-time analytics that turn ad spend into measurable business growth.",
};

export const perfHighlights = [
  "ROI-driven ad campaigns",
  "Real-time optimization",
  "Multi-channel performance",
  "Conversion rate optimization",
  "Affiliate & influencer marketing",
  "Transparent analytics & reporting",
] as const;

export function getPerfStats() {
  return [
    { value: "98%", label: "Client Retention" },
    { value: "395+", label: "Successful Projects" },
    { value: "14M+", label: "Ad Spend Managed" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const perfIntro =
  "Performance marketing is a data-driven approach focused on measurable results and business growth. Unlike traditional marketing, you only pay for outcomes — clicks, leads, conversions, and sales — making every rupee accountable and every campaign optimized for maximum ROI.";

export const perfWhyImportant = [
  { title: "Clear, Measurable Goals", description: "Track leads, conversions, and sales with precision — no guesswork, only data-backed outcomes.", icon: Target },
  { title: "Real-Time Campaign Optimization", description: "Adjust bids, creatives, and targeting on the fly based on live performance data.", icon: RefreshCw },
  { title: "Effective Budget Allocation", description: "Invest where results happen — shift spend from underperformers to winning channels instantly.", icon: Coins },
  { title: "Deep Customer Insights", description: "Understand audience behavior, preferences, and conversion paths to refine your entire funnel.", icon: Eye },
] as const;

export const perfOfferings = [
  {
    title: "Paid Search Advertising (PPC)",
    description: "Google & Bing Ads management with keyword research, ad copy creation, bid optimization, and quality score improvement.",
    icon: Search,
    items: ["Google & Bing Ads", "Keyword research", "Ad copy creation", "Bid management"],
  },
  {
    title: "Display Advertising",
    description: "Banner and video ads across premium networks with programmatic buying and dynamic remarketing.",
    icon: MonitorPlay,
    items: ["Banner & video ads", "Programmatic buying", "Dynamic remarketing", "Audience targeting"],
  },
  {
    title: "Social Media Advertising",
    description: "Targeted campaigns on Facebook, Instagram, LinkedIn, and X with A/B testing and retargeting.",
    icon: Share2,
    items: ["FB, IG, LinkedIn, X", "A/B testing", "Retargeting", "Lookalike audiences"],
  },
  {
    title: "Conversion Rate Optimization",
    description: "Analyze user behavior, A/B test design and content, and improve landing page conversion rates.",
    icon: MousePointerClick,
    items: ["User behavior analysis", "A/B testing", "Landing page optimization", "Funnel improvement"],
  },
  {
    title: "Affiliate Marketing",
    description: "Build affiliate networks, manage influencer partnerships, and track performance-based commissions.",
    icon: Link2,
    items: ["Affiliate networks", "Influencer partnerships", "Commission tracking", "Partner recruitment"],
  },
  {
    title: "Analytics & Reporting",
    description: "Real-time tracking, detailed ROI reports, and data-driven insights for continuous improvement.",
    icon: BarChart3,
    items: ["Real-time tracking", "ROI reporting", "Attribution modeling", "Custom dashboards"],
  },
] as const;

export const perfCaseStudy = {
  title: "Driving Growth Through Data-Driven Campaigns",
  client: "E-commerce retailer seeking measurable ROI from digital ad spend.",
  challenge: "Low conversion rates, high customer acquisition costs, and inefficient budget allocation across channels.",
  approach: "Full marketing audit, data-driven multi-channel strategy, rigorous A/B testing of creatives and audiences, and real-time bid adjustments based on performance metrics.",
  results: ["150% increase in sales", "40% reduction in CPA", "25% increase in overall ROI"],
};

export const perfWhoChooses =
  "We focus on results, not guesswork. Razobyte's performance marketing team combines deep analytics expertise with creative campaign execution — delivering transparent ROI that scales your business globally.";

export const perfServices = [
  { title: "Google Ads Management", description: "Search, Display, Shopping, and Performance Max campaigns optimized for conversions.", icon: Search },
  { title: "Meta Ads (FB & IG)", description: "Lead gen, e-commerce, and awareness campaigns across Meta's ad network.", icon: Share2 },
  { title: "LinkedIn Advertising", description: "B2B lead generation and thought leadership sponsored content.", icon: Users },
  { title: "Programmatic Display", description: "Automated ad buying across premium publisher networks worldwide.", icon: MonitorPlay },
  { title: "Retargeting & Remarketing", description: "Re-engage website visitors and cart abandoners with dynamic ads.", icon: RefreshCw },
  { title: "Landing Page Optimization", description: "High-converting pages aligned with ad messaging and user intent.", icon: MousePointerClick },
  { title: "A/B & Multivariate Testing", description: "Split-test ads, landing pages, and audiences for maximum performance.", icon: Split },
  { title: "Attribution Modeling", description: "Multi-touch attribution to understand the true impact of each channel.", icon: PieChart },
  { title: "Affiliate Program Management", description: "Recruit, manage, and optimize affiliate and influencer partnerships.", icon: Link2 },
  { title: "E-commerce Performance Ads", description: "Product feed optimization and shopping campaigns for online stores.", icon: ShoppingCart },
  { title: "Budget & Bid Strategy", description: "Smart bidding, budget pacing, and ROAS-targeted campaign management.", icon: Coins },
  { title: "Performance Dashboards", description: "Real-time KPI tracking with custom Looker Studio and GA4 dashboards.", icon: LineChart },
] as const;

export const perfChannelComparison = [
  { feature: "Search Intent Targeting", ppc: true, display: false, social: true, affiliate: false },
  { feature: "Visual Ad Creatives", ppc: false, display: true, social: true, affiliate: true },
  { feature: "Retargeting Audiences", ppc: true, display: true, social: true, affiliate: false },
  { feature: "Pay-Per-Click Model", ppc: true, display: true, social: true, affiliate: false },
  { feature: "Pay-Per-Conversion", ppc: false, display: false, social: false, affiliate: true },
  { feature: "Real-Time Bid Management", ppc: true, display: true, social: true, affiliate: false },
  { feature: "A/B Creative Testing", ppc: true, display: true, social: true, affiliate: true },
  { feature: "E-commerce Product Ads", ppc: true, display: true, social: true, affiliate: true },
  { feature: "B2B Lead Generation", ppc: true, display: false, social: true, affiliate: false },
  { feature: "Global Reach", ppc: true, display: true, social: true, affiliate: true },
] as const;

export const perfPackages = [
  { id: "starter", name: "Starter", price: "$600", tagline: "Single-channel campaigns", spend: "Up to $3K/mo", popular: false, accent: "#64748B" },
  { id: "growth", name: "Growth", price: "$1,200", tagline: "Multi-channel performance", spend: "Up to $10K/mo", popular: true, accent: PERF_EMERALD },
  { id: "scale", name: "Scale", price: "$2,500", tagline: "Full-funnel optimization", spend: "Up to $50K/mo", popular: false, accent: PERF_GOLD },
  { id: "enterprise", name: "Enterprise", price: "Custom", tagline: "Global ad operations", spend: "$50K+/mo", popular: false, accent: "#7C3AED" },
] as const;

export const perfPackageComparison = [
  { feature: "Monthly Management Fee", starter: "$600", growth: "$1,200", scale: "$2,500", enterprise: "Custom" },
  { feature: "Ad Spend Managed", starter: "Up to $3K", growth: "Up to $10K", scale: "Up to $50K", enterprise: "$50K+" },
  { feature: "Google Ads (PPC)", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Meta Ads (FB/IG)", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Display & Programmatic", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "LinkedIn Ads", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "CRO & Landing Pages", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Affiliate Marketing", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "A/B Testing", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Retargeting Campaigns", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Attribution Modeling", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Real-Time Dashboard", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Dedicated Performance Manager", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Weekly Strategy Calls", starter: false, growth: false, scale: true, enterprise: true },
] as const;

export const perfTechStack = [
  { name: "Google Ads", icon: "/images/tech/google-workspace.svg", category: "PPC" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Meta Ads Manager", icon: "/images/tech/google-workspace.svg", category: "Social" },
  { name: "SEMrush", icon: "/images/tech/google-workspace.svg", category: "Research" },
  { name: "Hotjar", icon: "/images/tech/react.svg", category: "CRO" },
  { name: "Looker Studio", icon: "/images/tech/google-workspace.svg", category: "Reporting" },
  { name: "Optmyzr", icon: "/images/tech/google-workspace.svg", category: "Automation" },
  { name: "Unbounce", icon: "/images/tech/nextjs.svg", category: "Landing" },
  { name: "HubSpot", icon: "/images/tech/google-workspace.svg", category: "CRM" },
  { name: "LinkedIn Campaign", icon: "/images/tech/google-workspace.svg", category: "B2B" },
  { name: "VWO", icon: "/images/tech/react.svg", category: "A/B Testing" },
  { name: "Salesforce", icon: "/images/erp/salesforce.svg", category: "CRM" },
] as const;

export const perfProcess = [
  { step: "Audit & Discovery", description: "Analyze current campaigns, tracking, and conversion funnel." },
  { step: "Strategy & Planning", description: "Define KPIs, channels, budgets, and audience targeting." },
  { step: "Campaign Build", description: "Create ads, landing pages, and tracking infrastructure." },
  { step: "Launch & Monitor", description: "Go live with real-time performance monitoring." },
  { step: "Optimize & Scale", description: "A/B test, refine bids, and scale winning campaigns." },
  { step: "Report & Grow", description: "Transparent ROI reports with scaling recommendations." },
] as const;

export const perfTrustBadges = [
  { label: "Google Partner", sub: "Certified", icon: "🔍" },
  { label: "Meta Business Partner", sub: "Verified", icon: "📱" },
  { label: "Google Ads Search", sub: "Specialist", icon: "🎯" },
  { label: "Google Analytics", sub: "Certified", icon: "📊" },
] as const;

export const perfTestimonials = [
  {
    name: "Ashi Garg",
    role: "Business Owner",
    quote: "Razobyte transformed our ad performance with data-driven strategies. Sales increased dramatically while our cost per acquisition dropped — truly ROI-focused marketing.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Karan King",
    role: "Marketing Director",
    quote: "Outstanding performance marketing results. Their transparent reporting and real-time optimization gave us confidence in every rupee spent on digital ads.",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
  },
] as const;

export const perfProjects = [
  { id: "1", title: "E-Commerce Sales Growth", description: "150% sales increase with 40% CPA reduction across Google and Meta ads.", image: "/images/portfolio-ecommerce.jpg", tag: "E-Commerce" },
  { id: "2", title: "B2B Lead Generation", description: "5x qualified leads through LinkedIn and Google Search campaigns.", image: "/images/portfolio-fintech.jpg", tag: "B2B" },
  { id: "3", title: "Global Brand Awareness", description: "3M impressions and 12K conversions across display and social channels.", image: "/images/service-marketing.jpg", tag: "Global" },
] as const;

export const perfRelated = [
  { label: "SEM & PPC", description: "Paid search campaigns as part of your performance strategy.", href: siteRoutes.semSearchEngineMarketing, icon: "/images/tech/google-workspace.svg" },
  { label: "SMM Services", description: "Social media ads that drive measurable engagement and conversions.", href: siteRoutes.smmSocialMediaMarketing, icon: "/images/tech/react.svg" },
  { label: "SEO Services", description: "Organic growth that complements your paid performance channels.", href: siteRoutes.seoSearchEngineOptimization, icon: "/images/tech/google-workspace.svg" },
  { label: "Pricing Plans", description: "Compare all digital marketing packages and add-ons.", href: siteRoutes.pricing, icon: "/images/tech/google-workspace.svg" },
] as const;

export const perfBlogs = [
  { title: "Performance Marketing vs Brand Marketing", excerpt: "When to prioritize ROI-driven campaigns over awareness building.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "ROAS Optimization Guide", excerpt: "Strategies to maximize return on ad spend across channels.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "Multi-Channel Attribution Explained", excerpt: "Understand which channels truly drive conversions.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const perfFaqs: ProductFaq[] = [
  { question: "What is performance marketing?", answer: "Performance marketing is a data-driven digital marketing approach where advertisers pay only for measurable results — clicks, leads, conversions, or sales — ensuring every campaign is optimized for ROI." },
  { question: "How do performance marketing agencies work?", answer: "Agencies audit your current marketing, define KPIs, build multi-channel campaigns, continuously optimize based on real-time data, and provide transparent reporting on ROI and growth metrics." },
  { question: "What channels are used in performance marketing?", answer: "Google Ads, Meta (Facebook/Instagram), LinkedIn, display networks, affiliate programs, programmatic advertising, and retargeting — selected based on your audience and business goals." },
  { question: "How is performance marketing different from traditional marketing?", answer: "Traditional marketing focuses on brand awareness with hard-to-measure results. Performance marketing ties every dollar to measurable outcomes with real-time tracking and optimization." },
  { question: "What is ROAS in performance marketing?", answer: "ROAS (Return on Ad Spend) measures revenue generated per rupee spent on advertising. A ROAS of 4:1 means ₹4 revenue for every ₹1 in ad spend." },
  { question: "What is conversion rate optimization (CRO)?", answer: "CRO improves the percentage of website visitors who complete desired actions — purchases, sign-ups, or downloads — through A/B testing, UX improvements, and funnel analysis." },
  { question: "How do you measure performance marketing success?", answer: "We track CPA, ROAS, conversion rate, CTR, impression share, customer lifetime value, and attribution across channels — with real-time dashboards and monthly reports." },
  { question: "What budget do I need for performance marketing?", answer: "Budgets vary by industry and goals. Most businesses start with ₹50K–2L/month in ad spend plus management fees. We scale based on proven ROI." },
  { question: "Can performance marketing work for small businesses?", answer: "Absolutely. Performance marketing is ideal for small businesses because you only pay for results — making it cost-effective and scalable from day one." },
  { question: "How quickly can I see results from performance marketing?", answer: "Most campaigns show initial data within 1–2 weeks. Meaningful optimization and ROI improvements typically emerge within 4–8 weeks of continuous testing and refinement." },
];
