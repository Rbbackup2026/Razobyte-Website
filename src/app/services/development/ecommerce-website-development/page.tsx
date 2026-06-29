import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EcommerceWebsiteDevelopmentPageContent from "@/components/services/EcommerceWebsiteDevelopmentPageContent";

export const metadata: Metadata = {
  title: "E-commerce Website Development Services | Razobyte",
  description:
    "Razobyte builds custom e-commerce websites — Shopify, Magento, WooCommerce, payment gateways, inventory, CRO, SEO, and mobile-optimized online stores.",
  keywords: [
    "ecommerce website development",
    "e-commerce development India",
    "online store development",
    "custom ecommerce",
    "Shopify Magento WooCommerce",
  ],
};

export default function EcommerceWebsiteDevelopmentPage() {
  return (
    <>
      <Header />
      <EcommerceWebsiteDevelopmentPageContent />
      <Footer />
    </>
  );
}
