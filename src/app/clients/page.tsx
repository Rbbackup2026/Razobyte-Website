import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import Clients from "@/components/home/Clients";

export const metadata: Metadata = {
  title: "Our Clients | Razobyte",
  description:
    "Explore the brands and businesses Razobyte has partnered with across industries — from startups to established enterprises.",
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Our Clients"
          title="Trusted by Growing Businesses"
          description="From startups to established enterprises — we build long-term partnerships through results, reliability, and real collaboration."
        />
        <Clients />
      </main>
      <Footer />
    </>
  );
}
