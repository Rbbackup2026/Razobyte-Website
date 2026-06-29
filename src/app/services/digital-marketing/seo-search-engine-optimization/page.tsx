import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SeoSearchEngineOptimizationPageContent from "@/components/services/SeoSearchEngineOptimizationPageContent";

export const metadata: Metadata = {
  title: "SEO Company – Proven SEO Services for Business Growth | Razobyte",
  description:
    "Razobyte is a trusted SEO company delivering on-page, off-page, and technical SEO — keyword research, backlink building, analytics, and proven strategies for business growth in India.",
  keywords: [
    "SEO company India",
    "search engine optimization services",
    "on-page SEO",
    "off-page SEO",
    "technical SEO",
    "SEO agency",
  ],
};

export default function SeoSearchEngineOptimizationPage() {
  return (
    <>
      <Header />
      <SeoSearchEngineOptimizationPageContent />
      <Footer />
    </>
  );
}
