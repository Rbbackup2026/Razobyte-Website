"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  ANGULAR_RED,
  ANGULAR_DARK,
  angularHero,
  angularHighlights,
  getAngularStats,
  angularIntro,
  angularWhyIntro,
  angularWhyFeatures,
  angularServicesIntro,
  angularServices,
  angularPartners,
  angularIndustries,
  angularProcess,
  angularDevFlow,
  angularTechStack,
  angularRelated,
  angularExpertise,
  angularProjects,
  angularTestimonials,
  angularBlogs,
  angularFaqs,
} from "@/lib/angularjsDevelopment";
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

function AngularShieldIcon({ size = 40 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg font-black text-white shadow-lg"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${ANGULAR_RED}, ${ANGULAR_DARK})`, fontSize: size * 0.45 }}
    >
      A
    </div>
  );
}

function ModuleOrbitMockup() {
  const modules = [
    { label: "NgModule", x: -95, y: -40, color: "#dd0031" },
    { label: "Component", x: 95, y: -40, color: "#2b8def" },
    { label: "Service", x: -80, y: 50, color: "#8b5cf6" },
    { label: "Pipe", x: 80, y: 50, color: "#10b981" },
    { label: "Directive", x: 0, y: -85, color: "#f59e0b" },
  ];

  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center sm:h-[400px]">
      <div className="absolute h-48 w-48 rounded-full border border-dashed sm:h-56 sm:w-56" style={{ borderColor: `${ANGULAR_RED}44` }} />
      <div className="absolute h-64 w-64 rounded-full border sm:h-72 sm:w-72" style={{ borderColor: `${ANGULAR_RED}22` }} />

      {modules.map((m, i) => (
        <motion.span
          key={m.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 rounded-full border bg-white px-3 py-1.5 text-[10px] font-bold shadow-lg sm:text-[11px]"
          style={{ color: m.color, borderColor: `${m.color}44`, transform: `translate(${m.x}px, ${m.y}px)` }}
        >
          {m.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 flex flex-col items-center rounded-2xl border border-white/10 p-6 shadow-2xl"
        style={{ background: "linear-gradient(160deg, #1a1a2e, #2d0a14)", boxShadow: `0 28px 70px ${ANGULAR_RED}44` }}
      >
        <AngularShieldIcon size={56} />
        <p className="mt-3 font-mono text-xs font-bold text-white">AppModule</p>
        <p className="mt-1 font-mono text-[10px] text-white/40">bootstrap → AppComponent</p>
        <div className="mt-3 flex gap-2">
          <Image src="/images/tech/typescript.svg" alt="TS" width={18} height={18} />
          <Image src="/images/tech/javascript.svg" alt="JS" width={18} height={18} />
        </div>
      </motion.div>

      <div className="orb absolute -left-6 bottom-8 h-28 w-28" style={{ background: `${ANGULAR_RED}25` }} />
      <div className="orb absolute right-0 top-10 h-24 w-24 bg-razo-blue/15" />
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </span>
  );
}

export default function AngularjsDevelopmentPageContent() {
  const stats = getAngularStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: `linear-gradient(160deg, #0f172a, ${ANGULAR_DARK}22, #0f172a)` }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 60% 40%, ${ANGULAR_RED}55, transparent 50%)` }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${ANGULAR_RED}44`, background: `${ANGULAR_RED}15`, color: "#ff4d6d" }}>
              <AngularShieldIcon size={16} /> Website Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">{angularHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: "#ff6b8a" }}>{angularHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{angularHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {angularHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ANGULAR_RED }} /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Book a Free Session <ArrowRight size={16} />
            </Link>
          </motion.div>
          <ModuleOrbitMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${ANGULAR_RED}06, #2b8def06)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: ANGULAR_DARK }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="angular-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
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
            <Image src="/images/service-mobile.jpg" alt="AngularJS development" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">AngularJS Development Company</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{angularIntro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["HTML5", "CSS3", "TypeScript", "Angular"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">
                  {t === "Angular" ? <AngularShieldIcon size={16} /> : <Image src="/images/tech/typescript.svg" alt="" width={14} height={14} />}
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14" style={{ background: `linear-gradient(135deg, ${ANGULAR_RED}, #9d0020)` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20h40M20 0v40' stroke='white' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Why AngularJS is Perfect for Modern Web Applications</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/75">{angularWhyIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {angularWhyFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-5 shadow-lg">
                  <Icon size={20} style={{ color: ANGULAR_RED }} />
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{f.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Our Comprehensive AngularJS Development Services</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-razo-gray">{angularServicesIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {angularServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${ANGULAR_RED}, #2b8def)` }}>
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
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">What Makes Us a Preferred AngularJS Partner?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {angularPartners.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl p-5 text-center text-white shadow-lg" style={{ background: `linear-gradient(160deg, ${ANGULAR_RED}, ${ANGULAR_DARK})` }}>
                  <Icon size={24} className="mx-auto" />
                  <h3 className="mt-3 text-sm font-bold">{p.title}</h3>
                  <p className="mt-2 text-xs text-white/75">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Industries We Serve with AngularJS Solutions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {angularIndustries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-5">
                  <Icon size={22} className="text-red-400" />
                  <h3 className="mt-3 font-bold text-white">{ind.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(160deg, #2b8def, ${ANGULAR_DARK})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Our AngularJS Development Process</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {angularProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl bg-white/15 p-5 backdrop-blur-sm">
                <span className="inline-block rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold text-razo-dark">{p.order}</span>
                <h3 className="mt-3 font-bold text-white">{p.step}</h3>
                <p className="mt-2 text-sm text-white/70">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Development Workflow</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {angularDevFlow.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full text-white" style={{ background: i % 2 === 0 ? ANGULAR_RED : "#2b8def" }}>
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 text-xs font-bold text-razo-dark">{p.step}</h3>
                  <p className="mt-1 text-[10px] text-razo-gray">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">AngularJS Tech Stack</h2>
          <p className="mb-8 text-center text-sm text-razo-gray">Frameworks, libraries, and tools tested across markets</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {angularTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                {t.name === "Angular" ? <AngularShieldIcon size={32} /> : <Image src={t.icon} alt={t.name} width={32} height={32} className="h-8 w-8 object-contain" />}
                <span className="mt-2 text-xs font-bold text-razo-dark">{t.name}</span>
                <span className="text-[10px] text-razo-gray">{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="angular-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto px-4 pb-2">
          {angularExpertise.map((t) => (
            <Link key={t.label} href={t.href} className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
              <Image src={t.icon} alt={t.label} width={32} height={32} className="h-8 w-8 object-contain" />
              <span className="text-xs font-semibold text-razo-dark">{t.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Angular Projects</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {angularProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ANGULAR_RED }}>{p.tag}</span>
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

      <section className="relative overflow-hidden bg-slate-950 py-14">
        <div className="absolute inset-0">
          <Image src="/images/testimonial-bg.jpg" alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-3xl font-bold text-white">500+ <span className="text-lg text-white/60">clients are served</span></p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {angularTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border-t-4 bg-slate-900/80 p-6 backdrop-blur-sm" style={{ borderColor: ANGULAR_RED }}>
                <Stars count={t.rating} />
                <p className="mt-3 text-sm leading-relaxed text-white/75">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ANGULAR_RED}, #2b8def)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {angularRelated.map((r, i) => (
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
            {angularBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: ANGULAR_DARK }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={angularFaqs} title="Frequently Asked Questions" description="Angular basics, components, APIs, performance, hosting, and comparisons." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <AngularShieldIcon size={44} />
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">Enterprise Angular apps built for scale and performance.</p>
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
