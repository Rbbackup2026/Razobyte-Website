"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  LARAVEL_RED,
  LARAVEL_DARK,
  laravelHero,
  laravelHighlights,
  getLaravelStats,
  laravelOverview,
  laravelGoodFor,
  laravelAdvantages,
  laravelServicesIntro,
  laravelServices,
  laravelFrameworkAdvantages,
  laravelProjects,
  laravelTestimonials,
  laravelVersions,
  laravelSupport,
  laravelRelated,
  laravelExpertise,
  laravelBlogs,
  laravelFaqs,
} from "@/lib/laravelDevelopment";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

function ArtisanTerminalMockup() {
  const routes = [
    { method: "GET", path: "/api/users", middleware: "auth" },
    { method: "POST", path: "/api/orders", middleware: "api" },
    { method: "GET", path: "/dashboard", middleware: "web" },
  ];

  return (
    <div className="relative mx-auto h-[340px] w-full max-w-md sm:h-[380px]">
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card absolute left-1/2 top-4 w-[92%] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        style={{ background: "linear-gradient(160deg, #1a1a2e, #16213e)", boxShadow: `0 28px 70px ${LARAVEL_RED}44` }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <Image src="/images/tech/laravel.svg" alt="Laravel" width={20} height={20} className="h-5 w-5" />
          <span className="font-mono text-[10px] text-white/50">artisan — Razobyte</span>
        </div>
        <div className="space-y-1 p-4 font-mono text-[11px]">
          <p><span className="text-white/40">$</span> <span className="text-emerald-400">php artisan route:list</span></p>
          {routes.map((r, i) => (
            <motion.p
              key={r.path}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="flex gap-2 text-white/70"
            >
              <span className="w-10 shrink-0 font-bold" style={{ color: r.method === "GET" ? "#60a5fa" : "#f472b6" }}>{r.method}</span>
              <span className="text-white/80">{r.path}</span>
              <span className="ml-auto rounded bg-white/10 px-1.5 text-[9px] text-amber-300">{r.middleware}</span>
            </motion.p>
          ))}
        </div>
      </motion.div>

      {["Eloquent", "Blade", "Queue"].map((badge, i) => (
        <motion.span
          key={badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + i * 0.1 }}
          className="absolute z-20 rounded-full border bg-white px-3 py-1 text-[10px] font-bold shadow-lg"
          style={{
            color: LARAVEL_RED,
            borderColor: `${LARAVEL_RED}33`,
            top: `${i === 0 ? 8 : i === 1 ? 55 : 100}%`,
            right: i === 1 ? "0" : "4%",
            transform: `translateY(-50%) rotate(${i * 4 - 4}deg)`,
          }}
        >
          {badge}
        </motion.span>
      ))}

      <div className="orb absolute -left-6 bottom-8 h-32 w-32" style={{ background: `${LARAVEL_RED}25` }} />
      <div className="orb absolute -right-4 top-16 h-24 w-24 bg-razo-blue/15" />
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

export default function LaravelDevelopmentPageContent() {
  const stats = getLaravelStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-slate-950 via-[#1a0a0a] to-slate-950 pt-28">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `radial-gradient(circle at 30% 40%, ${LARAVEL_RED}44, transparent 55%)` }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${LARAVEL_RED}44`, background: `${LARAVEL_RED}15`, color: "#ff6b5b" }}>
              <Image src="/images/tech/laravel.svg" alt="" width={14} height={14} className="h-3.5 w-3.5" />
              Website Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">{laravelHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: "#ff6b5b" }}>{laravelHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{laravelHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {laravelHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: LARAVEL_RED }} /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Start Your Laravel Project <ArrowRight size={16} />
            </Link>
          </motion.div>
          <ArtisanTerminalMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${LARAVEL_RED}06, #2b8def06)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: LARAVEL_DARK }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{laravelOverview.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{laravelOverview.body}</p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-razo-surface py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{laravelGoodFor.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{laravelGoodFor.body}</p>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/solutions.jpg" alt="Laravel web development" width={600} height={400} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Advantages of Laravel</h2>
          <div className="space-y-4">
            {laravelAdvantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md"
                  style={{ borderLeft: `4px solid ${LARAVEL_RED}` }}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: LARAVEL_RED }}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-razo-dark">{item.title}</h3>
                    <p className="mt-1 text-sm text-razo-gray">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Our Laravel Development Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/55">{laravelServicesIntro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {laravelServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-5">
                  <Icon size={22} className="text-red-400" />
                  <h3 className="mt-3 text-sm font-bold text-white">{svc.title}</h3>
                  <p className="mt-2 text-xs text-white/50">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14" style={{ background: `linear-gradient(135deg, ${LARAVEL_RED}, #c41e0f)` }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">The Advantages of Laravel Framework</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {laravelFrameworkAdvantages.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl bg-white/15 p-6 backdrop-blur-sm">
                  <Icon size={22} className="text-white" />
                  <h3 className="mt-3 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Laravel Projects</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {laravelProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card group overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-48">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition group-hover:scale-105" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white" style={{ background: LARAVEL_RED }}>{p.tag}</span>
                    <h3 className="mt-1 text-lg font-bold text-white">{p.title}</h3>
                  </div>
                </div>
                <p className="p-4 text-sm text-razo-gray">{p.description}</p>
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
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400">Testimonials</span>
              <p className="mt-1 text-3xl font-bold text-white">500+ <span className="text-lg font-semibold text-white/60">clients are served</span></p>
              <p className="text-sm text-white/50">Words by our amazing clients.</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {laravelTestimonials.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border-t-4 bg-slate-900/80 p-6 backdrop-blur-sm" style={{ borderColor: LARAVEL_RED }}>
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

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Our Expertise</h2>
          <div className="laravel-scroll mx-auto flex max-w-5xl gap-3 overflow-x-auto py-4">
            {laravelExpertise.map((t) => (
              <Link key={t.label} href={t.href}
                className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
                <Image src={t.icon} alt={t.label} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="text-xs font-semibold text-razo-dark">{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(160deg, #1e293b, ${LARAVEL_DARK}22)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">{laravelVersions.title}</h2>
            <p className="mt-3 text-sm text-white/60">{laravelVersions.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {laravelVersions.features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <Icon size={22} className="text-red-400" />
                  <h3 className="mt-3 font-bold text-white">{f.title}</h3>
                  <p className="mt-2 text-xs text-white/55">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-2 text-center text-2xl font-bold text-razo-dark">Tailored After Care and Support for Laravel</h2>
          <p className="mb-8 text-center text-sm text-razo-gray">Maintenance and support packages designed for your Laravel applications:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {laravelSupport.map((item, i) => (
              <motion.div key={item} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-red-100 bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ background: LARAVEL_RED }}>✓</span>
                <p className="text-sm text-razo-gray">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${LARAVEL_RED}, #2b8def)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Looking for Something Else?</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {laravelRelated.map((r, i) => (
              <motion.div key={r.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={r.href} className="block rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1">
                  <Image src={r.icon} alt={r.label} width={36} height={36} className="h-9 w-9 object-contain" />
                  <h3 className="mt-4 font-bold text-razo-dark">{r.label}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{r.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: LARAVEL_RED }}>Explore <ArrowRight size={14} /></span>
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
            {laravelBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: LARAVEL_DARK }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={laravelFaqs} title="Frequently Asked Questions" description="Laravel basics, Blade, APIs, security, hosting, and comparisons." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <Image src="/images/tech/laravel.svg" alt="Laravel" width={44} height={44} className="h-11 w-11" />
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">Elegant Laravel apps built for scale and security.</p>
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
