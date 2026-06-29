"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, CheckCircle2, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  CI_ORANGE,
  codeigniterHero,
  codeigniterHighlights,
  getCodeigniterStats,
  whyCodeigniter,
  codeigniterOfferings,
  codeigniterBenefits,
  codeigniterCi4Features,
  expertServices,
  bestPractices,
  codeigniterStack,
  codeigniterProjects,
  codeigniterRelated,
  codeigniterBlogs,
  codeigniterFaqs,
} from "@/lib/codeigniterDevelopment";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

function MvcStackMockup() {
  const layers = [
    { label: "View", sub: "Templates & UI", color: "#3b82f6", z: 30, y: 0 },
    { label: "Controller", sub: "Business Logic", color: CI_ORANGE, z: 20, y: 16 },
    { label: "Model", sub: "Data & Database", color: "#10b981", z: 10, y: 32 },
  ];

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-sm sm:h-[340px]">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 40 + i * 10 }}
          animate={{ opacity: 1, y: layer.y }}
          transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
          className="tilt-card absolute left-1/2 w-[85%] -translate-x-1/2 rounded-xl border border-white/10 bg-slate-900/90 px-5 py-4 shadow-2xl backdrop-blur-sm"
          style={{
            top: `${i * 28}px`,
            zIndex: layer.z,
            boxShadow: `0 12px 40px ${layer.color}33`,
            borderLeft: `4px solid ${layer.color}`,
          }}
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest" style={{ color: layer.color }}>
            {layer.label}
          </p>
          <p className="mt-0.5 text-[11px] text-white/50">{layer.sub}</p>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-8 rounded-lg border border-orange-500/30 bg-black/80 px-3 py-2 font-mono text-[10px] text-orange-400 shadow-lg"
      >
        <span className="text-white/40">$</span> php spark serve
        <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-orange-400" />
      </motion.div>

      <div className="orb absolute -left-8 bottom-0 h-32 w-32 bg-orange-500/20" />
    </div>
  );
}

export default function CodeIgniterDevelopmentPageContent() {
  const stats = getCodeigniterStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-28">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #DD481433, transparent 50%)" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange-400">
              <Code2 size={12} /> Website Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
              {codeigniterHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-orange-400">{codeigniterHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{codeigniterHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {codeigniterHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Start Your CI Project <ArrowRight size={16} />
            </Link>
          </motion.div>
          <MvcStackMockup />
        </div>
      </section>

      <section className="border-b border-gray-100 bg-orange-50/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-orange-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: CI_ORANGE }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-5">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-widest text-razo-gray">Tech stack</p>
        <div className="ci-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto px-4 pb-2 sm:justify-center">
          {codeigniterStack.map((t) => (
            <span key={t} className="shrink-0 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-800">{t}</span>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Why Choose CodeIgniter for Your Website?</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-razo-gray">Craft cutting-edge websites with a framework built for speed, security, and developer happiness.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCodeigniter.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: CI_ORANGE }}><Icon size={20} /></span>
                  <h3 className="mt-3 font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">What We Offer</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {codeigniterOfferings.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <Icon size={22} style={{ color: CI_ORANGE }} />
                  <h3 className="mt-3 text-sm font-bold leading-snug text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">CodeIgniter Development — The Benefits</h2>
            <ul className="mt-6 space-y-3">
              {codeigniterBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-razo-gray">
                  <CheckCircle2 size={18} className="shrink-0" style={{ color: CI_ORANGE }} /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/service-web.jpg" alt="CodeIgniter development" width={600} height={400} className="h-56 w-full object-cover sm:h-64" />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">CodeIgniter 4</span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Latest Versions and Features</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {codeigniterCi4Features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-5">
                  <Icon size={20} className="text-orange-400" />
                  <h3 className="mt-3 font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Expert CodeIgniter Developers at Razobyte</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-razo-gray">Seasoned PHP engineers with deep CodeIgniter expertise across industries.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {expertServices.map((svc, i) => (
              <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50/80 to-white p-6 shadow-sm">
                <h3 className="font-bold text-razo-dark">{svc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-razo-gray">{svc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-razo-dark">Top Web Design Projects</h2>
            <Link href={siteRoutes.caseStudies} className="text-sm font-semibold" style={{ color: CI_ORANGE }}>Case studies →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {codeigniterProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-40">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: CI_ORANGE }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${CI_ORANGE}, #c73e10)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">Following The Best Practices</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {bestPractices.map((bp, i) => {
              const Icon = bp.icon;
              return (
                <motion.div key={bp.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl bg-white/15 p-4 backdrop-blur-sm">
                  <Icon size={18} className="shrink-0 text-white" />
                  <p className="text-sm font-medium text-white">{bp.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-lg font-bold text-razo-dark">Looking for Something Else?</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {codeigniterRelated.map((r) => (
              <Link key={r.label} href={r.href} className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium hover:border-orange-400 hover:text-orange-700">{r.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-razo-dark">Blogs</h2>
              <p className="mt-1 text-sm text-razo-gray">Insights from our development team</p>
            </div>
            <Link href={siteRoutes.blogs} className="text-sm font-semibold" style={{ color: CI_ORANGE }}>All blogs →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {codeigniterBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-28"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: CI_ORANGE }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={codeigniterFaqs} title="Frequently Asked Questions" description="CodeIgniter basics, CI4, performance, APIs, and comparisons." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div>
            <p className="text-lg font-bold text-razo-dark sm:text-xl">Ready to build with CodeIgniter?</p>
            <p className="mt-1 text-sm text-razo-gray">Lightweight, fast, and built for your business logic.</p>
          </div>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
