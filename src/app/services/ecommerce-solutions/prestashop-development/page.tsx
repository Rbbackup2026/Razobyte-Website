import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrestaShopDevelopmentPageContent from "@/components/services/PrestaShopDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Custom PrestaShop Development Services | PrestaShop eCommerce | Razobyte",
  description:
    "Razobyte delivers custom PrestaShop development — store design, modules, migration, SEO, AI integrations, and ongoing support for flexible scalable e-commerce.",
  keywords: [
    "PrestaShop development",
    "PrestaShop developers India",
    "PrestaShop custom theme",
    "PrestaShop migration",
    "PrestaShop ecommerce",
  ],
};

export default function PrestaShopDevelopmentPage() {
  return (
    <>
      <Header />
      <PrestaShopDevelopmentPageContent />
      <Footer />
    </>
  );
}
