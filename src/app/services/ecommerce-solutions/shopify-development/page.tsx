import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ShopifyDevelopmentPageContent from "@/components/services/ShopifyDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Professional Shopify Website Development Services | Razobyte",
  description:
    "Razobyte builds custom Shopify stores — themes, app integrations, payment setup, SEO optimization, and ongoing support. Launch your e-commerce business with expert Shopify developers.",
  keywords: [
    "Shopify development",
    "Shopify developers India",
    "custom Shopify theme",
    "Shopify store setup",
    "ecommerce development Razobyte",
  ],
};

export default function ShopifyDevelopmentPage() {
  return (
    <>
      <Header />
      <ShopifyDevelopmentPageContent />
      <Footer />
    </>
  );
}
