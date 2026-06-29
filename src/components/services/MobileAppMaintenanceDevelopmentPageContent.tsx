"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Sparkles, Smartphone, Minus, Headphones } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  MOB_TEAL,
  MOB_CORAL,
  mobileMaintHero,
  mobileMaintHighlights,
  getMobileMaintStats,
  mobileMaintIntro,
  mobileMaintWhyChoose,
  mobileMaintSecurity,
  mobileMaintServiceCategories,
  mobileMaintSupportModels,
  mobileMaintModelComparison,
  mobileMaintPlatformComparison,
  mobileMaintPackages,
  mobileMaintPackageComparison,
  mobileMaintFeatures,
  mobileMaintOrbitFeatures,
  mobileMaintServices,
  mobileMaintTechStack,
  mobileMaintProcess,
  mobileMaintRelated,
  mobileMaintProjects,
  mobileMaintBlogs,
  mobileMaintFaqs,
} from "@/lib/mobileAppMaintenanceDevelopment";
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

function DualPhoneMaintMockup() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-lg items-center justify-center sm:h-[460px]">
      <div className="absolute h-64 w-64 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${MOB_TEAL}44` }} />

      {mobileMaintOrbitFeatures.map((f, i) => {
        const angle = (i / mobileMaintOrbitFeatures.length) * 2 * Math.PI - Math.PI / 2;
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.span
            key={f.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.06 }}
            className="absolute z-20 rounded-full border bg-white px-2.5 py-1 text-[9px] font-bold shadow-md"
            style={{ color: f.color, borderColor: `${f.color}44`, transform: `translate(${x}px, ${y}px)` }}
          >
            {f.label}
          </motion.span>
        );
      })}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="tilt-card absolute -left-2 z-10 w-[120px] -rotate-6 overflow-hidden rounded-[1.5rem] border-[3px] border-gray-800 bg-gray-900 shadow-xl sm:w-[130px]"
      >
        <div className="mx-auto mt-1.5 h-3 w-12 rounded-full bg-gray-800" />
        <div className="m-1.5 overflow-hidden rounded-xl bg-white">
          <div className="px-2 py-1 text-center text-[7px] font-bold text-white" style={{ background: "#3DDC84" }}>Android</div>
          <div className="space-y-1 p-1.5">
            <div className="h-1.5 w-full rounded-full bg-emerald-100"><div className="h-full w-4/5 rounded-full bg-emerald-500" /></div>
            <p className="text-[6px] text-razo-gray">v14.2 ✓</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="tilt-card absolute -right-2 z-10 w-[120px] rotate-6 overflow-hidden rounded-[1.5rem] border-[3px] border-gray-800 bg-gray-900 shadow-xl sm:w-[130px]"
      >
        <div className="mx-auto mt-1.5 h-3 w-12 rounded-full bg-gray-800" />
        <div className="m-1.5 overflow-hidden rounded-xl bg-white">
          <div className="px-2 py-1 text-center text-[7px] font-bold text-white" style={{ background: "#007AFF" }}>iOS</div>
          <div className="space-y-1 p-1.5">
            <div className="h-1.5 w-full rounded-full bg-blue-100"><div className="h-full w-5/6 rounded-full bg-blue-500" /></div>
            <p className="text-[6px] text-razo-gray">v18.1 ✓</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative z-20 w-[200px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl sm:w-[220px]"
        style={{ boxShadow: `0 28px 70px ${MOB_TEAL}44` }}
      >
        <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: `linear-gradient(90deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
          <span className="flex items-center gap-1 text-[9px] font-bold">
            <Headphones size={12} /> APP CARE CENTER
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <Image src="/images/service-mobile.jpg" alt="Mobile app maintenance" width={220} height={120} className="h-28 w-full object-cover" priority />
        <div className="space-y-1.5 p-2.5">
          {[
            { label: "Crashes", val: "0 today", ok: true },
            { label: "Updates", val: "3 pending", ok: false },
            { label: "Rating", val: "4.8 ★", ok: true },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-lg border border-teal-100 bg-teal-50/50 px-2.5 py-1.5">
              <span className="text-[9px] font-medium text-razo-dark">{row.label}</span>
              <span className="text-[9px] font-bold" style={{ color: row.ok ? "#10B981" : MOB_CORAL }}>{row.val}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1 border-t border-gray-100 p-2">
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: MOB_TEAL }}>Native</div>
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: MOB_CORAL }}>Hybrid</div>
        </div>
      </motion.div>

      <div className="orb absolute -left-8 bottom-10 h-28 w-28" style={{ background: `${MOB_TEAL}22` }} />
      <div className="orb absolute -right-6 top-12 h-24 w-24" style={{ background: `${MOB_CORAL}18` }} />
    </div>
  );
}

export default function MobileAppMaintenanceDevelopmentPageContent() {
  const stats = getMobileMaintStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #f0fdfa, #fff7ed 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${MOB_TEAL}44`, background: `${MOB_TEAL}12`, color: MOB_TEAL }}>
              <Headphones size={12} /> Mobile App Maintenance
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{mobileMaintHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: MOB_CORAL }}>{mobileMaintHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{mobileMaintHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {mobileMaintHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: MOB_TEAL }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Let&apos;s Discuss <ArrowRight size={16} />
            </Link>
          </motion.div>
          <DualPhoneMaintMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${MOB_TEAL}08, ${MOB_CORAL}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: MOB_TEAL }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="mobmaint-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Our Mobile App Maintenance & Support Services</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">{mobileMaintIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src="/images/service-mobile.jpg" alt="Mobile app support team" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-razo-gray sm:text-base">{mobileMaintWhyChoose}</p>
              <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{mobileMaintSecurity}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Maintenance Service Categories</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {mobileMaintServiceCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-razo-dark">{cat.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{cat.description}</p>
                  <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-razo-gray">
                        <CheckCircle2 size={12} style={{ color: MOB_TEAL }} className="mt-0.5 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${MOB_TEAL}, #0d9488)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Mobile App Maintenance Features</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Comprehensive and persistent strategies for superior user experience on iOS & Android.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mobileMaintFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${MOB_TEAL}15` }}>
                    <Icon size={28} style={{ color: MOB_TEAL }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">App Maintenance & Support Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mobileMaintServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon size={28} style={{ color: MOB_CORAL }} />
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="support-models" className="py-14 scroll-mt-28 bg-razo-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Maintenance & Support Services Model</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Our Android & iOS app maintenance model enables faster software maintenance, higher productivity, and greater app ROI.</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {mobileMaintSupportModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div key={model.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
                    <Icon size={36} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-razo-dark">{model.title}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: MOB_TEAL }}>{model.billing}</p>
                  <p className="mt-3 text-sm text-razo-gray">{model.description}</p>
                  <p className="mt-3 text-xs font-medium text-razo-gray">Best for: <span className="font-bold text-razo-dark">{model.bestFor}</span></p>
                  <Link href={homeRoutes.contact} className="mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: MOB_TEAL }}>
                    Get Quote
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Support Model Comparison</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">AMC</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Part/Full Time</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Scope-Based</th>
                  </tr>
                </thead>
                <tbody>
                  {mobileMaintModelComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-teal-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.amc} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.dedicated} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.scope} /></td>
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Platform Maintenance Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Android vs iOS vs Hybrid maintenance coverage at a glance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: "linear-gradient(90deg, #3DDC84, #007AFF)" }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Android</th>
                    <th className="px-4 py-4 text-center font-bold text-white">iOS</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {mobileMaintPlatformComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-emerald-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.android} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.ios} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.hybrid} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-14 scroll-mt-28" style={{ background: "linear-gradient(160deg, #f0fdfa, #fff7ed)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Mobile App Maintenance Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Yearly plans with monthly support hours for iOS & Android apps.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mobileMaintPackages.map((pkg, i) => (
              <motion.div key={pkg.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${pkg.popular ? "border-teal-300 ring-2 ring-teal-200" : "border-gray-100"}`}>
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: MOB_TEAL }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: pkg.accent }}>{pkg.name}</h3>
                <p className="mt-2 text-2xl font-bold text-razo-dark">${pkg.priceUsd}<span className="text-sm font-normal text-razo-gray">/yr</span></p>
                <p className="text-sm text-razo-gray">₹{pkg.priceInr.toLocaleString("en-IN")}/yr</p>
                <p className="mt-2 text-xs font-semibold" style={{ color: MOB_TEAL }}>{pkg.hours} hours monthly</p>
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
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    {mobileMaintPackages.map((p) => (
                      <th key={p.id} className="px-4 py-4 text-center font-bold text-white">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mobileMaintPackageComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-teal-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.starter} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.growth} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.enterprise} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.premium} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Technology & Tools</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Cutting-edge technologies to elevate your mobile app maintenance process.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {mobileMaintTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: MOB_TEAL }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Maintenance Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {mobileMaintProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? MOB_TEAL : MOB_CORAL }}>
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
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Maintenance Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {mobileMaintProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: MOB_TEAL }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${MOB_TEAL}, #0d9488)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mobileMaintRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">Insights on mobile app care and optimization.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {mobileMaintBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: MOB_TEAL }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={mobileMaintFaqs} title="Frequently Asked Questions" description="Mobile app maintenance, costs, updates, security, monitoring, and optimization." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${MOB_TEAL}, ${MOB_CORAL})` }}>
              <Smartphone size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Need app maintenance to secure your app?</p>
              <p className="mt-1 text-sm text-razo-gray">24/7 mobile app care for iOS & Android.</p>
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
