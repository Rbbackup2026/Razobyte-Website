import {
  Lightbulb,
  ShoppingCart,
  Plug,
  Palette,
  FileText,
  Globe,
  CreditCard,
  Megaphone,
  Smartphone,
  Shield,
  Package,
  TrendingUp,
  Search,
  BarChart3,
  RefreshCw,
  Wrench,
  Layers,
  Zap,
  Users,
  Store,
  Truck,
  Lock,
  Boxes,
  Gauge,
  Heart,
  Wallet,
} from "lucide-react";
import { formatYearsPlus } from "./company";
import { homeRoutes, siteRoutes } from "./routes";
import type { ProductFaq } from "./productFaqs";

export const ECOM_GREEN = "#059669";
export const ECOM_AMBER = "#F59E0B";

export const ecommerceHero = {
  title: "Maximize Your Online Store's Potential",
  subtitle: "Streamlined solutions for seamless selling experiences.",
  description:
    "Razobyte is your trusted partner for e-commerce solutions — from strategy to launch. We deliver custom online stores that drive traffic, boost sales, and create memorable shopping experiences for startups and enterprises alike.",
};

export const ecommerceHighlights = [
  "Custom storefronts",
  "Multi-platform expertise",
  "Secure payments",
  "Mobile-first commerce",
] as const;

