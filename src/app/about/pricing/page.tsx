import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing | Razobyte — SEO, Web, SMM & Digital Marketing Plans",
  description:
    "Transparent Razobyte pricing for SEO, logo design, website development, SMM, SEM, Google Ads, and SMO. Silver, Gold, Diamond & Platinum plans to fit every business stage.",
  keywords: [
    "Razobyte pricing",
    "SEO pricing",
    "website development cost",
    "digital marketing packages",
    "SMM pricing India",
  ],
};

export default function AboutPricingPage() {
  return (
    <>
      <Header />
      <PricingPageContent />
      <Footer />
    </>
  );
}
