"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2, Sparkles, Smartphone, Minus } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  ANDROID_GREEN,
  ANDROID_BLUE,
  androidHero,
  androidHighlights,
  getAndroidStats,
  androidIntro,
  androidDedicatedIntro,
  androidBenefits,
  androidExpertise,
  androidKeyReasons,
  androidHiringModels,
  androidHiringComparison,
  androidTechComparison,
  androidServices,
  androidTechStack,
  androidProcess,
  androidHireSteps,
  androidIndustries,
  androidRelated,
  androidProjects,
  androidBlogs,
  androidFaqs,
} from "@/lib/androidAppDevelopment";
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

function AndroidPhoneMockup() {
  const orbit = [
    { label: "Kotlin", icon: "K", x: -108, y: -50, color: "#7F52FF" },
    { label: "Play Store", icon: "▶", x: 110, y: -48, color: ANDROID_GREEN },
    { label: "Firebase", icon: "🔥", x: -100, y: 58, color: "#FFCA28" },
    { label: "Material", icon: "M", x: 105, y: 55, color: ANDROID_BLUE },
  ];

  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center sm:h-[440px]">
      <div className="absolute h-56 w-56 rounded-full border border-dashed sm:h-64 sm:w-64" style={{ borderColor: `${ANDROID_GREEN}44` }} />
      <div className="absolute h-80 w-80 rounded-full border" style={{ borderColor: `${ANDROID_BLUE}22` }} />

      {orbit.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-[11px] font-bold shadow-lg"
          style={{ color: item.color, borderColor: `${item.color}44`, transform: `translate(${item.x}px, ${item.y}px)` }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white" style={{ background: item.color }}>
            {item.icon}
          </span>
          {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[220px] overflow-hidden rounded-[2rem] border-4 border-gray-800 bg-gray-900 shadow-2xl sm:w-[240px]"
        style={{ boxShadow: `0 28px 70px ${ANDROID_GREEN}44` }}
      >
        <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-gray-800" />
        <div className="m-2 overflow-hidden rounded-2xl bg-white">
          <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: `linear-gradient(90deg, ${ANDROID_GREEN}, ${ANDROID_BLUE})` }}>
            <span className="text-[9px] font-bold">Razobyte App</span>
            <span className="text-[8px] opacity-80">v2.4.1</span>
          </div>
          <Image src="/images/service-mobile.jpg" alt="Android app" width={220} height={140} className="h-32 w-full object-cover" priority />
          <div className="grid grid-cols-4 gap-1 p-2">
            {["🏠", "📊", "💬", "⚙️"].map((icon) => (
              <div key={icon} className="flex h-8 items-center justify-center rounded-lg bg-gray-50 text-sm">{icon}</div>
            ))}
          </div>
          <div className="border-t border-gray-100 px-3 py-2">
            <div className="h-1.5 w-full rounded-full bg-gray-100">
              <motion.div
                animate={{ width: ["30%", "85%", "60%"] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="h-full rounded-full"
                style={{ background: ANDROID_GREEN }}
              />
            </div>
            <p className="mt-1 text-[8px] text-razo-gray">Building feature...</p>
          </div>
        </div>
        <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-gray-700" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-20 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: ANDROID_GREEN }}
      >
        <p className="text-[9px] font-bold text-white/80">PLAY STORE</p>
        <p className="text-xs font-bold text-white">★ 4.9</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        🤖
      </motion.div>

      <div className="orb absolute -left-6 bottom-8 h-28 w-28" style={{ background: `${ANDROID_GREEN}25` }} />
      <div className="orb absolute right-0 top-8 h-24 w-24" style={{ background: `${ANDROID_BLUE}20` }} />
    </div>
  );
}

export default function AndroidAppDevelopmentPageContent() {
  const stats = getAndroidStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #ecfdf5, #eff6ff 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${ANDROID_GREEN}44`, background: `${ANDROID_GREEN}15`, color: "#059669" }}>
              <Smartphone size={12} /> Android App Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{androidHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: ANDROID_BLUE }}>{androidHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{androidHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {androidHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: ANDROID_GREEN }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Hire Android Developers <ArrowRight size={16} />
            </Link>
          </motion.div>
          <AndroidPhoneMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${ANDROID_GREEN}08, ${ANDROID_BLUE}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: ANDROID_GREEN }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="android-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
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
            <Image src="/images/crm/team.jpg" alt="Android development team" width={600} height={420} className="h-64 w-full object-cover sm:h-80" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Dedicated Android Developers for Hire</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{androidIntro}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{androidDedicatedIntro}</p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: ANDROID_GREEN }}>
              Get Started Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ANDROID_GREEN}, #059669)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Benefits of Hiring Android Developers From Us</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Team augmentation, seamless collaboration, and technical excellence.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {androidBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-5 shadow-lg">
                  <Icon size={24} style={{ color: ANDROID_BLUE }} />
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Expertise of Our Full-Stack Android Developers</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {androidExpertise.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${ANDROID_GREEN}, ${ANDROID_BLUE})` }}>
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

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Android App Development Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {androidServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <Icon size={22} style={{ color: ANDROID_GREEN }} />
                  <h3 className="mt-3 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ANDROID_BLUE}, #1d4ed8)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Key Reasons to Hire Dedicated Android Developers</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {androidKeyReasons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-5 shadow-lg">
                  <Icon size={22} style={{ color: ANDROID_BLUE }} />
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="hiring-models" className="py-14 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Our Models to Hire Android Developers</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Flexible engagement options to match your project scope and budget.</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {androidHiringModels.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div key={model.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg">
                  <Icon size={32} className="mx-auto" style={{ color: ANDROID_GREEN }} />
                  <h3 className="mt-4 text-lg font-bold text-razo-dark">{model.title}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: ANDROID_BLUE }}>{model.hours}</p>
                  <p className="mt-3 text-xs text-razo-gray">{model.description}</p>
                  <p className="mt-3 text-[11px] font-medium text-razo-gray">Best for: <span className="font-bold text-razo-dark">{model.bestFor}</span></p>
                  <Link href={homeRoutes.contact} className="mt-4 inline-block rounded-full px-5 py-2 text-xs font-semibold text-white" style={{ background: ANDROID_GREEN }}>
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
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Compare full-time, part-time, and hourly engagement at a glance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${ANDROID_GREEN}, ${ANDROID_BLUE})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Full-Time</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Part-Time</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Hourly</th>
                  </tr>
                </thead>
                <tbody>
                  {androidHiringComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-emerald-50/40" : "bg-white"}>
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
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Technology Stack Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Kotlin vs Java vs Flutter — choose the right approach for your Android app.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, #7F52FF, ${ANDROID_GREEN})` }}>
                    <th className="px-4 py-4 font-bold text-white">Criteria</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Kotlin</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Java</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Flutter</th>
                  </tr>
                </thead>
                <tbody>
                  {androidTechComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-violet-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center">
                        {typeof row.kotlin === "boolean" ? <CellValue value={row.kotlin} /> : <span className="text-xs font-semibold">{row.kotlin}</span>}
                      </td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center">
                        {typeof row.java === "boolean" ? <CellValue value={row.java} /> : <span className="text-xs font-semibold">{row.java}</span>}
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ANDROID_GREEN}, ${ANDROID_BLUE})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Android Tech Stack</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {androidTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg">
                <Image src={t.icon} alt={t.name} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="mt-2 text-xs font-bold text-razo-dark">{t.name}</span>
                <span className="text-[10px] font-semibold" style={{ color: ANDROID_GREEN }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Hire Dedicated Android Developers in 5 Simple Steps</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {androidHireSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? ANDROID_GREEN : ANDROID_BLUE }}>
                    {i + 1}
                  </div>
                  <Icon size={20} className="mx-auto mt-3" style={{ color: ANDROID_GREEN }} />
                  <h3 className="mt-2 text-xs font-bold text-razo-dark">{step.step}</h3>
                  <p className="mt-1 text-[10px] text-razo-gray">{step.description}</p>
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
              We have a team to get you there — from MVP to Play Store launch. Let&apos;s build an Android app that stands out in a crowded marketplace.
            </p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: ANDROID_BLUE }}>
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/service-mobile.jpg" alt="Android app development" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "linear-gradient(160deg, #ecfdf5, #eff6ff)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Development Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {androidProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? ANDROID_GREEN : ANDROID_BLUE }}>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {androidIndustries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                  <Icon size={22} style={{ color: ANDROID_GREEN }} />
                  <h3 className="mt-3 font-bold text-razo-dark">{ind.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Android App Projects</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {androidProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ANDROID_GREEN }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ANDROID_GREEN}, ${ANDROID_BLUE})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {androidRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">Take a peek inside our experts&apos; minds.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {androidBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: ANDROID_GREEN }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={androidFaqs} title="Frequently Asked Questions" description="Android development, Kotlin, costs, testing, trends, and iOS comparison." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${ANDROID_GREEN}, ${ANDROID_BLUE})` }}>
              <Smartphone size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s build an app that stands out!</p>
              <p className="mt-1 text-sm text-razo-gray">Hire dedicated Android developers from Razobyte today.</p>
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
