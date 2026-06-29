import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CodeIgniterDevelopmentPageContent from "@/components/services/CodeIgniterDevelopmentPageContent";

export const metadata: Metadata = {
  title: "CodeIgniter Website Development Services | Razobyte",
  description:
    "Razobyte builds custom CodeIgniter 4 websites and web apps — MVC architecture, APIs, migrations, integrations, and enterprise PHP development.",
  keywords: [
    "CodeIgniter development",
    "CodeIgniter 4",
    "PHP web development India",
    "CodeIgniter website",
    "MVC PHP framework",
  ],
};

export default function CodeIgniterWebsitePage() {
  return (
    <>
      <Header />
      <CodeIgniterDevelopmentPageContent />
      <Footer />
    </>
  );
}
