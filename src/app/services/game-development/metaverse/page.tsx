import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameComingSoonContent from "@/components/services/GameComingSoonContent";

export const metadata: Metadata = {
  title: "Meta Verse Development | Coming Soon | Razobyte",
  description: "Razobyte metaverse development — virtual worlds, avatars, and digital economies. Coming soon.",
};

export default function GameMetaversePage() {
  return (
    <>
      <Header />
      <GameComingSoonContent variant="metaverse" />
      <Footer />
    </>
  );
}
