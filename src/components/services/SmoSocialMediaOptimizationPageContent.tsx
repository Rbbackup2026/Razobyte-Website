"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Share2,
  Minus,
  Star,
  Quote,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  SMO_VIOLET,
  SMO_PINK,
  smoHero,
  smoHighlights,
  getSmoStats,
  smoBrandIntro,
  smoDefinition,
  smoWhyChoose,
  smoCoreServices,
  smoBenefits,
  smoPlatforms,
  smoPlatformComparison,
  smoServices,
  smoPackages,
  smoPackageComparison,
  smoTechStack,
  smoProcess,
  smoTrustBadges,
  smoTestimonials,
  smoProjects,
  smoRelated,
  smoBlogs,
  smoFaqs,
} from "@/lib/smoSocialMediaOptimizationDevelopment";
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

function SocialAnalyticsMockup() {
  const platforms = [
    { name: "Instagram", followers: "24.8K", eng: "6.2%", color: "#E4405F" },
    { name: "Facebook", followers: "18.1K", eng: "4.1%", color: "#1877F2" },
    { name: "LinkedIn", followers: "9.4K", eng: "3.8%", color: "#0A66C2" },
  ];

  const orbit = [
    { label: "Likes", icon: "❤️", x: -115, y: -48, color: SMO_PINK },
    { label: "Shares", icon: "🔄", x: 115, y: -45, color: SMO_VIOLET },
    { label: "Reach", icon: "👁️", x: -108, y: 60, color: "#3B82F6" },
    { label: "Growth", icon: "📈", x: 110, y: 55, color: "#059669" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${SMO_VIOLET}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${SMO_PINK}22` }} />

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
        style={{ boxShadow: `0 32px 80px ${SMO_VIOLET}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Share2 size={14} /> SOCIAL HUB
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-lime-300" />
        </div>

        <div className="bg-slate-900 p-3">
          <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
            <span className="text-[9px] font-bold text-pink-400">● ENGAGEMENT UP</span>
            <span className="text-[9px] text-slate-400">reach 142K/mo</span>
          </div>

          <div className="mb-2 rounded-lg bg-slate-800 p-2">
            <p className="mb-1.5 text-[8px] font-bold text-slate-400">PLATFORM STATS</p>
            {platforms.map((p) => (
              <div key={p.name} className="mb-1 flex items-center justify-between rounded bg-slate-700/60 px-2 py-1">
                <span className="truncate text-[8px] text-slate-300">{p.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-slate-400">{p.followers}</span>
                  <span className="text-[9px] font-bold" style={{ color: p.color }}>{p.eng}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Posts", val: "48", color: SMO_VIOLET },
              { label: "Likes", val: "12K", color: SMO_PINK },
              { label: "Shares", val: "2.4K", color: "#059669" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-800 p-2 text-center">
                <p className="text-[8px] text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 border-t border-gray-100 bg-white p-2">
          <div className="rounded-md py-1 text-center text-[7px] font-bold text-white" style={{ background: "#E4405F" }}>IG ✓</div>
          <div className="rounded-md py-1 text-center text-[7px] font-bold text-white" style={{ background: "#1877F2" }}>FB ✓</div>
          <div className="rounded-md py-1 text-center text-[7px] font-bold text-white" style={{ background: "#0A66C2" }}>IN ✓</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: SMO_PINK }}
      >
        <p className="text-[9px] font-bold text-white/80">GROWTH</p>
        <p className="text-xs font-bold text-white">+42% 📱</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        ✨
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${SMO_VIOLET}20` }} />
      <div className="orb absolute right-0 top-8 h-28 w-28" style={{ background: `${SMO_PINK}18` }} />
    </div>
  );
}

export default function SmoSocialMediaOptimizationPageContent() {
  const stats = getSmoStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #fdf4ff, #fce7f3 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${SMO_VIOLET}44`, background: `${SMO_VIOLET}10`, color: SMO_VIOLET }}>
              <Share2 size={12} /> SMO Services
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{smoHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: SMO_PINK }}>{smoHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{smoHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {smoHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: SMO_VIOLET }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
          <SocialAnalyticsMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${SMO_VIOLET}08, ${SMO_PINK}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: SMO_VIOLET }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="smo-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Strengthen Your Brand&apos;s Digital Presence</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-razo-gray">{smoBrandIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src={smoDefinition.image} alt={smoDefinition.title} width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-razo-dark">{smoDefinition.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-razo-gray">{smoDefinition.description}</p>
              <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: SMO_VIOLET }}>
                Let&apos;s Discuss <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SMO_VIOLET}, #6d28d9)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Why Choose Razobyte for SMO?</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {smoWhyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
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

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Core SMO Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {smoCoreServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition hover:-translate-y-1">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white" style={{ background: `linear-gradient(135deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Benefits of SMO</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-1">
              {smoBenefits.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl" style={{ background: `${SMO_VIOLET}12` }}>
                      <Icon size={26} style={{ color: SMO_VIOLET }} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-razo-dark">{item.title}</h3>
                      <p className="mt-1 text-xs text-razo-gray">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border-4 border-white shadow-2xl" style={{ boxShadow: `0 24px 60px ${SMO_PINK}33` }}>
            <Image src="/images/service-marketing.jpg" alt="Social media engagement" width={600} height={420} className="h-64 w-full object-cover sm:h-80" />
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SMO_PINK}, #be185d)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Platforms We Specialize In</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Expert SMO across every major social platform.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {smoPlatforms.map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div key={platform.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-6 shadow-xl transition hover:-translate-y-1">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: platform.accent }}>
                    <Icon size={32} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-razo-dark">{platform.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: platform.accent }}>{platform.bestFor}</p>
                  <p className="mt-2 text-xs text-razo-gray">{platform.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Platform Feature Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Facebook vs Instagram vs LinkedIn vs YouTube — SMO capabilities at a glance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Facebook</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Instagram</th>
                    <th className="px-4 py-4 text-center font-bold text-white">LinkedIn</th>
                    <th className="px-4 py-4 text-center font-bold text-white">YouTube</th>
                  </tr>
                </thead>
                <tbody>
                  {smoPlatformComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-purple-50/40" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.facebook} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.instagram} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.linkedin} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.youtube} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">SMO Management Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">Scalable social media optimization from startups to enterprise brands.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {smoPackages.map((plan, i) => (
              <motion.div key={plan.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${plan.popular ? "border-purple-300 ring-2 ring-purple-200" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: SMO_VIOLET }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>{plan.name}</h3>
                <p className="mt-1 text-xs text-razo-gray">{plan.tagline}</p>
                <p className="mt-3 text-2xl font-bold text-razo-dark">{plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal text-razo-gray">/mo</span>}</p>
                <p className="mt-2 text-xs text-razo-gray">Platforms: {plan.platforms}</p>
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
                  <tr style={{ background: `linear-gradient(90deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Starter</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Growth</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Professional</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {smoPackageComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-pink-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.starter} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.growth} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.professional} /></td>
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
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">SMO Services We Offer</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smoServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${SMO_VIOLET}12` }}>
                    <Icon size={28} style={{ color: SMO_VIOLET }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">SMO Tools & Platforms</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Industry-leading tools powering our social media campaigns.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {smoTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: SMO_VIOLET }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our SMO Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {smoProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? SMO_VIOLET : SMO_PINK }}>
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
            {smoTrustBadges.map((badge, i) => (
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
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">SMO Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {smoProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: SMO_VIOLET }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, #fdf4ff, #fce7f3)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark">500+ Clients Served</h2>
          <p className="mb-10 text-center text-sm text-razo-gray">Hear from brands that grew with Razobyte SMO.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {smoTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <Quote size={28} className="absolute right-5 top-5 opacity-10" style={{ color: SMO_VIOLET }} />
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {smoRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">SMO tips, hashtag guides, and social growth strategies.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {smoBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: SMO_VIOLET }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={smoFaqs} title="Frequently Asked Questions" description="Everything about SMO, platforms, hashtags, and social growth strategies." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${SMO_VIOLET}, ${SMO_PINK})` }}>
              <Share2 size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Ready to reshape your social media?</p>
              <p className="mt-1 text-sm text-razo-gray">Expert SMO services from Razobyte&apos;s certified team.</p>
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
