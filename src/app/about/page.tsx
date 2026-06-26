import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutPageContent from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | RazoByte — Digital Solutions Since 2015",
  description:
    "Founded in 2015 in Gurgaon, RazoByte blends technology and strategy to help businesses grow through web development, CRM, ERP, digital marketing, and intelligent automation.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutPageContent />
      <Footer />
    </>
  );
}
