import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WebsiteDesignPageContent from "@/components/services/WebsiteDesignPageContent";

export const metadata: Metadata = {
  title: "Best Website Design Company | Web Design Services | Razobyte",
  description:
    "Razobyte is a leading website design company in India — custom, responsive, and SEO-friendly web design that helps your brand stand out and convert visitors into customers.",
  keywords: [
    "website design company",
    "web design services India",
    "responsive website design",
    "professional web design",
    "Razobyte website design",
  ],
};

export default function WebsiteDesignPage() {
  return (
    <>
      <Header />
      <WebsiteDesignPageContent />
      <Footer />
    </>
  );
}
