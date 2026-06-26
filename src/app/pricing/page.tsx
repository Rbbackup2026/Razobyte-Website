import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import { homeRoutes } from "@/lib/routes";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Razobyte",
  description:
    "Flexible pricing for web development, mobile apps, CRM, ERP, digital marketing, and custom software — tailored to your project scope.",
};

const plans = [
  {
    name: "Starter",
    subtitle: "For new businesses & MVPs",
    price: "Custom Quote",
    features: [
      "Landing page or small business website",
      "Mobile-responsive design",
      "Basic SEO setup",
      "1 month post-launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    subtitle: "For scaling operations",
    price: "Custom Quote",
    features: [
      "Full website or mobile app development",
      "CRM / lead management setup",
      "Digital marketing foundation",
      "3 months support & iterations",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "For complex digital systems",
    price: "Custom Quote",
    features: [
      "ERP, CRM, or custom product build",
      "API integrations & automation",
      "Dedicated project team",
      "Ongoing support & roadmap planning",
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Pricing"
          title="Plans Built Around Your Scope"
          description="Every project is different. We provide transparent, tailored quotes based on your goals, timeline, and complexity — no hidden surprises."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  plan.highlighted
                    ? "border-razo-blue/40 bg-gradient-to-b from-razo-blue/15 to-razo-blue/5 shadow-xl shadow-razo-blue/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-razo-blue px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                <p className="mt-1 text-sm text-white/50">{plan.subtitle}</p>
                <p className="mt-5 text-2xl font-bold text-razo-blue-light">
                  {plan.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-razo-blue"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={homeRoutes.contact}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-colors ${
                    plan.highlighted
                      ? "bg-razo-blue text-white hover:bg-razo-blue-dark"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/45">
            All plans include a free consultation. Final pricing depends on scope,
            integrations, and timeline — we&apos;ll share a detailed proposal after
            understanding your requirements.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
