import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PaymentGatewayDevelopmentPageContent from "@/components/services/PaymentGatewayDevelopmentPageContent";

export const metadata: Metadata = {
  title: "Payment Gateway Integration Services | Razobyte",
  description:
    "Razobyte delivers secure payment gateway integration — Razorpay, Stripe, PayPal, PCI compliance, fraud prevention, mobile checkout, and multi-currency support.",
  keywords: [
    "payment gateway integration",
    "payment gateway development India",
    "Razorpay Stripe integration",
    "secure online payments",
    "PCI DSS payment gateway",
  ],
};

export default function PaymentGatewayPage() {
  return (
    <>
      <Header />
      <PaymentGatewayDevelopmentPageContent />
      <Footer />
    </>
  );
}
