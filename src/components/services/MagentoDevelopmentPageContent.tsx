"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, Sparkles, Award } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  magentoHero,
  magentoHighlights,
  getMagentoStats,
  magentoIntroSections,
  magentoCapabilities,
  magentoServices,
  magentoTechStack,
  magentoProjects,
  magentoRelated,
  magentoBlogs,
  magentoTrustBadges,
  magentoFaqs,
} from "@/lib/magentoDevelopment";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

function EnterpriseDashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, rotate: -4, y: 24 }}
        animate={{ opacity: 1, rotate: -2, y: 0 }}
        transition={{ duration: 0.55 }}
        className="absolute -left-4 top-6 z-0 hidden h-40 w-48 overflow-hidden rounded-xl border border-orange-200/60 bg-gradient-to-br from-orange-50 to-slate-100 shadow-lg sm:block"
      >
        <div className="p-3">
          <p className="text-[9px] font-bold uppercase text-orange-600">B2B Catalog</p>
          <div className="mt-2 space-y-1">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-2 rounded bg-orange-200/60" />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="tilt-card relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-orange-500/15"
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-[#F26322] to-orange-600 px-4 py-2.5">
          <span className="text-xs font-bold text-white">Magento 2 Admin</span>
          <span className="rounded bg-white/20 px-2 py-0.5 text-[9px] text-white">Enterprise</span>
        </div>
        <Image
          src="/images/portfolio-fintech.jpg"
          alt="Magento storefront"
          width={520}
          height={300}
          className="h-48 w-full object-cover sm:h-52"
          priority
        />
        <div className="grid grid-cols-3 gap-2 border-t border-gray-100 bg-slate-50 p-3">
          {[
            { l: "SKUs", v: "12.4K" },
            { l: "Stores", v: "3" },
            { l: "Revenue", v: "₹2.1Cr" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-[8px] text-gray-500">{s.l}</p>
              <p className="text-xs font-bold text-[#F26322]">{s.v}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
        className="absolute -right-3 top-20 z-20 rounded-xl border border-orange-100 bg-white px-3 py-2 shadow-xl"
      >
        <Award size={16} className="text-amber-500" />
        <p className="mt-1 text-[9px] font-bold text-gray-700">Magento 2</p>
        <p className="text-[8px] text-orange-600">Certified team</p>
      </motion.div>

      <div className="orb absolute -right-6 bottom-4 h-36 w-36 bg-orange-400/20" />
      <div className="orb absolute -left-6 top-0 h-32 w-32 bg-slate-400/15" />
    </div>
  );
}

export default function MagentoDevelopmentPageContent() {
  const stats = getMagentoStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(242,99,34,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange-700">
              <ShoppingCart size={12} /> Magento 2 Experts
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {magentoHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-[#F26322]">{magentoHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{magentoHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {magentoHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F26322]" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {magentoTrustBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <span key={b.label} className="inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-800">
                    <Icon size={12} /> {b.label}
                  </span>
                );
              })}
            </div>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Hire Magento Developers <ArrowRight size={16} />
            </Link>
          </motion.div>
          <EnterpriseDashboardMockup />
        </div>
      </section>

      <section className="border-b border-gray-100 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-orange-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold text-[#F26322] sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-5">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-widest text-razo-gray">Tech stack</p>
        <div className="magento-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto px-4 pb-2 sm:justify-center">
          {magentoTechStack.map((t) => (
            <span key={t} className="shrink-0 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-800">{t}</span>
          ))}
        </div>
      </section>

      {magentoIntroSections.map((section, index) => (
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

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">Hire Veteran Magento Web Developers</h2>
            <p className="mt-2 text-sm text-white/65">Seasoned Magento 2 architects, frontend specialists, and integration engineers on your project.</p>
          </div>
          <Link href={homeRoutes.contact} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F26322] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-orange-600">
            Hire Magento Developers <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Enlist Avant-garde Magento Development Capabilities</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-razo-gray">Modern commerce experiences built on performance, responsiveness, and discoverability.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {magentoCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-[#F26322]"><Icon size={22} /></span>
                  <h3 className="mt-4 font-bold text-razo-dark">{cap.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{cap.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-black py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">Services</span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Our Magento Development Services</h2>
            <p className="mt-3 text-sm text-white/55">End-to-end Magento 2 delivery — from discovery to launch and beyond.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {magentoServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card group rounded-2xl p-5 transition-transform hover:-translate-y-1">
                  <Icon size={22} className="text-orange-400" />
                  <h3 className="mt-3 text-sm font-bold text-white">{svc.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-razo-dark">Featured Projects</h2>
            <Link href={siteRoutes.caseStudies} className="text-sm font-semibold text-[#F26322]">Case studies →</Link>
          </div>
          <div className="magento-scroll flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
            {magentoProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="w-[300px] shrink-0 overflow-hidden rounded-2xl border bg-white shadow-md lg:w-auto">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#F26322] px-2 py-0.5 text-[10px] font-bold text-white">{p.tag}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-razo-dark">{p.title}</h3>
                  <p className="mt-1 text-sm text-razo-gray">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-razo-surface py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-5 text-center text-lg font-bold text-razo-dark">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {magentoRelated.map((r) => (
              <Link key={r.title} href={r.href} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold hover:border-orange-400 hover:text-orange-700">{r.title}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-razo-dark">Blogs</h2>
              <p className="mt-1 text-sm text-razo-gray">Take a peek inside our experts&apos; minds</p>
            </div>
            <Link href={siteRoutes.blogs} className="text-sm font-semibold text-[#F26322]">All blogs →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {magentoBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-md">
                <div className="relative h-28">
                  <Image src={post.image} alt="" fill className="object-cover" sizes="250px" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#F26322]">Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={magentoFaqs} title="Frequently Asked Questions" description="Magento 2, Adobe Commerce, migrations, Hyvä, B2B, hosting, and costs." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div>
            <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s Create Something Great Together</p>
            <p className="mt-1 text-sm text-razo-gray">Enterprise Magento commerce — built for scale.</p>
          </div>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Need Help? Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
