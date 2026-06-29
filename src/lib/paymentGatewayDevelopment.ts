import {
  Shield,
  CreditCard,
  Smartphone,
  Globe,
  Lock,
  Wallet,
  Layers,
  Palette,
  Monitor,
  PenTool,
  Wrench,
  RefreshCw,
  Bitcoin,
  CalendarClock,
  Languages,
  Nfc,
  Coins,
  FileCheck,
  KeyRound,
  Webhook,
  BarChart3,
  Zap,
  Users,
  Store,
  Building2,
  Landmark,
  Cpu,
  ShoppingBag,
  Code2,
  Plug,
  Server,
  CheckCircle2,
  Fingerprint,
  Receipt,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const PAY_INDIGO = "#6366F1";
export const PAY_GREEN = "#10B981";

export const paymentHero = {
  title: "Looking for a Reliable & Secure Payment Gateway?",
  subtitle: "Say goodbye to transaction hassles.",
  description:
    "Razobyte builds seamless, PCI-compliant payment gateway integrations for websites and mobile apps — from checkout UI to fraud prevention, so every transaction is fast, secure, and trusted.",
};

export const paymentHighlights = [
  "PCI DSS compliant flows",
  "Multi-gateway support",
  "Fraud & risk management",
  "Mobile & web checkout",
] as const;

export function getPaymentStats() {
  return [
    { value: "97%", label: "Clients Satisfied" },
    { value: "392+", label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const paymentIntro =
  "We specialize in creating seamless and secure payment gateway solutions that enhance your business operations. Whether you're building a mobile app or integrating payments into your website, we cover every aspect — from UI/UX design to ongoing maintenance.";

export const paymentTrustPillars = [
  { title: "Seamless Payment Integrations", description: "Connect Razorpay, Stripe, PayPal, and more without disrupting your existing stack.", icon: Plug },
  { title: "Fintech Standards Compliance", description: "PCI DSS, GDPR-ready flows, and industry best practices baked in from day one.", icon: FileCheck },
  { title: "Strong Encryption & Tokenization", description: "SSL/TLS, tokenized card data, and zero plain-text storage of sensitive details.", icon: KeyRound },
  { title: "AI-Enabled Fraud & Risk Management", description: "Smart rules, velocity checks, and anomaly detection to block suspicious transactions.", icon: Fingerprint },
] as const;

export const paymentSolutions = [
  { title: "Payment Gateway UI Design", description: "Intuitive checkout interfaces focused on simplicity, clarity, and conversion.", icon: Palette },
  { title: "Payment Gateway App Prototyping", description: "Interactive prototypes that visualize the final payment experience before build.", icon: Monitor },
  { title: "Payment Gateway UX Design", description: "Frictionless, fast, and secure transaction flows optimized for every user.", icon: PenTool },
  { title: "Payment Gateway Design System", description: "Consistent payment components across web, iOS, and Android platforms.", icon: Layers },
  { title: "Cross-Platform Mobile Payment Apps", description: "Native-quality payment experiences on iOS and Android from a single codebase.", icon: Smartphone },
  { title: "Maintenance & Support", description: "Continuous updates, security patches, and gateway API version upgrades.", icon: Wrench },
] as const;

export const paymentFlowStakeholders = [
  { label: "Customer", color: "#94a3b8", icon: Users },
  { label: "Merchant Store", color: "#f43f5e", icon: Store },
  { label: "Payment Gateway", color: "#8b5cf6", icon: Shield },
  { label: "Payment Processor", color: "#f59e0b", icon: Cpu },
  { label: "Bank", color: "#2b8def", icon: Landmark },
  { label: "Merchant Account", color: "#a16207", icon: Building2 },
] as const;

export const paymentMethods = [
  { title: "Credit/Debit Card Integration", description: "Visa, Mastercard, RuPay, and Amex with 3D Secure authentication.", icon: CreditCard },
  { title: "Cryptocurrency Payments", description: "Blockchain integration for Bitcoin, Ethereum, and stablecoin checkout.", icon: Bitcoin },
  { title: "E-Wallets", description: "PayPal, Razorpay, Stripe, Apple Pay, Google Pay, and UPI wallets.", icon: Wallet },
  { title: "Buy Now, Pay Later", description: "BNPL options like Klarna, Affirm, and Simpl for flexible checkout.", icon: CalendarClock },
] as const;

export const paymentFeatures = [
  { title: "Multiple Payment Options", description: "Credit cards, PayPal, Razorpay, cryptocurrency, UPI, and more in one checkout.", icon: Coins },
  { title: "Secure Payment Gateway", description: "Advanced encryption, SSL, and PCI DSS protocols to safeguard every transaction.", icon: Shield },
  { title: "Blockchain Payments", description: "Transparent, decentralized transactions with smart contract support.", icon: Bitcoin },
  { title: "Multi-Currency Wallet", description: "Accept and settle in multiple currencies — ideal for global businesses.", icon: Globe },
  { title: "Contactless Payments", description: "NFC-based tap-to-pay solutions for in-store and mobile POS.", icon: Nfc },
  { title: "Multilingual Support", description: "Localized checkout in multiple languages for a global audience.", icon: Languages },
] as const;

export const paymentServices = [
  { title: "Custom Gateway Integration", description: "Tailored API wiring for your platform, cart, and order management.", icon: Code2 },
  { title: "Subscription & Recurring Billing", description: "Automated renewals, trials, and dunning for SaaS and memberships.", icon: RefreshCw },
  { title: "Webhook & Event Handling", description: "Real-time payment status, refunds, and dispute notifications.", icon: Webhook },
  { title: "Refund & Chargeback Management", description: "Streamlined refund flows and chargeback response tooling.", icon: Receipt },
  { title: "Split & Marketplace Payments", description: "Multi-vendor payouts, commission splits, and escrow flows.", icon: Users },
  { title: "Payment Analytics Dashboard", description: "Revenue insights, failure rates, and conversion funnel tracking.", icon: BarChart3 },
  { title: "PCI Compliance Consulting", description: "SAQ guidance, scope reduction, and secure architecture reviews.", icon: Lock },
  { title: "One-Click Checkout", description: "Saved cards, express pay, and guest checkout optimization.", icon: Zap },
  { title: "Invoice & Payment Links", description: "Shareable payment links and branded invoice pages.", icon: FileCheck },
  { title: "POS & Terminal Integration", description: "In-person payments synced with your online order system.", icon: Nfc },
  { title: "Sandbox & Test Environments", description: "Full staging setups with test cards before going live.", icon: Server },
  { title: "24/7 Monitoring & Alerts", description: "Uptime checks, failed transaction alerts, and incident response.", icon: CheckCircle2 },
] as const;

export const paymentGateways = [
  { name: "Razorpay", icon: "/images/tech/nodejs.svg", category: "India" },
  { name: "Stripe", icon: "/images/tech/javascript.svg", category: "Global" },
  { name: "PayPal", icon: "/images/tech/google-workspace.svg", category: "Global" },
  { name: "PayU", icon: "/images/tech/php.svg", category: "India" },
  { name: "CCAvenue", icon: "/images/tech/laravel.svg", category: "India" },
  { name: "Authorize.Net", icon: "/images/tech/aws.svg", category: "US" },
  { name: "Square", icon: "/images/tech/react.svg", category: "Global" },
  { name: "PhonePe", icon: "/images/tech/nextjs.svg", category: "UPI" },
  { name: "Instamojo", icon: "/images/tech/mongodb.svg", category: "India" },
  { name: "Cashfree", icon: "/images/tech/docker.svg", category: "India" },
  { name: "Braintree", icon: "/images/tech/typescript.svg", category: "Global" },
  { name: "2Checkout", icon: "/images/tech/java.svg", category: "Global" },
] as const;

export const paymentProcess = [
  { step: "Discover", description: "Audit current checkout, gateways, and compliance requirements." },
  { step: "Design", description: "UX flows, wireframes, and secure payment UI mockups." },
  { step: "Integrate", description: "API setup, webhooks, and sandbox testing with test cards." },
  { step: "Secure", description: "PCI review, encryption, tokenization, and fraud rules." },
  { step: "Launch", description: "Go-live, monitoring, and payment reconciliation setup." },
  { step: "Optimize", description: "CRO, failure analysis, and gateway performance tuning." },
] as const;

export const paymentIndustries = [
  { title: "E-commerce & Retail", description: "Cart checkout, one-click pay, and multi-vendor marketplaces.", icon: ShoppingBag },
  { title: "SaaS & Subscriptions", description: "Recurring billing, trials, upgrades, and dunning flows.", icon: RefreshCw },
  { title: "Fintech & Banking", description: "Wallet apps, P2P transfers, and regulatory-compliant APIs.", icon: Landmark },
  { title: "Healthcare", description: "HIPAA-aware payment pages for clinics and telehealth.", icon: Shield },
  { title: "Education", description: "Course fees, installment plans, and international student payments.", icon: Users },
  { title: "Travel & Hospitality", description: "Multi-currency bookings, deposits, and refund policies.", icon: Globe },
] as const;

export const paymentRelated = [
  { label: "E-commerce Website", href: siteRoutes.ecommerceWebsiteDevelopment, icon: "/images/service-ecommerce.jpg", description: "Full online stores with integrated checkout and inventory." },
  { label: "Laravel Development", href: siteRoutes.laravelDevelopment, icon: "/images/tech/laravel.svg", description: "Robust backend APIs for payment processing and webhooks." },
  { label: "React JS Website", href: siteRoutes.reactjsDevelopment, icon: "/images/tech/react.svg", description: "Modern checkout UIs with Stripe Elements and Razorpay." },
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/service-design.jpg", description: "Conversion-focused payment flow design and prototyping." },
] as const;

export const paymentProjects = [
  { id: "fintech-portal", title: "Fintech Payment Portal", description: "Multi-gateway checkout with real-time fraud scoring and analytics.", image: "/images/portfolio-fintech.jpg", tag: "Fintech" },
  { id: "ecom-checkout", title: "E-commerce Checkout", description: "One-click Razorpay integration with subscription billing.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
  { id: "saas-billing", title: "SaaS Billing Engine", description: "Stripe-powered recurring payments with invoice automation.", image: "/images/service-web.jpg", tag: "SaaS" },
] as const;

export const paymentBlogs = [
  { title: "Choosing the Right Payment Gateway", excerpt: "Razorpay vs Stripe vs PayPal — what fits your business model.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "PCI Compliance Made Simple", excerpt: "A practical guide to securing online transactions without the headache.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "UPI & Digital Wallets in India", excerpt: "How to integrate UPI, PhonePe, and Paytm for maximum conversions.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const paymentFaqs: ProductFaq[] = [
  { question: "What is a payment gateway?", answer: "A payment gateway is a technology that securely authorizes and processes online payments between customers, merchants, and banks — encrypting card data and routing transactions to the right processor." },
  { question: "What are the best payment gateways in India?", answer: "Razorpay, PayU, CCAvenue, Instamojo, Cashfree, and PhonePe Business are popular in India. The best choice depends on your transaction volume, industry, and international needs." },
  { question: "How does payment gateway integration work?", answer: "We connect your website or app to the gateway's API — handling checkout UI, tokenization, webhooks for payment status, and order updates in your backend automatically." },
  { question: "What charges are associated with payment gateways?", answer: "Gateways typically charge a per-transaction fee (1.5–3% + fixed fee) plus setup or annual fees. We help you compare TCO across providers and negotiate better rates at scale." },
  { question: "What are secure payment gateways?", answer: "Secure gateways use SSL/TLS encryption, PCI DSS compliance, 3D Secure authentication, tokenization, and fraud detection — ensuring card data never touches your servers unprotected." },
  { question: "Can payment gateways process international transactions?", answer: "Yes. Gateways like Stripe, PayPal, and Razorpay support multi-currency payments, international cards, and cross-border settlements with FX conversion." },
  { question: "How are payment gateways used in e-commerce?", answer: "In e-commerce, gateways power checkout pages, handle cart payments, process refunds, manage subscriptions, and sync payment status with order management systems." },
  { question: "What is a mobile payment gateway?", answer: "A mobile payment gateway enables in-app purchases, UPI intent flows, Apple Pay, Google Pay, and SDK-based checkout on iOS and Android without redirecting users to a browser." },
  { question: "How does a payment gateway API work?", answer: "The API accepts payment requests from your app, tokenizes sensitive data, routes to the processor, and returns success/failure via webhooks — enabling fully automated order fulfillment." },
  { question: "What is the cost of setting up a payment gateway?", answer: "Setup costs range from ₹25,000 for basic integration to ₹2L+ for custom multi-gateway platforms. We provide transparent quotes after reviewing your requirements and compliance needs." },
];
