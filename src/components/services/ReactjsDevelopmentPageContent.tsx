"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  REACT_CYAN,
  REACT_DARK,
  reactHero,
  reactHighlights,
  getReactStats,
  reactTrustStats,
  reactFullScale,
  reactHireTeam,
  reactFeaturesIntro,
  reactFeatures,
  reactServicesIntro,
  reactServices,
  reactWhyChoose,
  reactUseCases,
  reactTechStack,
  reactProcess,
  reactRelated,
  reactExpertise,
  reactProjects,
  reactBlogs,
  reactFaqs,
} from "@/lib/reactjsDevelopment";
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

function ComponentTreeMockup() {
  const tree = [
    { id: "app", label: "<App />", x: 0, y: 0, color: REACT_CYAN },
    { id: "header", label: "<Header />", x: -70, y: 55, color: "#2b8def" },
    { id: "main", label: "<Main />", x: 0, y: 55, color: "#8b5cf6" },
    { id: "footer", label: "<Footer />", x: 70, y: 55, color: "#10b981" },
    { id: "nav", label: "<Nav />", x: -95, y: 110, color: "#60a5fa" },
    { id: "hero", label: "<Hero />", x: -25, y: 110, color: "#f472b6" },
    { id: "cards", label: "<CardGrid />", x: 35, y: 110, color: "#fbbf24" },
  ];

  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center sm:h-[400px]">
      <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
        <line x1="50%" y1="18%" x2="32%" y2="38%" stroke={`${REACT_CYAN}55`} strokeWidth="2" />
        <line x1="50%" y1="18%" x2="50%" y2="38%" stroke={`${REACT_CYAN}55`} strokeWidth="2" />
        <line x1="50%" y1="18%" x2="68%" y2="38%" stroke={`${REACT_CYAN}55`} strokeWidth="2" />
        <line x1="32%" y1="38%" x2="24%" y2="58%" stroke={`${REACT_CYAN}33`} strokeWidth="1.5" />
        <line x1="50%" y1="38%" x2="42%" y2="58%" stroke={`${REACT_CYAN}33`} strokeWidth="1.5" />
        <line x1="50%" y1="38%" x2="58%" y2="58%" stroke={`${REACT_CYAN}33`} strokeWidth="1.5" />
      </svg>

      {tree.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 + i * 0.08, type: "spring" }}
          className="tilt-card absolute z-10 rounded-lg border px-3 py-2 font-mono text-[10px] font-bold shadow-lg sm:text-[11px]"
          style={{
            left: `calc(50% + ${node.x}px)`,
            top: `calc(${i === 0 ? 8 : i < 4 ? 28 : 48}% + ${node.y * 0.15}px)`,
            transform: "translateX(-50%)",
            borderColor: `${node.color}66`,
            background: REACT_DARK,
            color: node.color,
            boxShadow: `0 8px 32px ${node.color}33`,
          }}
        >
          {node.label}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-1/2 top-2 z-20 -translate-x-1/2"
      >
        <Image src="/images/tech/react.svg" alt="React" width={40} height={40} className="h-10 w-10 drop-shadow-lg" />
      </motion.div>

      <div className="orb absolute -left-4 bottom-6 h-28 w-28" style={{ background: `${REACT_CYAN}25` }} />
      <div className="orb absolute right-0 top-12 h-24 w-24 bg-razo-blue/15" />
    </div>
  );
}

