import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MagentoDevelopmentPageContent from "@/components/services/MagentoDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Magento Development Services | Magento 2 Experts | Razobyte",
  description:
    "Razobyte is an award-winning Magento development company — custom Magento 2 stores, Adobe Commerce, migrations, Hyvä themes, B2B commerce, and enterprise integrations.",
  keywords: [
    "Magento development",
    "Magento 2 developers India",
    "Adobe Commerce",
    "Magento migration",
    "Hyvä Magento",
  ],
};

export default function MagentoDevelopmentPage() {
  return (
    <>
      <Header />
      <MagentoDevelopmentPageContent />
      <Footer />
    </>
  );
}
