"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  HTML_ORANGE,
  CSS_BLUE,
  htmlCssHero,
  htmlCssHighlights,
  getHtmlCssStats,
  htmlCssIntro,
  whyHtmlCss,
  htmlCssServices,
  htmlCssFeatures,
  htmlCssFrameworks,
  htmlCssProcess,
  htmlCssMethodology,
  htmlCssPillars,
  htmlCssDifferentiators,
  htmlCssTechnologies,
  htmlCssProjects,
  htmlCssBlogs,
  htmlCssFaqs,
} from "@/lib/htmlCssDevelopment";
import { clients } from "@/lib/data";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

function LayeredBrowserMockup() {
  const layers = [
    { label: "Rendered UI", sub: "Final experience", color: "#2b8def", z: 30, y: 0, opacity: 1 },
    { label: "CSS Layer", sub: "Styles & layout", color: CSS_BLUE, z: 20, y: 18, opacity: 0.92 },
    { label: "HTML Structure", sub: "Semantic markup", color: HTML_ORANGE, z: 10, y: 36, opacity: 0.85 },
  ];

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-sm sm:h-[380px]">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 50 + i * 12, rotateX: 8 }}
          animate={{ opacity: layer.opacity, y: layer.y, rotateX: 0 }}
          transition={{ delay: 0.12 + i * 0.1, duration: 0.5 }}
          className="tilt-card absolute left-1/2 w-[88%] -translate-x-1/2 overflow-hidden rounded-xl border border-white/20 shadow-2xl"
          style={{
            top: `${i * 26}px`,
            zIndex: layer.z,
            boxShadow: `0 16px 48px ${layer.color}44`,
            borderTop: `3px solid ${layer.color}`,
            background: "linear-gradient(160deg, #0f172a, #1e293b)",
          }}
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 font-mono text-[9px] text-white/40">{layer.label}</span>
          </div>
          <div className="p-3 font-mono text-[10px] leading-relaxed">
            {i === 2 && (
              <>
                <p className="text-orange-400">&lt;header&gt;</p>
                <p className="pl-3 text-white/60">&lt;nav&gt;...&lt;/nav&gt;</p>
                <p className="text-orange-400">&lt;/header&gt;</p>
              </>
            )}
            {i === 1 && (
              <>
                <p><span className="text-blue-400">.hero</span> <span className="text-white/50">{"{ display: grid; }"}</span></p>
                <p><span className="text-blue-400">@media</span> <span className="text-emerald-400">(max-width: 768px)</span></p>
              </>
            )}
            {i === 0 && (
              <div className="flex gap-2">
                <div className="h-8 flex-1 rounded bg-razo-blue/30" />
                <div className="h-8 w-16 rounded bg-white/10" />
              </div>
            )}
          </div>
          <p className="border-t border-white/10 px-3 py-1.5 text-[9px] text-white/40">{layer.sub}</p>
        </motion.div>
      ))}
      <div className="orb absolute -right-4 bottom-6 h-28 w-28" style={{ background: `${HTML_ORANGE}33` }} />
      <div className="orb absolute -left-6 top-10 h-24 w-24" style={{ background: `${CSS_BLUE}22` }} />
    </div>
  );
}

