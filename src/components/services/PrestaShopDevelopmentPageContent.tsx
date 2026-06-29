"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Star, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  prestashopHero,
  prestashopHighlights,
  getPrestashopStats,
  prestashopWhy,
  prestashopOfferings,
  prestashopTechnologies,
  prestashopAdvantages,
  prestashopModules,
  prestashopRelated,
  prestashopTestimonials,
  prestashopTrustBadges,
  prestashopFaqs,
} from "@/lib/prestashopDevelopment";
import { homeRoutes } from "@/lib/routes";

const MAGENTA = "#A5096B";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </span>
  );
}

function BoutiqueStoreMockup() {
  const orbitItems = ["Catalog", "Checkout", "Payments", "SEO", "Modules", "Analytics"];
  return (
    <div className="relative mx-auto flex h-[340px] w-full max-w-sm items-center justify-center sm:h-[380px]">
      <div className="absolute h-56 w-56 rounded-full border border-dashed border-fuchsia-200/80 sm:h-64 sm:w-64" />
      <div className="absolute h-72 w-72 rounded-full border border-fuchsia-100/60 sm:h-80 sm:w-80" />

      {orbitItems.map((label, i) => {
        const angle = (i / orbitItems.length) * 2 * Math.PI - Math.PI / 2;
        const r = 130;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.07 }}
            className="absolute z-20 rounded-full border border-fuchsia-200 bg-white px-2.5 py-1 text-[10px] font-bold shadow-md"
            style={{ color: MAGENTA, transform: `translate(${x}px, ${y}px)` }}
          >
            {label}
          </motion.span>
        );
      })}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[220px] overflow-hidden rounded-3xl border-4 border-white shadow-2xl sm:w-[240px]"
        style={{ boxShadow: `0 24px 60px ${MAGENTA}33` }}
      >
        <div className="px-3 py-2 text-center text-[10px] font-bold text-white" style={{ background: MAGENTA }}>
          PrestaShop Storefront
        </div>
        <Image
          src="/images/service-ecommerce.jpg"
          alt="PrestaShop store"
          width={240}
          height={280}
          className="h-44 w-full object-cover sm:h-48"
          priority
        />
        <div className="bg-fuchsia-50 px-3 py-2 text-center">
          <p className="text-[9px] text-fuchsia-600">Live · Multi-currency</p>
        </div>
      </motion.div>

      <div className="orb absolute left-0 top-0 h-32 w-32 bg-fuchsia-400/20" />
      <div className="orb absolute bottom-0 right-0 h-28 w-28 bg-pink-400/15" />
    </div>
  );
}

export default function PrestaShopDevelopmentPageContent() {
  const stats = getPrestashopStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(165,9,107,0.09),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ color: MAGENTA }}>
              <ShoppingCart size={12} /> PrestaShop eCommerce
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {prestashopHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: MAGENTA }}>{prestashopHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{prestashopHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {prestashopHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: MAGENTA }} /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {prestashopTrustBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-100 bg-fuchsia-50 px-3 py-1 text-[11px] font-medium" style={{ color: MAGENTA }}>
                    <Icon size={12} /> {b.label}
                  </span>
                );
              })}
            </div>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Start Your PrestaShop Project <ArrowRight size={16} />
            </Link>
          </motion.div>
          <BoutiqueStoreMockup />
        </div>
      </section>

      <section className="border-b border-fuchsia-100 bg-fuchsia-50/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-fuchsia-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: MAGENTA }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-5">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-widest text-razo-gray">Built with</p>
        <div className="prestashop-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto px-4 pb-2 sm:justify-center">
          {prestashopModules.map((m) => (
            <span key={m} className="shrink-0 rounded-full border border-fuchsia-200 bg-white px-4 py-2 text-sm font-semibold" style={{ color: MAGENTA }}>{m}</span>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: MAGENTA }}>Why PrestaShop</span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">{prestashopWhy.title}</h2>
            <p className="mt-1 text-sm font-semibold text-razo-gray">{prestashopWhy.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{prestashopWhy.description}</p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: MAGENTA }}>
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
          <div className="tilt-card overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl">
            <Image src={prestashopWhy.image} alt="Razobyte PrestaShop team" width={600} height={400} className="h-56 w-full object-cover sm:h-64" />
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">What We Offer with PrestaShop?</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prestashopOfferings.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-fuchsia-100/80 transition-transform group-hover:scale-125" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${MAGENTA}, #df0067)` }}>
                    <Icon size={22} />
                  </span>
                  <h3 className="relative mt-4 font-bold text-razo-dark">{item.title}</h3>
                  <p className="relative mt-2 text-sm text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Trending Technologies That Power Your Store</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-razo-gray">Modern commerce features integrated into your PrestaShop build.</p>
          </div>
          <div className="prestashop-scroll flex gap-4 overflow-x-auto pb-4 snap-x lg:grid lg:grid-cols-5 lg:overflow-visible">
            {prestashopTechnologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div key={tech.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="w-[240px] shrink-0 snap-start rounded-2xl border border-gray-100 bg-gray-50 p-5 lg:w-auto">
                  <Icon size={22} style={{ color: MAGENTA }} />
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{tech.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-razo-gray">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-fuchsia-950 via-[#4a0d35] to-razo-black py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="tilt-card overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:order-2">
            <Image src="/images/contact.jpg" alt="Razobyte team collaboration" width={600} height={400} className="h-56 w-full object-cover sm:h-64" />
          </div>
          <div className="lg:order-1">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">The Razobyte Advantage</h2>
            <div className="mt-8 space-y-5">
              {prestashopAdvantages.map((adv) => {
                const Icon = adv.icon;
                return (
                  <div key={adv.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-bold text-white">{adv.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{adv.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto flex flex-wrap justify-center gap-3 px-4">
          {prestashopRelated.map((r) => (
            <Link key={r.title} href={r.href} className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold hover:border-fuchsia-400" style={{ color: MAGENTA }}>{r.title}</Link>
          ))}
        </div>
      </section>

      <ProductFAQ faqs={prestashopFaqs} title="Frequently Asked Questions" description="PrestaShop vs other platforms, SEO, modules, migration, and costs." variant="light" />

      <section className="relative overflow-hidden bg-razo-black py-14">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-8 text-4xl font-bold text-white">500+ <span className="text-sm font-semibold text-white/60">Clients use Razobyte</span></p>
          <div className="grid gap-5 sm:grid-cols-2">
            {prestashopTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-3xl p-6">
                <Stars count={t.rating} />
                <p className="mt-4 text-sm text-white/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <Image src={t.image} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-fuchsia-500/40" />
                  <div><p className="font-semibold text-white">{t.name}</p><p className="text-xs text-white/50">{t.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div>
            <p className="text-lg font-bold text-razo-dark sm:text-xl">Ready? Let&apos;s Connect</p>
            <p className="mt-1 text-sm text-razo-gray">Your PrestaShop store — flexible, scalable, and built to sell.</p>
          </div>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
