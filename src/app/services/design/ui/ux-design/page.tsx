import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UiUxDesignPageContent from "@/components/services/UiUxDesignPageContent";

export const metadata: Metadata = {
  title: "UI/UX Design & Development Services | Razobyte",
  description:
    "Razobyte delivers user-centric UI/UX design — mobile apps, web platforms, and custom interfaces that enhance user experience, drive conversions, and strengthen your brand.",
  keywords: [
    "UI UX design",
    "user experience design",
    "interface design",
    "mobile app UI",
    "web design Razobyte",
    "Figma design agency",
  ],
};

export default function UiUxDesignPage() {
  return (
    <>
      <Header />
      <UiUxDesignPageContent />
      <Footer />
    </>
  );
}
