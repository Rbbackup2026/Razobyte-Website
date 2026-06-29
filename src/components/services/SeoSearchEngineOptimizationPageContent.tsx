"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Search,
  Minus,
  Star,
  Quote,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  SEO_EMERALD,
  SEO_AMBER,
  seoHero,
  seoHighlights,
  getSeoStats,
  seoIntro,
  seoBenefits,
  seoPillars,
  seoOptimizationProcess,
  seoTrustBadges,
  seoServices,
  seoTypeComparison,
  seoPackages,
  seoPricingRows,
  seoAddOns,
  seoTechStack,
  seoProcess,
  seoTestimonials,
  seoRelated,
  seoProjects,
  seoBlogs,
  seoFaqs,
} from "@/lib/seoSearchEngineOptimizationDevelopment";
import { clients } from "@/lib/data";
import { homeRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.04 },
  }),
};

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-xs font-semibold text-razo-dark">{value}</span>;
  }
  return value ? (
    <Check size={16} className="mx-auto text-emerald-500" strokeWidth={3} />
  ) : (
    <Minus size={14} className="mx-auto text-gray-300" />
  );
}

function SeoRankMockup() {
  const keywords = [
    { term: "seo services india", rank: 3, trend: "+5", color: SEO_EMERALD },
    { term: "digital marketing agency", rank: 7, trend: "+2", color: SEO_AMBER },
    { term: "web development gurugram", rank: 12, trend: "+8", color: "#3B82F6" },
  ];

  const orbit = [
    { label: "Keywords", icon: "🔑", x: -115, y: -45, color: SEO_EMERALD },
    { label: "Backlinks", icon: "🔗", x: 115, y: -42, color: SEO_AMBER },
    { label: "Analytics", icon: "📊", x: -108, y: 62, color: "#3B82F6" },
    { label: "Content", icon: "✍️", x: 110, y: 58, color: "#8B5CF6" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${SEO_EMERALD}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${SEO_AMBER}22` }} />

      {orbit.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-[11px] font-bold shadow-lg"
          style={{ color: item.color, borderColor: `${item.color}44`, transform: `translate(${item.x}px, ${item.y}px)` }}
        >
          <span className="text-sm">{item.icon}</span> {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: 8 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[270px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:w-[290px]"
        style={{ boxShadow: `0 32px 80px ${SEO_EMERALD}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Search size={14} /> SEO DASHBOARD
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-lime-300" />
        </div>

        <div className="bg-slate-900 p-3">
          <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
            <span className="text-[9px] font-bold text-emerald-400">● RANKING UP</span>
            <span className="text-[9px] text-slate-400">organic +42%</span>
          </div>

          <div className="mb-2 rounded-lg bg-slate-800 p-2">
            <p className="mb-1.5 text-[8px] font-bold text-slate-400">TOP KEYWORDS</p>
            {keywords.map((kw) => (
              <div key={kw.term} className="mb-1 flex items-center justify-between rounded bg-slate-700/60 px-2 py-1">
                <span className="truncate text-[8px] text-slate-300">{kw.term}</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-bold text-white">#{kw.rank}</span>
                  <span className="text-[8px] font-bold" style={{ color: kw.color }}>{kw.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Traffic", val: "12.4K", color: SEO_EMERALD },
              { label: "Backlinks", val: "847", color: SEO_AMBER },
              { label: "DA Score", val: "58", color: "#3B82F6" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-800 p-2 text-center">
                <p className="text-[8px] text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 border-t border-gray-100 bg-white p-2">
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: SEO_EMERALD }}>On-Page ✓</div>
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: SEO_AMBER }}>Off-Page ✓</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: SEO_EMERALD }}
      >
        <p className="text-[9px] font-bold text-white/80">SERP</p>
        <p className="text-xs font-bold text-white">#1 TARGET 🎯</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        📈
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${SEO_EMERALD}20` }} />
      <div className="orb absolute right-0 top-8 h-28 w-28" style={{ background: `${SEO_AMBER}18` }} />
    </div>
  );
}

export default function SeoSearchEngineOptimizationPageContent() {
  const stats = getSeoStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #ecfdf5, #fffbeb 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${SEO_EMERALD}44`, background: `${SEO_EMERALD}10`, color: SEO_EMERALD }}>
              <Search size={12} /> SEO Services
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{seoHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: SEO_AMBER }}>{seoHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{seoHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {seoHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: SEO_EMERALD }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
          <SeoRankMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${SEO_EMERALD}08, ${SEO_AMBER}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: SEO_EMERALD }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="seo-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Search Engine Optimization</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-razo-gray">{seoIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src="/images/service-marketing.jpg" alt="SEO strategy" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Google", "Bing", "Yahoo", "Search"].map((engine, i) => (
                <motion.div key={engine} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-2xl" style={{ background: `${SEO_EMERALD}12` }}>
                    {i === 0 ? "🔍" : i === 1 ? "🌐" : i === 2 ? "📡" : "🎯"}
                  </div>
                  <p className="mt-3 text-sm font-bold text-razo-dark">{engine}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, #047857)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Why SEO Drives Business Growth</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {seoBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-5 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Core SEO Pillars</h2>
          <div className="space-y-10">
            {seoPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const reversed = i % 2 === 1;
              return (
                <motion.div key={pillar.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                  <div className={`tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <Image src={pillar.image} alt={pillar.title} width={600} height={380} className="h-56 w-full object-cover sm:h-64" />
                  </div>
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ background: pillar.accent }}>
                      <Icon size={28} />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-razo-dark">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-razo-gray">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">SEO Type Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">On-Page vs Off-Page vs Technical SEO — what each covers.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">On-Page</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Off-Page</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Technical</th>
                  </tr>
                </thead>
                <tbody>
                  {seoTypeComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-emerald-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.onPage} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.offPage} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.technical} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEO_AMBER}, #b45309)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Our Optimization Process</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seoOptimizationProcess.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">SEO Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Silver to Platinum — scalable plans for every business stage.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seoPackages.map((plan, i) => (
              <motion.div key={plan.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${plan.popular ? "border-amber-300 ring-2 ring-amber-200" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: SEO_AMBER }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>{plan.name}</h3>
                <p className="mt-1 text-xs text-razo-gray">{plan.tagline}</p>
                <p className="mt-3 text-2xl font-bold text-razo-dark">{plan.price}<span className="text-sm font-normal text-razo-gray">/mo</span></p>
                <p className="mt-2 text-xs text-razo-gray">Keywords: {plan.keywords}</p>
                <Link href={homeRoutes.contact} className="mt-4 block rounded-full py-2.5 text-center text-sm font-semibold text-white" style={{ background: plan.accent }}>
                  Choose Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Full SEO Package Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Silver</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Gold</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Diamond</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {seoPricingRows.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-amber-50/30" : "bg-white"}>
                      <td className={`border-t border-gray-100 px-4 py-3 font-medium text-razo-dark ${row.highlight ? "font-bold" : ""}`}>{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.silver} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.gold} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.diamond} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.platinum} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">SEO Services We Offer</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {seoServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${SEO_EMERALD}12` }}>
                    <Icon size={28} style={{ color: SEO_EMERALD }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Add-On Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seoAddOns.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <motion.div key={addon.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-razo-dark">{addon.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{addon.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">SEO Tools & Technology</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Industry-leading platforms powering our data-driven campaigns.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {seoTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: SEO_EMERALD }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our SEO Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {seoProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? SEO_EMERALD : SEO_AMBER }}>
                  {i + 1}
                </div>
                <h3 className="mt-3 text-xs font-bold text-razo-dark">{p.step}</h3>
                <p className="mt-1 text-[10px] text-razo-gray">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Trusted Partners</h2>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-razo-gray">Take the first step towards success with certified partners.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seoTrustBadges.map((badge, i) => (
              <motion.div key={badge.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md">
                <span className="text-3xl">{badge.icon}</span>
                <h3 className="mt-3 text-sm font-bold text-razo-dark">{badge.label}</h3>
                <p className="mt-1 text-xs text-razo-gray">{badge.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, #ecfdf5, #fffbeb)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark">500+ Clients Served</h2>
          <p className="mb-10 text-center text-sm text-razo-gray">Hear from businesses that grew with Razobyte SEO.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {seoTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <Quote size={28} className="absolute right-5 top-5 opacity-10" style={{ color: SEO_EMERALD }} />
                <div className="flex items-center gap-4">
                  <Image src={t.avatar} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-razo-dark">{t.name}</p>
                    <p className="text-xs text-razo-gray">{t.role}</p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-razo-gray">&ldquo;{t.quote}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">SEO Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {seoProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: SEO_EMERALD }}>{p.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-razo-dark">{p.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {seoRelated.map((r, i) => (
              <motion.div key={r.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={r.href} className="block h-full rounded-2xl bg-white p-6 shadow-xl transition hover:-translate-y-1">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                    <Image src={r.icon} alt={r.label} width={48} height={48} className="h-12 w-12 rounded-lg object-contain" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-razo-dark">{r.label}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{r.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-razo-dark">Blogs</h2>
            <p className="mt-1 text-sm text-razo-gray">SEO tips, keyword guides, and ranking strategies.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {seoBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: SEO_EMERALD }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={seoFaqs} title="Frequently Asked Questions" description="Everything about SEO services, rankings, keywords, backlinks, and timelines." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${SEO_EMERALD}, ${SEO_AMBER})` }}>
              <Search size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Take the first step towards SEO success.</p>
              <p className="mt-1 text-sm text-razo-gray">Proven strategies from Razobyte&apos;s certified SEO team.</p>
            </div>
          </div>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
