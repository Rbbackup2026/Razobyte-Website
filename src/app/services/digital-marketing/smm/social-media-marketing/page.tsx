import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmmSocialMediaMarketingPageContent from "@/components/services/SmmSocialMediaMarketingPageContent";

export const metadata: Metadata = {
  title: "Social Media Marketing Company for Business Growth | Expert SMM | Razobyte",
  description:
    "Razobyte is a leading Social Media Marketing company offering expert SMM services — paid ads, content creation, influencer marketing, and platform-specific campaigns for business growth in India.",
  keywords: [
    "social media marketing",
    "SMM services India",
    "SMM company",
    "Facebook marketing",
    "Instagram marketing agency",
  ],
};

export default function SmmSocialMediaMarketingPage() {
  return (
    <>
      <Header />
      <SmmSocialMediaMarketingPageContent />
      <Footer />
    </>
  );
}
