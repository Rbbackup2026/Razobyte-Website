"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Star, ChevronRight, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  woocommerceHero,
  woocommerceHighlights,
  getWoocommerceStats,
  woocommerceIntroSections,
  whyWoocommerceFeatures,
  woocommerceDifferentiators,
  woocommerceServices,
  woocommerceProjects,
  woocommerceRelated,
  woocommercePlugins,
  woocommerceTestimonials,
  woocommerceTrustBadges,
  woocommerceFaqs,
} from "@/lib/woocommerceDevelopment";
import { COMPANY_PROJECTS_PLUS } from "@/lib/company";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06 },
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

export default function WooCommerceDevelopmentPageContent() {
  const stats = getWoocommerceStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(127,84,179,0.1),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-violet-700">
              <ShoppingCart size={12} /> Ecommerce Solutions
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {woocommerceHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-[#7F54B3]">{woocommerceHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{woocommerceHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {woocommerceHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {woocommerceTrustBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700">
                    <Icon size={12} /> {b.label}
                  </span>
                );
              })}
            </div>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Hire WooCommerce Developer <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="tilt-card relative overflow-hidden rounded-2xl border border-violet-200 bg-white shadow-2xl shadow-violet-500/20">
            <div className="flex items-center gap-2 bg-[#7F54B3] px-4 py-2.5">
              <Image src="/images/erp/woocommerce.svg" alt="" width={20} height={20} className="h-5 w-5 brightness-0 invert" />
              <span className="text-xs font-bold text-white">WooCommerce Store</span>
            </div>
            <Image src="/images/portfolio-ecommerce.jpg" alt="WooCommerce storefront" width={400} height={280} className="h-52 w-full object-cover" priority />
            <div className="border-t bg-gray-50 p-3">
              <p className="text-[10px] text-gray-500">Today&apos;s sales</p>
              <p className="text-lg font-bold text-[#7F54B3]">₹82,450</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-violet-50/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card-light rounded-2xl px-4 py-5 text-center">
              <p className="text-2xl font-bold text-[#7F54B3] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-widest text-razo-gray">Plugins we work with</p>
        <div className="woo-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto px-4 pb-2 sm:justify-center">
          {woocommercePlugins.map((p) => (
            <span key={p} className="shrink-0 rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-700">{p}</span>
          ))}
        </div>
      </section>

      {woocommerceIntroSections.map((section, index) => (
        <section key={section.id} className={index % 2 === 0 ? "py-14" : "bg-razo-surface py-14"}>
          <div className={`mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div>
              <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{section.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{section.description}</p>
            </div>
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src={section.image} alt={section.title} width={600} height={400} className="h-56 w-full object-cover sm:h-64" />
            </div>
          </div>
        </section>
      ))}

      <section className="bg-gradient-to-r from-violet-600 to-purple-800 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Hire WooCommerce Development Professionals</h2>
            <p className="mt-2 text-sm text-white/75">Scalable, high-performing stores by expert WordPress developers.</p>
          </div>
          <Link href={homeRoutes.contact} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700">
            Hire WooCommerce Developer <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-2xl font-bold text-razo-dark">Why WooCommerce Excels</h2>
          <div className="woo-scroll flex gap-4 overflow-x-auto pb-4 snap-x">
            {whyWoocommerceFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-[300px] shrink-0 snap-start rounded-2xl border border-violet-100 bg-white p-6 shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600"><Icon size={20} /></span>
                  <h3 className="mt-4 font-bold text-razo-dark">{f.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-black py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Setting WooCommerce Apart</h2>
          <div className="grid gap-5 lg:grid-cols-3">
            {woocommerceDifferentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card rounded-2xl p-6">
                  <Icon size={24} className="text-violet-400" />
                  <h3 className="mt-3 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold text-razo-dark">Our WooCommerce Services</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {woocommerceServices.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={`tilt-card rounded-3xl bg-gradient-to-br ${s.accent} p-6 text-white shadow-xl`}>
                <Icon size={26} />
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/80">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-razo-dark">Top Web Development Projects</h2>
            <Link href={siteRoutes.caseStudies} className="text-sm font-semibold text-violet-600">View case studies →</Link>
          </div>
          <div className="woo-scroll flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {woocommerceProjects.map((p) => (
              <div key={p.id} className="w-[300px] shrink-0 overflow-hidden rounded-2xl border bg-white shadow-md lg:w-auto">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#7F54B3] px-2 py-0.5 text-[10px] font-bold text-white">{p.tag}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-razo-dark">{p.title}</h3>
                  <p className="mt-1 text-sm text-razo-gray">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto flex flex-wrap justify-center gap-3 px-4">
          {woocommerceRelated.map((r) => (
            <Link key={r.title} href={r.href} className="rounded-full border px-5 py-2 text-sm font-semibold hover:border-violet-400 hover:text-violet-700">{r.title}</Link>
          ))}
        </div>
      </section>

      <ProductFAQ faqs={woocommerceFaqs} title="Frequently Asked Questions" description="WooCommerce hosting, plugins, payments, and SEO." variant="light" />

      <section className="bg-razo-black py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-8 text-4xl font-bold text-white">{COMPANY_PROJECTS_PLUS} <span className="text-sm font-semibold text-white/60">Projects Delivered</span></p>
          <div className="grid gap-5 sm:grid-cols-2">
            {woocommerceTestimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-3xl p-6">
                <Stars count={t.rating} />
                <p className="mt-4 text-sm text-white/70">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <Image src={t.image} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                  <div><p className="font-semibold text-white">{t.name}</p><p className="text-xs text-white/50">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <p className="text-lg font-bold text-razo-dark">Let&apos;s Create Something Great Together</p>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Reach Out to Us
          </Link>
        </div>
      </section>
    </main>
  );
}
