import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import ProductCTA from "@/components/products/ProductCTA";
import { homeRoutes } from "@/lib/routes";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Solutions | Razobyte",
  description:
    "Digital solutions for healthcare, clinics, and wellness brands — patient portals, appointment systems, CRM, and compliant web platforms.",
};

const offerings = [
  "Clinic & hospital website development",
  "Patient appointment & enquiry management",
  "Healthcare CRM & lead tracking",
  "Telehealth-ready web & mobile platforms",
  "HIPAA-aware architecture guidance",
  "Digital marketing for wellness brands",
];

export default function HealthcarePage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Healthcare Solutions"
          title="Technology That Supports Better Care"
          description="We help clinics, hospitals, and wellness brands build secure, user-friendly digital experiences — from patient-facing websites to internal workflow automation."
        />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/portfolio-health.jpg"
                alt="Healthcare digital solutions"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">What We Deliver</h2>
              <ul className="mt-6 space-y-3">
                {offerings.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-razo-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={homeRoutes.contact}
                className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Discuss Healthcare Project
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <ProductCTA
          title="Ready to modernize your healthcare digital presence?"
          description="Book a consultation to explore websites, apps, CRM, and marketing tailored for your practice."
        />
      </main>
      <Footer />
    </>
  );
}
