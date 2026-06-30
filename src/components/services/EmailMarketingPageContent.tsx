"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Mail,
  Minus,
  Star,
  Quote,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  EMAIL_INDIGO,
  EMAIL_SKY,
  emailHero,
  emailHighlights,
  getEmailStats,
  emailIntro,
  emailWhyImportant,
  emailOfferings,
  emailCaseStudy,
  emailWhyChoose,
  emailServices,
  emailTypeComparison,
  emailPackages,
  emailPackageComparison,
  emailTechStack,
  emailProcess,
  emailTrustBadges,
  emailTestimonials,
  emailProjects,
  emailRelated,
  emailBlogs,
  emailFaqs,
} from "@/lib/emailMarketingDevelopment";
import { COMPANY_PROJECTS_PLUS } from "@/lib/company";
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

function EmailCampaignMockup() {
  const campaigns = [
    { name: "Welcome Series", open: "52%", ctr: "8.4%", color: EMAIL_INDIGO },
    { name: "Newsletter — May", open: "38%", ctr: "5.2%", color: EMAIL_SKY },
    { name: "Cart Recovery", open: "44%", ctr: "12.1%", color: "#059669" },
  ];

  const orbit = [
    { label: "Opens", icon: "📬", x: -115, y: -48, color: EMAIL_INDIGO },
    { label: "Clicks", icon: "👆", x: 115, y: -45, color: EMAIL_SKY },
    { label: "Converts", icon: "💰", x: -108, y: 60, color: "#059669" },
    { label: "Subscribers", icon: "👥", x: 110, y: 55, color: "#DB2777" },
  ];

  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[460px]">
      <div className="absolute h-60 w-60 rounded-full border border-dashed sm:h-72 sm:w-72" style={{ borderColor: `${EMAIL_INDIGO}44` }} />
      <div className="absolute h-84 w-84 rounded-full border" style={{ borderColor: `${EMAIL_SKY}22` }} />

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
        style={{ boxShadow: `0 32px 80px ${EMAIL_INDIGO}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <Mail size={14} /> EMAIL DASHBOARD
          </span>
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="h-2 w-2 rounded-full bg-lime-300" />
        </div>

        <div className="bg-slate-900 p-3">
          <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
            <span className="text-[9px] font-bold text-indigo-400">● CAMPAIGNS LIVE</span>
            <span className="text-[9px] text-slate-400">list 24.8K subs</span>
          </div>

          <div className="mb-2 rounded-lg bg-slate-800 p-2">
            <p className="mb-1.5 text-[8px] font-bold text-slate-400">RECENT CAMPAIGNS</p>
            {campaigns.map((c) => (
              <div key={c.name} className="mb-1 flex items-center justify-between rounded bg-slate-700/60 px-2 py-1">
                <span className="truncate text-[8px] text-slate-300">{c.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-slate-400">{c.open}</span>
                  <span className="text-[9px] font-bold" style={{ color: c.color }}>{c.ctr}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Sent", val: "18K", color: EMAIL_INDIGO },
              { label: "Opens", val: "42%", color: EMAIL_SKY },
              { label: "CTR", val: "6.8%", color: "#059669" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg bg-slate-800 p-2 text-center">
                <p className="text-[8px] text-slate-400">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.val}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 border-t border-gray-100 bg-white p-2">
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: EMAIL_INDIGO }}>Drip ✓</div>
          <div className="rounded-md py-1 text-center text-[8px] font-bold text-white" style={{ background: EMAIL_SKY }}>A/B ✓</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white px-3 py-2 shadow-xl"
        style={{ background: EMAIL_SKY }}
      >
        <p className="text-[9px] font-bold text-white/80">ROI</p>
        <p className="text-xs font-bold text-white">36:1 📧</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute -left-4 bottom-24 z-30 text-4xl"
      >
        ✉️
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-32 w-32" style={{ background: `${EMAIL_INDIGO}20` }} />
      <div className="orb absolute right-0 top-8 h-28 w-28" style={{ background: `${EMAIL_SKY}18` }} />
    </div>
  );
}

export default function EmailMarketingPageContent() {
  const stats = getEmailStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #eef2ff, #e0f2fe 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${EMAIL_INDIGO}44`, background: `${EMAIL_INDIGO}10`, color: EMAIL_INDIGO }}>
              <Mail size={12} /> Email Marketing
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{emailHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: EMAIL_SKY }}>{emailHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{emailHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {emailHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: EMAIL_INDIGO }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Get Started <ArrowRight size={16} />
            </Link>
          </motion.div>
          <EmailCampaignMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${EMAIL_INDIGO}08, ${EMAIL_SKY}08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: EMAIL_INDIGO }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="email-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Email Marketing That Connects, Engages, and Grows</h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-relaxed text-razo-gray">{emailIntro}</p>
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
              <Image src="/images/team.jpg" alt="Email marketing team" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {emailWhyImportant.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${EMAIL_INDIGO}12` }}>
                      <Icon size={26} style={{ color: EMAIL_INDIGO }} />
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${EMAIL_INDIGO}, #4338ca)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">What We Offer</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Five pillars of expert email marketing.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {emailOfferings.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-6 shadow-xl">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
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
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">{emailCaseStudy.title}</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="tilt-card overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-48 lg:h-auto">
                <Image src="/images/portfolio-ecommerce.jpg" alt="Email case study" fill className="object-cover" sizes="400px" />
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: EMAIL_INDIGO }}>Client</p>
                    <p className="mt-1 text-sm text-razo-dark">{emailCaseStudy.client}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: EMAIL_SKY }}>Challenge</p>
                    <p className="mt-1 text-sm text-razo-gray">{emailCaseStudy.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-razo-blue">Our Approach</p>
                    <p className="mt-1 text-sm text-razo-gray">{emailCaseStudy.approach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Results</p>
                    <ul className="mt-2 space-y-1">
                      {emailCaseStudy.results.map((r) => (
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

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Why Choose Razobyte?</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray">{emailWhyChoose}</p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: EMAIL_INDIGO }}>
              Let&apos;s Discuss <ArrowRight size={14} />
            </Link>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/solutions.jpg" alt="Why choose Razobyte" width={600} height={380} className="h-56 w-full object-cover sm:h-64" />
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 py-14" style={{ background: `linear-gradient(135deg, ${EMAIL_SKY}, #0369a1)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Email Marketing Packages</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/80">Scalable email marketing from startups to enterprise lists.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {emailPackages.map((plan, i) => (
              <motion.div key={plan.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`relative rounded-2xl border bg-white p-6 shadow-lg transition hover:-translate-y-1 ${plan.popular ? "border-indigo-300 ring-2 ring-indigo-200" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white" style={{ background: EMAIL_INDIGO }}>Most Popular</span>
                )}
                <h3 className="text-lg font-bold" style={{ color: plan.accent }}>{plan.name}</h3>
                <p className="mt-1 text-xs text-razo-gray">{plan.tagline}</p>
                <p className="mt-3 text-2xl font-bold text-razo-dark">{plan.price}{plan.price !== "Custom" && <span className="text-sm font-normal text-razo-gray">/mo</span>}</p>
                <p className="mt-2 text-xs text-razo-gray">Emails: {plan.emails}</p>
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
                  <tr style={{ background: `linear-gradient(90deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Starter</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Growth</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Professional</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {emailPackageComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-indigo-50/30" : "bg-white"}>
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

      <section className="py-14 bg-razo-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Email Type Comparison</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-razo-gray">Newsletter vs Drip vs Promotional vs Transactional — capabilities at a glance.</p>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
                    <th className="px-4 py-4 font-bold text-white">Feature</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Newsletter</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Drip</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Promotional</th>
                    <th className="px-4 py-4 text-center font-bold text-white">Transactional</th>
                  </tr>
                </thead>
                <tbody>
                  {emailTypeComparison.map((row, ri) => (
                    <tr key={row.feature} className={ri % 2 === 0 ? "bg-sky-50/30" : "bg-white"}>
                      <td className="border-t border-gray-100 px-4 py-3 font-medium text-razo-dark">{row.feature}</td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.newsletter} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.drip} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.promotional} /></td>
                      <td className="border-t border-gray-100 px-4 py-3 text-center"><CellValue value={row.transactional} /></td>
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
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Email Marketing Services We Offer</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {emailServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${EMAIL_INDIGO}12` }}>
                    <Icon size={28} style={{ color: EMAIL_INDIGO }} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white">Email Tools & Platforms</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-sm text-white/80">Industry-leading ESPs and tools powering our campaigns.</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {emailTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-1">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-50 shadow-inner">
                  <Image src={t.icon} alt={t.name} width={56} height={56} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-sm font-bold text-razo-dark">{t.name}</span>
                <span className="mt-1 text-xs font-semibold" style={{ color: EMAIL_INDIGO }}>{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Email Marketing Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {emailProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? EMAIL_INDIGO : EMAIL_SKY }}>
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
            {emailTrustBadges.map((badge, i) => (
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
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Email Marketing Success Stories</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {emailProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-lg">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: EMAIL_INDIGO }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, #eef2ff, #e0f2fe)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark">{COMPANY_PROJECTS_PLUS} Projects Delivered</h2>
          <p className="mb-10 text-center text-sm text-razo-gray">Hear from businesses that grew with Razobyte email marketing.</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {emailTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <Quote size={28} className="absolute right-5 top-5 opacity-10" style={{ color: EMAIL_INDIGO }} />
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {emailRelated.map((r, i) => (
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
            <p className="mt-1 text-sm text-razo-gray">Email marketing tips, deliverability guides, and campaign strategies.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {emailBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-36"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: EMAIL_INDIGO }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={emailFaqs} title="Frequently Asked Questions" description="Everything about email marketing, campaigns, deliverability, and automation." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${EMAIL_INDIGO}, ${EMAIL_SKY})` }}>
              <Mail size={24} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Ready to turn clicks into customers?</p>
              <p className="mt-1 text-sm text-razo-gray">Expert email marketing from Razobyte&apos;s certified team.</p>
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
