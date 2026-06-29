import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CaseStudiesPageContent from "@/components/case-studies/CaseStudiesPageContent";

export const metadata: Metadata = {
  title: "Case Studies | Razobyte — Success Stories & Real Results",
  description:
    "Explore Razobyte case studies — MDRC healthcare mobile app, web platform, and data integration projects delivering measurable business impact.",
  keywords: [
    "Razobyte case studies",
    "healthcare app case study",
    "digital transformation",
    "MDRC",
    "success stories",
  ],
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <CaseStudiesPageContent />
      <Footer />
    </>
  );
}
