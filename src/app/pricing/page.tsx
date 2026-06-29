import { redirect } from "next/navigation";
import { siteRoutes } from "@/lib/routes";

export default function PricingRedirectPage() {
  redirect(siteRoutes.pricing);
}
