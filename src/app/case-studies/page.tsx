import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import Portfolio from "@/components/home/Portfolio";

export const metadata: Metadata = {
  title: "Case Studies | Razobyte",
  description:
    "Explore Razobyte case studies — real projects across e-commerce, healthcare, fintech, and more.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Case Studies"
          title="Our Work Speaks for Itself"
          description="Real projects, real outcomes — see how we've helped businesses launch, scale, and transform digitally."
        />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
