import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LaravelDevelopmentPageContent from "@/components/services/LaravelDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Laravel Website Development Services | Razobyte",
  description:
    "Razobyte builds custom Laravel websites and web apps — MVC architecture, Blade templates, Eloquent ORM, REST APIs, e-commerce, migrations, and enterprise Laravel development.",
  keywords: [
    "Laravel development",
    "Laravel website India",
    "hire Laravel developers",
    "Laravel web application",
    "Laravel API development",
  ],
};

export default function LaravelDevelopmentPage() {
  return (
    <>
      <Header />
      <LaravelDevelopmentPageContent />
      <Footer />
    </>
  );
}
