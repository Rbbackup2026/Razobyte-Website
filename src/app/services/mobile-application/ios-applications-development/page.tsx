import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IosAppDevelopmentPageContent from "@/components/services/IosAppDevelopmentPageContent";

export const metadata: Metadata = {
  title: "iOS App Development Services | Hire iPhone Developers | Razobyte",
  description:
    "Razobyte builds native iOS apps with Swift, SwiftUI, and Apple HIG — hire dedicated iPhone developers full-time, part-time, or hourly.",
  keywords: [
    "iOS app development",
    "hire iOS developers India",
    "iPhone app development",
    "Swift iOS development",
    "iOS app developers",
  ],
};

export default function IosAppDevelopmentPage() {
  return (
    <>
      <Header />
      <IosAppDevelopmentPageContent />
      <Footer />
    </>
  );
}
