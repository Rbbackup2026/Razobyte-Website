export type ClientBrand = {
  name: string;
  logo: string;
  favicon: string;
  accent: string;
  accentLight: string;
  industry: string;
};

export const clients: ClientBrand[] = [
  {
    name: "Subway",
    logo: "/images/clients/subway.svg",
    favicon: "/images/clients/favicons/subway.svg",
    accent: "#009845",
    accentLight: "#e8f8ef",
    industry: "Food & Retail",
  },
  {
    name: "TechCorp",
    logo: "/images/clients/techcorp.svg",
    favicon: "/images/clients/favicons/techcorp.svg",
    accent: "#2b8def",
    accentLight: "#e8f4fd",
    industry: "Technology",
  },
  {
    name: "MediCare+",
    logo: "/images/clients/medicare.svg",
    favicon: "/images/clients/favicons/medicare.svg",
    accent: "#e11d48",
    accentLight: "#ffe8ee",
    industry: "Healthcare",
  },
  {
    name: "ShopEase",
    logo: "/images/clients/shopease.svg",
    favicon: "/images/clients/favicons/shopease.svg",
    accent: "#f97316",
    accentLight: "#fff3e8",
    industry: "E-Commerce",
  },
  {
    name: "EduLearn",
    logo: "/images/clients/edulearn.svg",
    favicon: "/images/clients/favicons/edulearn.svg",
    accent: "#7c3aed",
    accentLight: "#f1e9ff",
    industry: "Education",
  },
  {
    name: "FinanceHub",
    logo: "/images/clients/financehub.svg",
    favicon: "/images/clients/favicons/financehub.svg",
    accent: "#059669",
    accentLight: "#e6faf3",
    industry: "FinTech",
  },
  {
    name: "GreenEnergy",
    logo: "/images/clients/greenenergy.svg",
    favicon: "/images/clients/favicons/greenenergy.svg",
    accent: "#16a34a",
    accentLight: "#e9f9ee",
    industry: "Energy",
  },
  {
    name: "FoodChain",
    logo: "/images/clients/foodchain.svg",
    favicon: "/images/clients/favicons/foodchain.svg",
    accent: "#d97706",
    accentLight: "#fff6e8",
    industry: "Hospitality",
  },
];
