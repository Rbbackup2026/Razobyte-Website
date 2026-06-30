import {
  HeartPulse,
  GraduationCap,
  Landmark,
  Factory,
  ShoppingBag,
  Truck,
  Hotel,
  Building2,
  Building,
  Rocket,
  Cloud,
  Heart,
  Users,
  MessageSquare,
  Clock,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import { formatYearsPlus, COMPANY_PROJECTS_PLUS } from "./company";

export const heroStats = [
  { value: "250+", label: "Successful Clients" },
  { value: COMPANY_PROJECTS_PLUS, label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export const trustStatistics = [
  {
    value: "98%",
    title: "Client Satisfaction Rate",
    description:
      "Delivering exceptional quality with long-term customer relationships.",
  },
  {
    value: COMPANY_PROJECTS_PLUS,
    title: "Projects Successfully Delivered",
    description:
      "Web, Mobile, AI, Cloud, ERP and Enterprise Solutions.",
  },
  {
    value: "15M+",
    title: "Lines of Quality Code",
    description: "Secure, scalable and optimized for business success.",
  },
  {
    value: formatYearsPlus(),
    title: "Years of Industry Experience",
    description: "Helping businesses embrace digital transformation.",
  },
] as const;

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseRazobyte: WhyChooseItem[] = [
  {
    title: "Industry Expertise",
    description:
      "Experience across Healthcare, Education, Finance, Manufacturing, Retail, Logistics and SaaS.",
    icon: Layers,
  },
  {
    title: "Dedicated Development Team",
    description:
      "A passionate team of designers, developers, QA engineers and cloud specialists committed to excellence.",
    icon: Users,
  },
  {
    title: "Transparent Communication",
    description:
      "Regular updates, agile methodology and complete project visibility from start to finish.",
    icon: MessageSquare,
  },
  {
    title: "On-Time Delivery",
    description:
      "We follow structured project management to ensure every milestone is delivered as promised.",
    icon: Clock,
  },
  {
    title: "Scalable Solutions",
    description:
      "Applications designed to grow with your business requirements.",
    icon: Cloud,
  },
  {
    title: "Long-Term Support",
    description:
      "Maintenance, security updates and continuous improvements even after project completion.",
    icon: Headphones,
  },
];

export const testimonials = [
  {
    name: "James Walker",
    role: "Managing Director",
    quote:
      "Razobyte exceeded our expectations with their professionalism and technical expertise. Their team delivered a high-quality solution on schedule while maintaining excellent communication throughout the project.",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "CEO",
    quote:
      "Working with Razobyte was one of the best technology decisions for our company. Their innovative approach and dedication helped us improve our digital presence significantly.",
    avatar: "/images/avatar-2.jpg",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Founder",
    quote:
      "The team understood our business goals from day one. Their commitment, creativity and support made the entire development journey smooth and successful.",
    avatar: "/images/avatar-3.jpg",
    rating: 5,
  },
] as const;

export const featuredProjects = [
  {
    title: "Enterprise Business Website",
    description:
      "A responsive corporate website designed to improve brand visibility, lead generation and customer engagement.",
    image: "/images/service-web.jpg",
    tag: "Web Development",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable online shopping platform featuring secure payment integration, inventory management and analytics.",
    image: "/images/portfolio-ecommerce.jpg",
    tag: "E-Commerce",
  },
  {
    title: "Healthcare Management Portal",
    description:
      "A cloud-based healthcare solution enabling secure patient management, appointments and digital records.",
    image: "/images/portfolio-health.jpg",
    tag: "Healthcare",
  },
  {
    title: "Education Platform",
    description:
      "Interactive learning management system designed for schools, institutes and training organizations.",
    image: "/images/service-design.jpg",
    tag: "EdTech",
  },
  {
    title: "CRM & ERP Solution",
    description:
      "Custom enterprise software streamlining business operations and improving productivity.",
    image: "/images/crm/team.jpg",
    tag: "Enterprise",
  },
  {
    title: "AI-Powered Business Dashboard",
    description:
      "Advanced analytics dashboard offering real-time insights and automated reporting.",
    image: "/images/portfolio-fintech.jpg",
    tag: "AI & Analytics",
  },
] as const;

export const industries = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Landmark },
  { name: "Retail", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Logistics", icon: Truck },
  { name: "Hospitality", icon: Hotel },
  { name: "Real Estate", icon: Building2 },
  { name: "Government", icon: Building },
  { name: "Startups", icon: Rocket },
  { name: "SaaS", icon: Cloud },
  { name: "NGOs", icon: Heart },
] as const;

export const successProcess = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "Understanding business goals, challenges and requirements.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Creating the roadmap, architecture and implementation plan.",
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "Building secure, scalable and user-friendly digital solutions.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Ensuring quality, performance and smooth deployment.",
  },
  {
    step: "05",
    title: "Support & Growth",
    description:
      "Continuous optimization, maintenance and future enhancements.",
  },
] as const;

export const retentionReasons = [
  "98% Client Retention Rate",
  "Agile Development Process",
  "Dedicated Project Managers",
  "Secure Development Practices",
  "Transparent Pricing",
  "Timely Delivery",
  "Ongoing Technical Support",
  "Scalable Architecture",
  "Modern Technology Stack",
  "Proven Industry Experience",
] as const;
