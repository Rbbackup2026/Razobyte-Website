import {
  Megaphone,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Zap,
  Eye,
  Heart,
  MessageCircle,
  PenTool,
  Settings,
  Globe,
  Video,
  Hash,
  Calendar,
  LineChart,
  Award,
  Layers,
  Image as ImageIcon,
  ThumbsUp,
  UserPlus,
  Sparkles,
  Search,
  MonitorPlay,
  Camera,
  Briefcase,
  Share2,
  MousePointerClick,
  Palette,
  UserCheck,
  Coins,
  RefreshCw,
  Filter,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const SMM_ORANGE = "#F97316";
export const SMM_TEAL = "#0D9488";

export const smmHero = {
  title: "Skyrocket Your Business with Social Media Marketing",
  subtitle: "Let's make your brand unstoppable.",
  description:
    "Razobyte is a leading Social Media Marketing company delivering expert SMM services that connect, engage, and grow your brand — from paid ad campaigns and influencer collaborations to content that clicks across every major platform.",
};

export const smmHighlights = [
  "Paid social ad campaigns",
  "Content that clicks",
  "Influencer collaborations",
  "Platform-specific strategies",
  "Analytics & monthly reports",
  "SEO-integrated social profiles",
] as const;

export function getSmmStats() {
  return [
    { value: "98%", label: "Customer Satisfaction" },
    { value: COMPANY_PROJECTS_PLUS, label: "Projects Completed" },
    { value: "14M+", label: "Audience Reach" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const smmIntro =
  "In today's fast-evolving digital world, brands need to stand out, spark conversations, and build lasting connections. Razobyte's Social Media Marketing services deliver authentic strategies across Facebook, Instagram, LinkedIn, and more — turning followers into customers and engagement into revenue.";

export const smmWhyImportant = [
  { title: "Build Strong Customer Relationships", description: "Engage directly with your audience through meaningful two-way conversations.", icon: Heart },
  { title: "Increase Brand Visibility", description: "Reach millions of potential customers where they spend hours every day.", icon: Eye },
  { title: "Drive Website Traffic", description: "Social channels funnel qualified visitors to your site and landing pages.", icon: TrendingUp },
  { title: "Generate Leads & Sales", description: "Targeted campaigns convert social engagement into measurable business outcomes.", icon: Coins },
] as const;

export const smmOfferings = [
  { title: "Content That Clicks", description: "Engaging posts, storytelling graphics, videos, and strategic content calendars that resonate.", icon: PenTool },
  { title: "Paid Advertising Campaigns", description: "Targeted ad strategies for maximum ROI, A/B testing, and budget-friendly campaign management.", icon: Megaphone },
  { title: "Active Engagement", description: "Prompt responses to comments and DMs, relationship building, and interactive polls and quizzes.", icon: MessageCircle },
  { title: "Consistent Branding", description: "Uniform look across platforms, defined tone of voice, and high-quality visual identity.", icon: Palette },
  { title: "Analytics That Matter", description: "Detailed monthly reports tracking engagement, reach, conversions, and data-driven insights.", icon: BarChart3 },
  { title: "Influencer Collaboration", description: "Partnering with relevant influencers, managing collaborations, and authentic branded content.", icon: UserCheck },
  { title: "Platform-Specific Strategies", description: "Tailored plans for Facebook, Instagram, LinkedIn, and more — staying ahead of algorithm changes.", icon: Layers },
  { title: "SEO Integration", description: "Optimizing social profiles for search discovery and deploying strategic hashtag campaigns.", icon: Hash },
] as const;

export const smmCaseStudy = {
  client: "Small Business — Online Presence Growth",
  challenge: "Low engagement, minimal brand awareness, and inconsistent posting across platforms.",
  approach: "Targeted paid ads, consistent content posting schedule, community engagement tactics, and platform-specific creative strategies.",
  results: ["150% increase in followers", "80% growth in engagement rate", "Improved brand loyalty and repeat customers"],
};

export const smmWhyChoose =
  "We don't just post — we create communities. Razobyte drives genuine connections through tailored SMM strategies that align with your brand voice, audience behavior, and business goals. Every campaign is built to spark conversations and convert engagement into revenue.";

export const smmServices = [
  { title: "Facebook Ad Management", description: "Lead gen, awareness, and conversion campaigns on Meta's largest platform.", icon: Users },
  { title: "Instagram Marketing", description: "Reels, stories, carousel posts, and shopping tags for visual brands.", icon: Camera },
  { title: "LinkedIn B2B Campaigns", description: "Thought leadership content and sponsored posts for professional audiences.", icon: Briefcase },
  { title: "YouTube Video Marketing", description: "Channel growth, shorts strategy, and video ad campaigns.", icon: MonitorPlay },
  { title: "Content Creation", description: "Graphics, videos, copy, and reels designed for maximum engagement.", icon: ImageIcon },
  { title: "Influencer Marketing", description: "Identify, outreach, and manage influencer partnerships for authentic reach.", icon: UserPlus },
  { title: "Social Media Audits", description: "Comprehensive review of profiles, content, and competitor positioning.", icon: Search },
  { title: "Community Management", description: "Daily engagement, comment moderation, and DM response management.", icon: MessageCircle },
  { title: "A/B Ad Testing", description: "Split-test creatives, audiences, and copy for optimal campaign performance.", icon: Layers },
  { title: "Retargeting Campaigns", description: "Re-engage website visitors and past engagers with dynamic social ads.", icon: RefreshCw },
  { title: "Hashtag & Trend Strategy", description: "Ride trending topics and deploy researched hashtag sets for discovery.", icon: Hash },
  { title: "Monthly SMM Reporting", description: "Reach, engagement, ROAS, follower growth, and actionable insights.", icon: LineChart },
] as const;

export const smmPlatformComparison = [
  { feature: "Paid Ad Campaigns", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Organic Content Posting", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Video / Reels / Shorts", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Influencer Partnerships", facebook: true, instagram: true, linkedin: false, youtube: true },
  { feature: "B2B Lead Generation", facebook: true, instagram: false, linkedin: true, youtube: false },
  { feature: "Shopping / Product Tags", facebook: true, instagram: true, linkedin: false, youtube: false },
  { feature: "Community Management", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Live Streaming", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Retargeting Ads", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Analytics Dashboard", facebook: true, instagram: true, linkedin: true, youtube: true },
] as const;

export const smmPackages = [
  { id: "starter", name: "Starter", price: "$450", tagline: "Small businesses & startups", platforms: "2 Platforms", popular: false, accent: "#64748B" },
  { id: "growth", name: "Growth", price: "$850", tagline: "Growing brands & local businesses", platforms: "3 Platforms", popular: true, accent: SMM_ORANGE },
  { id: "professional", name: "Professional", price: "$1,400", tagline: "Multi-platform campaigns", platforms: "5 Platforms", popular: false, accent: SMM_TEAL },
  { id: "enterprise", name: "Enterprise", price: "Custom", tagline: "Large brands & agencies", platforms: "All Platforms", popular: false, accent: "#DB2777" },
] as const;

export const smmPackageComparison = [
  { feature: "Monthly Management Fee", starter: "$450", growth: "$850", professional: "$1,400", enterprise: "Custom" },
  { feature: "Platforms Managed", starter: "2", growth: "3", professional: "5", enterprise: "All" },
  { feature: "Posts Per Month", starter: "15", growth: "25", professional: "40", enterprise: "Unlimited" },
  { feature: "Paid Ad Management", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Content Creation", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Community Management", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Influencer Outreach", starter: false, growth: false, professional: true, enterprise: true },
  { feature: "A/B Ad Testing", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Reels & Video Content", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Retargeting Campaigns", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Monthly Analytics Report", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Dedicated SMM Manager", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Crisis Management", starter: false, growth: false, professional: false, enterprise: true },
  { feature: "Custom Reporting Dashboard", starter: false, growth: false, professional: true, enterprise: true },
] as const;

export const smmTechStack = [
  { name: "Meta Ads Manager", icon: "/images/tech/google-workspace.svg", category: "Paid Social" },
  { name: "Hootsuite", icon: "/images/tech/google-workspace.svg", category: "Scheduling" },
  { name: "Canva", icon: "/images/tech/react.svg", category: "Design" },
  { name: "Sprout Social", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Buffer", icon: "/images/tech/google-workspace.svg", category: "Publishing" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Tracking" },
  { name: "CapCut", icon: "/images/tech/nextjs.svg", category: "Video" },
  { name: "Later", icon: "/images/tech/google-workspace.svg", category: "Planning" },
  { name: "LinkedIn Campaign", icon: "/images/tech/google-workspace.svg", category: "B2B" },
  { name: "Brandwatch", icon: "/images/tech/google-workspace.svg", category: "Listening" },
  { name: "Looker Studio", icon: "/images/tech/google-workspace.svg", category: "Reporting" },
  { name: "Hotjar", icon: "/images/tech/react.svg", category: "UX" },
] as const;

export const smmProcess = [
  { step: "Discovery & Audit", description: "Analyze brand, audience, competitors, and current social presence." },
  { step: "Strategy & Planning", description: "Define goals, platforms, content themes, and ad budgets." },
  { step: "Content & Campaigns", description: "Create creatives, launch paid ads, and schedule organic posts." },
  { step: "Engage & Grow", description: "Community management, influencer outreach, and audience building." },
  { step: "Measure & Optimize", description: "Track KPIs, A/B test, and refine for maximum ROI." },
  { step: "Scale & Report", description: "Monthly reports with insights and scaling recommendations." },
] as const;

export const smmTrustBadges = [
  { label: "Google Partner", sub: "Certified", icon: "🔍" },
  { label: "Meta Business Partner", sub: "Verified", icon: "📱" },
  { label: "Google Reviews", sub: "4.9 ★ Rating", icon: "⭐" },
  { label: "Trusted Service", sub: "Top Rated", icon: "🏆" },
] as const;

export const smmTestimonials = [
  {
    name: "Aarti Viraj",
    role: "Manager",
    quote: "A great experience working with Razobyte. They built our brand presence from scratch on social media — professional, creative, and always delivering on time.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Karishma Viraj",
    role: "Media",
    quote: "The team is incredibly professional and delivered great results for our SMM campaigns. Engagement and follower growth exceeded our expectations within months.",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
] as const;

export const smmProjects = [
  { id: "1", title: "Fashion Brand Instagram Growth", description: "200% follower growth and 3x engagement with reels and influencer campaigns.", image: "/images/portfolio-ecommerce.jpg", tag: "Instagram" },
  { id: "2", title: "B2B LinkedIn Lead Gen", description: "5x qualified leads through sponsored content and thought leadership posts.", image: "/images/portfolio-fintech.jpg", tag: "LinkedIn" },
  { id: "3", title: "Restaurant Facebook Campaign", description: "120% increase in foot traffic from targeted local Facebook ad campaigns.", image: "/images/service-marketing.jpg", tag: "Facebook" },
] as const;

export const smmRelated = [
  { label: "SMO Services", description: "Organic social optimization to complement your paid campaigns.", href: siteRoutes.smoSocialMediaOptimization, icon: "/images/tech/google-workspace.svg" },
  { label: "SEM & PPC", description: "Paid search campaigns that amplify your social strategy.", href: siteRoutes.semSearchEngineMarketing, icon: "/images/tech/google-workspace.svg" },
  { label: "SEO Services", description: "Organic rankings that boost social content discoverability.", href: siteRoutes.seoSearchEngineOptimization, icon: "/images/tech/google-workspace.svg" },
  { label: "Pricing Plans", description: "Compare all digital marketing packages and add-ons.", href: siteRoutes.pricing, icon: "/images/tech/google-workspace.svg" },
] as const;

export const smmBlogs = [
  { title: "SMM vs SMO: What's the Difference?", excerpt: "Paid social marketing vs organic optimization — when to use each.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Facebook Ads for Small Business", excerpt: "Budget-friendly ad strategies that drive real leads and sales.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "Influencer Marketing Guide 2026", excerpt: "Find, partner with, and measure influencer collaborations.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const smmFaqs: ProductFaq[] = [
  { question: "What is Social Media Marketing (SMM)?", answer: "SMM is the use of social media platforms to promote products, services, or brands through organic content and paid advertising — building awareness, engagement, and conversions across networks like Facebook, Instagram, and LinkedIn." },
  { question: "Why is SMM essential for businesses?", answer: "With billions of active social media users, SMM puts your brand directly in front of your target audience — driving awareness, website traffic, leads, and sales through both organic engagement and paid campaigns." },
  { question: "What are the steps in creating an SMM strategy?", answer: "Define goals, research your audience, choose platforms, plan content themes, set ad budgets, create a posting calendar, launch campaigns, engage with your community, and measure results monthly." },
  { question: "What is the role of an SMM agency?", answer: "An SMM agency handles strategy, content creation, paid ad management, community engagement, influencer partnerships, analytics, and reporting — allowing businesses to focus on operations while experts grow their social presence." },
  { question: "What is the difference between SEO and SMM?", answer: "SEO optimizes your website for search engine rankings. SMM promotes your brand on social platforms through content and ads. Both drive traffic and awareness — and work best as complementary strategies." },
  { question: "What tools are used for Facebook advertising management?", answer: "Meta Ads Manager, Facebook Business Suite, Hootsuite, Sprout Social, Canva, and Looker Studio are standard tools we use to create, manage, and analyze Facebook ad campaigns." },
  { question: "How do social media agencies support businesses?", answer: "Agencies provide expertise in platform algorithms, creative design, ad targeting, budget optimization, community management, and performance analytics — delivering professional results faster than in-house teams." },
  { question: "Why is Facebook a key platform for SMM?", answer: "Facebook has 3 billion+ monthly users, advanced ad targeting, diverse ad formats, and integration with Instagram — making it the most versatile platform for both B2C and B2B social marketing." },
  { question: "What can be trendy in social media marketing strategies?", answer: "Short-form video (reels/shorts), influencer micro-partnerships, social commerce, interactive content (polls/quizzes), user-generated content campaigns, and AI-assisted content creation are trending in 2026." },
  { question: "What is the role of platforms in social media marketing?", answer: "Each platform serves different audiences and content formats — Instagram for visuals, LinkedIn for B2B, YouTube for video, Facebook for community. A multi-platform strategy maximizes reach and ROI." },
];