export default function HtmlCssDevelopmentPageContent() {
  const stats = getHtmlCssStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${HTML_ORANGE}08 0%, white 40%, ${CSS_BLUE}08 100%)`,
          }}
        />
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest shadow-sm">
              <span className="font-bold" style={{ color: HTML_ORANGE }}>HTML</span>
              <span className="text-razo-gray">&</span>
              <span className="font-bold" style={{ color: CSS_BLUE }}>CSS</span>
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {htmlCssHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-razo-blue">{htmlCssHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{htmlCssHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {htmlCssHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: CSS_BLUE }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Start Your Project <ArrowRight size={16} />
            </Link>
          </motion.div>
          <LayeredBrowserMockup />
        </div>
      </section>

      <section className="border-b border-gray-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: CSS_BLUE }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="html-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{htmlCssIntro.title}</h2>
            <p className="mt-2 text-sm font-semibold" style={{ color: HTML_ORANGE }}>{htmlCssIntro.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{htmlCssIntro.body}</p>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/service-design.jpg" alt="HTML CSS web design" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14" style={{ background: `linear-gradient(160deg, ${CSS_BLUE}, #1e40af)` }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">Why HTML & CSS for Your Website?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyHtmlCss.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-5 shadow-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${HTML_ORANGE}, ${CSS_BLUE})` }}>
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Our HTML & CSS Development Services</h2>
          <p className="mb-8 text-center text-sm text-razo-gray">Razobyte offers a range of HTML & CSS development services to meet your needs:</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {htmlCssServices.map((svc, i) => (
              <motion.div
                key={svc}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 size={20} className="shrink-0" style={{ color: HTML_ORANGE }} />
                <span className="text-sm font-semibold text-razo-dark">{svc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Leveraging Latest HTML & CSS Versions and Features</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {htmlCssFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card rounded-2xl border bg-white p-5 shadow-md"
                  style={{ borderColor: `${f.color}33` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl text-white" style={{ background: f.color }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-bold text-razo-dark">{f.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">The Advantages of HTML & CSS Frameworks</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {htmlCssFrameworks.map((fw, i) => (
              <motion.div
                key={fw.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <span
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white"
                  style={{ background: fw.color }}
                >
                  {fw.letter}
                </span>
                <h3 className="mt-4 font-bold text-white">{fw.title}</h3>
                <p className="mt-2 text-sm text-white/60">{fw.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Our HTML & CSS Framework Development Methodology</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-razo-gray">{htmlCssMethodology}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {htmlCssProcess.map((p, i) => (
              <motion.div
                key={p.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                  style={{ background: i % 2 === 0 ? HTML_ORANGE : CSS_BLUE }}
                >
                  {p.step}
                </div>
                <p className="mt-2 max-w-[100px] text-center text-[10px] text-razo-gray">{p.description}</p>
                {i < htmlCssProcess.length - 1 && (
                  <span className="hidden text-razo-gray lg:absolute lg:ml-24">→</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {htmlCssPillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold" style={{ color: CSS_BLUE }}>{p.title}</h3>
                <p className="mt-2 text-sm text-razo-gray">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">What Makes Us Different</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {htmlCssDifferentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${HTML_ORANGE}, ${CSS_BLUE})` }}>
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 text-xs font-semibold text-razo-dark">{d.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-lg font-bold text-razo-dark">Technologies We Work With</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {htmlCssTechnologies.map((t) => (
              <Link
                key={t.label}
                href={t.href}
                className="tilt-card flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
              >
                <Image src={t.icon} alt={t.label} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="text-xs font-semibold text-razo-dark">{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-razo-dark">Top Web Development Projects</h2>
            <Link href={siteRoutes.caseStudies} className="text-sm font-semibold" style={{ color: CSS_BLUE }}>Case studies →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {htmlCssProjects.map((p, i) => (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md"
              >
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: HTML_ORANGE }}>{p.tag}</span>
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

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-razo-dark">Blogs</h2>
            <p className="mt-1 text-sm text-razo-gray">Take a peek inside our experts&apos; minds.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {htmlCssBlogs.map((post, i) => (
              <motion.article
                key={post.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                <div className="relative h-32">
                  <Image src={post.image} alt="" fill className="object-cover" sizes="250px" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: CSS_BLUE }}>
                    Read more <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={htmlCssFaqs} title="Frequently Asked Questions" description="HTML, CSS, frameworks, responsive design, SEO, and more." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex gap-1 text-lg font-black">
              <span style={{ color: HTML_ORANGE }}>HTML</span>
              <span className="text-razo-gray">&</span>
              <span style={{ color: CSS_BLUE }}>CSS</span>
            </span>
            <div>
              <p className="font-bold text-razo-dark">Let&apos;s create something great together</p>
              <p className="text-sm text-razo-gray">Pixel-perfect front-end, built for the modern web.</p>
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
