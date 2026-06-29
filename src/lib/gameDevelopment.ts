import { siteRoutes } from "./routes";

export type GameVariant = "2d" | "3d" | "metaverse";

export type GamePageConfig = {
  variant: GameVariant;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
  accentLight: string;
  glow: string;
  bgGradient: string;
  siblingLinks: { label: string; href: string }[];
};

export const gamePages: Record<GameVariant, GamePageConfig> = {
  "2d": {
    variant: "2d",
    title: "2D Game Development",
    tagline: "LEVEL LOADING…",
    description:
      "Retro charm meets modern polish. Our 2D game studio is crafting pixel-perfect adventures, side-scrollers, and mobile arcade experiences — built with love for classic gameplay.",
    features: [
      "Pixel & vector art pipelines",
      "Mobile & desktop targets",
      "Physics & animation systems",
      "Multiplayer-ready architecture",
    ],
    accent: "#00f5d4",
    accentLight: "#72efdd",
    glow: "rgba(0,245,212,0.45)",
    bgGradient: "from-[#0a0e27] via-[#1a1a4e] to-[#0d0221]",
    siblingLinks: [
      { label: "3D Games", href: siteRoutes.game3d },
      { label: "Meta Verse", href: siteRoutes.gameMetaverse },
    ],
  },
  "3d": {
    variant: "3d",
    title: "3D Game Development",
    tagline: "WORLD GENERATING…",
    description:
      "Immersive worlds are on the horizon. We're building next-gen 3D experiences with real-time rendering, cinematic environments, and gameplay that pushes hardware beautifully.",
    features: [
      "Real-time 3D engines",
      "Character & environment art",
      "VR-ready experiences",
      "Cross-platform deployment",
    ],
    accent: "#7b2ff7",
    accentLight: "#b06fff",
    glow: "rgba(123,47,247,0.5)",
    bgGradient: "from-[#050510] via-[#1a0a3e] to-[#0a1628]",
    siblingLinks: [
      { label: "2D Games", href: siteRoutes.game2d },
      { label: "Meta Verse", href: siteRoutes.gameMetaverse },
    ],
  },
  metaverse: {
    variant: "metaverse",
    title: "Meta Verse Development",
    tagline: "ENTERING THE VERSE…",
    description:
      "The next dimension of digital interaction is almost here. Virtual worlds, avatars, digital economies, and immersive social spaces — Razobyte is gearing up to build your metaverse.",
    features: [
      "Virtual world architecture",
      "Avatar & identity systems",
      "NFT & digital asset integration",
      "Social & commerce layers",
    ],
    accent: "#f72585",
    accentLight: "#ff85a1",
    glow: "rgba(247,37,133,0.45)",
    bgGradient: "from-[#0c0015] via-[#1a0533] to-[#050818]",
    siblingLinks: [
      { label: "2D Games", href: siteRoutes.game2d },
      { label: "3D Games", href: siteRoutes.game3d },
    ],
  },
};
