import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CRMPageContent from "@/components/products/CRMPageContent";

export const metadata: Metadata = {
  title: "Custom CRM Development | Intelligent Lead Management | Razobyte",
  description:
    "Razobyte builds custom CRM platforms with intelligent lead management, unified customer conversations, cloud telephony, WhatsApp integration, and end-to-end implementation support.",
};

export default function CRMPage() {
  return (
    <>
      <Header />
      <CRMPageContent />
      <Footer />
    </>
  );
}
