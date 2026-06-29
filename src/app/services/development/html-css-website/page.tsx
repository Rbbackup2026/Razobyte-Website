import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HtmlCssDevelopmentPageContent from "@/components/services/HtmlCssDevelopmentPageContent";

export const metadata: Metadata = {
  title: "HTML & CSS Website Development Services | Razobyte",
  description:
    "Razobyte builds responsive HTML5 & CSS3 websites — custom design, landing pages, Bootstrap & Tailwind frameworks, animations, and SEO-friendly front-end development.",
  keywords: [
    "HTML CSS development",
    "HTML5 website",
    "responsive web design",
    "CSS3 animations",
    "front-end development India",
  ],
};

export default function HtmlCssWebsitePage() {
  return (
    <>
      <Header />
      <HtmlCssDevelopmentPageContent />
      <Footer />
    </>
  );
}
