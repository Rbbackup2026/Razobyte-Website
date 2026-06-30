import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Razobyte | Book a Free Consultation",
  description:
    "Get in touch with Razobyte — call +91-8448158188 or book a free session. Offices in Gurugram and Ahmedabad. Website, app, CRM & digital solutions.",
  keywords: [
    "contact Razobyte",
    "Gurugram",
    "Ahmedabad",
    "book consultation",
    "IT company contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageContent />
      <Footer />
    </>
  );
}
