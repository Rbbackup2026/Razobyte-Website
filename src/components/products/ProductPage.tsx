import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { productPageContent } from "@/lib/products";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ProductCTA from "@/components/products/ProductCTA";
import { homeRoutes } from "@/lib/routes";

type ProductPageProps = {
  slug: keyof typeof productPageContent;
};

export default function ProductPage({ slug }: ProductPageProps) {
  const content = productPageContent[slug];

  return (
    <>
      <Header />
      <main className="pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 bg-razo-black">
          <div className="orb left-0 top-0 h-72 w-72 bg-razo-blue/20" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/30 bg-razo-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-razo-blue-light">
              {content.subtitle}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {content.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {content.intro}
            </p>
            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">
            Core Capabilities
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {content.features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-6 transition-colors hover:border-razo-blue/30"
              >
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section className="border-t border-white/5 bg-razo-dark/50 py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="mb-8 text-center text-xl font-bold text-white">
              Business Outcomes
            </h2>
            <ul className="space-y-4">
              {content.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-razo-blue"
                  />
                  <span className="text-white/75">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
