import {
  Mail,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Heart,
  MessageCircle,
  PenTool,
  Settings,
  Clock,
  LineChart,
  Award,
  RefreshCw,
  Layers,
  MousePointerClick,
  UserPlus,
  Sparkles,
  Search,
  Filter,
  Send,
  Inbox,
  Bell,
  Workflow,
  FileText,
  Split,
  Shield,
  ListChecks,
  Calendar,
  Coins,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const EMAIL_INDIGO = "#4F46E5";
export const EMAIL_SKY = "#0284C7";

export const emailHero = {
  title: "Turn Clicks into Customers! Email Marketing That Works 24/7",
  subtitle: "Reach the right audience with the right message at the right time.",
  description:
    "Razobyte delivers expert Email Marketing services that connect, engage, and grow your business — from personalized campaigns and automated workflows to newsletters and analytics that turn subscribers into loyal customers.",
};

export const emailHighlights = [
  "Personalized email campaigns",
  "Automated drip workflows",
  "Engaging newsletter design",
  "A/B testing & optimization",
  "Open & click rate analytics",
  "List segmentation & management",
] as const;

export function getEmailStats() {
  return [
    { value: "98%", label: "Client Satisfaction" },
    { value: "395+", label: "Successful Projects" },
    { value: "14M+", label: "Emails Sent" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const emailIntro =
  "Email marketing is one of the most effective ways to connect directly with your audience. Razobyte builds authentic email strategies that deliver real results — nurturing leads, driving conversions, and building lasting customer relationships through every inbox.";

export const emailWhyImportant = [
  { title: "Personalized Customer Relationships", description: "Tailored messages that speak directly to each subscriber's needs and interests.", icon: Heart },
  { title: "Higher Conversion Rates", description: "Targeted messaging that turns subscribers into buyers with precision segmentation.", icon: TrendingUp },
  { title: "Exclusive Offers & Updates", description: "Share promotions, product launches, and news directly with your most engaged audience.", icon: Bell },
  { title: "Drive Customer Loyalty", description: "Consistent, valuable content that keeps your brand top-of-mind and builds repeat business.", icon: Award },
] as const;

export const emailOfferings = [
  { title: "Personalized Campaigns", description: "Tailored content delivered at the right time — data-led designs that resonate with each segment.", icon: Target },
  { title: "Automated Workflows", description: "Welcome series, abandoned cart emails, re-engagement campaigns, and drip sequences on autopilot.", icon: Workflow },
  { title: "Engaging Newsletters", description: "Regular updates with expert design reflecting your brand identity and curated valuable content.", icon: FileText },
  { title: "A/B Testing", description: "Subject line, content, and layout variations tested to find the highest-performing combinations.", icon: Split },
  { title: "Analytics That Matter", description: "Track open rates, click rates, conversions, and deliverability with detailed monthly reporting.", icon: BarChart3 },
] as const;

export const emailCaseStudy = {
  title: "Boosting Customer Retention Through Targeted Campaigns",
  client: "E-commerce brand struggling with low customer retention.",
  challenge: "Declining engagement rates and a need to increase customer lifetime value.",
  approach: "Segmented email lists, personalized product recommendation campaigns with exclusive discounts, and automated re-engagement workflows for inactive subscribers.",
  results: ["25% increase in repeat purchases", "40% boost in open and click rates", "15% improvement in customer lifetime value"],
};

export const emailWhyChoose =
  "We don't just send emails — we tell stories that build meaningful connections. Razobyte's dedicated email marketing team listens to your needs, understands your audience, and crafts campaigns that convert subscribers into lifelong customers.";

export const emailServices = [
  { title: "Email Strategy & Planning", description: "Custom roadmap aligned with business goals, audience segments, and campaign calendar.", icon: Target },
  { title: "List Building & Segmentation", description: "Grow your subscriber base and segment by behavior, demographics, and purchase history.", icon: Filter },
  { title: "Template Design", description: "Mobile-responsive, brand-aligned email templates that drive clicks and conversions.", icon: PenTool },
  { title: "Copywriting & Subject Lines", description: "Compelling copy and subject lines optimized for maximum open rates.", icon: FileText },
  { title: "Drip Campaign Setup", description: "Multi-step automated sequences for onboarding, nurturing, and re-engagement.", icon: Workflow },
  { title: "Newsletter Management", description: "Regular newsletter creation, scheduling, and distribution to your subscriber base.", icon: Mail },
  { title: "A/B Split Testing", description: "Test subject lines, CTAs, send times, and layouts for continuous improvement.", icon: Split },
  { title: "Deliverability Optimization", description: "SPF, DKIM, DMARC setup and list hygiene to maximize inbox placement.", icon: Shield },
  { title: "E-commerce Email Automation", description: "Abandoned cart, post-purchase, and product recommendation emails.", icon: Coins },
  { title: "CRM Integration", description: "Sync email data with your CRM for unified customer profiles and lead scoring.", icon: Users },
  { title: "Performance Reporting", description: "Monthly dashboards with open rates, CTR, conversions, and ROI analysis.", icon: LineChart },
  { title: "Compliance & GDPR", description: "CAN-SPAM and GDPR-compliant practices with proper unsubscribe management.", icon: ListChecks },
] as const;

export const emailTypeComparison = [
  { feature: "Personalized Content", newsletter: true, drip: true, promotional: true, transactional: false },
  { feature: "Automated Triggers", newsletter: false, drip: true, promotional: false, transactional: true },
  { feature: "A/B Testing", newsletter: true, drip: true, promotional: true, transactional: false },
  { feature: "Product Recommendations", newsletter: true, drip: true, promotional: true, transactional: false },
  { feature: "Order Confirmations", newsletter: false, drip: false, promotional: false, transactional: true },
  { feature: "Welcome Series", newsletter: false, drip: true, promotional: false, transactional: false },
  { feature: "Discount & Offers", newsletter: true, drip: true, promotional: true, transactional: false },
  { feature: "Re-engagement Flows", newsletter: false, drip: true, promotional: true, transactional: false },
  { feature: "Analytics Tracking", newsletter: true, drip: true, promotional: true, transactional: true },
  { feature: "List Segmentation", newsletter: true, drip: true, promotional: true, transactional: false },
] as const;

export const emailPackages = [
  { id: "starter", name: "Starter", price: "$350", tagline: "Small lists & basic campaigns", emails: "Up to 5K/mo", popular: false, accent: "#64748B" },
  { id: "growth", name: "Growth", price: "$650", tagline: "Growing businesses & newsletters", emails: "Up to 25K/mo", popular: true, accent: EMAIL_INDIGO },
  { id: "professional", name: "Professional", price: "$1,100", tagline: "Automation & segmentation", emails: "Up to 100K/mo", popular: false, accent: EMAIL_SKY },
  { id: "enterprise", name: "Enterprise", price: "Custom", tagline: "Large-scale email operations", emails: "100K+/mo", popular: false, accent: "#7C3AED" },
] as const;

export const emailPackageComparison = [
  { feature: "Monthly Management Fee", starter: "$350", growth: "$650", professional: "$1,100", enterprise: "Custom" },
  { feature: "Emails Per Month", starter: "5K", growth: "25K", professional: "100K", enterprise: "100K+" },
  { feature: "Campaign Design", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Newsletter Management", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "List Segmentation", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Automated Workflows", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "A/B Testing", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "E-commerce Automation", starter: false, growth: false, professional: true, enterprise: true },
  { feature: "Deliverability Setup", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "CRM Integration", starter: false, growth: false, professional: true, enterprise: true },
  { feature: "Monthly Analytics Report", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Dedicated Email Manager", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Custom Reporting Dashboard", starter: false, growth: false, professional: true, enterprise: true },
  { feature: "Priority Support", starter: false, growth: false, professional: false, enterprise: true },
] as const;

export const emailTechStack = [
  { name: "Mailchimp", icon: "/images/tech/google-workspace.svg", category: "ESP" },
  { name: "SendGrid", icon: "/images/tech/google-workspace.svg", category: "Delivery" },
  { name: "HubSpot", icon: "/images/tech/google-workspace.svg", category: "CRM" },
  { name: "Klaviyo", icon: "/images/tech/react.svg", category: "E-commerce" },
  { name: "MailerLite", icon: "/images/tech/google-workspace.svg", category: "ESP" },
  { name: "ConvertKit", icon: "/images/tech/nextjs.svg", category: "Creator" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Tracking" },
  { name: "Zapier", icon: "/images/tech/google-workspace.svg", category: "Automation" },
  { name: "Canva", icon: "/images/tech/react.svg", category: "Design" },
  { name: "Litmus", icon: "/images/tech/google-workspace.svg", category: "Testing" },
  { name: "Salesforce", icon: "/images/erp/salesforce.svg", category: "CRM" },
  { name: "Looker Studio", icon: "/images/tech/google-workspace.svg", category: "Reporting" },
] as const;

export const emailProcess = [
  { step: "Audit & Strategy", description: "Review current lists, deliverability, and define campaign goals." },
  { step: "List & Segment", description: "Build, clean, and segment subscriber lists for targeted messaging." },
  { step: "Design & Copy", description: "Create templates, write compelling copy, and craft subject lines." },
  { step: "Automate & Launch", description: "Set up workflows, schedule campaigns, and go live." },
  { step: "Test & Optimize", description: "A/B test, analyze performance, and refine for better results." },
  { step: "Report & Scale", description: "Monthly reports with insights and scaling recommendations." },
] as const;

export const emailTrustBadges = [
  { label: "Google Partner", sub: "Certified", icon: "🔍" },
  { label: "Meta Business Partner", sub: "Verified", icon: "📱" },
  { label: "Google Reviews", sub: "4.9 ★ Rating", icon: "⭐" },
  { label: "Clutch", sub: "Top Rated", icon: "🏆" },
] as const;

export const emailTestimonials = [
  {
    name: "Aditi Hiray",
    role: "Founder",
    quote: "Razobyte has a remarkable understanding of our brand and audience. Their email marketing strategy delivered a significant boost in lead generation and customer retention.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Daniel King",
    role: "Owner",
    quote: "They did a great job on our email strategy with unique content ideas that stood out. Open rates and conversions improved dramatically within the first quarter.",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
] as const;

export const emailProjects = [
  { id: "1", title: "E-Commerce Retention Campaign", description: "25% repeat purchase increase with segmented product recommendation emails.", image: "/images/portfolio-ecommerce.jpg", tag: "E-Commerce" },
  { id: "2", title: "SaaS Onboarding Drip", description: "40% higher activation rates with a 7-email automated welcome series.", image: "/images/portfolio-fintech.jpg", tag: "SaaS" },
  { id: "3", title: "Newsletter Growth Strategy", description: "3x subscriber growth and 35% average open rate for a media brand.", image: "/images/service-marketing.jpg", tag: "Newsletter" },
] as const;

export const emailRelated = [
  { label: "CRM Solutions", description: "Unified customer data to power smarter email campaigns.", href: siteRoutes.crm, icon: "/images/tech/google-workspace.svg" },
  { label: "SEO Services", description: "Drive organic traffic that feeds your email subscriber list.", href: siteRoutes.seoSearchEngineOptimization, icon: "/images/tech/google-workspace.svg" },
  { label: "SMM Services", description: "Social campaigns that grow your email subscriber base.", href: siteRoutes.smmSocialMediaMarketing, icon: "/images/tech/react.svg" },
  { label: "Pricing Plans", description: "Compare all digital marketing packages and add-ons.", href: siteRoutes.pricing, icon: "/images/tech/google-workspace.svg" },
] as const;

export const emailBlogs = [
  { title: "Email Deliverability Best Practices", excerpt: "SPF, DKIM, DMARC, and list hygiene for inbox placement.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Subject Lines That Get Opened", excerpt: "Proven formulas and A/B testing strategies for higher open rates.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "Automated Email Workflows Guide", excerpt: "Welcome series, cart recovery, and re-engagement sequences.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const emailFaqs: ProductFaq[] = [
  { question: "What is email marketing?", answer: "Email marketing is a direct digital marketing channel that uses email to promote products, services, and brand messages to a list of subscribers — building relationships, driving sales, and nurturing leads." },
  { question: "Why is email marketing important for businesses?", answer: "Email delivers the highest ROI of any marketing channel — $36 for every $1 spent on average. It reaches customers directly in their inbox with personalized, measurable campaigns." },
  { question: "What types of email campaigns do you create?", answer: "Newsletters, promotional campaigns, drip sequences, welcome series, abandoned cart emails, re-engagement flows, product launches, and transactional emails." },
  { question: "How do you improve email deliverability?", answer: "We configure SPF, DKIM, and DMARC authentication, maintain list hygiene, use double opt-in, monitor bounce rates, and follow CAN-SPAM and GDPR compliance best practices." },
  { question: "What is email list segmentation?", answer: "Segmentation divides your subscriber list into groups based on behavior, demographics, purchase history, or engagement level — enabling highly targeted, relevant messaging." },
  { question: "What is A/B testing in email marketing?", answer: "A/B testing sends two variations of an email (different subject lines, content, or CTAs) to small audience segments to determine which performs better before sending to the full list." },
  { question: "Which email marketing tools do you use?", answer: "Mailchimp, SendGrid, Klaviyo, HubSpot, MailerLite, ConvertKit, and Salesforce — selected based on your business size, industry, and integration needs." },
  { question: "How often should I send marketing emails?", answer: "Frequency depends on your audience and industry. Most businesses succeed with 1–4 emails per month for newsletters and triggered automations for transactional events." },
  { question: "Can email marketing work with my CRM?", answer: "Absolutely. We integrate email platforms with CRMs like HubSpot, Salesforce, and Zoho to sync subscriber data, track engagement, and score leads automatically." },
  { question: "How do you measure email marketing success?", answer: "We track open rates, click-through rates, conversion rates, unsubscribe rates, deliverability, revenue per email, and customer lifetime value — with transparent monthly reporting." },
];
