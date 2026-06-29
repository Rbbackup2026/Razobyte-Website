"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  PHP_PURPLE,
  PHP_DARK,
  phpHero,
  phpHighlights,
  getPhpStats,
  phpIntroduction,
  whyPhp,
  phpServices,
  php8Features,
  phpFrameworkAdvantages,
  phpStack,
  phpProjects,
  phpRelated,
  phpBlogs,
  phpFaqs,
} from "@/lib/phpDevelopment";
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

function PhpOrbitMockup() {
  const orbit = [
    { label: "HTML", color: "#e34c26", x: -110, y: -50 },
    { label: "CSS", color: "#264de4", x: 100, y: -60 },
    { label: "JS", color: "#f7df1e", x: 120, y: 40 },
    { label: "MySQL", color: "#00758f", x: -100, y: 55 },
    { label: "Laravel", color: "#ff2d20", x: 0, y: -95 },
  ];

  return (
    <div className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[360px]">
      <div
        className="absolute h-52 w-52 rounded-full border border-dashed sm:h-60 sm:w-60"
        style={{ borderColor: `${PHP_PURPLE}44` }}
      />
      <div
        className="absolute h-72 w-72 rounded-full border sm:h-80 sm:w-80"
        style={{ borderColor: `${PHP_PURPLE}22` }}
      />

      {orbit.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 rounded-full border bg-white px-3 py-1.5 text-[11px] font-bold shadow-lg"
          style={{ color: item.color, transform: `translate(${item.x}px, ${item.y}px)`, borderColor: `${item.color}44` }}
        >
          {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: -12 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="tilt-card relative z-10 w-[250px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:w-[270px]"
        style={{ boxShadow: `0 28px 70px ${PHP_PURPLE}55`, background: "linear-gradient(145deg, #1e1b4b, #0f172a)" }}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 font-mono text-[9px] text-white/40">index.php</span>
        </div>
        <div className="space-y-1 p-4 font-mono text-[11px] leading-relaxed">
          <p><span className="text-purple-400">&lt;?php</span></p>
          <p className="pl-3 text-sky-300">namespace <span className="text-amber-300">App</span>;</p>
          <p className="pl-3 text-white/70">echo <span className="text-emerald-400">&apos;Hello, World!&apos;</span>;</p>
          <p><span className="text-purple-400">?&gt;</span></p>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-white/5 py-3">
          <Image src="/images/tech/php.svg" alt="PHP" width={28} height={28} className="h-7 w-7" />
          <span className="text-sm font-bold text-white">PHP 8</span>
        </div>
      </motion.div>

      <div className="orb absolute -left-6 bottom-4 h-28 w-28" style={{ background: `${PHP_PURPLE}33` }} />
      <div className="orb absolute right-0 top-6 h-24 w-24 bg-razo-blue/20" />
    </div>
  );
}

export default function PhpDevelopmentPageContent() {
  const stats = getPhpStats();

  return (
    <main className="bg-white">
      {/* Hero — no banner image */}
      <section className="relative overflow-hidden border-b border-gray-100 pt-28">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(119,123,180,0.12), transparent 55%)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest"
              style={{ borderColor: `${PHP_PURPLE}44`, background: `${PHP_PURPLE}11`, color: PHP_DARK }}
            >
              <Image src="/images/tech/php.svg" alt="" width={14} height={14} className="h-3.5 w-3.5" />
              Website Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {phpHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: PHP_DARK }}>{phpHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{phpHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {phpHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: PHP_PURPLE }} /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Start Your PHP Project <ArrowRight size={16} />
            </Link>
          </motion.div>
          <PhpOrbitMockup />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${PHP_PURPLE}08, #2b8def08)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-white bg-white/80 px-4 py-5 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: PHP_DARK }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client logos */}
      <section className="border-b border-gray-100 py-6">
        <div className="php-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/service-web.jpg" alt="PHP web development" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">{phpIntroduction.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{phpIntroduction.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {phpStack.map((t) => (
                <span key={t.name} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-razo-dark shadow-sm">
                  <Image src={t.icon} alt={t.name} width={16} height={16} className="h-4 w-4" />
                  {t.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why PHP */}
      <section className="relative overflow-hidden py-14" style={{ background: `linear-gradient(135deg, ${PHP_DARK}, ${PHP_PURPLE})` }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, white, transparent 40%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">Why PHP Reigns Supreme in Web Development</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {whyPhp.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card rounded-2xl bg-white p-6 shadow-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: PHP_PURPLE }}>
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">PHP Web Development Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {phpServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${PHP_PURPLE}, #2b8def)` }}
                    >
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                      <p className="mt-1.5 text-xs text-razo-gray">{svc.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHP 8 features */}
      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: PHP_PURPLE }}>Modern PHP</span>
              <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">Leveraging Latest PHP Versions and Features</h2>
            </div>
            <Image src="/images/tech/php.svg" alt="PHP" width={48} height={48} className="h-12 w-12 opacity-80" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {php8Features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-white p-5"
                >
                  <Icon size={22} style={{ color: PHP_DARK }} />
                  <h3 className="mt-3 font-bold text-razo-dark">{f.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{f.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Framework advantages */}
      <section className="relative overflow-hidden py-14" style={{ background: `linear-gradient(160deg, #2b8def, ${PHP_DARK})` }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">The Advantages of PHP Frameworks</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phpFrameworkAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-5"
              >
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip — no form */}
      <section className="relative overflow-hidden border-y border-gray-100 py-12">
        <div className="absolute inset-0">
          <Image src="/images/cta-team.jpg" alt="" fill className="object-cover opacity-20" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div>
            <p className="text-lg font-bold text-razo-dark sm:text-xl">Ready to start your dream project?</p>
            <p className="mt-1 text-sm text-razo-gray">We have a team to get you there.</p>
          </div>
          <Link href={homeRoutes.contact} className="inline-flex items-center gap-2 rounded-full bg-razo-blue px-7 py-3 text-sm font-bold text-white shadow-lg">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Related tech with favicons */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-lg font-bold text-razo-dark">Looking for Something Else?</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {phpRelated.map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="tilt-card flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <Image src={r.icon} alt={r.label} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="text-xs font-semibold text-razo-dark">{r.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-razo-dark">Top Web Development Projects</h2>
            <Link href={siteRoutes.caseStudies} className="text-sm font-semibold" style={{ color: PHP_DARK }}>Case studies →</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {phpProjects.map((p, i) => (
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
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: PHP_PURPLE }}>{p.tag}</span>
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

      {/* Blogs */}
      <section className="border-t py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-razo-dark">Blogs</h2>
            <p className="mt-1 text-sm text-razo-gray">Take a peek inside our experts&apos; minds.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {phpBlogs.map((post, i) => (
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
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: PHP_DARK }}>
                    Read more <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={phpFaqs} title="Frequently Asked Questions" description="PHP basics, frameworks, hosting, security, and eCommerce." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <Image src="/images/tech/php.svg" alt="PHP" width={40} height={40} className="h-10 w-10" />
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">Custom PHP built for performance and growth.</p>
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
