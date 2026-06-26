import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import Blogs from "@/components/home/Blogs";

export const metadata: Metadata = {
  title: "Blogs | Razobyte",
  description:
    "Read Razobyte's latest insights on AI, cloud, cybersecurity, SEO, e-commerce, and digital transformation.",
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Blogs"
          title="Insights from Our Experts"
          description="Trends, guides, and perspectives on technology, marketing, and building digital products that last."
        />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
