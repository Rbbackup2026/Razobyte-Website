import type { Metadata } from "next";
import ProductPage from "@/components/products/ProductPage";

export const metadata: Metadata = {
  title: "Custom Product Development | Razobyte",
  description:
    "Razobyte engineers bespoke software products — API-first architecture, cloud-native deployment, and scalable SaaS platforms built for your business.",
};

export default function CustomProductsPage() {
  return <ProductPage slug="custom-products" />;
}
