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
  Cloud,
  Cpu,
  PenTool,
  CheckCircle2,
  Rocket,
  Headphones,
  FileText,
  Settings,
  Monitor,
  Lightbulb,
  Handshake,
  GitBranch,
  Lock,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const IOS_BLUE = "#007AFF";
export const IOS_SLATE = "#1C1C1E";
export const IOS_PURPLE = "#AF52DE";

export const iosHero = {
  title: "iOS / iPhone App Development",
  subtitle: "Hire top iOS developers to build high-quality iPhone & iPad apps with immersive UX.",
  description:
    "Razobyte delivers feature-rich, interactive, and secure iOS applications — dedicated Swift developers who become an extension of your team, from strategy through App Store launch.",
};

export const iosHighlights = [
  "Native Swift & SwiftUI",
  "Human Interface Guidelines",
  "App Store deployment",
  "iPhone & iPad support",
] as const;

export function getIosStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: "395+", label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const iosIntro =
  "Razobyte offers dedicated iOS/iPhone app developers, programmers, and software engineers on an hourly, part-time, or full-time basis. Our experienced team drives value-added services to global customers with strong domain expertise to build highly scalable, robust, and customized iPhone applications.";

export const iosDedicatedIntro =
  "Hire dedicated iOS/iPhone programmers from Razobyte on a full-time, part-time, or hourly basis to build secure and scalable applications. We provide direct models to hire iOS developers and help clients quickly ramp up teams — becoming an extension of your IT business with cutting-edge iOS development techniques.";

export const iosBenefits = [
  { title: "Skilled Resources", description: "Pre-vetted Swift developers with proven App Store launches and Apple ecosystem expertise.", icon: Users },
  { title: "Cost Savings", description: "Offshore dedicated iOS teams without recruitment overhead, office space, or benefits costs.", icon: Coins },
  { title: "Direct Point of Contact", description: "A dedicated project manager as your single liaison for transparent, fast communication.", icon: MessageCircle },
  { title: "Build Your Own Team", description: "Hand-pick iOS developers, designers, and QA to match your project requirements.", icon: Handshake },
  { title: "Faster Delivery", description: "Agile sprints with weekly demos and rapid iteration on your iPhone app roadmap.", icon: Rocket },
  { title: "Technical Excellence", description: "SwiftUI, Combine, Core Data, and Apple HIG best practices in every build.", icon: Zap },
] as const;

export const iosExpertise = [
  { title: "iPhone App Strategy", description: "Market research, feature roadmaps, and MVP planning for App Store success.", icon: Lightbulb },
  { title: "iPhone App Design", description: "Human Interface Guidelines-compliant UI/UX with Figma prototypes.", icon: Palette },
  { title: "Custom iPhone App Development", description: "Native Swift apps with clean architecture, MVVM, and modular codebases.", icon: Code2 },
  { title: "iPhone App Testing", description: "XCTest, UI testing, TestFlight beta distribution, and device matrix QA.", icon: Search },
  { title: "iPhone Support & Maintenance", description: "iOS version updates, bug fixes, and feature enhancements post-launch.", icon: Wrench },
  { title: "iOS App Migration", description: "Migrate Objective-C to Swift, or port Android/web apps to native iOS.", icon: ArrowUpRight },
] as const;

export const iosKeyReasons = [
  { title: "Apple Ecosystem Mastery", description: "Deep expertise in iPhone, iPad, Apple Watch, and tvOS development.", icon: Smartphone },
  { title: "App Store Success", description: "Proven track record of App Store approvals, ASO, and launch strategies.", icon: Rocket },
  { title: "Secure by Design", description: "Keychain, biometric auth, App Transport Security, and data encryption.", icon: Shield },
  { title: "Scalable Architecture", description: "Modular Swift codebases built for growth and team collaboration.", icon: Layers },
  { title: "IP Protection", description: "NDA-backed engagements with full source code ownership transferred to you.", icon: Lock },
  { title: "Global Delivery", description: "Overlap-friendly time zones with daily standups and sprint reviews.", icon: Globe },
] as const;

