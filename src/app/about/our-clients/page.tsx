import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OurClientsPageContent from "@/components/clients/OurClientsPageContent";

export const metadata: Metadata = {
  title: "Our Clients & Success Stories | Razobyte",
  description:
    "Trusted by 250+ businesses worldwide. Explore client success stories, featured projects, testimonials, and why companies choose Razobyte for digital transformation.",
  keywords: [
    "Razobyte clients",
    "client success stories",
    "businesses that trust Razobyte",
    "digital transformation",
    "our clients",
  ],
};

export default function OurClientsPage() {
  return (
    <>
      <Header />
      <OurClientsPageContent />
      <Footer />
    </>
  );
}
