import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PhpDevelopmentPageContent from "@/components/services/PhpDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Custom PHP Web Development Services | Razobyte",
  description:
    "Hire expert PHP developers at Razobyte — custom websites, full-stack apps, APIs, Laravel & CodeIgniter frameworks, CRM/ERP portals, and PHP 8 migrations.",
  keywords: [
    "PHP development",
    "custom PHP website",
    "PHP web development India",
    "hire PHP developers",
    "Laravel CodeIgniter",
  ],
};

export default function PhpDevelopmentPage() {
  return (
    <>
      <Header />
      <PhpDevelopmentPageContent />
      <Footer />
    </>
  );
}