export const iosHiringModels = [
  {
    id: "managed" as const,
    title: "Razobyte Managed Team",
    description: "We manage the entire iOS team — PM, developers, QA — you focus on product vision.",
    icon: Users,
    control: "Razobyte-led",
    bestFor: "Hands-off clients",
  },
  {
    id: "client" as const,
    title: "Client Managed Team",
    description: "Dedicated iOS developers reporting directly to your in-house project lead.",
    icon: Monitor,
    control: "Client-led",
    bestFor: "Technical founders",
  },
  {
    id: "hybrid" as const,
    title: "Hybrid Model",
    description: "Shared management — Razobyte handles delivery, you steer priorities and roadmap.",
    icon: GitBranch,
    control: "Shared",
    bestFor: "Growing startups",
  },
] as const;

export const iosEngagementComparison = [
  { feature: "Monthly Hours", fulltime: "160 hrs", parttime: "80 hrs", hourly: "Flexible" },
  { feature: "Dedicated iOS Developer", fulltime: true, parttime: true, hourly: false },
  { feature: "Project Manager", fulltime: true, parttime: true, hourly: true },
  { feature: "TestFlight Distribution", fulltime: true, parttime: true, hourly: true },
  { feature: "App Store Submission", fulltime: true, parttime: true, hourly: true },
  { feature: "NDA & IP Ownership", fulltime: true, parttime: true, hourly: true },
  { feature: "Minimum Commitment", fulltime: "3 months", parttime: "2 months", hourly: "10 hrs" },
  { feature: "SwiftUI Development", fulltime: true, parttime: true, hourly: true },
  { feature: "iPad Optimization", fulltime: true, parttime: true, hourly: false },
  { feature: "Post-Launch Support", fulltime: true, parttime: true, hourly: true },
] as const;

export const iosTechComparison = [
  { feature: "Primary Language", swift: "Swift", objc: "Objective-C", flutter: "Dart" },
  { feature: "UI Framework", swift: "SwiftUI", objc: "UIKit", flutter: "Widget Tree" },
  { feature: "Performance", swift: "Native", objc: "Native", flutter: "Near-native" },
  { feature: "Apple Recommendation", swift: true, objc: false, flutter: false },
  { feature: "Code Safety", swift: "High", objc: "Moderate", flutter: "High" },
  { feature: "Learning Curve", swift: "Moderate", objc: "Steep", flutter: "Moderate" },
  { feature: "Legacy Support", swift: "Good", objc: "Excellent", flutter: "Limited" },
  { feature: "Best For", swift: "New iOS apps", objc: "Legacy codebases", flutter: "Cross-platform" },
] as const;

export const iosHiringModelComparison = [
  { feature: "Team Management", managed: "Razobyte", client: "Client", hybrid: "Shared" },
  { feature: "PM Included", managed: true, client: false, hybrid: true },
  { feature: "Direct Developer Access", managed: false, client: true, hybrid: true },
  { feature: "Sprint Planning", managed: true, client: true, hybrid: true },
  { feature: "QA & Testing", managed: true, client: false, hybrid: true },
  { feature: "App Store Submission", managed: true, client: true, hybrid: true },
  { feature: "Reporting Frequency", managed: "Weekly", client: "Daily", hybrid: "Bi-weekly" },
  { feature: "Best For", managed: "Enterprise", client: "Tech teams", hybrid: "Startups" },
] as const;

