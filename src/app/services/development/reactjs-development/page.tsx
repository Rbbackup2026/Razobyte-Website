import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReactjsDevelopmentPageContent from "@/components/services/ReactjsDevelopmentPageContent";

export const metadata: Metadata = {
  title: "ReactJS Website Development Services | Hire React Developers | Razobyte",
  description:
    "Razobyte is a custom ReactJS development company — SPAs, Next.js apps, PWAs, dashboards, e-commerce, API integration, and dedicated React developer teams.",
  keywords: [
    "ReactJS development",
    "hire React developers",
    "React website India",
    "ReactJS company",
    "Next.js development",
  ],
};

export default function ReactjsDevelopmentPage() {
  return (
    <>
      <Header />
      <ReactjsDevelopmentPageContent />
      <Footer />
    </>
  );
}
