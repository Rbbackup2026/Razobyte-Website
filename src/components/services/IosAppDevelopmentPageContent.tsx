"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Sparkles, Smartphone, Minus } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  IOS_BLUE,
  IOS_SLATE,
  IOS_PURPLE,
  iosHero,
  iosHighlights,
  getIosStats,
  iosIntro,
  iosDedicatedIntro,
  iosBenefits,
  iosExpertise,
  iosKeyReasons,
  iosHiringModels,
  iosEngagementComparison,
  iosTechComparison,
  iosHiringModelComparison,
  iosServices,
  iosTechStack,
  iosProcess,
  iosHireSteps,
  iosIndustries,
  iosRelated,
  iosProjects,
  iosBlogs,
  iosFaqs,
} from "@/lib/iosAppDevelopment";
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

function IPhoneMockup() {
  const orbit = [
    { label: "Swift", icon: "S", x: -112, y: -52, color: "#F05138" },
    { label: "App Store", icon: "A", x: 114, y: -50, color: IOS_BLUE },
    { label: "SwiftUI", icon: "UI", x: -102, y: 60, color: IOS_PURPLE },
    { label: "Xcode", icon: "X", x: 108, y: 58, color: "#147EFB" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${IOS_BLUE}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${IOS_PURPLE}22` }} />

      {orbit.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-[11px] font-bold shadow-lg"
          style={{ color: item.color, borderColor: `${item.color}44`, transform: `translate(${item.x}px, ${item.y}px)` }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] text-white" style={{ background: item.color }}>
            {item.icon}
          </span>
          {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: 10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[230px] overflow-hidden rounded-[2.5rem] border-[3px] border-gray-700 bg-gray-900 shadow-2xl sm:w-[250px]"
        style={{ boxShadow: `0 32px 80px ${IOS_BLUE}55` }}
      >
        <div className="mx-auto mt-3 h-6 w-24 rounded-full bg-black" />
        <div className="m-2.5 overflow-hidden rounded-[1.75rem] bg-white">
          <div className="px-4 py-3 text-center" style={{ background: `linear-gradient(135deg, ${IOS_SLATE}, #2c2c2e)` }}>
            <p className="text-[10px] font-bold text-white">Razobyte iOS</p>
            <p className="text-[8px] text-white/60">iPhone 16 Pro</p>
          </div>
          <Image src="/images/service-mobile.jpg" alt="iOS app" width={230} height={150} className="h-36 w-full object-cover" priority />
          <div className="grid grid-cols-4 gap-1.5 p-2.5">
            {["📱", "💳", "🔔", "⚙️"].map((icon) => (
              <div key={icon} className="flex h-10 items-center justify-center rounded-2xl bg-gray-50 text-base shadow-sm">{icon}</div>
            ))}
          </div>
          <div className="border-t border-gray-100 px-3 py-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold text-razo-gray">Build</span>
              <span className="text-[9px] font-bold" style={{ color: IOS_BLUE }}>Swift 6.0</span>
            </div>
            <div className="mt-1.5 h-2 w-full rounded-full bg-gray-100">
              <motion.div
                animate={{ width: ["40%", "92%", "75%"] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mb-3 h-1 w-20 rounded-full bg-gray-600" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-2xl border-2 border-white px-3.5 py-2.5 shadow-xl"
        style={{ background: IOS_BLUE }}
      >
        <p className="text-[9px] font-bold text-white/80">APP STORE</p>
        <p className="text-sm font-bold text-white">★ 4.8</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute -left-4 bottom-28 z-30 text-5xl"
      >
        🍎
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${IOS_BLUE}20` }} />
      <div className="orb absolute right-0 top-6 h-28 w-28" style={{ background: `${IOS_PURPLE}18` }} />
    </div>
  );
}

export default function IosAppDevelopmentPageContent() {
  const stats = getIosStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #e8f0fe, #f5f0ff 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${IOS_BLUE}44`, background: `${IOS_BLUE}12`, color: IOS_BLUE }}>
              <Smartphone size={12} /> iOS App Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{iosHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: IOS_PURPLE }}>{iosHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{iosHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {iosHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: IOS_BLUE }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Hire iOS Developers <ArrowRight size={16} />
            </Link>
          </motion.div>
          <IPhoneMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${IOS_BLUE}08, ${IOS_PURPLE}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: IOS_BLUE }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="ios-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/crm/implementation.jpg" alt="iOS development workspace" width={600} height={420} className="h-64 w-full object-cover sm:h-80" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Dedicated iOS/iPhone App Developers</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{iosIntro}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{iosDedicatedIntro}</p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: IOS_BLUE }}>
              Get Started Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, #0056b3)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Why Hire iOS/iPhone App Developers From Us</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Team augmentation, collaboration, and technical excellence.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {iosBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Hire iOS Developer for Custom Mobile App Development</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">End-to-end iPhone and iPad app services from strategy to App Store launch.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {iosExpertise.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white transition group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
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

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">iOS App Development Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {iosServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${IOS_BLUE}15` }}>
                    <Icon size={28} style={{ color: IOS_BLUE }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${IOS_SLATE}, #2c2c2e)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Key Reasons to Hire Dedicated iOS Developers</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {iosKeyReasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-6">
                  <Icon size={32} className="text-blue-400" />
                  <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="hiring-models" className="py-14 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Hiring iOS/iPhone App Developer Models</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Choose how you want to manage your dedicated iOS development team.</p>
          <div className="grid gap-6 sm:grid-cols-3">
            {iosHiringModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div key={model.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-xl">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
                    <Icon size={36} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-razo-dark">{model.title}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: IOS_BLUE }}>{model.control}</p>
                  <p className="mt-3 text-sm text-razo-gray">{model.description}</p>
                  <p className="mt-3 text-xs font-medium text-razo-gray">Best for: <span className="font-bold text-razo-dark">{model.bestFor}</span></p>
                  <Link href={homeRoutes.contact} className="mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: IOS_BLUE }}>
                    Get Quote
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Hiring Model Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Managed vs client-led vs hybrid team structures.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Managed</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Client-Led</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Hybrid</th>
                  </tr>
                </thead>
                <tbody>
                  {iosHiringModelComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-blue-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.managed} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.client} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.hybrid} /></td>
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Engagement Model Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Full-time vs part-time vs hourly iOS developer engagement.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, #F05138, ${IOS_BLUE})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Full-Time</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Part-Time</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Hourly</th>
                  </tr>
                </thead>
                <tbody>
                  {iosEngagementComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-orange-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.fulltime} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.parttime} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.hourly} /></td>
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Technology Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Swift vs Objective-C vs Flutter for your iOS project.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${IOS_BLUE}, #F05138)` }}>
                    <th className="px-4 py-4 font-bold text-white">Criteria</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Swift</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Objective-C</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Flutter</th>
                  </tr>
                </thead>
                <tbody>
                  {iosTechComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-violet-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center">
                        {typeof row.swift === "boolean" ? <CellValue value={row.swift} /> : <span className="text-xs font-semibold">{row.swift}</span>}
                      </td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center">
                        {typeof row.objc === "boolean" ? <CellValue value={row.objc} /> : <span className="text-xs font-semibold">{row.objc}</span>}
                      </td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center">
                        {typeof row.flutter === "boolean" ? <CellValue value={row.flutter} /> : <span className="text-xs font-semibold">{row.flutter}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">iOS Tech Stack</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Tools and frameworks our iOS developers use daily.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {iosTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: IOS_BLUE }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Hire Dedicated iOS Developers in 5 Simple Steps</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {iosHireSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-white" style={{ background: i % 2 === 0 ? IOS_BLUE : IOS_PURPLE }}>
                    {i + 1}
                  </div>
                  <span className="mt-4 flex justify-center">
                    <Icon size={28} style={{ color: IOS_BLUE }} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{step.step}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Ready to Start Your Dream Project?</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
              We have a team to get you there — from iPhone MVP to full App Store launch. Let&apos;s build an iOS app that stands out.
            </p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: IOS_BLUE }}>
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/service-mobile.jpg" alt="iOS app development" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "linear-gradient(160deg, #e8f0fe, #f5f0ff)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our iOS Development Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {iosProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? IOS_BLUE : IOS_PURPLE }}>
                  {i + 1}
                </div>
                <h3 className="mt-3 text-xs font-bold text-razo-dark">{p.step}</h3>
                <p className="mt-1 text-[10px] text-razo-gray">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Industries We Serve</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {iosIndustries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${IOS_BLUE}12` }}>
                    <Icon size={28} style={{ color: IOS_BLUE }} />
                  </span>
                  <h3 className="mt-4 font-bold text-razo-dark">{ind.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">iOS App Projects</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {iosProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: IOS_BLUE }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {iosRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">Take a peek inside our experts&apos; minds.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {iosBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: IOS_BLUE }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={iosFaqs} title="Frequently Asked Questions" description="iOS development, Swift, costs, security, frameworks, trends, and App Store submission." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${IOS_BLUE}, ${IOS_PURPLE})` }}>
              <Smartphone size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s build an app that stands out!</p>
              <p className="mt-1 text-sm text-razo-gray">Hire dedicated iOS developers from Razobyte today.</p>
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