export const iosServices = [
  { title: "Custom iPhone Apps", description: "Bespoke native apps tailored to your business logic and brand.", icon: Smartphone },
  { title: "iPad App Development", description: "Tablet-optimized layouts with split views and Apple Pencil support.", icon: Monitor },
  { title: "Apple Watch Apps", description: "watchOS companions with complications, health data, and notifications.", icon: Bell },
  { title: "Enterprise iOS Apps", description: "MDM-compatible apps with SSO, offline sync, and role-based access.", icon: Shield },
  { title: "E-commerce iOS Apps", description: "In-app purchases, Apple Pay, and storefront experiences.", icon: Coins },
  { title: "Fintech iOS Apps", description: "Face ID, Keychain storage, and secure payment integrations.", icon: Lock },
  { title: "Healthcare iOS Apps", description: "HealthKit integration, HIPAA-aware data handling, and telehealth.", icon: FileText },
  { title: "Social & Chat Apps", description: "Real-time messaging, media sharing, and push notifications.", icon: MessageCircle },
  { title: "AR/VR with ARKit", description: "Augmented reality experiences with SceneKit and RealityKit.", icon: Layers },
  { title: "IoT Companion Apps", description: "Bluetooth LE, HomeKit, and sensor data visualization.", icon: Cpu },
  { title: "API & Cloud Integration", description: "REST, GraphQL, Firebase, and AWS backend connectivity.", icon: Cloud },
  { title: "App Analytics", description: "Firebase Analytics, Crashlytics, and custom event tracking.", icon: BarChart3 },
] as const;

export const iosTechStack = [
  { name: "Swift", icon: "/images/tech/swift.svg", category: "Language" },
  { name: "SwiftUI", icon: "/images/tech/swift.svg", category: "UI" },
  { name: "Xcode", icon: "/images/tech/cpp.svg", category: "IDE" },
  { name: "UIKit", icon: "/images/tech/swift.svg", category: "Framework" },
  { name: "Core Data", icon: "/images/tech/mongodb.svg", category: "Database" },
  { name: "Firebase", icon: "/images/tech/google-workspace.svg", category: "Backend" },
  { name: "React Native", icon: "/images/tech/react-native.svg", category: "Cross-platform" },
  { name: "Flutter", icon: "/images/tech/flutter.svg", category: "Cross-platform" },
  { name: "ARKit", icon: "/images/tech/aws.svg", category: "AR" },
  { name: "TestFlight", icon: "/images/tech/docker.svg", category: "Testing" },
  { name: "Apple Pay", icon: "/images/tech/typescript.svg", category: "Payments" },
  { name: "App Store", icon: "/images/tech/nextjs.svg", category: "Deploy" },
] as const;

export const iosProcess = [
  { step: "Inquiry", description: "Share your iOS app idea, goals, and target audience." },
  { step: "Consult", description: "Free consultation on scope, tech stack, and team size." },
  { step: "Engage", description: "Choose managed, client-led, or hybrid hiring model." },
  { step: "Design", description: "Wireframes, prototypes, and HIG-compliant UI design." },
  { step: "Build", description: "Agile Swift development with TestFlight beta releases." },
  { step: "Launch", description: "App Store submission, ASO, and post-launch support." },
] as const;

export const iosHireSteps = [
  { step: "Drop an Inquiry", description: "Tell us about your iPhone/iPad project and timeline.", icon: FileText },
  { step: "Consult With Experts", description: "Free consultation to define scope, stack, and engagement.", icon: Users },
  { step: "Select Engagement Model", description: "Managed team, client-led, or hybrid — your choice.", icon: Settings },
  { step: "Sign Off & Begin Work", description: "NDA, contract, and developer onboarding within days.", icon: PenTool },
  { step: "Scale Your Team", description: "Add designers, QA, or backend devs as your app grows.", icon: Rocket },
] as const;

export const iosIndustries = [
  { title: "E-commerce & Retail", description: "Shopping apps with Apple Pay, wishlists, and push promos.", icon: Smartphone },
  { title: "Healthcare", description: "Patient portals, telehealth, HealthKit, and HIPAA compliance.", icon: Shield },
  { title: "Fintech & Banking", description: "Mobile banking, wallets, trading, and biometric security.", icon: Coins },
  { title: "Education", description: "E-learning, live classes, quizzes, and offline content.", icon: FileText },
  { title: "Entertainment", description: "Streaming, gaming, social feeds, and subscriptions.", icon: Monitor },
  { title: "Logistics & On-Demand", description: "GPS tracking, booking, and real-time notifications.", icon: Globe },
] as const;

