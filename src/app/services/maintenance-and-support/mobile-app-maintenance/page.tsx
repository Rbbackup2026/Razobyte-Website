import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileAppMaintenanceDevelopmentPageContent from "@/components/services/MobileAppMaintenanceDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Mobile App Maintenance Services | Expert Support & Updates | Razobyte",
  description:
    "Razobyte provides mobile app maintenance for iOS and Android — crash monitoring, OS updates, bug fixes, App Store management, security patches, and 24/7 support.",
  keywords: [
    "mobile app maintenance",
    "app maintenance services India",
    "iOS Android app support",
    "app crash monitoring",
    "mobile app updates",
  ],
};

export default function MobileAppMaintenancePage() {
  return (
    <>
      <Header />
      <MobileAppMaintenanceDevelopmentPageContent />
      <Footer />
    </>
  );
}