export default function ReactjsDevelopmentPageContent() {
  const stats = getReactStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: `linear-gradient(160deg, ${REACT_DARK}, #0f172a)` }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 70% 30%, ${REACT_CYAN}44, transparent 50%)` }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${REACT_CYAN}44`, background: `${REACT_CYAN}12`, color: REACT_CYAN }}>
              <Image src="/images/tech/react.svg" alt="" width={14} height={14} className="h-3.5 w-3.5" />
              Website Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">{reactHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: REACT_CYAN }}>{reactHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{reactHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {reactHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: REACT_CYAN }} /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Describe Your Requirement <ArrowRight size={16} />
            </Link>
          </motion.div>
          <ComponentTreeMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${REACT_CYAN}08, #2b8def08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: REACT_DARK }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="react-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, #2b8def, #1e40af)` }}>
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{reactFullScale.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">{reactFullScale.body}</p>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{reactHireTeam.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{reactHireTeam.body}</p>
            <p className="mt-4 text-sm font-semibold text-razo-blue">Hire our experts to craft ultimate apps.</p>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/team.jpg" alt="React development team" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {reactTrustStats.map((s, i) => (
              <motion.div key={s.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm">
                <p className="text-2xl font-bold sm:text-3xl" style={{ color: REACT_CYAN }}>{s.value}</p>
                <p className="mt-1 text-xs text-white/55">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Ultimate Features of ReactJS</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-razo-gray">{reactFeaturesIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reactFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:scale-110" style={{ background: `${REACT_CYAN}22` }}>
                    <Icon size={20} style={{ color: REACT_DARK }} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{f.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-razo-gray">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">React Development Services</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-razo-gray">{reactServicesIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reactServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${REACT_CYAN}, #2b8def)` }}>
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold text-razo-dark sm:text-3xl">{reactWhyChoose.title}</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid gap-3 sm:grid-cols-2">
              {reactWhyChoose.points.map((p, i) => (
                <motion.div key={p} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                  <CheckCircle2 size={18} className="mb-2" style={{ color: REACT_CYAN }} />
                  <p className="text-xs leading-relaxed text-razo-gray">{p}</p>
                </motion.div>
              ))}
              <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-4 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold text-razo-dark">Why Razobyte stands out</p>
                <p className="mt-1 text-xs text-razo-gray">Proven delivery, transparent communication, and code you can build on for years.</p>
              </motion.div>
            </div>
            <div className="grid gap-3">
              {reactWhyChoose.expertise.map((e, i) => (
                <motion.div key={e} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-razo-surface p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: REACT_DARK }}>{i + 1}</span>
                  <p className="text-sm text-razo-gray">{e}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Industries We Build For</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reactUseCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div key={uc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-5">
                  <Icon size={22} style={{ color: REACT_CYAN }} />
                  <h3 className="mt-3 font-bold text-white">{uc.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{uc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">ReactJS Tech Stack Tested Across Markets</h2>
          <p className="mb-8 text-center text-sm text-razo-gray">Frameworks, libraries, and tools we use daily</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {reactTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <Image src={t.icon} alt={t.name} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="mt-2 text-xs font-bold text-razo-dark">{t.name}</span>
                <span className="mt-0.5 text-[10px] text-razo-gray">{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Development Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {reactProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? REACT_DARK : "#2b8def" }}>
                  {i + 1}
                </div>
                <h3 className="mt-3 text-sm font-bold text-razo-dark">{p.step}</h3>
                <p className="mt-1 text-[10px] text-razo-gray">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-lg font-bold text-razo-dark">Our Expertise</h2>
          <div className="react-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto pb-2">
            {reactExpertise.map((t) => (
              <Link key={t.label} href={t.href} className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
                <Image src={t.icon} alt={t.label} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="text-xs font-semibold text-razo-dark">{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">React Projects</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {reactProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-slate-900" style={{ background: REACT_CYAN }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, #2b8def, ${REACT_DARK})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reactRelated.map((r, i) => (
              <motion.div key={r.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={r.href} className="block h-full rounded-2xl bg-white p-5 shadow-lg transition hover:-translate-y-1">
                  <Image src={r.icon} alt={r.label} width={36} height={36} className="h-9 w-9 object-contain" />
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
            {reactBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-razo-blue">Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={reactFaqs} title="Frequently Asked Questions" description="React basics, SPAs, hooks, SEO, eCommerce, and comparisons." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <Image src="/images/tech/react.svg" alt="React" width={44} height={44} className="h-11 w-11" />
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">Modern React apps built for performance and scale.</p>
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