export const iosRelated = [
  { label: "Android App", href: siteRoutes.androidAppDevelopment, icon: "/images/tech/kotlin.svg", description: "Cross-platform strategy with native Android development." },
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/service-design.jpg", description: "Human Interface Guidelines-compliant app design." },
  { label: "Payment Gateway", href: siteRoutes.paymentGateway, icon: "/images/portfolio-fintech.jpg", description: "Apple Pay and in-app purchase integrations." },
  { label: "Website Maintenance", href: siteRoutes.websiteMaintenance, icon: "/images/service-web.jpg", description: "Keep your API backends maintained and secure." },
] as const;

export const iosProjects = [
  { id: "fintech-ios", title: "Fintech iOS App", description: "Banking app with Face ID, Apple Pay, and encrypted storage.", image: "/images/portfolio-fintech.jpg", tag: "Fintech" },
  { id: "health-ios", title: "Healthcare iOS App", description: "Telehealth with HealthKit integration and video consult.", image: "/images/portfolio-health.jpg", tag: "Healthcare" },
  { id: "ecom-ios", title: "E-commerce iOS App", description: "Shopping app with in-app purchases and push notifications.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
] as const;

export const iosBlogs = [
  { title: "Why Swift for iOS in 2026", excerpt: "Apple's modern language delivers safer, faster native iPhone apps.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
  { title: "SwiftUI Best Practices", excerpt: "Declarative UI patterns for faster iOS development cycles.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "App Store Optimization Guide", excerpt: "ASO tips to boost downloads and ratings on the App Store.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
] as const;

export const iosFaqs: ProductFaq[] = [
  { question: "What is iOS app development?", answer: "iOS app development is creating software for Apple's iPhone, iPad, and other devices using Swift, SwiftUI, and Apple's frameworks — then publishing to the App Store." },
  { question: "What tools are used for iOS app development?", answer: "Xcode, Swift, SwiftUI, UIKit, Core Data, Firebase, TestFlight, Instruments, and the App Store Connect portal are standard in our iOS stack." },
  { question: "How much does iOS app development cost?", answer: "Costs range from ₹4L for simple apps to ₹20L+ for enterprise solutions. Our full-time, part-time, and hourly models offer flexible pricing." },
  { question: "Why is Swift popular for iOS development?", answer: "Swift is fast, safe, concise, and Apple's recommended language — with modern features like optionals, generics, and seamless Objective-C interoperability." },
  { question: "What are the monetization strategies for iOS apps?", answer: "Paid downloads, in-app purchases, subscriptions, ads (AdMob), freemium models, and enterprise licensing through Apple Business Manager." },
  { question: "How does Apple ensure app security?", answer: "App Transport Security, sandboxing, code signing, App Review, Keychain Services, and regular iOS security updates protect users and developers." },
  { question: "What are the key design guidelines for iOS apps?", answer: "Apple's Human Interface Guidelines cover navigation, typography, color, accessibility, dark mode, and platform-specific patterns for iPhone and iPad." },
  { question: "What are some popular iOS app development frameworks?", answer: "SwiftUI, UIKit, Combine, Core Data, ARKit, HealthKit, CloudKit, and WidgetKit are widely used in modern iOS development." },
  { question: "What trends are shaping iOS app development?", answer: "SwiftUI adoption, on-device ML with Core ML, visionOS readiness, privacy-first design, Live Activities, and App Clips for lightweight experiences." },
  { question: "What is the process of submitting an iOS app to the App Store?", answer: "Build in Xcode → TestFlight beta → App Store Connect metadata → App Review submission → approval → release. We handle the entire process." },
];
