"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Megaphone,
  Minus,
  Star,
  Quote,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  SEM_CRIMSON,
  SEM_BLUE,
  semHero,
  semHighlights,
  getSemStats,
  semPpcIntro,
  semCustomersIntro,
  semHypeIntro,
  semGoogleAdTypes,
  semAdTypeComparison,
  semStrategyCards,
  semServices,
  semPackages,
  semPackageComparison,
  semTechStack,
  semProcess,
  semTrustBadges,
  semTestimonials,
  semProjects,
  semRelated,
  semBlogs,
  semFaqs,
} from "@/lib/semSearchEngineMarketingDevelopment";
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

function PpcAdsMockup() {
  const campaigns = [
    { name: "Search — Brand", ctr: "8.4%", roas: "5.2x", color: SEM_BLUE },
    { name: "Shopping — Products", ctr: "3.1%", roas: "4.8x", color: SEM_CRIMSON },
    { name: "Display — Retarget", ctr: "1.9%", roas: "3.6x", color: "#059669" },
  ];

  const orbit = [
    { label: "Clicks", icon: "👆", x: -115, y: -48, color: SEM_CRIMSON },
    { label: "ROAS", icon: "💰", x: 115, y: -45, color: SEM_BLUE },
    { label: "Bids", icon: "📊", x: -108, y: 60, color: "#059669" },
    { label: "Leads", icon: "🎯", x: 110, y: 55, color: "#7C3AED" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${SEM_CRIMSON}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${SEM_BLUE}22` }} />

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
        style={{ boxShadow: `0 32px 80px ${SEM_CRIMSON}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Megaphone size={14} /> PPC DASHBOARD
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-lime-300" />
        </div>

        <div className="bg-slate-900 p-3">
          <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
            <span className="text-[9px] font-bold text-emerald-400">● LIVE CAMPAIGNS</span>
            <span className="text-[9px] text-slate-400">spend ₹42K/mo</span>
          </div>

          <div className="mb-2 rounded-lg bg-slate-800 p-2">
            <p className="mb-1.5 text-[8px] font-bold text-slate-400">ACTIVE CAMPAIGNS</p>
            {campaigns.map((c) => (
              <div key={c.name} className="mb-1 flex items-center justify-between rounded bg-slate-700/60 px-2 py-1">
                <span className="truncate text-[8px] text-slate-300">{c.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-slate-400">{c.ctr}</span>
                  <span className="text-[9px] font-bold" style={{ color: c.color }}>{c.roas}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Clicks", val: "8.2K", color: SEM_CRIMSON },
              { label: "Conv.", val: "412", color: SEM_BLUE },
              { label: "CPA", val: "₹102", color: "#059669" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-800 p-2 text-center">
                <p className="text-[8px] text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 border-t border-gray-100 bg-white p-2">
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: SEM_CRIMSON }}>Search ✓</div>
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: SEM_BLUE }}>Display ✓</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: SEM_BLUE }}
      >
        <p className="text-[9px] font-bold text-white/80">ROAS</p>
        <p className="text-xs font-bold text-white">4.8x ROI 📈</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        💸
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${SEM_CRIMSON}20` }} />
      <div className="orb absolute right-0 top-8 h-28 w-28" style={{ background: `${SEM_BLUE}18` }} />
    </div>
  );
}

export default function SemSearchEngineMarketingPageContent() {
  const stats = getSemStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #eff6ff, #fef2f2 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${SEM_CRIMSON}44`, background: `${SEM_CRIMSON}10`, color: SEM_CRIMSON }}>
              <Megaphone size={12} /> SEM & PPC
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{semHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: SEM_BLUE }}>{semHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{semHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {semHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: SEM_CRIMSON }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
          <PpcAdsMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${SEM_CRIMSON}08, ${SEM_BLUE}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: SEM_CRIMSON }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="sem-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      {[semPpcIntro, semCustomersIntro, semHypeIntro].map((block, bi) => {
        const reversed = bi % 2 === 1;
        return (
          <section key={block.title} className={bi % 2 === 0 ? "py-14" : "bg-razo-surface py-14"}>
            <div className={`mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
              <div className={`tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl ${reversed ? "lg:[direction:ltr]" : ""}`}>
                <Image src={block.image} alt={block.title} width={600} height={380} className="h-56 w-full object-cover sm:h-64" />
              </div>
              <div className={reversed ? "lg:[direction:ltr]" : ""}>
                <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{block.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-razo-gray">{block.description}</p>
                <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: bi % 2 === 0 ? SEM_CRIMSON : SEM_BLUE }}>
                  Let&apos;s Discuss <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEM_BLUE}, #1e40af)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Types of Google Ads</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Nine powerful ad formats — each designed for specific business goals.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {semGoogleAdTypes.map((ad, i) => {
              const Icon = ad.icon;
              return (
                <motion.div key={ad.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-6 shadow-xl transition hover:-translate-y-1">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: ad.accent }}>
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-razo-dark">{ad.title}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: ad.accent }}>Best For</p>
                  <p className="mt-2 text-xs text-razo-gray">{ad.bestFor}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Google Ads Type Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Search vs Display vs Shopping vs Video — feature matrix at a glance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Search</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Display</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Shopping</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Video</th>
                  </tr>
                </thead>
                <tbody>
                  {semAdTypeComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-blue-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.search} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.display} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.shopping} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.video} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">SEM Strategy & Insights</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {semStrategyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
                  <div className="relative h-44">
                    <Image src={card.image} alt={card.title} fill className="object-cover" sizes="400px" />
                    <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
                      <Icon size={24} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-razo-dark">{card.title}</h3>
                    <p className="mt-2 text-sm text-razo-gray">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 py-14" style={{ background: `linear-gradient(135deg, ${SEM_CRIMSON}, #b91c1c)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">SEM Management Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Scalable PPC management from startup budgets to enterprise ad spend.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {semPackages.map((plan, i) => (
              <motion.div key={plan.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${plan.popular ? "border-blue-300 ring-2 ring-blue-200" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: SEM_BLUE }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>{plan.name}</h3>
                <p className="mt-1 text-xs text-razo-gray">{plan.tagline}</p>
                <p className="mt-3 text-2xl font-bold text-razo-dark">{plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal text-razo-gray">/mo</span>}</p>
                <p className="mt-2 text-xs text-razo-gray">Ad spend: {plan.adSpend}</p>
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Full Package Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Starter</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Growth</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Scale</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {semPackageComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-red-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.starter} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.growth} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.scale} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.enterprise} /></td>
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
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">SEM Services We Offer</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {semServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${SEM_CRIMSON}12` }}>
                    <Icon size={28} style={{ color: SEM_CRIMSON }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">PPC Tools & Platforms</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Industry-leading platforms powering our data-driven campaigns.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {semTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: SEM_CRIMSON }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our SEM Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {semProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? SEM_CRIMSON : SEM_BLUE }}>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {semTrustBadges.map((badge, i) => (
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

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Top SEM Projects</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {semProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: SEM_CRIMSON }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, #eff6ff, #fef2f2)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark">500+ Clients Served</h2>
          <p className="mb-10 text-center text-sm text-razo-gray">Hear from businesses that scaled with Razobyte SEM.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {semTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <Quote size={28} className="absolute right-5 top-5 opacity-10" style={{ color: SEM_CRIMSON }} />
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {semRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">PPC tips, Google Ads guides, and ROI strategies.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {semBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: SEM_CRIMSON }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={semFaqs} title="Frequently Asked Questions" description="Everything about SEM, PPC, Google Ads, keywords, and campaign ROI." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${SEM_CRIMSON}, ${SEM_BLUE})` }}>
              <Megaphone size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Take the first step towards PPC success.</p>
              <p className="mt-1 text-sm text-razo-gray">Expert SEM campaigns from Razobyte&apos;s certified team.</p>
            </div>
          </div>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Need Help? Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
