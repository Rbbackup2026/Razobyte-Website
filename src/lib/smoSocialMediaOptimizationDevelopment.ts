import {
  Share2,
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
  Megaphone,
  LineChart,
  Award,
  RefreshCw,
  Layers,
  Image as ImageIcon,
  ThumbsUp,
  UserPlus,
  Sparkles,
  Search,
  MonitorPlay,
  Camera,
  Briefcase,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const SMO_VIOLET = "#7C3AED";
export const SMO_PINK = "#EC4899";

export const smoHero = {
  title: "Reshape Your Social Media into a Revenue-Generating Powerhouse",
  subtitle: "Data-driven strategies, engaging content, and high-ROI social campaigns.",
  description:
    "Razobyte is a leading Social Media Optimization company delivering expert SMO services that strengthen your brand's digital presence, grow audience reach, and turn followers into loyal customers across every major platform.",
};

export const smoHighlights = [
  "Data-driven SMO strategies",
  "Engaging content creation",
  "High-ROI social campaigns",
  "Cross-platform expertise",
  "Community management",
  "Analytics & reporting",
] as const;

export function getSmoStats() {
  return [
    { value: "98%", label: "Client Retention" },
    { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
    { value: "14M+", label: "Audience Reach" },
    { value: formatYearsPlus(), label: "Years of Experience" },
  ];
}

export const smoBrandIntro =
  "In today's digital world, a strong social media presence is no longer optional — it's essential. Razobyte's Social Media Optimization services help businesses grow brand reach, engage target audiences, and build lasting relationships that drive real revenue.";

export const smoDefinition = {
  title: "What Is Social Media Optimization?",
  description:
    "Social Media Optimization (SMO) is the process of improving your brand's visibility and engagement on social platforms through strategic planning, compelling content creation, profile optimization, and meaningful audience interaction — turning social channels into powerful marketing assets.",
  image: "/images/team.jpg",
};

export const smoWhyChoose = [
  { title: "Tailored Strategies", description: "Custom SMO strategies aligned with your brand goals, audience demographics, and industry benchmarks.", icon: Target },
  { title: "Engaging Content", description: "Captivating visuals, reels, and copy designed to spark interaction, shares, and community growth.", icon: PenTool },
  { title: "Data-Driven Approach", description: "Performance metrics guide every decision — we refine strategies based on real engagement and conversion data.", icon: BarChart3 },
  { title: "Cross-Platform Expertise", description: "Expert management across Facebook, Instagram, LinkedIn, X (Twitter), and YouTube from a single team.", icon: Globe },
] as const;

export const smoCoreServices = [
  { title: "Social Media Audit & Strategy", description: "Comprehensive analysis of your current presence with a custom roadmap for growth.", icon: Search },
  { title: "Content Creation & Curation", description: "Visuals, reels, carousels, and copy designed for maximum engagement.", icon: ImageIcon },
  { title: "Profile Optimization", description: "Bio, highlights, cover images, and CTAs optimized for visibility and conversions.", icon: Settings },
  { title: "Community Management", description: "Managing comments, DMs, and interactions to build loyal brand communities.", icon: MessageCircle },
  { title: "Paid Social Advertising", description: "Targeted ad campaigns on Meta, LinkedIn, and YouTube for accelerated growth.", icon: Megaphone },
  { title: "Analytics & Reporting", description: "Transparent tracking of reach, engagement, followers, and ROI every month.", icon: LineChart },
] as const;

export const smoBenefits = [
  { title: "Increased Brand Awareness", description: "Reach millions of potential customers where they spend hours every day.", icon: Eye },
  { title: "Higher Engagement Rates", description: "Content that sparks likes, comments, shares, and saves — building active communities.", icon: Heart },
  { title: "Improved Website Traffic", description: "Social channels drive qualified visitors to your website and landing pages.", icon: TrendingUp },
  { title: "Better Conversion Rates", description: "Warm social audiences convert at higher rates than cold traffic.", icon: ThumbsUp },
  { title: "Stronger Brand Loyalty", description: "Consistent engagement builds trust and turns followers into brand advocates.", icon: Award },
] as const;

export const smoPlatforms = [
  { name: "Facebook", description: "Page management, content creation, community building, and lead advertising.", icon: Users, accent: "#1877F2", bestFor: "Community & Lead Gen" },
  { name: "Instagram", description: "Visual storytelling, reels, IGTV, stories, and influencer collaborations.", icon: Camera, accent: "#E4405F", bestFor: "Visual Branding" },
  { name: "LinkedIn", description: "B2B networking, thought leadership, professional content, and lead generation.", icon: Briefcase, accent: "#0A66C2", bestFor: "B2B & Professional" },
  { name: "YouTube", description: "Video marketing, channel optimization, shorts, and subscriber growth.", icon: MonitorPlay, accent: "#FF0000", bestFor: "Video Content" },
  { name: "X (Twitter)", description: "Real-time engagement, trending topics, and brand voice amplification.", icon: Share2, accent: "#000000", bestFor: "News & Engagement" },
  { name: "Pinterest", description: "Visual discovery, pin optimization, and traffic-driving content boards.", icon: ImageIcon, accent: "#E60023", bestFor: "Visual Discovery" },
] as const;

export const smoPlatformComparison = [
  { feature: "Visual Content Focus", facebook: true, instagram: true, linkedin: false, youtube: true },
  { feature: "B2B Lead Generation", facebook: true, instagram: false, linkedin: true, youtube: false },
  { feature: "Video / Reels / Shorts", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Community Management", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Paid Ad Campaigns", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Influencer Collaborations", facebook: false, instagram: true, linkedin: false, youtube: true },
  { feature: "Hashtag Strategy", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Analytics & Insights", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "Live Streaming", facebook: true, instagram: true, linkedin: true, youtube: true },
  { feature: "SEO / Search Discovery", facebook: false, instagram: false, linkedin: true, youtube: true },
] as const;

export const smoServices = [
  { title: "Social Media Strategy", description: "Custom roadmaps aligned with brand goals and audience insights.", icon: Target },
  { title: "Content Calendar Planning", description: "Structured posting schedules for consistent, timely engagement.", icon: Calendar },
  { title: "Graphic Design & Creatives", description: "Eye-catching posts, stories, and ad creatives for every platform.", icon: ImageIcon },
  { title: "Copywriting & Captions", description: "Compelling captions and hashtags that drive interaction.", icon: PenTool },
  { title: "Reels & Short-Form Video", description: "Trending short-form content optimized for algorithm reach.", icon: Video },
  { title: "Profile & Bio Optimization", description: "Platform profiles tuned for discoverability and conversions.", icon: Settings },
  { title: "Hashtag Research", description: "Data-backed hashtag sets for maximum organic reach.", icon: Hash },
  { title: "Community Engagement", description: "Active management of comments, DMs, and brand mentions.", icon: MessageCircle },
  { title: "Influencer Outreach", description: "Partnering with relevant creators to amplify brand reach.", icon: UserPlus },
  { title: "Social Listening", description: "Monitoring brand mentions, trends, and competitor activity.", icon: Eye },
  { title: "Paid Social Campaigns", description: "Meta, LinkedIn, and YouTube ads for targeted growth.", icon: Megaphone },
  { title: "Monthly SMO Reports", description: "Reach, engagement, follower growth, and ROI dashboards.", icon: BarChart3 },
] as const;

export const smoPackages = [
  { id: "starter", name: "Starter", price: "$400", tagline: "Small businesses & startups", platforms: "2 Platforms", popular: false, accent: "#64748B" },
  { id: "growth", name: "Growth", price: "$750", tagline: "Growing brands & local businesses", platforms: "3 Platforms", popular: true, accent: SMO_VIOLET },
  { id: "professional", name: "Professional", price: "$1,200", tagline: "Multi-platform presence", platforms: "5 Platforms", popular: false, accent: SMO_PINK },
  { id: "enterprise", name: "Enterprise", price: "Custom", tagline: "Large brands & agencies", platforms: "All Platforms", popular: false, accent: "#DB2777" },
] as const;

export const smoPackageComparison = [
  { feature: "Monthly Management Fee", starter: "$400", growth: "$750", professional: "$1,200", enterprise: "Custom" },
  { feature: "Platforms Managed", starter: "2", growth: "3", professional: "5", enterprise: "All" },
  { feature: "Posts Per Month", starter: "12", growth: "20", professional: "30", enterprise: "Unlimited" },
  { feature: "Content Creation", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Profile Optimization", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Community Management", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Hashtag Research", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Reels / Short Videos", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Paid Social Ads", starter: false, growth: false, professional: true, enterprise: true },
  { feature: "Influencer Outreach", starter: false, growth: false, professional: true, enterprise: true },
  { feature: "Social Media Audit", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Monthly Analytics Report", starter: true, growth: true, professional: true, enterprise: true },
  { feature: "Dedicated SMO Manager", starter: false, growth: true, professional: true, enterprise: true },
  { feature: "Crisis Management", starter: false, growth: false, professional: false, enterprise: true },
] as const;

export const smoTechStack = [
  { name: "Meta Business", icon: "/images/tech/google-workspace.svg", category: "Social" },
  { name: "Hootsuite", icon: "/images/tech/google-workspace.svg", category: "Scheduling" },
  { name: "Buffer", icon: "/images/tech/google-workspace.svg", category: "Scheduling" },
  { name: "Canva", icon: "/images/tech/react.svg", category: "Design" },
  { name: "Sprout Social", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Later", icon: "/images/tech/google-workspace.svg", category: "Planning" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Tracking" },
  { name: "Brandwatch", icon: "/images/tech/google-workspace.svg", category: "Listening" },
  { name: "CapCut", icon: "/images/tech/nextjs.svg", category: "Video" },
  { name: "LinkedIn Campaign", icon: "/images/tech/google-workspace.svg", category: "B2B" },
  { name: "YouTube Studio", icon: "/images/tech/google-workspace.svg", category: "Video" },
  { name: "Looker Studio", icon: "/images/tech/google-workspace.svg", category: "Reporting" },
] as const;

export const smoProcess = [
  { step: "Research & Strategy", description: "Audience analysis, competitor benchmarking, and platform selection." },
  { step: "Content & Engagement", description: "Creating compelling visuals, captions, and community interactions." },
  { step: "Advertising & Growth", description: "Running targeted paid campaigns for accelerated reach and leads." },
  { step: "Analytics & Optimization", description: "Tracking performance and refining strategy for continuous improvement." },
] as const;

export const smoTrustBadges = [
  { label: "Google Partner", sub: "Certified", icon: "🔍" },
  { label: "Meta Business Partner", sub: "Verified", icon: "📱" },
  { label: "Google Reviews", sub: "4.9 ★ Rating", icon: "⭐" },
  { label: "Clutch", sub: "Top Rated", icon: "🏆" },
] as const;

export const smoTestimonials = [
  {
    name: "Abhi Hiraj",
    role: "Stripe",
    quote: "Razobyte's SMO team has remarkable expertise and a strategic approach that transformed our social presence. Engagement and brand visibility improved significantly within the first quarter.",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
  {
    name: "Gaurav Garg",
    role: "Mudra",
    quote: "Our business growth and social reach expanded beyond expectations. The content quality, consistency, and data-driven optimization made Razobyte our go-to SMO partner.",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
  },
] as const;

export const smoProjects = [
  { id: "1", title: "Instagram Brand Growth", description: "250% follower growth and 5x engagement for a lifestyle brand in 6 months.", image: "/images/service-marketing.jpg", tag: "Instagram" },
  { id: "2", title: "LinkedIn B2B Campaign", description: "3x lead generation through thought leadership content and targeted ads.", image: "/images/portfolio-fintech.jpg", tag: "LinkedIn" },
  { id: "3", title: "YouTube Channel Launch", description: "10K subscribers and 500K views in 90 days for a tech education channel.", image: "/images/service-mobile.jpg", tag: "YouTube" },
] as const;

export const smoRelated = [
  { label: "SEO Services", description: "Organic search rankings that amplify your social content reach.", href: siteRoutes.seoSearchEngineOptimization, icon: "/images/tech/google-workspace.svg" },
  { label: "SEM & PPC", description: "Paid search campaigns that complement your social strategy.", href: siteRoutes.semSearchEngineMarketing, icon: "/images/tech/google-workspace.svg" },
  { label: "Website Design", description: "Landing pages optimized for social traffic conversions.", href: siteRoutes.websiteDesign, icon: "/images/tech/react.svg" },
  { label: "Pricing Plans", description: "Compare all digital marketing packages and add-ons.", href: siteRoutes.pricing, icon: "/images/tech/google-workspace.svg" },
] as const;

export const smoBlogs = [
  { title: "SMO vs SMM: What's the Difference?", excerpt: "Understand organic optimization vs paid social media marketing.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Hashtag Strategy for 2026", excerpt: "Research, group, and deploy hashtags for maximum organic reach.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "How SMO and SEO Work Together", excerpt: "Synergize social signals with search rankings for compound growth.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const smoFaqs: ProductFaq[] = [
  { question: "What is Social Media Optimization (SMO)?", answer: "SMO is the process of improving your brand's visibility and engagement on social platforms through strategic planning, content creation, profile optimization, and audience interaction — turning social channels into marketing assets." },
  { question: "Why is SMO important for businesses?", answer: "Over 4.9 billion people use social media worldwide. SMO ensures your brand is visible, engaging, and converting on the platforms where your customers spend their time — building awareness, traffic, and loyalty." },
  { question: "What are the key strategies in SMO?", answer: "Profile optimization, content strategy, hashtag research, community management, influencer outreach, paid social advertising, analytics tracking, and cross-platform consistency are the core SMO strategies." },
  { question: "How does SMO differ from SMM?", answer: "SMO focuses on organic growth — optimizing profiles, content, and engagement without paid ads. SMM (Social Media Marketing) includes paid advertising campaigns. Razobyte offers both for a complete social strategy." },
  { question: "Which platforms can be used for SMO?", answer: "Facebook, Instagram, LinkedIn, YouTube, X (Twitter), Pinterest, and emerging platforms like Threads. We tailor strategies to where your target audience is most active." },
  { question: "What is a Social Media (SMO) strategy?", answer: "An SMO strategy is a documented plan covering platform selection, content themes, posting frequency, engagement tactics, hashtag sets, and KPIs — all aligned with your business goals." },
  { question: "How do hashtags help in SMO?", answer: "Hashtags categorize content, increase discoverability, and connect your posts to trending conversations. Strategic hashtag research can significantly boost organic reach and engagement." },
  { question: "What are the benefits of SMO for small businesses?", answer: "SMO levels the playing field — small businesses can build loyal communities, drive local awareness, and generate leads without massive ad budgets through consistent, quality content." },
  { question: "How does SMO improve website traffic?", answer: "Optimized social profiles with clear CTAs, engaging posts with links, and viral content drive qualified visitors to your website — improving both direct traffic and search engine signals." },
  { question: "Can SMO and SEO work together?", answer: "Absolutely. Social signals amplify content reach, drive backlinks, increase brand searches, and improve overall online authority — creating a powerful synergy between organic search and social growth." },
];
