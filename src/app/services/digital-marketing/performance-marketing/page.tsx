import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PerformanceMarketingPageContent from "@/components/services/PerformanceMarketingPageContent";

export const metadata: Metadata = {
  title: "Performance Marketing Company | ROI-Driven Strategies Globally | Razobyte",
  description:
    "Razobyte delivers global Performance Marketing services — PPC, display, social ads, CRO, affiliate marketing, and ROI-driven strategies for measurable business growth.",
  keywords: [
    "performance marketing",
    "ROI driven marketing",
    "performance marketing agency India",
    "PPC management",
    "conversion rate optimization",
  ],
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <Header />
      <PerformanceMarketingPageContent />
      <Footer />
    </>
  );
}
