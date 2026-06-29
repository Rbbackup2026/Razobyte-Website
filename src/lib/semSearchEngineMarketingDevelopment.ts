import {
  Megaphone,
  Target,
  MousePointerClick,
  TrendingUp,
  BarChart3,
  Zap,
  Eye,
  Users,
  ShoppingCart,
  Video,
  Smartphone,
  Compass,
  MapPin,
  Sparkles,
  RefreshCw,
  LineChart,
  Coins,
  Search,
  PenTool,
  Settings,
  Filter,
  Globe,
  Layers,
  Gauge,
  Award,
  RotateCcw,
  LayoutGrid,
  MonitorPlay,
  Store,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const SEM_CRIMSON = "#DC2626";
export const SEM_BLUE = "#2563EB";

export const semHero = {
  title: "Get Found Instantly: Grow Your Business with SEM",
  subtitle: "Drive targeted traffic, increase leads, and maximize ROI with expert PPC strategies.",
  description:
    "Razobyte delivers expert Search Engine Marketing and Pay-Per-Click services that put your brand in front of high-intent customers the moment they search — turning clicks into conversions and ad spend into measurable revenue.",
};

export const semHighlights = [
  "Google Ads & Bing Ads",
  "Search, Display & Shopping",
  "Retargeting & remarketing",
  "Real-time bid management",
  "Conversion tracking & analytics",
  "Dedicated PPC specialists",
] as const;

export function getSemStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: "395+", label: "Projects Done" },
    { value: "14M+", label: "Ad Spend Managed" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const semPpcIntro = {
  title: "What Is PPC?",
  description:
    "Pay-Per-Click (PPC) is a digital advertising model where advertisers pay a fee each time their ad is clicked. Instead of earning visits organically, you buy visits — placing your business at the top of Google, Bing, and partner networks when customers search for what you offer.",
  image: "/images/service-mobile.jpg",
};

export const semCustomersIntro = {
  title: "Straight to the Customers",
  description:
    "PPC puts your brand directly in front of users actively searching for your products or services. No waiting for organic rankings — you reach high-intent buyers at the exact moment they're ready to purchase, maximizing ROI from day one.",
  image: "/images/cta-team.jpg",
};

export const semHypeIntro = {
  title: "What's the Hype About?",
  description:
    "PPC delivers tangible, measurable results. With precise targeting options, real-time performance tracking, and complete budget flexibility, you control exactly who sees your ads, how much you spend, and what return you get — scaling up or down instantly.",
  image: "/images/solutions.jpg",
};

export const semGoogleAdTypes = [
  { title: "Search Ads", bestFor: "Promoting links related to user search queries on Google & Bing.", icon: Search, accent: SEM_BLUE },
  { title: "Display Ads", bestFor: "Reaching users on websites, apps, and partner networks they already visit.", icon: LayoutGrid, accent: SEM_CRIMSON },
  { title: "Shopping Ads", bestFor: "Showcasing products with images, prices, and store info in search results.", icon: ShoppingCart, accent: "#059669" },
  { title: "Video Ads", bestFor: "Engaging audiences on YouTube and video partner sites with compelling creatives.", icon: Video, accent: "#7C3AED" },
  { title: "App Ads", bestFor: "Driving app installs and in-app actions across Google Search, Play, and YouTube.", icon: Smartphone, accent: "#0891B2" },
  { title: "Discovery Ads", bestFor: "Reaching users across Gmail, YouTube, and Discover feed with visual stories.", icon: Compass, accent: "#EA580C" },
  { title: "Local Services", bestFor: "Connecting local businesses with nearby customers searching for services.", icon: MapPin, accent: "#CA8A04" },
  { title: "Performance Max", bestFor: "AI-powered campaigns across all Google channels from a single goal.", icon: Sparkles, accent: "#DB2777" },
  { title: "Smart Campaigns", bestFor: "Automated campaigns optimized by Google for small businesses and beginners.", icon: Zap, accent: "#4F46E5" },
] as const;

export const semAdTypeComparison = [
  { feature: "Search Intent Targeting", search: true, display: false, shopping: true, video: false },
  { feature: "Visual Product Showcase", search: false, display: true, shopping: true, video: true },
  { feature: "YouTube Placement", search: false, display: false, shopping: false, video: true },
  { feature: "Remarketing Audiences", search: true, display: true, shopping: true, video: true },
  { feature: "Local Business Focus", search: true, display: false, shopping: false, video: false },
  { feature: "E-commerce Product Feed", search: false, display: false, shopping: true, video: false },
  { feature: "App Install Goals", search: false, display: true, shopping: false, video: true },
  { feature: "AI Auto-Optimization", search: false, display: false, shopping: false, video: false },
  { feature: "Cross-Channel Reach", search: false, display: true, shopping: false, video: false },
  { feature: "Performance Max (All Channels)", search: false, display: false, shopping: false, video: false },
] as const;

export const semStrategyCards = [
  {
    title: "Retargeting & Remarketing",
    description:
      "Stay top-of-mind with users who previously visited your site. Remarketing campaigns re-engage warm audiences with tailored ads — recovering abandoned carts and nurturing leads through the funnel.",
    image: "/images/service-marketing.jpg",
    icon: RotateCcw,
  },
  {
    title: "Planned Approach with Analytics",
    description:
      "Data drives every decision. We use real-time tracking, conversion analytics, and weekly performance reviews to continuously refine bids, ad copy, and audience targeting for maximum efficiency.",
    image: "/images/portfolio-fintech.jpg",
    icon: BarChart3,
  },
  {
    title: "Who Is It For?",
    description:
      "PPC works for businesses of every size — from startups testing their first campaign to enterprises managing six-figure monthly ad budgets. If you need leads, sales, or brand awareness fast, SEM is for you.",
    image: "/images/team.jpg",
    icon: Users,
  },
  {
    title: "Which Ad to Choose?",
    description:
      "Not sure between Search, Display, or Shopping? Our strategists analyze your goals, audience, and budget to recommend the right mix — ensuring every rupee spent drives measurable business outcomes.",
    image: "/images/service-ecommerce.jpg",
    icon: Target,
  },
] as const;

export const semServices = [
  { title: "Google Ads Management", description: "Full account setup, campaign structure, and ongoing optimization.", icon: Megaphone },
  { title: "Bing Ads Campaigns", description: "Tap into Microsoft's search network for additional high-intent traffic.", icon: Search },
  { title: "Keyword Research & Bidding", description: "Data-driven keyword selection with smart bid strategies.", icon: Filter },
  { title: "Ad Copywriting", description: "Compelling headlines and descriptions that maximize click-through rates.", icon: PenTool },
  { title: "Landing Page Alignment", description: "Message-matched landing pages that convert clicks into customers.", icon: MousePointerClick },
  { title: "Conversion Tracking", description: "GA4, GTM, and pixel setup for accurate ROI measurement.", icon: Gauge },
  { title: "Shopping Feed Optimization", description: "Product feed management for Google Shopping and Merchant Center.", icon: ShoppingCart },
  { title: "Remarketing Campaigns", description: "Re-engage past visitors with dynamic, personalized ad creatives.", icon: RotateCcw },
  { title: "A/B Testing", description: "Split-test ad variations to find the highest-performing combinations.", icon: Layers },
  { title: "Quality Score Optimization", description: "Improve ad relevance, CTR, and landing page experience scores.", icon: Award },
  { title: "Budget & Bid Management", description: "Daily budget pacing and automated bid adjustments for efficiency.", icon: Coins },
  { title: "Monthly PPC Reporting", description: "Transparent dashboards with spend, conversions, CPA, and ROAS.", icon: LineChart },
] as const;

export const semPackages = [
  { id: "starter", name: "Starter", price: "$500", tagline: "Small businesses & local shops", adSpend: "Up to $2K/mo", popular: false, accent: "#64748B" },
  { id: "growth", name: "Growth", price: "$900", tagline: "Growing brands & e-commerce", adSpend: "Up to $5K/mo", popular: true, accent: SEM_BLUE },
  { id: "scale", name: "Scale", price: "$1,500", tagline: "Multi-channel campaigns", adSpend: "Up to $15K/mo", popular: false, accent: SEM_CRIMSON },
  { id: "enterprise", name: "Enterprise", price: "Custom", tagline: "Large-scale ad operations", adSpend: "$15K+/mo", popular: false, accent: "#7C3AED" },
] as const;

export const semPackageComparison = [
  { feature: "Monthly Management Fee", starter: "$500", growth: "$900", scale: "$1,500", enterprise: "Custom" },
  { feature: "Ad Spend Managed", starter: "Up to $2K", growth: "Up to $5K", scale: "Up to $15K", enterprise: "$15K+" },
  { feature: "Search Campaigns", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Display Campaigns", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Shopping Ads", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Video / YouTube Ads", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Performance Max", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Remarketing", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Landing Page Review", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "Conversion Tracking Setup", starter: true, growth: true, scale: true, enterprise: true },
  { feature: "A/B Ad Copy Testing", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Dedicated PPC Manager", starter: false, growth: true, scale: true, enterprise: true },
  { feature: "Weekly Performance Calls", starter: false, growth: false, scale: true, enterprise: true },
  { feature: "Custom Reporting Dashboard", starter: false, growth: false, scale: true, enterprise: true },
] as const;

export const semTechStack = [
  { name: "Google Ads", icon: "/images/tech/google-workspace.svg", category: "PPC" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Tag Manager", icon: "/images/tech/google-workspace.svg", category: "Tracking" },
  { name: "Microsoft Ads", icon: "/images/tech/google-workspace.svg", category: "PPC" },
  { name: "SEMrush", icon: "/images/tech/google-workspace.svg", category: "Research" },
  { name: "Hotjar", icon: "/images/tech/react.svg", category: "UX" },
  { name: "Looker Studio", icon: "/images/tech/google-workspace.svg", category: "Reporting" },
  { name: "Meta Ads", icon: "/images/tech/google-workspace.svg", category: "Social" },
  { name: "Merchant Center", icon: "/images/tech/google-workspace.svg", category: "Shopping" },
  { name: "Unbounce", icon: "/images/tech/nextjs.svg", category: "Landing" },
  { name: "Optmyzr", icon: "/images/tech/google-workspace.svg", category: "Automation" },
  { name: "CallRail", icon: "/images/tech/google-workspace.svg", category: "Call Tracking" },
] as const;

export const semProcess = [
  { step: "Account Audit", description: "Review existing campaigns, tracking, and conversion setup." },
  { step: "Strategy & Keywords", description: "Define goals, audiences, and high-intent keyword targets." },
  { step: "Campaign Build", description: "Structure ad groups, write copy, and set bid strategies." },
  { step: "Launch & Monitor", description: "Go live with real-time tracking and daily performance checks." },
  { step: "Optimize & Scale", description: "Refine bids, pause underperformers, and scale winners." },
  { step: "Report & Grow", description: "Monthly reports with actionable insights and ROI analysis." },
] as const;

export const semTrustBadges = [
  { label: "Google Partner", sub: "Certified", icon: "🔍" },
  { label: "Meta Business Partner", sub: "Verified", icon: "📱" },
  { label: "Google Reviews", sub: "4.8 ★ Rating", icon: "⭐" },
  { label: "Clutch", sub: "Top Developers 2022", icon: "🏆" },
] as const;

export const semTestimonials = [
  {
    name: "Ashit Garg",
    role: "Manager",
    quote: "Razobyte has a remarkable grasp of our brand and industry. Their SEM campaigns delivered a significant boost in lead generation — professional, data-driven, and always transparent with results.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Kushal Garg",
    role: "Owner",
    quote: "Fast response and always ready to support. Our PPC campaigns went from burning budget to generating consistent ROI within the first quarter. Highly recommend Razobyte for SEM.",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
  },
] as const;

export const semProjects = [
  { id: "1", title: "E-Commerce Shopping Campaign", description: "4.2x ROAS on Google Shopping for a fashion retailer in 90 days.", image: "/images/portfolio-ecommerce.jpg", tag: "Shopping" },
  { id: "2", title: "Lead Gen Search Campaign", description: "67% lower CPA with optimized search ads for a B2B SaaS company.", image: "/images/portfolio-fintech.jpg", tag: "Search" },
  { id: "3", title: "Multi-Channel Display & Video", description: "3M impressions and 12K conversions across Display and YouTube.", image: "/images/service-marketing.jpg", tag: "Display" },
] as const;

export const semRelated = [
  { label: "SEO Services", description: "Organic rankings that complement your paid search strategy.", href: siteRoutes.seoSearchEngineOptimization, icon: "/images/tech/google-workspace.svg" },
  { label: "Website Design", description: "Landing pages built to convert PPC traffic into leads.", href: siteRoutes.websiteDesign, icon: "/images/tech/react.svg" },
  { label: "E-Commerce Development", description: "Product stores optimized for Shopping ad campaigns.", href: siteRoutes.ecommerceWebsiteDevelopment, icon: "/images/tech/laravel.svg" },
  { label: "Pricing Plans", description: "Compare all digital marketing packages and add-ons.", href: siteRoutes.pricing, icon: "/images/tech/google-workspace.svg" },
] as const;

export const semBlogs = [
  { title: "Google Ads vs SEO: When to Use Each", excerpt: "Understand the synergy between paid and organic search strategies.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "PPC Keyword Research Guide", excerpt: "Find high-intent keywords that maximize ROAS and minimize waste.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "Remarketing Strategies That Convert", excerpt: "Re-engage warm audiences and recover abandoned carts with smart retargeting.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const semFaqs: ProductFaq[] = [
  { question: "What is Search Engine Marketing (SEM)?", answer: "SEM is a digital marketing strategy that uses paid advertising to increase visibility on search engine results pages. It includes PPC campaigns on Google Ads, Bing Ads, and other platforms to drive targeted traffic and conversions." },
  { question: "How does SEM differ from SEO?", answer: "SEO focuses on earning organic rankings through content and technical optimization — results take months. SEM uses paid ads for immediate visibility at the top of search results. Both work best together as a complete search strategy." },
  { question: "Why is SEM important for businesses?", answer: "SEM delivers instant visibility to high-intent customers actively searching for your products or services. It offers precise targeting, measurable ROI, and complete budget control — ideal for businesses that need leads and sales fast." },
  { question: "What are the key components of SEM?", answer: "Keyword research, ad copywriting, bid management, landing page optimization, conversion tracking, remarketing, quality score optimization, and performance reporting are the core pillars of effective SEM." },
  { question: "What is Pay-Per-Click (PPC) advertising in SEM?", answer: "PPC is the billing model where you pay only when someone clicks your ad. It's the most common SEM format — used in Google Search Ads, Display Ads, Shopping Ads, and more." },
  { question: "How do SEM ads help businesses?", answer: "SEM ads place your business at the top of search results for relevant queries, driving qualified traffic, generating leads, increasing sales, and building brand awareness — all with trackable, measurable results." },
  { question: "What are some popular SEM tools?", answer: "Google Ads, Microsoft Advertising, Google Analytics, Google Tag Manager, SEMrush, Optmyzr, Looker Studio, and Hotjar are industry-standard tools we use to manage and optimize campaigns." },
  { question: "What is a keyword in SEM?", answer: "A keyword is a search term you bid on so your ad appears when users search for it. Choosing the right keywords — balancing search volume, intent, and competition — is critical to campaign success." },
  { question: "How do I choose keywords for SEM campaigns?", answer: "We analyze search volume, competition, cost-per-click, and buyer intent. High-intent commercial keywords drive conversions, while broader terms build awareness. Negative keywords prevent wasted spend." },
  { question: "What are SEM ad copies?", answer: "Ad copies are the headlines, descriptions, and extensions users see in your ads. Compelling, relevant ad copy with strong CTAs significantly improves click-through rates and quality scores." },
];
