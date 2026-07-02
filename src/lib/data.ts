import { homeRoutes, siteRoutes } from "./routes";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";

export const navLinks = [
  { label: "Home", href: homeRoutes.home },
  { label: "About Us", href: siteRoutes.about, hasAboutMenu: true },
  { label: "Services", href: homeRoutes.services, hasMegaMenu: true },
  { label: "Industry", href: homeRoutes.industry, hasIndustryMenu: true },
  { label: "Reach Us", href: siteRoutes.contact },
] as const;

export function getStats() {
  return [
    { value: "98%", label: "Client Retention" },
    { value: COMPANY_PROJECTS_PLUS, label: "Projects Delivered" },
    { value: "14M+", label: "Lines of Code" },
    { value: formatYearsPlus(), label: "Years Experience" },
  ];
}

export function getHeroStats() {
  return [
    { value: COMPANY_PROJECTS_PLUS, label: "Projects" },
    { value: formatYearsPlus(), label: "Years Experience" },
  ];
}

export const services = [
  {
    title: "Web Development",
    description:
      "Scalable, high-performance websites built with modern frameworks.",
    image: "/images/service-web.jpg",
    href: siteRoutes.reactjsDevelopment,
  },
  {
    title: "Mobile App Development",
    description:
      "Native & cross-platform apps that deliver seamless experiences.",
    image: "/images/service-mobile.jpg",
    href: siteRoutes.androidAppDevelopment,
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that boost visibility and conversions.",
    image: "/images/service-marketing.jpg",
    href: siteRoutes.seoSearchEngineOptimization,
  },
  {
    title: "E-Commerce Solutions",
    description: "End-to-end online stores optimized for growth and sales.",
    image: "/images/service-ecommerce.jpg",
    href: siteRoutes.shopifyDevelopment,
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered interfaces that delight users and drive results.",
    image: "/images/service-design.jpg",
    href: siteRoutes.uiUxDesign,
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your site secure, fast, and up to date with expert ongoing support.",
    image: "/images/solutions.jpg",
    href: siteRoutes.websiteMaintenance,
  },
];

export type TechCategory = "frontend" | "backend" | "mobile" | "data" | "deploy";

export type Technology = {
  name: string;
  icon: string;
  category: TechCategory;
};

export const techCategories = [
  { id: "all" as const, label: "All Stack" },
  { id: "frontend" as const, label: "Frontend" },
  { id: "backend" as const, label: "Backend" },
  { id: "mobile" as const, label: "Mobile & Native" },
  { id: "data" as const, label: "Data & DevOps" },
  { id: "deploy" as const, label: "Deployments" },
];

export const technologies: Technology[] = [
  { name: "React.js", icon: "/images/tech/react.svg", category: "frontend" },
  { name: "Next.js", icon: "/images/tech/nextjs.svg", category: "frontend" },
  { name: "TypeScript", icon: "/images/tech/typescript.svg", category: "frontend" },
  { name: "JavaScript", icon: "/images/tech/javascript.svg", category: "frontend" },
  { name: "Node.js", icon: "/images/tech/nodejs.svg", category: "backend" },
  { name: "Python", icon: "/images/tech/python.svg", category: "backend" },
  { name: "PHP", icon: "/images/tech/php.svg", category: "backend" },
  { name: "Laravel", icon: "/images/tech/laravel.svg", category: "backend" },
  { name: "Java", icon: "/images/tech/java.png", category: "backend" },
  { name: "Flutter", icon: "/images/tech/flutter.png", category: "mobile" },
  { name: "React Native", icon: "/images/tech/react-native.svg", category: "mobile" },
  { name: "Kotlin", icon: "/images/tech/kotlin.png", category: "mobile" },
  { name: "Swift", icon: "/images/tech/swift.png", category: "mobile" },
  { name: "MongoDB", icon: "/images/tech/mongodb.png", category: "data" },
  { name: "Docker", icon: "/images/tech/docker.png", category: "data" },
  { name: "AWS", icon: "/images/tech/aws.png", category: "deploy" },
  { name: "Google Workspace", icon: "/images/tech/google-workspace.png", category: "deploy" },
  { name: "cPanel", icon: "/images/tech/cpanel.svg", category: "deploy" },
  { name: "Hostinger", icon: "/images/tech/hostinger.svg", category: "deploy" },
];

