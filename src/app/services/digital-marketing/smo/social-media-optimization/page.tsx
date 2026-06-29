import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoSocialMediaOptimizationPageContent from "@/components/services/SmoSocialMediaOptimizationPageContent";

export const metadata: Metadata = {
  title: "Leading Social Media Optimization Company | Expert SMO Services | Razobyte",
  description:
    "Razobyte is a leading SMO company offering expert Social Media Optimization — Facebook, Instagram, LinkedIn, YouTube, content creation, community management, and data-driven growth in India.",
  keywords: [
    "social media optimization",
    "SMO services India",
    "SMO company",
    "Instagram marketing",
    "Facebook optimization",
    "LinkedIn SMO",
  ],
};

export default function SmoSocialMediaOptimizationPage() {
  return (
    <>
      <Header />
      <SmoSocialMediaOptimizationPageContent />
      <Footer />
    </>
  );
}