export function getEcommerceStats() {
  return [
    { value: "98%", label: "Clients Satisfied" },
    { value: "395+", label: "Successful Projects" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years of Excellence" },
  ];
}

export const ecommerceIntro =
  "We deliver your essential e-commerce requirements — whether you're an established enterprise or a growing startup. Our digital commerce solutions simplify order processing, seamless payments, and great shopping experiences that keep customers coming back.";

export const ecommerceEssentials = [
  { title: "Strategy Development", description: "Roadmaps, competitor analysis, and go-to-market planning for your store.", icon: Lightbulb },
  { title: "Custom Cart Setup", description: "Tailored shopping cart flows optimized for conversions.", icon: ShoppingCart },
  { title: "Third-Party Integration", description: "ERP, CRM, shipping, and marketing tools connected seamlessly.", icon: Plug },
  { title: "e-Store Customization", description: "Brand-aligned themes, layouts, and checkout experiences.", icon: Palette },
  { title: "CMS Content Management", description: "Easy product, page, and blog management from anywhere.", icon: FileText },
  { title: "Multi-Site Management", description: "Run multiple stores, regions, and currencies from one dashboard.", icon: Globe },
  { title: "Payment Gateway Integration", description: "Razorpay, Stripe, PayPal, and Authorize.Net with PCI compliance.", icon: CreditCard },
  { title: "Advertising PPC/SEO & SMO", description: "Paid ads, organic search, and social campaigns that drive sales.", icon: Megaphone },
] as const;

export const ecommerceServices = [
  { title: "Custom E-commerce Website Development", description: "Bespoke online stores aligned with your brand and business goals.", icon: Store },
  { title: "E-commerce Platform Integration", description: "Shopify, Magento, WooCommerce, OpenCart — the right platform for you.", icon: Layers },
  { title: "Mobile-Optimized Solutions", description: "Responsive stores with engaging experiences on every device.", icon: Smartphone },
  { title: "Secure Payment Gateway Integration", description: "Trusted, encrypted checkout flows customers feel safe using.", icon: Lock },
  { title: "Inventory Management Solutions", description: "Real-time stock tracking, alerts, and supply chain optimization.", icon: Package },
  { title: "Conversion Rate Optimization", description: "A/B testing, funnel analysis, and checkout optimization.", icon: TrendingUp },
  { title: "Digital Marketing & SEO", description: "Content marketing, social media, and targeted ad campaigns.", icon: Search },
  { title: "Content Management & Catalog", description: "CMS backends to add, manage, and update products anytime.", icon: FileText },
  { title: "Flexibility & Scalability", description: "Multi-product, multi-transaction stores built for growth.", icon: Zap },
  { title: "Web Security & Server Protection", description: "SSL, firewalls, and secure modules for safe online shopping.", icon: Shield },
  { title: "B2B & B2C Commerce", description: "Wholesale portals, tiered pricing, and consumer storefronts.", icon: Users },
  { title: "Maintenance & Support", description: "Updates, security patches, and ongoing store optimization.", icon: Wrench },
] as const;

export const ecommercePlatforms = [
  { name: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg", color: "#96bf48" },
  { name: "WooCommerce", href: siteRoutes.woocommerceDevelopment, icon: "/images/erp/woocommerce.svg", color: "#7f54b3" },
  { name: "Magento", href: siteRoutes.magnetoDevelopment, icon: "/images/service-ecommerce.jpg", color: "#f26322" },
  { name: "OpenCart", href: siteRoutes.opencartDevelopment, icon: "/images/service-ecommerce.jpg", color: "#23a8e0" },
  { name: "PrestaShop", href: siteRoutes.prestashopDevelopment, icon: "/images/service-ecommerce.jpg", color: "#a5096b" },
  { name: "Custom Build", href: siteRoutes.phpDevelopment, icon: "/images/tech/php.svg", color: "#2b8def" },
] as const;

export const ecommerceSuccessEssentials = [
  { title: "Product Inventory", description: "Real-time evaluation for smart decision-making and stock control.", icon: Boxes },
  { title: "Payment Gateways", description: "Convenience and security for every online transaction.", icon: Wallet },
  { title: "Extend Everything", description: "Easy modifications to grow your business anytime, anywhere.", icon: RefreshCw },
  { title: "Analytics & Reporting", description: "Sales dashboards, customer insights, and conversion tracking.", icon: BarChart3 },
  { title: "Shipping Integration", description: "Real-time rates, label printing, and order fulfillment.", icon: Truck },
  { title: "Customer Experience", description: "Wishlists, reviews, loyalty programs, and personalized recommendations.", icon: Heart },
] as const;

export const ecommerceGrowth =
  "Regardless of how complex your online store is, it must be optimized to gain a strong customer base. Our digital e-commerce solutions simplify order processing and seamless payments to deliver great shopping experiences.";

export const ecommerceTechnologiesIntro =
  "Our team uses the latest e-commerce tools to develop feasible solutions that inspire customers to visit your store repeatedly — increasing traffic, boosting sales, and improving retention.";

export const ecommerceTechStack = [
  { name: "Shopify", icon: "/images/tech/nextjs.svg", category: "Platform" },
  { name: "Magento", icon: "/images/service-ecommerce.jpg", category: "Platform" },
  { name: "WooCommerce", icon: "/images/erp/woocommerce.svg", category: "Platform" },
  { name: "React", icon: "/images/tech/react.svg", category: "Frontend" },
  { name: "Laravel", icon: "/images/tech/laravel.svg", category: "Backend" },
  { name: "Stripe", icon: "/images/tech/javascript.svg", category: "Payments" },
  { name: "Razorpay", icon: "/images/tech/nodejs.svg", category: "Payments" },
  { name: "AWS", icon: "/images/tech/aws.svg", category: "Cloud" },
  { name: "Redis", icon: "/images/tech/docker.svg", category: "Cache" },
  { name: "Elasticsearch", icon: "/images/tech/mongodb.svg", category: "Search" },
  { name: "Google Analytics", icon: "/images/tech/google-workspace.svg", category: "Analytics" },
  { name: "Docker", icon: "/images/tech/docker.svg", category: "DevOps" },
] as const;

export const ecommerceProcess = [
  { step: "Discover", description: "Business goals, audience research, and platform selection." },
  { step: "Design", description: "UX flows, wireframes, and branded store mockups." },
  { step: "Develop", description: "Store build, integrations, and payment setup." },
  { step: "Test", description: "Checkout QA, security audit, and load testing." },
  { step: "Launch", description: "Go-live, monitoring, and marketing kickoff." },
  { step: "Grow", description: "CRO, SEO, and ongoing optimization." },
] as const;

export const ecommerceIndustries = [
  { title: "Fashion & Retail", description: "Catalogs, size guides, and lookbook experiences.", icon: Store },
  { title: "Food & Grocery", description: "Delivery slots, subscriptions, and fresh produce stores.", icon: Package },
  { title: "Electronics", description: "Spec comparisons, warranties, and bundle offers.", icon: Gauge },
  { title: "Health & Beauty", description: "Subscription boxes, reviews, and ingredient filters.", icon: Heart },
  { title: "B2B Wholesale", description: "Bulk pricing, quote requests, and account portals.", icon: Users },
  { title: "Digital Products", description: "Downloads, licenses, and membership access.", icon: FileText },
] as const;

export const ecommerceRelated = [
  { label: "Shopify", href: siteRoutes.shopifyDevelopment, icon: "/images/tech/nextjs.svg", description: "Fully hosted e-commerce with apps, themes, and global selling." },
  { label: "WooCommerce", href: siteRoutes.woocommerceDevelopment, icon: "/images/erp/woocommerce.svg", description: "WordPress-powered stores with unlimited customization." },
  { label: "UI/UX Design", href: siteRoutes.uiUxDesign, icon: "/images/tech/react.svg", description: "Conversion-focused store design and checkout UX." },
  { label: "Payment Gateway", href: siteRoutes.paymentGateway, icon: "/images/portfolio-fintech.jpg", description: "Secure Razorpay, Stripe, and PayPal integrations with PCI compliance." },
] as const;

export const ecommerceProjects = [
  { id: "cissern", title: "Cissern Website", description: "Interior design e-commerce with immersive product galleries.", image: "/images/portfolio-fintech.jpg", tag: "Retail" },
  { id: "king-clean", title: "King Clean", description: "Service booking with e-commerce-style checkout flows.", image: "/images/service-web.jpg", tag: "Services" },
  { id: "colorbar", title: "ColorBar Website", description: "Dynamic product catalog with payment integration.", image: "/images/portfolio-ecommerce.jpg", tag: "Ecommerce" },
] as const;

export const ecommerceBlogs = [
  { title: "How Social Media Is Changing", excerpt: "Social platforms evolved into powerful e-commerce marketing engines.", image: "/images/blog-ai.jpg", href: siteRoutes.blogs },
  { title: "10 Tips to Improve Your Website SEO", excerpt: "Practical SEO steps to boost store traffic and conversions.", image: "/images/blog-cloud.jpg", href: siteRoutes.blogs },
  { title: "Mobile vs Responsive Website", excerpt: "Delivering exceptional UX across every screen size.", image: "/images/blog-mobile.jpg", href: siteRoutes.blogs },
] as const;

export const ecommerceFaqs: ProductFaq[] = [
  { question: "What is an e-commerce website?", answer: "An e-commerce website lets businesses sell products or services online — with catalogs, carts, checkout, payments, and order management built in." },
  { question: "What are the benefits of an e-commerce website?", answer: "24/7 sales, global reach, lower overhead than physical stores, data-driven marketing, and scalable growth without geographic limits." },
  { question: "What are the best e-commerce platforms?", answer: "Shopify for quick launches, WooCommerce for WordPress flexibility, Magento for enterprise, OpenCart and PrestaShop for cost-effective custom stores." },
  { question: "What are the key features of a successful e-commerce website?", answer: "Fast load times, mobile responsiveness, secure checkout, clear navigation, product search, reviews, and seamless payment options." },
  { question: "How much does an e-commerce website cost in India?", answer: "Costs vary by complexity — from ₹50,000 for basic stores to ₹5L+ for enterprise platforms. We provide transparent quotes after discovery." },
  { question: "Why is mobile-friendly design important for e-commerce websites?", answer: "Most online shopping happens on phones. Mobile-optimized stores see higher conversions, lower bounce rates, and better Google rankings." },
  { question: "How can SEO improve e-commerce websites?", answer: "Product page optimization, structured data, fast Core Web Vitals, content marketing, and technical SEO drive organic traffic and sales." },
  { question: "How do e-commerce websites handle payment gateway integration?", answer: "We integrate Razorpay, Stripe, PayPal, and others with SSL encryption, PCI compliance, and webhook-based order confirmation." },
  { question: "What are some successful e-commerce website examples?", answer: "Amazon, Flipkart, and Nykaa set the bar. Our portfolio includes retail catalogs, service booking stores, and B2B wholesale portals." },
  { question: "What is the process of e-commerce website development?", answer: "Discovery → design → development → testing → launch → growth. We follow agile sprints with regular demos and feedback cycles." },
];
