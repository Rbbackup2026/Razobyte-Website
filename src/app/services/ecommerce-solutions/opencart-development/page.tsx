import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OpenCartDevelopmentPageContent from "@/components/services/OpenCartDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Professional OpenCart eCommerce Development Services | Razobyte",
  description:
    "Razobyte builds custom OpenCart stores — themes, modules, multi-store setup, payment integrations, SEO optimization, and ongoing support for scalable e-commerce.",
  keywords: [
    "OpenCart development",
    "OpenCart developers India",
    "OpenCart custom theme",
    "OpenCart ecommerce",
    "OpenCart module development",
  ],
};

export default function OpenCartDevelopmentPage() {
  return (
    <>
      <Header />
      <OpenCartDevelopmentPageContent />
      <Footer />
    </>
  );
}
