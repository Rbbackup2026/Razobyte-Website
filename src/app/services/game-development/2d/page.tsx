import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameComingSoonContent from "@/components/services/GameComingSoonContent";

export const metadata: Metadata = {
  title: "2D Game Development | Coming Soon | Razobyte",
  description: "Razobyte 2D game development — pixel-perfect adventures and arcade experiences. Coming soon.",
};

export default function Game2DPage() {
  return (
    <>
      <Header />
      <GameComingSoonContent variant="2d" />
      <Footer />
    </>
  );
}
