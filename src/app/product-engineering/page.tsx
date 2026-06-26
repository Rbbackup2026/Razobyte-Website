import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import ProductCTA from "@/components/products/ProductCTA";
import { homeRoutes, siteRoutes } from "@/lib/routes";
import { CheckCircle2, ArrowRight, Layers, Code2, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Engineering | Razobyte",
  description:
    "End-to-end product engineering — discovery, UI/UX, development, QA, and launch for web apps, mobile apps, CRM, and custom SaaS products.",
};

const phases = [
  {
    icon: Layers,
    title: "Discovery & Architecture",
    description: "Requirements, system design, and technology selection before code.",
  },
  {
    icon: Code2,
    title: "Design & Development",
    description: "UI/UX, agile sprints, APIs, and scalable full-stack engineering.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Testing, deployment, monitoring, and post-launch iteration.",
  },
];

const offerings = [
  "Custom web & mobile product development",
  "CRM, ERP & internal tool engineering",
  "API-first & microservices architecture",
  "MVP to production-ready SaaS builds",
  "CI/CD, DevOps & cloud deployment",
  "Long-term product support & roadmaps",
];

export default function ProductEngineeringPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Product Engineering"
          title="From Idea to Market-Ready Product"
          description="We engineer software products end to end — planning, design, development, testing, and go-live — so you ship faster with one accountable team."
        />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.title}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-razo-blue/15 text-razo-blue-light">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-bold text-white">{phase.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{phase.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Engineering Services</h2>
              <ul className="mt-6 space-y-3">
                {offerings.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-razo-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl border border-razo-blue/20 bg-razo-blue/5 p-8">
              <h3 className="text-lg font-bold text-white">Related Products</h3>
              <p className="mt-2 text-sm text-white/55">
                Explore our dedicated CRM and ERP solutions built with the same
                engineering rigor.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={siteRoutes.crm}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white hover:border-razo-blue/40"
                >
                  CRM Solutions →
                </Link>
                <Link
                  href={siteRoutes.erp}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white hover:border-razo-blue/40"
                >
                  ERP Solutions →
                </Link>
              </div>
              <Link
                href={homeRoutes.contact}
                className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
              >
                Start Your Product Build
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <ProductCTA
          title="Have a product idea worth building?"
          description="Talk to our engineering team about scope, timeline, and the right tech stack for your product."
        />
      </main>
      <Footer />
    </>
  );
}
