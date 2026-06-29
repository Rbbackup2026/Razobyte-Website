import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AngularjsDevelopmentPageContent from "@/components/services/AngularjsDevelopmentPageContent";

export const metadata: Metadata = {
  title: "AngularJS Website Development Services | Hire Angular Developers | Razobyte",
  description:
    "Razobyte is a custom AngularJS development company — SPAs, enterprise apps, migration, real-time dashboards, API integration, and dedicated Angular developer teams.",
  keywords: [
    "AngularJS development",
    "hire Angular developers",
    "Angular website India",
    "Angular SPA development",
    "Angular enterprise",
  ],
};

export default function AngularjsWebsitePage() {
  return (
    <>
      <Header />
      <AngularjsDevelopmentPageContent />
      <Footer />
    </>
  );
}
