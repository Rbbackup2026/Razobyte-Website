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
  title: "IT Consulting | Razobyte",
  description:
    "Razobyte provides IT consulting — digital transformation, infrastructure planning, enterprise software, and technology strategy for growing businesses.",
};

const offerings = [
  "IT strategy & digital transformation roadmaps",
  "Legacy system modernization",
  "Cloud migration & infrastructure planning",
  "Enterprise software evaluation & implementation",
  "Security, compliance & architecture reviews",
  "Ongoing technology advisory & support",
];

export default function ITConsultingPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="IT Consulting"
          title="Align Technology with Business Goals"
          description="We help organizations plan, modernize, and scale their technology stack — with practical advice and hands-on execution, not slide decks alone."
        />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Consulting Capabilities</h2>
              <p className="mt-4 text-base text-white/55">
                From startups defining their first stack to enterprises upgrading
                legacy systems, we bridge business vision and technical execution.
              </p>
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
                Book IT Consultation
                <ArrowRight size={15} />
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/solutions.jpg"
                alt="IT consulting"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        <ProductCTA
          title="Need a trusted IT consulting partner?"
          description="Let's assess your current systems and plan a path forward — call, chat, or book a free session."
        />
      </main>
      <Footer />
    </>
  );
}
