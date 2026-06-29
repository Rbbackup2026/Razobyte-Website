import {
  Smartphone,
  Code2,
  Palette,
  Search,
  RefreshCw,
  Wrench,
  ArrowUpRight,
  Target,
  Coins,
  Clock,
  Users,
  MessageCircle,
  Network,
  Zap,
  Shield,
  Layers,
  Globe,
  BarChart3,
  Bell,
  Database,
  Cloud,
  Cpu,
  PenTool,
  CheckCircle2,
  Rocket,
  Headphones,
  FileText,
  Settings,
  Monitor,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const ANDROID_GREEN = "#3DDC84";
export const ANDROID_BLUE = "#2b8def";

export const androidHero = {
  title: "Android App Development",
  subtitle: "Hire Android developers who take your app idea from concept to reality.",
  description:
    "Razobyte delivers feature-rich, interactive, and secure Android applications — with dedicated developers who act as an extension of your team, from discovery through Play Store launch and beyond.",
};

export const androidHighlights = [
  "Native Kotlin & Java",
  "Material Design UI",
  "Play Store deployment",
  "Agile delivery",
] as const;

export function getAndroidStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: "200+", label: "Android Apps Built" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const androidIntro =
  "Our team of experienced Android app developers drives value-added services to global customers with strong domain expertise. Hire Android app programmers from Razobyte to get the best support — whether you need a startup MVP or an enterprise-grade mobile solution.";

export const androidDedicatedIntro =
  "Dedicated Android developers for hire from a vast pool of skilled technical resources with both technical and domain knowledge. We build apps that are feature-rich, interactive, and secure — and our developers integrate seamlessly as an extension of your IT business with flexible full-time, part-time, or hourly engagement.";

export const androidBenefits = [
  { title: "Focus on Core Processes", description: "Free your internal team to focus on business while we handle Android development end to end.", icon: Target },
  { title: "Cost Savings", description: "Reduce overhead with offshore dedicated developers — no recruitment, infrastructure, or benefits costs.", icon: Coins },
  { title: "Faster Time to Market", description: "Pre-vetted Android experts ready to start immediately with proven agile workflows.", icon: Rocket },
  { title: "Technical Excellence", description: "Kotlin-first development, clean architecture, and Play Store best practices baked in.", icon: Zap },
  { title: "Scalable Team", description: "Scale your Android team up or down based on project phases without long-term commitments.", icon: Users },
  { title: "24/7 Collaboration", description: "Overlap-friendly time zones, daily standups, and transparent progress tracking.", icon: Headphones },
] as const;

export const androidExpertise = [
  { title: "Native Android App Development", description: "Kotlin and Java apps built with Jetpack Compose, MVVM, and modern Android architecture.", icon: Smartphone },
  { title: "Android App Design", description: "Material Design 3 UI/UX with intuitive navigation and pixel-perfect layouts.", icon: Palette },
  { title: "Android Testing", description: "Unit, integration, and UI testing with Espresso, JUnit, and automated CI pipelines.", icon: Search },
  { title: "Android Apps Upgrade", description: "Legacy app modernization, SDK migrations, and performance refactoring.", icon: RefreshCw },
  { title: "Android App Maintenance", description: "Ongoing bug fixes, OS compatibility updates, and feature enhancements.", icon: Wrench },
  { title: "Application Porting", description: "Migrate iOS, web, or hybrid apps to native Android with feature parity.", icon: ArrowUpRight },
] as const;

export const androidKeyReasons = [
  { title: "Workforce Reimagined", description: "Access top Android talent on demand without the overhead of permanent hires.", icon: Users },
  { title: "Direct Point of Contact", description: "A dedicated project manager as your single point of contact for seamless communication.", icon: MessageCircle },
  { title: "Agile Collaboration", description: "Sprint-based delivery with daily updates, demos, and transparent task boards.", icon: Network },
  { title: "Domain Expertise", description: "Developers experienced in fintech, healthcare, ecommerce, logistics, and more.", icon: Globe },
  { title: "IP Protection", description: "NDA-backed engagements with full code ownership transferred to you.", icon: Shield },
  { title: "Quality Assurance", description: "Rigorous QA on real devices before every release to the Play Store.", icon: CheckCircle2 },
] as const;

export const androidHiringModels = [
  {
    id: "fulltime" as const,
    title: "Full-Time Dedicated",
    description: "160 hours/month of a dedicated Android developer working exclusively on your project.",
    icon: Monitor,
    hours: "160 hrs/mo",
    bestFor: "Long-term product builds",
  },
  {
    id: "parttime" as const,
    title: "Part-Time Dedicated",
    description: "80 hours/month for ongoing feature work, maintenance, or phased development.",
    icon: Clock,
    hours: "80 hrs/mo",
    bestFor: "Maintenance & iterations",
  },
  {
    id: "hourly" as const,
    title: "Hourly / On-Demand",
    description: "Flexible hourly billing for audits, bug fixes, consultations, or short sprints.",
    icon: Settings,
    hours: "Pay as you go",
    bestFor: "Small tasks & audits",
  },
] as const;

export const androidHiringComparison = [
  { feature: "Monthly Hours", fulltime: "160 hrs", parttime: "80 hrs", hourly: "Flexible" },
  { feature: "Dedicated Developer", fulltime: true, parttime: true, hourly: false },
  { feature: "Project Manager", fulltime: true, parttime: true, hourly: true },
  { feature: "Daily Standups", fulltime: true, parttime: true, hourly: false },
  { feature: "Code Repository Access", fulltime: true, parttime: true, hourly: true },
  { feature: "NDA & IP Ownership", fulltime: true, parttime: true, hourly: true },
  { feature: "Minimum Commitment", fulltime: "3 months", parttime: "2 months", hourly: "10 hrs" },
  { feature: "Weekend Support", fulltime: true, parttime: false, hourly: false },
  { feature: "Play Store Deployment", fulltime: true, parttime: true, hourly: true },
  { feature: "Post-Launch Support", fulltime: true, parttime: true, hourly: true },
] as const;

export const androidTechComparison = [
  { feature: "Primary Language", kotlin: "Kotlin", java: "Java", flutter: "Dart" },
  { feature: "UI Framework", kotlin: "Jetpack Compose", java: "XML Layouts", flutter: "Widget Tree" },
  { feature: "Performance", kotlin: "Native", java: "Native", flutter: "Near-native" },
  { feature: "Play Store Fit", kotlin: "Excellent", java: "Excellent", flutter: "Good" },
  { feature: "Google Recommendation", kotlin: true, java: false, flutter: false },
  { feature: "Code Conciseness", kotlin: "High", java: "Moderate", flutter: "High" },
  { feature: "Learning Curve", kotlin: "Moderate", java: "Moderate", flutter: "Moderate" },
  { feature: "Best For", kotlin: "New native apps", java: "Legacy systems", flutter: "Cross-platform" },
] as const;

export const androidServices = [
  { title: "Custom Android Apps", description: "Bespoke native apps tailored to your business logic and brand.", icon: Code2 },
  { title: "E-commerce Android Apps", description: "Shopping carts, payments, push notifications, and order tracking.", icon: Smartphone },
  { title: "Enterprise Mobility", description: "Secure internal apps with SSO, offline sync, and role-based access.", icon: Shield },
  { title: "IoT & Wearable Apps", description: "Bluetooth, sensor integration, and Android Wear companion apps.", icon: Cpu },
  { title: "Social & Chat Apps", description: "Real-time messaging, media sharing, and social feed experiences.", icon: MessageCircle },
  { title: "Fintech Android Apps", description: "Biometric auth, encrypted storage, and payment gateway integration.", icon: Coins },
  { title: "Healthcare Apps", description: "HIPAA-aware patient portals, telehealth, and appointment booking.", icon: FileText },
  { title: "On-Demand Apps", description: "Uber-style booking, GPS tracking, and real-time notifications.", icon: Bell },
  { title: "Media Streaming Apps", description: "Video/audio playback, DRM, and adaptive bitrate streaming.", icon: Monitor },
  { title: "AR/VR Experiences", description: "ARCore-powered augmented reality features and immersive UI.", icon: Layers },
  { title: "API Integration", description: "REST, GraphQL, Firebase, and third-party SDK integrations.", icon: Cloud },
  { title: "App Analytics", description: "Firebase Analytics, Crashlytics, and custom event tracking.", icon: BarChart3 },
] as const;

export const androidTechStack = [
  { name: "Kotlin", icon: "/images/tech/kotlin.svg", category: "Language" },
  { name: "Java", icon: "/images/tech/java.svg", category: "Language" },
  { name: "Jetpack Compose", icon: "/images/tech/kotlin.svg", category: "UI" },
  { name: "Android SDK", icon: "/images/tech/kotlin.svg", category: "Platform" },
  { name: "Flutter", icon: "/images/tech/flutter.svg", category: "Cross-platform" },
  { name: "React Native", icon: "/images/tech/react-native.svg", category: "Cross-platform" },
  { name: "Firebase", icon: "/images/tech/google-workspace.svg", category: "Backend" },
  { name: "Room DB", icon: "/images/tech/mongodb.svg", category: "Database" },
  { name: "Retrofit", icon: "/images/tech/nodejs.svg", category: "Networking" },
  { name: "Gradle", icon: "/images/tech/docker.svg", category: "Build" },
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud" },
  { name: "Play Console", icon: "/images/tech/google-workspace.svg", category: "Deploy" },
] as const;

export const androidProcess = [
  { step: "Inquiry", description: "Share your app idea, goals, and technical requirements." },
  { step: "Consult", description: "Consult with our Android experts on scope and architecture." },
  { step: "Engage", description: "Select full-time, part-time, or hourly engagement model." },
  { step: "Kickoff", description: "Sign off, onboard developers, and begin sprint zero." },
  { step: "Build", description: "Agile development with weekly demos and feedback loops." },
  { step: "Scale", description: "Scale your team as the product grows and launches." },
] as const;

export const androidHireSteps = [
  { step: "Drop an Inquiry", description: "Tell us about your Android project and timeline.", icon: FileText },
  { step: "Consult With Experts", description: "Free consultation to define scope, tech stack, and team size.", icon: Users },
  { step: "Select Engagement Model", description: "Choose full-time, part-time, or hourly based on your needs.", icon: Settings },
  { step: "Sign Off & Begin Work", description: "NDA, contract, and developer onboarding within days.", icon: PenTool },
  { step: "Scale Your Team", description: "Add designers, QA, or backend devs as your app evolves.", icon: Rocket },
] as const;

export const androidIndustries = [
  { title: "E-commerce & Retail", description: "Product catalogs, checkout, loyalty programs, and push promos.", icon: Smartphone },
  { title: "Healthcare", description: "Patient apps, telemedicine, health tracking, and EHR integration.", icon: Shield },
  { title: "Fintech & Banking", description: "Mobile wallets, UPI, trading apps, and secure transactions.", icon: Coins },
  { title: "Education", description: "E-learning, live classes, quizzes, and progress tracking.", icon: FileText },
  { title: "Logistics & Delivery", description: "Fleet tracking, route optimization, and proof-of-delivery.", icon: Globe },
  { title: "Entertainment", description: "Streaming, gaming, social feeds, and content subscriptions.", icon: Monitor },
] as const;

export const androidRelated = [
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/service-design.jpg", description: "Beautiful Material Design interfaces for your Android app." },
  { label: "React JS Website", href: siteRoutes.reactjsDevelopment, icon: "/images/tech/react.svg", description: "Companion web portals and admin dashboards." },
  { label: "Payment Gateway", href: siteRoutes.paymentGateway, icon: "/images/portfolio-fintech.jpg", description: "In-app payment integrations with Razorpay and Stripe." },
  { label: "Website Maintenance", href: siteRoutes.websiteMaintenance, icon: "/images/service-web.jpg", description: "Keep your web and API backends maintained." },
] as const;

export const androidProjects = [
  { id: "fintech-app", title: "Fintech Android App", description: "Secure banking app with biometric login and UPI payments.", image: "/images/portfolio-fintech.jpg", tag: "Fintech" },
  { id: "ecom-app", title: "E-commerce Android App", description: "Shopping app with cart, wishlist, and push notifications.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
  { id: "health-app", title: "Healthcare Android App", description: "Telehealth booking with video consult and prescriptions.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
] as const;

export const androidBlogs = [
  { title: "Why Kotlin for Android in 2026", excerpt: "Google's preferred language delivers safer, more concise native apps.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
  { title: "Jetpack Compose Best Practices", excerpt: "Modern declarative UI patterns for faster Android development.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "Play Store Optimization Guide", excerpt: "ASO tips to boost downloads and ratings on Google Play.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
] as const;

export const androidFaqs: ProductFaq[] = [
  { question: "What is Android app development?", answer: "Android app development is the process of creating software applications for devices running Google's Android OS — using Kotlin, Java, or cross-platform frameworks, then publishing to the Google Play Store." },
  { question: "What tools are commonly used for Android app development?", answer: "Android Studio, Kotlin, Jetpack Compose, Gradle, Firebase, Retrofit, Room, Espresso, and the Google Play Console are standard tools in our Android stack." },
  { question: "What is the cost of Android app development?", answer: "Costs vary by complexity — from ₹3L for simple apps to ₹15L+ for enterprise solutions. Our hiring models (full-time, part-time, hourly) offer flexible pricing." },
  { question: "What are the benefits of Android apps?", answer: "Android holds 70%+ global market share, offers open customization, reaches diverse device tiers, and provides flexible monetization through Play Store, ads, and subscriptions." },
  { question: "How does Kotlin improve Android app development?", answer: "Kotlin is concise, null-safe, interoperable with Java, and Google's recommended language — reducing bugs and development time with modern language features." },
  { question: "What are some design considerations for Android apps?", answer: "Material Design 3 guidelines, responsive layouts for varied screen sizes, accessibility, dark mode support, and intuitive navigation patterns are essential." },
  { question: "How do Android apps generate revenue?", answer: "Through paid downloads, in-app purchases, subscriptions, ads (AdMob), freemium models, and enterprise licensing." },
  { question: "How is testing performed for Android apps?", answer: "We use JUnit for unit tests, Espresso for UI tests, Firebase Test Lab for device matrix testing, and manual QA on physical devices before release." },
  { question: "What are the latest trends in Android app development?", answer: "Jetpack Compose, on-device ML, foldable device support, 5G-enabled experiences, super apps, and Kotlin Multiplatform for shared code." },
  { question: "What is the difference between Android and iOS app development?", answer: "Android uses Kotlin/Java with fragmented device ecosystem; iOS uses Swift with Apple's walled garden. Android offers wider reach; iOS typically yields higher per-user revenue." },
];
