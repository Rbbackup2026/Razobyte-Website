import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ERPPageContent from "@/components/products/ERPPageContent";

export const metadata: Metadata = {
  title: "ERP Solutions | ERPNext, Odoo, Dynamics 365 & More | Razobyte",
  description:
    "Razobyte delivers ERP consulting across ERPNext, Odoo, Microsoft Dynamics 365, SAP Business One, Oracle NetSuite, and Zoho — plus integrations with Tally, Salesforce, Shopify, and WooCommerce.",
};

export default function ERPPage() {
  return (
    <>
      <Header />
      <ERPPageContent />
      <Footer />
    </>
  );
}
