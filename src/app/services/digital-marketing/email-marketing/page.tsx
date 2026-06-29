import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmailMarketingPageContent from "@/components/services/EmailMarketingPageContent";

export const metadata: Metadata = {
  title: "Email Marketing Services | Effective Campaigns by Razobyte",
  description:
    "Razobyte delivers expert Email Marketing services — personalized campaigns, automated workflows, newsletters, A/B testing, and analytics for business growth in India.",
  keywords: [
    "email marketing services",
    "email marketing agency India",
    "email campaigns",
    "newsletter marketing",
    "email automation",
  ],
};

export default function EmailMarketingPage() {
  return (
    <>
      <Header />
      <EmailMarketingPageContent />
      <Footer />
    </>
  );
}
