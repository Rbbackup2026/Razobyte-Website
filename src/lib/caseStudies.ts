import { COMPANY_PROJECTS_PLUS } from "./company";

export const caseStudiesStats = [
  { value: "98%", label: "Clients Satisfied" },
  { value: COMPANY_PROJECTS_PLUS, label: "Successful Projects" },
  { value: "14M+", label: "Total Lines of Code" },
  { value: "8+", label: "Years of Excellence" },
] as const;

export const industries = [
  "All Industries",
  "Healthcare",
  "E-Commerce",
  "Finance",
  "IT Solutions",
] as const;

export type CaseStudy = {
  id: string;
  industry: string;
  client: string;
  title: string;
  summary: string;
  paragraphs: string[];
  results: string[];
  image: string;
  tag: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "mdrc-mobile-app",
    industry: "Healthcare",
    client: "MDRC",
    title: "Making Healthcare More Accessible with a Smart Mobile App",
    summary:
      "Modern Diagnostic & Research Centre wanted a user-friendly mobile app to simplify test bookings, report tracking, and appointments — with patient data kept safe and secure.",
    paragraphs: [
      "MDRC (Modern Diagnostic & Research Centre) wanted to bring convenience to their patients by developing a user-friendly mobile app. Their goal was to simplify the process of booking diagnostic tests, tracking medical reports, and managing appointments while keeping patient data safe and secure.",
      "We built a fast, easy-to-use mobile app that made it possible for patients to book tests with just a few taps, get real-time notifications about their reports, and access all their medical information on the go. The app was designed to be simple, secure, and reliable for patients of all ages.",
      "Since the launch, MDRC has seen a huge increase in online test bookings and a sharp drop in missed appointments. Patients enjoy the convenience, and hospital staff have more time to focus on patient care.",
    ],
    results: [
      "Huge increase in online test bookings",
      "Sharp drop in missed appointments",
      "Secure, on-the-go medical access",
    ],
    image: "/images/portfolio-health.jpg",
    tag: "Mobile App",
  },
  {
    id: "mdrc-web-platform",
    industry: "Healthcare",
    client: "MDRC",
    title: "Digitizing Healthcare with an Easy-to-Use Online Platform",
    summary:
      "A powerful web platform for doctors and patients to access records, book tests, and manage reports — replacing an outdated, slow legacy system.",
    paragraphs: [
      "While MDRC had a strong physical presence, they needed a powerful online platform for doctors and patients to access medical records, book tests, and manage reports without delays. Their existing system was outdated and slow, causing frustration for both staff and patients.",
      "We designed a web-based application that made operations faster and smoother. Features included secure login, real-time data for informed decisions, report downloads, appointment scheduling, and online payments — all from a single dashboard.",
      "Report delivery is now 50% faster, workflow efficiency has increased significantly, and patient data is safer and more accessible on the cloud.",
    ],
    results: [
      "50% faster report delivery",
      "Significant workflow efficiency gains",
      "Safer cloud-based patient data",
    ],
    image: "/images/service-web.jpg",
    tag: "Web Platform",
  },
  {
    id: "mdrc-data-integration",
    industry: "Healthcare",
    client: "MDRC",
    title: "Bringing Data Together for Smarter Healthcare Management",
    summary:
      "Custom integrations and an analytics dashboard that connected disconnected systems and eliminated manual data entry.",
    paragraphs: [
      "MDRC was struggling with disorganized data and disconnected systems, making it difficult to keep track of information efficiently. Manual processes led to errors and delays across departments.",
      "Razobyte stepped in to connect the dots by developing custom integrations that allowed all their systems to talk to each other seamlessly — eliminating manual data entry and reducing errors. We also built an advanced analytics dashboard for real-time insights.",
      "The result was a 35% boost in efficiency and better patient experiences. Leadership now has clear visibility into operations and can make data-driven decisions faster.",
    ],
    results: [
      "35% boost in operational efficiency",
      "Real-time analytics dashboard",
      "Seamless system integrations",
    ],
    image: "/images/portfolio-fintech.jpg",
    tag: "Integration & Analytics",
  },
];

export const caseStudyTestimonials = [
  {
    name: "Alvin Hong",
    role: "Manager",
    quote:
      "Razobyte's digital marketing and SEO services have been instrumental in growing our online presence. Their team is professional, responsive, and delivers measurable results.",
    image: "/images/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Eunice Yong",
    role: "Director",
    quote:
      "Their SEO and Google Adwords expertise helped us reach the right audience. We've seen a significant improvement in leads and brand visibility since partnering with Razobyte.",
    image: "/images/avatar-2.jpg",
    rating: 5,
  },
] as const;

export const contactServiceOptions = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing / SEO",
  "E-Commerce",
  "CRM / ERP",
  "Other",
] as const;
