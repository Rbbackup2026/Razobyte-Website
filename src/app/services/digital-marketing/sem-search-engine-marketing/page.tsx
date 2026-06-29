import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SemSearchEngineMarketingPageContent from "@/components/services/SemSearchEngineMarketingPageContent";

export const metadata: Metadata = {
  title: "Expert SEM & PPC Services for Maximum ROI | Razobyte",
  description:
    "Razobyte delivers expert Search Engine Marketing and PPC services — Google Ads, Bing Ads, Shopping, Display, Video, remarketing, and data-driven campaigns for maximum ROI in India.",
  keywords: [
    "SEM services India",
    "PPC advertising agency",
    "Google Ads management",
    "search engine marketing",
    "pay per click services",
  ],
};

export default function SemSearchEngineMarketingPage() {
  return (
    <>
      <Header />
      <SemSearchEngineMarketingPageContent />
      <Footer />
    </>
  );
}
