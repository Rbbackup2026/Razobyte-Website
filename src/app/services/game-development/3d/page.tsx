import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameComingSoonContent from "@/components/services/GameComingSoonContent";

export const metadata: Metadata = {
  title: "3D Game Development | Coming Soon | Razobyte",
  description: "Razobyte 3D game development — immersive worlds and real-time rendering. Coming soon.",
};

export default function Game3DPage() {
  return (
    <>
      <Header />
      <GameComingSoonContent variant="3d" />
      <Footer />
    </>
  );
}
