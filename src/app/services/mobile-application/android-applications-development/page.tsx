import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AndroidAppDevelopmentPageContent from "@/components/services/AndroidAppDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Android App Development Services | Hire Android Developers | Razobyte",
  description:
    "Razobyte builds native Android apps with Kotlin, Jetpack Compose, and Material Design — hire dedicated Android developers full-time, part-time, or hourly.",
  keywords: [
    "Android app development",
    "hire Android developers India",
    "Kotlin Android development",
    "native Android apps",
    "Android app developers",
  ],
};

export default function AndroidAppDevelopmentPage() {
  return (
    <>
      <Header />
      <AndroidAppDevelopmentPageContent />
      <Footer />
    </>
  );
}
