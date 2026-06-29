import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DomainHostingMaintenancePageContent from "@/components/services/DomainHostingMaintenancePageContent";

export const metadata: Metadata = {
  title: "Domain & Hosting Maintenance Services | Server Support | Razobyte",
  description:
    "Razobyte provides reliable domain and hosting maintenance — SSL, DNS, server monitoring, NVMe hosting, malware protection, backups, and 24/7 support in India.",
  keywords: [
    "domain hosting maintenance",
    "server maintenance India",
    "web hosting support",
    "DNS management",
    "SSL certificate management",
  ],
};

export default function DomainHostingMaintenancePage() {
  return (
    <>
      <Header />
      <DomainHostingMaintenancePageContent />
      <Footer />
    </>
  );
}