export const whyChooseUs = [
  {
    title: "Tech-Driven Excellence",
    description:
      "We leverage cutting-edge technologies to deliver solutions that keep you ahead of the curve.",
  },
  {
    title: "Innovation at Every Step",
    description:
      "From ideation to deployment, we infuse creativity and innovation into every project.",
  },
  {
    title: "Seamless Digital Integration",
    description:
      "We ensure your digital tools work together harmoniously for maximum efficiency.",
  },
];

export const faqs = [
  {
    question: "What services does Razobyte offer?",
    answer:
      "We offer web development, mobile app development, digital marketing, e-commerce solutions, UI/UX design, and IT consulting tailored to your business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A standard website takes 4–8 weeks, while larger applications may take 3–6 months. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes! We offer comprehensive maintenance and support packages including updates, security patches, performance optimization, and 24/7 technical assistance.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across healthcare, e-commerce, education, finance, real estate, and more — adapting our expertise to each industry's unique requirements.",
  },
  {
    question: "How do I get started with Razobyte?",
    answer:
      "Simply book a free consultation session through our website or contact us directly. We'll discuss your goals and create a customized roadmap for your digital journey.",
  },
];

export const blogs = [
  {
    title: "Cloud Native Development",
    excerpt:
      "Discover how cloud-native architecture accelerates deployment and scales your applications effortlessly.",
    image: "/images/blog-cloud.jpg",
    date: "Jun 15, 2026",
  },
  {
    title: "AI in Modern Web Apps",
    excerpt:
      "Learn how artificial intelligence is transforming user experiences and business intelligence.",
    image: "/images/blog-ai.jpg",
    date: "Jun 10, 2026",
  },
  {
    title: "Mobile-First Strategy",
    excerpt:
      "Why designing for mobile first is no longer optional — it's essential for digital success.",
    image: "/images/blog-mobile.jpg",
    date: "Jun 5, 2026",
  },
];

export const testimonials = [
  {
    name: "James Walker",
    role: "Digital Manager",
    text: "Razobyte transformed our digital presence completely. Their team's expertise and dedication exceeded our expectations at every turn.",
    rating: 5,
    image: "/images/avatar-1.jpg",
  },
  {
    name: "Rahul Sharma",
    role: "CEO, TechVentures",
    text: "Working with Razobyte was a game-changer. They delivered a robust e-commerce platform that increased our sales by 150% in six months.",
    rating: 5,
    image: "/images/avatar-2.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, StartupHub",
    text: "The mobile app they built for us is flawless. User engagement has tripled since launch. Highly recommend their development team!",
    rating: 5,
    image: "/images/avatar-3.jpg",
  },
];

export const portfolio = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio-ecommerce.jpg",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    image: "/images/portfolio-health.jpg",
  },
  {
    title: "FinTech Dashboard",
    category: "UI/UX Design",
    image: "/images/portfolio-fintech.jpg",
  },
];

export { clients } from "./clients";
export type { ClientBrand } from "./clients";

export const footerServices = {
  Design: ["UI/UX Design", "Website Design"],
  Development: [
    "Website Development",
    "React JS",
    "Laravel",
    "PHP",
    "E-Commerce",
  ],
  "Digital Marketing": [
    "SEO",
    "SEM",
    "Social Media Marketing",
    "Email Marketing",
  ],
  "Mobile Apps": ["Android App", "iOS App"],
};

export const offices = [
  {
    city: "Gurugram",
    address:
      "Unit no 243, Tower A, Spaze I-Tech Park, Sector 49, Road, Gurugram 122018, Haryana",
    phone: "+91-8448158188",
    email: "contact-us@razobyte.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  {
    city: "Ahmedabad",
    address:
      "C Siddhi Vinayak Tower, Sarkhej Gandhinagar Hwy, Near DCP Office, Ahmedabad, Gujarat 380051",
    phone: "+91-8448158188",
    email: "contact-us@razobyte.com",
    hours: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/razobyte",
    glyph: "IG",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/razobyte",
    glyph: "FB",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/razobyte/",
    glyph: "IN",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/razobyte",
    glyph: "X",
  },
] as const;

export const primaryPhone = offices[0].phone;

export const primaryPhoneTel = `tel:${primaryPhone.replace(/\s/g, "")}`;

export const whatsappHref = `https://wa.me/${primaryPhone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Razobyte, I'd like to book a free consultation."
)}`;
