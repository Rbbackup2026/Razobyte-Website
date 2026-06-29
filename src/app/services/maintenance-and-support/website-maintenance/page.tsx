import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebsiteMaintenanceDevelopmentPageContent from "@/components/services/WebsiteMaintenanceDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Expert Website Maintenance Services & Packages | Razobyte",
  description:
    "Razobyte offers website maintenance packages — backups, security scanning, performance optimization, content updates, WordPress care, and 24/7 support.",
  keywords: [
    "website maintenance services",
    "website maintenance packages India",
    "WordPress maintenance",
    "monthly website support",
    "website care plans",
  ],
};

export default function WebsiteMaintenancePage() {
  return (
    <>
      <Header />
      <WebsiteMaintenanceDevelopmentPageContent />
      <Footer />
    </>
  );
}
