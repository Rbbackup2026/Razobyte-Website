import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CareersPageContent from "@/components/careers/CareersPageContent";

export const metadata: Metadata = {
  title: "Careers at Razobyte | IT & Digital Solutions — Join Our Team",
  description:
    "Join Razobyte — we're hiring digital marketing, web design, and software development interns across Gurugram, Delhi, and Mumbai. Shape the future with us.",
  keywords: [
    "Razobyte careers",
    "IT jobs Gurgaon",
    "digital marketing intern",
    "software developer intern",
    "join Razobyte",
  ],
};

export default function AboutCareersPage() {
  return (
    <>
      <Header />
      <CareersPageContent />
      <Footer />
    </>
  );
}
