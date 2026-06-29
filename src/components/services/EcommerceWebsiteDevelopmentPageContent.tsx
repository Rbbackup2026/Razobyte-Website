"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ShoppingBag } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  ECOM_GREEN,
  ECOM_AMBER,
  ecommerceHero,
  ecommerceHighlights,
  getEcommerceStats,
  ecommerceIntro,
  ecommerceEssentials,
  ecommerceServices,
  ecommercePlatforms,
  ecommerceSuccessEssentials,
  ecommerceGrowth,
  ecommerceTechnologiesIntro,
  ecommerceTechStack,
  ecommerceProcess,
  ecommerceIndustries,
  ecommerceRelated,
  ecommerceProjects,
  ecommerceBlogs,
  ecommerceFaqs,
} from "@/lib/ecommerceWebsiteDevelopment";
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

function StorefrontMockup() {
  const orbit = [
    { label: "Cart", icon: "🛒", x: -100, y: -45, color: ECOM_AMBER },
    { label: "Pay", icon: "💳", x: 100, y: -50, color: ECOM_GREEN },
    { label: "Ship", icon: "📦", x: -90, y: 55, color: "#2b8def" },
    { label: "SEO", icon: "📈", x: 95, y: 50, color: "#8b5cf6" },
  ];

  return (
    <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center sm:h-[400px]">
      <div className="absolute h-52 w-52 rounded-full border border-dashed sm:h-60 sm:w-60" style={{ borderColor: `${ECOM_GREEN}44` }} />
      <div className="absolute h-72 w-72 rounded-full border" style={{ borderColor: `${ECOM_GREEN}22` }} />

      {orbit.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-[11px] font-bold shadow-lg"
          style={{ color: item.color, borderColor: `${item.color}44`, transform: `translate(${item.x}px, ${item.y}px)` }}
        >
          <span>{item.icon}</span> {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[250px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:w-[270px]"
        style={{ boxShadow: `0 28px 70px ${ECOM_GREEN}44` }}
      >
        <div className="px-3 py-2 text-center text-[10px] font-bold text-white" style={{ background: `linear-gradient(90deg, ${ECOM_GREEN}, ${ECOM_AMBER})` }}>
          ★ Your Online Storefront
        </div>
        <Image src="/images/portfolio-ecommerce.jpg" alt="Ecommerce store" width={270} height={180} className="h-40 w-full object-cover sm:h-44" priority />
        <div className="grid grid-cols-3 gap-1 bg-white p-2">
          {[ECOM_GREEN, ECOM_AMBER, "#2b8def"].map((c) => (
            <div key={c} className="h-8 rounded-md" style={{ background: `${c}22`, border: `1px solid ${c}44` }} />
          ))}
        </div>
        <div className="flex items-center justify-between bg-emerald-50 px-3 py-2">
          <span className="text-[10px] font-bold" style={{ color: ECOM_GREEN }}>Checkout →</span>
          <ShoppingBag size={14} style={{ color: ECOM_AMBER }} />
        </div>
      </motion.div>

      <div className="orb absolute -left-6 bottom-6 h-28 w-28" style={{ background: `${ECOM_GREEN}25` }} />
      <div className="orb absolute right-0 top-10 h-24 w-24" style={{ background: `${ECOM_AMBER}20` }} />
    </div>
  );
}

export default function EcommerceWebsiteDevelopmentPageContent() {
  const stats = getEcommerceStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #ecfdf5, #fffbeb 40%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${ECOM_GREEN}44`, background: `${ECOM_GREEN}10`, color: ECOM_GREEN }}>
              <ShoppingBag size={12} /> E-commerce Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{ecommerceHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: ECOM_GREEN }}>{ecommerceHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{ecommerceHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ecommerceHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: ECOM_GREEN }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Start Your Store <ArrowRight size={16} />
            </Link>
          </motion.div>
          <StorefrontMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${ECOM_GREEN}06, ${ECOM_AMBER}06)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: ECOM_GREEN }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="ecom-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">We Deliver Your Essential Ecommerce Requirements</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">{ecommerceIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecommerceEssentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${ECOM_GREEN}, ${ECOM_AMBER})` }}>
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
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">E-commerce Development Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ecommerceServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <Icon size={22} style={{ color: ECOM_GREEN }} />
                  <h3 className="mt-3 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/service-ecommerce.jpg" alt="Custom ecommerce development" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Fuel Your Business Growth</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{ecommerceGrowth}</p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: ECOM_GREEN }}>
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ECOM_GREEN}, #047857)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Our Ecommerce Technologies & Tools</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/75">{ecommerceTechnologiesIntro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecommercePlatforms.map((p, i) => (
              <motion.div key={p.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={p.href} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg transition hover:-translate-y-1">
                  <Image src={p.icon} alt={p.name} width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />
                  <div>
                    <h3 className="font-bold text-razo-dark">{p.name}</h3>
                    <span className="text-xs font-semibold" style={{ color: p.color }}>Explore platform →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Essentials You Need for eCommerce Success</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecommerceSuccessEssentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card rounded-2xl p-5">
                  <Icon size={22} className="text-emerald-400" />
                  <h3 className="mt-3 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {ecommerceTechStack.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <Image src={t.icon} alt={t.name} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="mt-2 text-xs font-bold text-razo-dark">{t.name}</span>
                <span className="text-[10px] text-razo-gray">{t.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Industries We Serve</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecommerceIndustries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                  <Icon size={22} style={{ color: ECOM_GREEN }} />
                  <h3 className="mt-3 font-bold text-razo-dark">{ind.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(160deg, #fffbeb, #ecfdf5)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Development Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {ecommerceProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? ECOM_GREEN : ECOM_AMBER }}>
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
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Top Web E-Commerce Projects</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {ecommerceProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ECOM_GREEN }}>{p.tag}</span>
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

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${ECOM_GREEN}, #2b8def)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecommerceRelated.map((r, i) => (
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
            {ecommerceBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: ECOM_GREEN }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={ecommerceFaqs} title="Frequently Asked Questions" description="E-commerce basics, platforms, costs, mobile, SEO, payments, and process." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${ECOM_GREEN}, ${ECOM_AMBER})` }}>
              <ShoppingBag size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">Custom e-commerce stores built to sell and scale.</p>
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
