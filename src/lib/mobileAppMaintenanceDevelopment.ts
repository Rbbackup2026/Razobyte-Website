import {
  Shield,
  Wrench,
  RefreshCw,
  Clock,
  Smartphone,
  Search,
  Database,
  Gauge,
  Bug,
  Cloud,
  Settings,
  Headphones,
  Lock,
  TrendingUp,
  ClipboardList,
  Server,
  BarChart3,
  Zap,
  CheckCircle2,
  HardDrive,
  Globe,
  Code2,
  Layers,
  Monitor,
  Bell,
  MessageSquare,
  Store,
  GitBranch,
  Cpu,
  FileText,
  PenTool,
  Rocket,
  Users,
  Calendar,
  AlertTriangle,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const MOB_TEAL = "#14B8A6";
export const MOB_CORAL = "#F97316";

export const mobileMaintHero = {
  title: "Mobile App Maintenance Services",
  subtitle: "24/7 Support & Seamless Updates for iOS & Android Apps.",
  description:
    "Razobyte delivers customized mobile app maintenance and support that keeps your apps secure, fast, and up to date — from crash monitoring and OS compatibility to feature enhancements and App Store management.",
};

export const mobileMaintHighlights = [
  "24/7 app monitoring",
  "iOS & Android support",
  "Crash & bug fixes",
  "Store management",
  "Security updates",
  "Feature enhancements",
] as const;

export function getMobileMaintStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: COMPANY_PROJECTS_PLUS, label: "Apps Maintained" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const mobileMaintIntro =
  "We deliver customized mobile app maintenance services that accomplish all your mobility needs — whether you run a native iOS app, Android app, or cross-platform solution.";

export const mobileMaintWhyChoose =
  "Providing a host of benefits that make your mobile app maintenance and support task hassle-free. Our Application Maintenance Services increase businesses' operational expertise with an enterprise-grade mobile strategy to blend with systems, routes, and platforms.";

export const mobileMaintSecurity =
  "Need app maintenance to secure your app? We offer mobile app maintenance and support services that adhere to the highest levels of security and industry standards — protecting user data, payment flows, and backend integrations.";

export const mobileMaintServiceCategories = [
  {
    title: "App Monitoring Services",
    description: "Application monitoring for evaluating end-user experience and component-level performance of your mobile app.",
    icon: Monitor,
    items: [
      "Server monitoring",
      "Analytics monitoring",
      "Security reviews",
      "Performance monitoring",
      "Hosting & payment monitoring",
      "App crash monitoring",
      "App feedback monitoring",
      "Third-party integration reviews",
      "App store management & monitoring",
      "Source code repository & versioning",
    ],
  },
  {
    title: "App Upgrade Services",
    description: "Keep your app current with the latest OS versions, SDK updates, and framework migrations.",
    icon: RefreshCw,
    items: [
      "iOS & Android OS compatibility",
      "SDK & library updates",
      "Framework version migrations",
      "Deprecated API replacements",
      "Store policy compliance updates",
      "Performance refactoring",
    ],
  },
  {
    title: "Maintenance & Enhancement",
    description: "Ongoing improvements, new features, and UX refinements to grow your app over time.",
    icon: Layers,
    items: [
      "Feature extension",
      "UI/UX improvements",
      "New screen development",
      "Push notification updates",
      "In-app purchase maintenance",
      "Localization updates",
    ],
  },
  {
    title: "Support & Optimization",
    description: "Proactive support, bug fixes, and performance tuning for maximum app ROI.",
    icon: Zap,
    items: [
      "Bug fixing & hotfixes",
      "Memory & battery optimization",
      "Load time improvements",
      "User feedback implementation",
      "A/B testing support",
      "Analytics-driven optimization",
    ],
  },
] as const;

export const mobileMaintSupportModels = [
  {
    id: "amc" as const,
    title: "Annual Maintenance Contract",
    description: "Technical support, bug fixing, corrective maintenance, and app version upgrades on a yearly plan.",
    icon: Calendar,
    billing: "Yearly",
    bestFor: "Enterprise apps",
  },
  {
    id: "dedicated" as const,
    title: "Part-Time / Full-Time",
    description: "Our team manages all maintenance — app monitoring, upgrades, and enhancements with dedicated hours.",
    icon: Users,
    billing: "Monthly",
    bestFor: "Growing products",
  },
  {
    id: "scope" as const,
    title: "Scope-Based Maintenance",
    description: "Routine schedule for checking critical app components with defined deliverables per sprint.",
    icon: ClipboardList,
    billing: "Per sprint",
    bestFor: "Periodic audits",
  },
] as const;

export const mobileMaintModelComparison = [
  { feature: "Bug Fixing", amc: true, dedicated: true, scope: true },
  { feature: "24/7 Monitoring", amc: true, dedicated: true, scope: false },
  { feature: "Dedicated Developer", amc: false, dedicated: true, scope: false },
  { feature: "OS Compatibility Updates", amc: true, dedicated: true, scope: true },
  { feature: "App Store Management", amc: true, dedicated: true, scope: false },
  { feature: "Feature Enhancements", amc: true, dedicated: true, scope: true },
  { feature: "Monthly Reports", amc: true, dedicated: true, scope: true },
  { feature: "Crash Analytics", amc: true, dedicated: true, scope: true },
  { feature: "Security Patches", amc: true, dedicated: true, scope: true },
  { feature: "Minimum Term", amc: "12 months", dedicated: "3 months", scope: "Per project" },
] as const;

export const mobileMaintPlatformComparison = [
  { feature: "OS Update Compatibility", android: true, ios: true, hybrid: true },
  { feature: "Play Store Management", android: true, ios: false, hybrid: true },
  { feature: "App Store Management", android: false, ios: true, hybrid: true },
  { feature: "Push Notification Updates", android: true, ios: true, hybrid: true },
  { feature: "Crashlytics Monitoring", android: true, ios: true, hybrid: true },
  { feature: "In-App Purchase Maintenance", android: true, ios: true, hybrid: true },
  { feature: "Material Design Updates", android: true, ios: false, hybrid: false },
  { feature: "Human Interface Guidelines", android: false, ios: true, hybrid: false },
  { feature: "Kotlin/Swift Migrations", android: true, ios: true, hybrid: false },
  { feature: "React Native / Flutter Updates", android: false, ios: false, hybrid: true },
] as const;

export const mobileMaintPackages = [
  { id: "starter" as const, name: "Starter", priceUsd: 300, priceInr: 18000, hours: 3, accent: "#64748b", popular: false },
  { id: "growth" as const, name: "Growth", priceUsd: 450, priceInr: 28000, hours: 6, accent: MOB_TEAL, popular: true },
  { id: "enterprise" as const, name: "Enterprise", priceUsd: 650, priceInr: 45000, hours: 10, accent: MOB_CORAL, popular: false },
  { id: "premium" as const, name: "Premium", priceUsd: 900, priceInr: 65000, hours: 20, accent: "#8B5CF6", popular: false },
] as const;

export const mobileMaintPackageComparison = [
  { feature: "Monthly Hours", starter: "3 hrs", growth: "6 hrs", enterprise: "10 hrs", premium: "20 hrs" },
  { feature: "Yearly Price (USD)", starter: "$300", growth: "$450", enterprise: "$650", premium: "$900" },
  { feature: "Yearly Price (INR)", starter: "₹18,000", growth: "₹28,000", enterprise: "₹45,000", premium: "₹65,000" },
  { feature: "Crash Monitoring", starter: true, growth: true, enterprise: true, premium: true },
  { feature: "OS Compatibility Updates", starter: true, growth: true, enterprise: true, premium: true },
  { feature: "Bug Fixes", starter: true, growth: true, enterprise: true, premium: true },
  { feature: "App Store / Play Store Mgmt", starter: false, growth: true, enterprise: true, premium: true },
  { feature: "Security Patches", starter: true, growth: true, enterprise: true, premium: true },
  { feature: "Performance Optimization", starter: false, growth: true, enterprise: true, premium: true },
  { feature: "Feature Enhancements", starter: false, growth: true, enterprise: true, premium: true },
  { feature: "Analytics Monitoring", starter: false, growth: true, enterprise: true, premium: true },
  { feature: "24/7 Priority Support", starter: false, growth: false, enterprise: true, premium: true },
  { feature: "Dedicated Developer", starter: false, growth: false, enterprise: false, premium: true },
  { feature: "Monthly Health Reports", starter: true, growth: true, enterprise: true, premium: true },
] as const;

export const mobileMaintFeatures = [
  { title: "Reviewing Applications", description: "Regular online reviews of app health, ratings, and user feedback.", icon: Search },
  { title: "Latest Trends", description: "Incorporating the newest mobile design and technology trends.", icon: TrendingUp },
  { title: "Testing Apps", description: "Automated and manual testing on real devices before every release.", icon: CheckCircle2 },
  { title: "Fixing Bugs", description: "Rapid bug identification and resolution with hotfix deployments.", icon: Bug },
  { title: "UI/UX Improvements", description: "Enhancing user interface and experience based on analytics data.", icon: PenTool },
  { title: "Enhancing Usability", description: "Streamlining flows, reducing friction, and improving accessibility.", icon: Layers },
  { title: "Timely Monitoring", description: "Proactive monitoring of crashes, performance, and user sessions.", icon: Bell },
  { title: "Feature Extension", description: "Adding new screens, modules, and capabilities to your app.", icon: Rocket },
  { title: "Platform Migration", description: "Migrating apps between platforms or upgrading architecture.", icon: GitBranch },
  { title: "Prompt Support", description: "Fast response to all queries with ticket-based tracking.", icon: MessageSquare },
  { title: "Security Maintenance", description: "Ongoing security patches, encryption updates, and compliance.", icon: Shield },
  { title: "Analytics Monitoring", description: "Firebase, Mixpanel, and custom analytics dashboard upkeep.", icon: BarChart3 },
] as const;

export const mobileMaintOrbitFeatures = [
  { label: "Feature Extension", color: "#ef4444" },
  { label: "Enhancement", color: MOB_TEAL },
  { label: "Maintenance", color: "#10B981" },
  { label: "New Features", color: "#ec4899" },
  { label: "App Upgrade", color: "#06b6d4" },
  { label: "Analytics", color: MOB_CORAL },
] as const;

export const mobileMaintServices = [
  { title: "Crash & ANR Monitoring", description: "Firebase Crashlytics, Sentry, and real-time alert pipelines.", icon: AlertTriangle },
  { title: "OS Version Updates", description: "Android API level and iOS version compatibility testing.", icon: RefreshCw },
  { title: "SDK & Library Updates", description: "Third-party SDK patches and dependency version management.", icon: Code2 },
  { title: "App Store Optimization", description: "Metadata, screenshots, keywords, and rating management.", icon: Store },
  { title: "Push Notification Maintenance", description: "FCM, APNs configuration, and campaign troubleshooting.", icon: Bell },
  { title: "Backend API Sync", description: "API version compatibility and endpoint health monitoring.", icon: Server },
  { title: "Payment Gateway Updates", description: "In-app purchase and payment SDK maintenance.", icon: Cpu },
  { title: "Database Optimization", description: "Local DB cleanup, migration scripts, and cache tuning.", icon: Database },
  { title: "Memory & Battery Tuning", description: "Profiling and fixing resource leaks for better device performance.", icon: Gauge },
  { title: "User Feedback Loop", description: "Review analysis, feature requests, and priority bug triage.", icon: MessageSquare },
  { title: "Compliance Updates", description: "GDPR, COPPA, and store policy compliance maintenance.", icon: Lock },
  { title: "Disaster Recovery", description: "Backup strategies and rapid rollback for critical app failures.", icon: HardDrive },
] as const;

export const mobileMaintTechStack = [
  { name: "React Native", icon: "/images/tech/react-native.svg", category: "Cross-platform" },
  { name: "Flutter", icon: "/images/tech/flutter.svg", category: "Cross-platform" },
  { name: "Kotlin", icon: "/images/tech/kotlin.svg", category: "Android" },
  { name: "Swift", icon: "/images/tech/swift.svg", category: "iOS" },
  { name: "Firebase", icon: "/images/tech/google-workspace.svg", category: "Backend" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg", category: "API" },
  { name: "React", icon: "/images/tech/react.svg", category: "Frontend" },
  { name: "Redux", icon: "/images/tech/javascript.svg", category: "State" },
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud" },
  { name: "Docker", icon: "/images/tech/docker.svg", category: "DevOps" },
  { name: "MongoDB", icon: "/images/tech/mongodb.svg", category: "Database" },
  { name: "Java", icon: "/images/tech/java.svg", category: "Backend" },
] as const;

export const mobileMaintProcess = [
  { step: "Audit", description: "App health, crash logs, and store rating baseline review." },
  { step: "Plan", description: "Maintenance schedule, SLA, and support model selection." },
  { step: "Monitor", description: "24/7 crash, performance, and analytics monitoring activated." },
  { step: "Maintain", description: "Bug fixes, updates, and enhancements on schedule." },
  { step: "Report", description: "Monthly app health, crash, and user engagement reports." },
  { step: "Optimize", description: "Continuous performance tuning and feature improvements." },
] as const;

export const mobileMaintRelated = [
  { label: "Android App", href: siteRoutes.androidAppDevelopment, icon: "/images/tech/kotlin.svg", description: "Native Android app development and launch." },
  { label: "iOS App", href: siteRoutes.iosAppDevelopment, icon: "/images/tech/swift.svg", description: "Native iPhone and iPad app development." },
  { label: "Website Maintenance", href: siteRoutes.websiteMaintenance, icon: "/images/service-web.jpg", description: "Keep your web and API backends maintained." },
  { label: "Payment Gateway", href: siteRoutes.paymentGateway, icon: "/images/portfolio-fintech.jpg", description: "In-app payment integration maintenance." },
] as const;

export const mobileMaintProjects = [
  { id: "fintech-maint", title: "Fintech App Care", description: "Monthly iOS & Android maintenance with 99.9% crash-free sessions.", image: "/images/portfolio-fintech.jpg", tag: "Fintech" },
  { id: "ecom-maint", title: "E-commerce App Support", description: "Store updates, payment SDK patches, and OS compatibility.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
  { id: "health-maint", title: "Healthcare App Maintenance", description: "HIPAA-aware updates, telehealth fixes, and security patches.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
] as const;

export const mobileMaintBlogs = [
  { title: "Why Mobile App Maintenance Matters", excerpt: "The hidden cost of neglecting app updates and crash monitoring.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
  { title: "iOS vs Android OS Updates", excerpt: "How to keep your app compatible with the latest OS releases.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "App Store Rating Management", excerpt: "Strategies to maintain and improve your app store ratings.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
] as const;

export const mobileMaintFaqs: ProductFaq[] = [
  { question: "What is mobile app maintenance?", answer: "Mobile app maintenance is the ongoing process of keeping your iOS and Android apps updated, secure, and performant — including bug fixes, OS compatibility, crash monitoring, and feature enhancements." },
  { question: "Why is app maintenance necessary?", answer: "Without maintenance, apps crash on new OS versions, lose store ratings, become vulnerable to security threats, and fall behind competitors with outdated UX." },
  { question: "What tasks are included in mobile app maintenance?", answer: "Crash monitoring, OS updates, SDK patches, bug fixes, performance optimization, store management, security patches, analytics monitoring, and feature enhancements." },
  { question: "How often should mobile apps be updated?", answer: "At minimum quarterly for OS compatibility. High-traffic apps benefit from monthly updates, and critical bugs should be patched within 24–48 hours." },
  { question: "What is the cost of mobile app maintenance?", answer: "Our packages start at $300/year (₹18,000) for Starter (3 hrs/month) up to $900/year (₹65,000) for Premium (20 hrs/month). AMC and dedicated models also available." },
  { question: "How does app maintenance handle user feedback?", answer: "We monitor app store reviews, in-app feedback, and crash reports — triaging issues by severity and implementing fixes in scheduled maintenance sprints." },
  { question: "Why are security updates important for apps?", answer: "Mobile apps handle sensitive user data and payments. Security patches protect against vulnerabilities, comply with store policies, and maintain user trust." },
  { question: "What tools are used for app performance monitoring?", answer: "Firebase Crashlytics, Google Analytics, Sentry, New Relic, Firebase Performance Monitoring, and custom dashboards for real-time app health." },
  { question: "How is app compatibility maintained with OS updates?", answer: "We test on beta OS releases, update deprecated APIs, fix breaking changes, and validate on a device matrix before each store submission." },
  { question: "What are the benefits of regular app optimization?", answer: "Faster load times, fewer crashes, better store ratings, higher retention, improved security, and lower long-term development costs." },
];
