"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Sparkles, Server, Minus } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  HOST_INDIGO,
  HOST_CYAN,
  hostingHero,
  hostingHighlights,
  getHostingStats,
  hostingIntro,
  hostingSupport,
  hostingSecurityFeatures,
  hostingPerformanceFeatures,
  hostingPlans,
  hostingPlanComparison,
  hostingMaintenanceComparison,
  hostingServices,
  hostingMaintenanceTasks,
  hostingTechStack,
  hostingProcess,
  hostingRelated,
  hostingProjects,
  hostingBlogs,
  hostingFaqs,
} from "@/lib/domainHostingMaintenanceDevelopment";
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

function ServerCloudMockup() {
  const orbit = [
    { label: "DNS", icon: "🌐", x: -110, y: -50, color: HOST_CYAN },
    { label: "SSL", icon: "🔒", x: 112, y: -48, color: "#10B981" },
    { label: "CDN", icon: "⚡", x: -100, y: 58, color: HOST_INDIGO },
    { label: "Backup", icon: "💾", x: 105, y: 55, color: "#8B5CF6" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${HOST_INDIGO}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${HOST_CYAN}22` }} />

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
        className="tilt-card relative z-10 w-[260px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:w-[280px]"
        style={{ boxShadow: `0 32px 80px ${HOST_INDIGO}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Server size={14} /> SERVER DASHBOARD
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>

        <div className="bg-slate-900 p-3">
          <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
            <span className="text-[9px] font-bold text-emerald-400">● ONLINE</span>
            <span className="text-[9px] text-slate-400">uptime 99.9%</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "CPU", pct: 24, color: HOST_CYAN },
              { label: "RAM", pct: 58, color: HOST_INDIGO },
              { label: "Disk", pct: 41, color: "#8B5CF6" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-800 p-2 text-center">
                <p className="text-[8px] text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.pct}%</p>
                <div className="mt-1 h-1 w-full rounded-full bg-slate-700">
                  <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: m.color }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 space-y-1">
            {["example.com ✓", "SSL valid 89d", "Backup 2h ago"].map((row) => (
              <div key={row} className="rounded bg-slate-800/80 px-2 py-1 text-[8px] text-slate-300">{row}</div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 border-t border-gray-100 bg-white p-2">
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: HOST_INDIGO }}>NVMe SSD</div>
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: HOST_CYAN }}>LiteSpeed</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: "#10B981" }}
      >
        <p className="text-[9px] font-bold text-white/80">SSL</p>
        <p className="text-xs font-bold text-white">SECURED ✓</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        ☁️
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${HOST_INDIGO}20` }} />
      <div className="orb absolute right-0 top-8 h-28 w-28" style={{ background: `${HOST_CYAN}18` }} />
    </div>
  );
}

export default function DomainHostingMaintenancePageContent() {
  const stats = getHostingStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #eef2ff, #ecfeff 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${HOST_INDIGO}44`, background: `${HOST_INDIGO}10`, color: HOST_INDIGO }}>
              <Server size={12} /> Domain & Hosting
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{hostingHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: HOST_CYAN }}>{hostingHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{hostingHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {hostingHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: HOST_INDIGO }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
          <ServerCloudMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${HOST_INDIGO}08, ${HOST_CYAN}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: HOST_INDIGO }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="hosting-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Premium Web Hosting Services in India</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">{hostingIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src="/images/solutions.jpg" alt="Hosting infrastructure" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-razo-dark">24/7 Assistance for Your Success</h3>
              <p className="mt-4 text-sm leading-relaxed text-razo-gray">{hostingSupport}</p>
              <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: HOST_INDIGO }}>
                Let&apos;s Discuss <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="py-14 scroll-mt-28 bg-razo-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Pick Your Perfect Plan</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Get started with confidence. Our 30-day money-back guarantee means it&apos;s risk-free.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hostingPlans.map((plan, i) => (
              <motion.div key={plan.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${plan.popular ? "border-indigo-300 ring-2 ring-indigo-200" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: HOST_INDIGO }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>{plan.name}</h3>
                <p className="mt-1 text-xs text-razo-gray">{plan.tagline}</p>
                <p className="mt-3 text-2xl font-bold text-razo-dark">₹{plan.priceInr}<span className="text-sm font-normal text-razo-gray">/mo</span></p>
                <p className="text-xs text-razo-gray line-through">₹{plan.originalInr}/mo</p>
                <span className="mt-1 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">SAVE {plan.save}</span>
                <ul className="mt-4 space-y-1.5 text-xs text-razo-gray">
                  <li>{plan.websites} Website{plan.websites > 1 ? "s" : ""}</li>
                  <li>{plan.visits} visits</li>
                  <li>{plan.storage}</li>
                </ul>
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Full Hosting Plan Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    {hostingPlans.map((p) => (
                      <th key={p.id} className="px-4 py-4 text-center font-bold text-white">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {hostingPlanComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-indigo-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.single} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.premium} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.business} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.cloud} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${HOST_INDIGO}, #3730a3)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">We Put Your Website Security First</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hostingSecurityFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${HOST_CYAN}, #0891b2)` }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Unmatched Website Performance</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {hostingPerformanceFeatures.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="rounded-2xl bg-white/95 p-5 shadow-lg">
                    <Icon size={28} style={{ color: HOST_CYAN }} />
                    <h3 className="mt-3 text-sm font-bold text-razo-dark">{item.title}</h3>
                    <p className="mt-1 text-xs text-razo-gray">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border-4 border-white/30 shadow-2xl">
            <Image src="/images/service-web.jpg" alt="Website performance" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Domain & Hosting Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hostingServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${HOST_INDIGO}12` }}>
                    <Icon size={28} style={{ color: HOST_INDIGO }} />
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Maintenance Tier Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Basic vs Standard vs Premium domain & hosting maintenance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Basic</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Standard</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {hostingMaintenanceComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-cyan-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.basic} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.standard} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.premium} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Server Maintenance Tasks</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hostingMaintenanceTasks.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Technology & Tools</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Cutting-edge technologies to elevate your hosting maintenance.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {hostingTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: HOST_INDIGO }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Maintenance Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {hostingProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? HOST_INDIGO : HOST_CYAN }}>
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Hosting Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {hostingProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: HOST_INDIGO }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hostingRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">Hosting tips, SSL guides, and DNS best practices.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {hostingBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: HOST_INDIGO }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={hostingFaqs} title="Frequently Asked Questions" description="Domain maintenance, hosting, SSL, DNS, backups, performance, and costs." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${HOST_INDIGO}, ${HOST_CYAN})` }}>
              <Server size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Need hosting maintenance to secure your app?</p>
              <p className="mt-1 text-sm text-razo-gray">Reliable domain & server support from Razobyte.</p>
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
