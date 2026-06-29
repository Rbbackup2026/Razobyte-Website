import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WooCommerceDevelopmentPageContent from "@/components/services/WooCommerceDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Custom WooCommerce Website Development Services | Razobyte",
  description:
    "Razobyte builds custom WooCommerce stores on WordPress — themes, plugins, payment gateways, migrations, SEO, and performance optimization.",
  keywords: ["WooCommerce development", "WooCommerce developers India", "WordPress ecommerce"],
};

export default function WooCommerceDevelopmentPage() {
  return (
    <>
      <Header />
      <WooCommerceDevelopmentPageContent />
      <Footer />
    </>
  );
}
