"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Rocket,
  Minus,
  Star,
  Quote,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  PERF_EMERALD,
  PERF_GOLD,
  perfHero,
  perfHighlights,
  getPerfStats,
  perfIntro,
  perfWhyImportant,
  perfOfferings,
  perfCaseStudy,
  perfWhoChooses,
  perfServices,
  perfChannelComparison,
  perfPackages,
  perfPackageComparison,
  perfTechStack,
  perfProcess,
  perfTrustBadges,
  perfTestimonials,
  perfProjects,
  perfRelated,
  perfBlogs,
  perfFaqs,
} from "@/lib/performanceMarketingDevelopment";
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

function RoiDashboardMockup() {
  const channels = [
    { name: "Google Ads", roas: "5.2x", cpa: "₹89", color: PERF_EMERALD },
    { name: "Meta Ads", roas: "4.1x", cpa: "₹112", color: "#1877F2" },
    { name: "Display", roas: "3.6x", cpa: "₹145", color: PERF_GOLD },
  ];

  const orbit = [
    { label: "ROAS", icon: "💰", x: -115, y: -48, color: PERF_GOLD },
    { label: "CPA", icon: "📉", x: 115, y: -45, color: PERF_EMERALD },
    { label: "Clicks", icon: "👆", x: -108, y: 60, color: "#3B82F6" },
    { label: "Conv.", icon: "🎯", x: 110, y: 55, color: "#DB2777" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${PERF_EMERALD}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${PERF_GOLD}22` }} />

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
        style={{ boxShadow: `0 32px 80px ${PERF_EMERALD}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Rocket size={14} /> ROI DASHBOARD
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-lime-300" />
        </div>

        <div className="bg-slate-900 p-3">
          <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
            <span className="text-[9px] font-bold text-emerald-400">● PERFORMANCE UP</span>
            <span className="text-[9px] text-slate-400">spend ₹1.2L/mo</span>
          </div>

          <div className="mb-2 rounded-lg bg-slate-800 p-2">
            <p className="mb-1.5 text-[8px] font-bold text-slate-400">CHANNEL ROAS</p>
            {channels.map((c) => (
              <div key={c.name} className="mb-1 flex items-center justify-between rounded bg-slate-700/60 px-2 py-1">
                <span className="truncate text-[8px] text-slate-300">{c.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-slate-400">{c.cpa}</span>
                  <span className="text-[9px] font-bold" style={{ color: c.color }}>{c.roas}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Conv.", val: "842", color: PERF_EMERALD },
              { label: "ROAS", val: "4.6x", color: PERF_GOLD },
              { label: "ROI", val: "+25%", color: "#3B82F6" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-800 p-2 text-center">
                <p className="text-[8px] text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 border-t border-gray-100 bg-white p-2">
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: PERF_EMERALD }}>PPC ✓</div>
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: PERF_GOLD }}>CRO ✓</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: PERF_GOLD }}
      >
        <p className="text-[9px] font-bold text-white/80">GROWTH</p>
        <p className="text-xs font-bold text-white">+150% 🚀</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        📈
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${PERF_EMERALD}20` }} />
      <div className="orb absolute right-0 top-8 h-28 w-28" style={{ background: `${PERF_GOLD}18` }} />
    </div>
  );
}

export default function PerformanceMarketingPageContent() {
  const stats = getPerfStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #ecfdf5, #fffbeb 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${PERF_EMERALD}44`, background: `${PERF_EMERALD}10`, color: PERF_EMERALD }}>
              <Rocket size={12} /> Performance Marketing
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{perfHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: PERF_GOLD }}>{perfHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{perfHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {perfHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: PERF_EMERALD }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
          <RoiDashboardMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${PERF_EMERALD}08, ${PERF_GOLD}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: PERF_EMERALD }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="perf-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Performance Marketing That Drives Results</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-razo-gray">{perfIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src="/images/portfolio-fintech.jpg" alt="Performance marketing analytics" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {perfWhyImportant.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${PERF_EMERALD}12` }}>
                      <Icon size={26} style={{ color: PERF_EMERALD }} />
                    </span>
                    <h3 className="mt-3 text-sm font-bold text-razo-dark">{item.title}</h3>
                    <p className="mt-1 text-xs text-razo-gray">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${PERF_EMERALD}, #047857)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">What We Offer</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Six pillars of ROI-driven performance marketing.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perfOfferings.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                  <ul className="mt-3 space-y-1">
                    {item.items.map((sub) => (
                      <li key={sub} className="flex items-center gap-1.5 text-[10px] text-razo-gray">
                        <CheckCircle2 size={10} style={{ color: PERF_EMERALD }} className="shrink-0" /> {sub}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">{perfCaseStudy.title}</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="tilt-card overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-48 lg:h-auto">
                <Image src="/images/portfolio-ecommerce.jpg" alt="Performance case study" fill className="object-cover" sizes="400px" />
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: PERF_EMERALD }}>Client</p>
                    <p className="mt-1 text-sm text-razo-dark">{perfCaseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: PERF_GOLD }}>Challenge</p>
                    <p className="mt-1 text-sm text-razo-gray">{perfCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-razo-blue">Our Approach</p>
                    <p className="mt-1 text-sm text-razo-gray">{perfCaseStudy.approach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Results</p>
                    <ul className="mt-2 space-y-1">
                      {perfCaseStudy.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-razo-dark">
                          <CheckCircle2 size={14} className="text-emerald-500" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, #1e3a5f, #0f172a)` }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Who Chooses Us?</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">{perfWhoChooses}</p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: PERF_GOLD }}>
              Let&apos;s Discuss <ArrowRight size={14} />
            </Link>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <Image src="/images/solutions.jpg" alt="Who chooses Razobyte" width={600} height={380} className="h-56 w-full object-cover sm:h-64" />
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 py-14" style={{ background: `linear-gradient(135deg, ${PERF_GOLD}, #b45309)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Performance Marketing Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">ROI-driven packages from single-channel to global campaigns.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perfPackages.map((plan, i) => (
              <motion.div key={plan.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${plan.popular ? "border-emerald-300 ring-2 ring-emerald-200" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: PERF_EMERALD }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>{plan.name}</h3>
                <p className="mt-1 text-xs text-razo-gray">{plan.tagline}</p>
                <p className="mt-3 text-2xl font-bold text-razo-dark">{plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal text-razo-gray">/mo</span>}</p>
                <p className="mt-2 text-xs text-razo-gray">Ad spend: {plan.spend}</p>
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
                  <tr style={{ background: `linear-gradient(90deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Starter</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Growth</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Scale</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {perfPackageComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-emerald-50/30" : "bg-white"}>
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

      <section className="py-14 bg-razo-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Channel Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">PPC vs Display vs Social vs Affiliate — capabilities at a glance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">PPC</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Display</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Social</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Affiliate</th>
                  </tr>
                </thead>
                <tbody>
                  {perfChannelComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-amber-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.ppc} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.display} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.social} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.affiliate} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Performance Marketing Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {perfServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${PERF_EMERALD}12` }}>
                    <Icon size={28} style={{ color: PERF_EMERALD }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Performance Tools & Platforms</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Industry-leading platforms powering our ROI-driven campaigns.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {perfTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: PERF_EMERALD }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Performance Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {perfProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? PERF_EMERALD : PERF_GOLD }}>
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
            {perfTrustBadges.map((badge, i) => (
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
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Performance Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {perfProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: PERF_EMERALD }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, #ecfdf5, #fffbeb)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark">500+ Clients Are Happy</h2>
          <p className="mb-10 text-center text-sm text-razo-gray">Hear from businesses that scaled with Razobyte performance marketing.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {perfTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <Quote size={28} className="absolute right-5 top-5 opacity-10" style={{ color: PERF_EMERALD }} />
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perfRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">Performance marketing tips, ROAS guides, and ROI strategies.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {perfBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: PERF_EMERALD }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={perfFaqs} title="Frequently Asked Questions" description="Everything about performance marketing, ROAS, channels, and ROI optimization." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${PERF_EMERALD}, ${PERF_GOLD})` }}>
              <Rocket size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Ready to make your brand the talk of the town?</p>
              <p className="mt-1 text-sm text-razo-gray">ROI-driven performance marketing from Razobyte.</p>
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
