"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Sparkles, Wrench, Minus } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  MAINT_SKY,
  MAINT_AMBER,
  maintenanceHero,
  maintenanceHighlights,
  getMaintenanceStats,
  maintenanceTrustIntro,
  maintenanceIntro,
  maintenanceOutsourcing,
  maintenancePillars,
  maintenanceCoreServices,
  maintenanceServices,
  maintenancePackages,
  maintenanceComparisonRows,
  maintenanceInfoCards,
  maintenanceTechStack,
  maintenanceProcess,
  maintenanceRelated,
  maintenanceProjects,
  maintenanceBlogs,
  maintenanceFaqs,
} from "@/lib/websiteMaintenanceDevelopment";
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

function DashboardMockup() {
  const metrics = [
    { label: "Uptime", value: "99.9%", color: MAINT_SKY },
    { label: "Backups", value: "OK", color: MAINT_AMBER },
    { label: "Security", value: "Safe", color: "#10B981" },
    { label: "Speed", value: "A+", color: "#8B5CF6" },
  ];

  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[420px]">
      <div className="absolute h-56 w-56 rounded-full border border-dashed sm:h-64 sm:w-64" style={{ borderColor: `${MAINT_SKY}44` }} />
      <div className="absolute h-80 w-80 rounded-full border" style={{ borderColor: `${MAINT_AMBER}22` }} />

      {metrics.map((m, i) => {
        const angle = (i / 4) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * 115;
        const y = Math.sin(angle) * 115;
        return (
          <motion.span
            key={m.label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
            className="absolute z-20 rounded-full border bg-white px-3 py-1.5 text-center text-[10px] font-bold shadow-lg"
            style={{ color: m.color, borderColor: `${m.color}44`, transform: `translate(${x}px, ${y}px)` }}
          >
            {m.label}: {m.value}
          </motion.span>
        );
      })}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: 8 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[270px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:w-[290px]"
        style={{ boxShadow: `0 28px 70px ${MAINT_SKY}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${MAINT_SKY}, ${MAINT_AMBER})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Wrench size={14} /> SITE HEALTH DASHBOARD
          </span>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-2 w-2 rounded-full bg-emerald-400"
          />
        </div>

        <div className="space-y-2 bg-slate-50 p-3">
          {[
            { task: "Backup completed", status: "2h ago", ok: true },
            { task: "Security scan passed", status: "Today", ok: true },
            { task: "Plugins updated (12)", status: "Yesterday", ok: true },
            { task: "SSL certificate valid", status: "89 days", ok: true },
          ].map((row) => (
            <div key={row.task} className="flex items-center justify-between rounded-lg border border-sky-100 bg-white px-3 py-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={12} style={{ color: row.ok ? "#10B981" : MAINT_AMBER }} />
                <span className="text-[10px] font-medium text-razo-dark">{row.task}</span>
              </div>
              <span className="text-[9px] text-razo-gray">{row.status}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-1 border-t border-gray-100 bg-white p-2">
          {["CPU 12%", "RAM 34%", "Disk 45%"].map((s) => (
            <div key={s} className="rounded-md bg-sky-50 py-1 text-center text-[8px] font-bold" style={{ color: MAINT_SKY }}>{s}</div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-2 bottom-20 z-30 rounded-xl border-2 border-white bg-white px-3 py-2 shadow-xl"
      >
        <p className="text-[9px] font-bold text-razo-gray">TICKETS</p>
        <p className="text-xs font-bold" style={{ color: MAINT_SKY }}>0 Open</p>
      </motion.div>

      <div className="orb absolute -right-4 top-12 h-24 w-24" style={{ background: `${MAINT_AMBER}20` }} />
      <div className="orb absolute -left-6 bottom-6 h-28 w-28" style={{ background: `${MAINT_SKY}25` }} />
    </div>
  );
}

export default function WebsiteMaintenanceDevelopmentPageContent() {
  const stats = getMaintenanceStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #e0f2fe, #fffbeb 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${MAINT_SKY}44`, background: `${MAINT_SKY}10`, color: MAINT_SKY }}>
              <Wrench size={12} /> Website Maintenance
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{maintenanceHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: MAINT_AMBER }}>{maintenanceHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{maintenanceHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {maintenanceHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: MAINT_SKY }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a href="#packages" className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold" style={{ borderColor: MAINT_SKY, color: MAINT_SKY }}>
                Explore Packages
              </a>
            </div>
          </motion.div>
          <DashboardMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${MAINT_SKY}06, ${MAINT_AMBER}06)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: MAINT_SKY }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="maint-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">We Are The Company You Can Trust On</h2>
          <p className="mx-auto mb-6 max-w-3xl text-center text-sm text-razo-gray">{maintenanceTrustIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src="/images/service-web.jpg" alt="Website maintenance team" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-razo-dark">Website Maintenance Services</h3>
              <p className="mt-4 text-sm leading-relaxed text-razo-gray">{maintenanceIntro}</p>
              <p className="mt-4 text-sm leading-relaxed text-razo-gray">{maintenanceOutsourcing}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Quick Answers About Maintenance</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {maintenanceInfoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="overflow-hidden rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(160deg, ${MAINT_SKY}, #0284c7)` }}>
                  <div className="relative h-24 overflow-hidden">
                    <Image src="/images/crm/team.jpg" alt="" fill className="object-cover opacity-30" sizes="200px" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon size={28} className="text-white/90" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xs font-bold leading-snug">{card.title}</h3>
                    <p className="mt-2 text-[11px] text-white/75">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">The Nine Pillars of Our Web Maintenance</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Comprehensive care across performance, security, content, and support.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {maintenancePillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${MAINT_SKY}, ${MAINT_AMBER})` }}>
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Protect · Update · Report</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {maintenanceCoreServices.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-6 text-center">
                  <Icon size={32} className="mx-auto text-sky-400" />
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Maintenance Services We Provide</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {maintenanceServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <Icon size={22} style={{ color: MAINT_SKY }} />
                  <h3 className="mt-3 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="py-14 scroll-mt-28" style={{ background: `linear-gradient(160deg, #e0f2fe, #fffbeb)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Website Maintenance Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Yearly plans with monthly support hours — pick the tier that fits your site.</p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {maintenancePackages.map((pkg, i) => (
              <motion.div key={pkg.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${pkg.popular ? "border-amber-300 ring-2 ring-amber-200" : "border-gray-100"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: MAINT_AMBER }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: pkg.accent }}>{pkg.name}</h3>
                <p className="mt-2 text-2xl font-bold text-razo-dark">${pkg.priceUsd}<span className="text-sm font-normal text-razo-gray">/yr</span></p>
                <p className="text-sm text-razo-gray">₹{pkg.priceInr.toLocaleString("en-IN")}/yr</p>
                <p className="mt-2 text-xs font-semibold" style={{ color: MAINT_SKY }}>{pkg.hours} hours monthly</p>
                <Link href={homeRoutes.contact} className="mt-4 block rounded-full py-2.5 text-center text-sm font-semibold text-white" style={{ background: pkg.accent }}>
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Full Package Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Side-by-side feature matrix across all maintenance tiers.</p>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${MAINT_SKY}, #0284c7)` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    {maintenancePackages.map((p) => (
                      <th key={p.id} className="px-4 py-4 text-center font-bold text-white">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {maintenanceComparisonRows.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-sky-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.bronze} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.silver} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.gold} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.platinum} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
              Start a Web Maintenance Project <ArrowRight size={16} />
            </Link>
            <p className="mt-2 text-xs text-razo-gray">Your free quote is just a click away — no forms on this page.</p>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${MAINT_SKY}, #0284c7)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Platforms We Maintain</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {maintenanceTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg">
                <Image src={t.icon} alt={t.name} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="mt-2 text-xs font-bold text-razo-dark">{t.name}</span>
                <span className="text-[10px] font-semibold" style={{ color: MAINT_AMBER }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Maintenance Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {maintenanceProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? MAINT_SKY : MAINT_AMBER }}>
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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/crm/implementation.jpg" alt="Website maintenance implementation" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Let&apos;s Start a Web Maintenance Project Together</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray">
              Whether you need basic backups or full Platinum care with performance monitoring, our team will tailor a plan to your site&apos;s technology stack and traffic.
            </p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: MAINT_SKY }}>
              Book Your Session <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Maintenance Success Stories</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {maintenanceProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: MAINT_SKY }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${MAINT_SKY}, ${MAINT_AMBER})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {maintenanceRelated.map((r, i) => (
              <motion.div key={r.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={r.href} className="block h-full rounded-2xl bg-white p-5 shadow-lg transition hover:-translate-y-1">
                  <Image src={r.icon} alt={r.label} width={36} height={36} className="h-9 w-9 rounded-lg object-contain" />
                  <h3 className="mt-4 font-bold text-razo-dark">{r.label}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{r.description}</p>
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
            <p className="mt-1 text-sm text-razo-gray">Tips on keeping your website healthy and fast.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {maintenanceBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: MAINT_SKY }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={maintenanceFaqs} title="Frequently Asked Questions" description="Maintenance basics, costs, SEO, backups, security, WordPress, and performance." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${MAINT_SKY}, ${MAINT_AMBER})` }}>
              <Wrench size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">100% website care with expert maintenance packages.</p>
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
