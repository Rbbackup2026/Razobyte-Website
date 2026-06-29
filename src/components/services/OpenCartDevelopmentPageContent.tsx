"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShoppingCart,
  Star,
  ChevronRight,
  Sparkles,
  Code2,
  Box,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  opencartHero,
  opencartHighlights,
  getOpencartStats,
  opencartIntroduction,
  whyOpencartFeatures,
  opencartDifferentiators,
  opencartServices,
  opencartProjects,
  opencartRelated,
  opencartProcess,
  opencartCapabilities,
  opencartTestimonials,
  opencartFaqs,
} from "@/lib/opencartDevelopment";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06 },
  }),
};

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5 text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </span>
  );
}

function AdminDashboardMockup() {
  const modules = ["Payments", "Shipping", "SEO", "Reviews", "Coupons", "Analytics"];

  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Back panel */}
      <motion.div
        initial={{ opacity: 0, rotate: -8, y: 20 }}
        animate={{ opacity: 1, rotate: -6, y: 0 }}
        transition={{ duration: 0.55 }}
        className="absolute -left-4 top-8 z-0 hidden h-48 w-56 overflow-hidden rounded-2xl border border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-sky-100 shadow-lg sm:block"
      />

      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="tilt-card relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-cyan-500/15"
      >
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gradient-to-r from-cyan-600 to-sky-600 px-4 py-2.5">
          <Box size={14} className="text-white" />
          <span className="text-xs font-bold text-white">OpenCart Admin</span>
          <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[9px] text-white">
            v4.x
          </span>
        </div>

        <div className="grid grid-cols-4 gap-px bg-gray-100">
          {["Orders", "Products", "Customers", "Reports"].map((tab) => (
            <div
              key={tab}
              className="bg-white px-2 py-2 text-center text-[9px] font-semibold text-gray-500"
            >
              {tab}
            </div>
          ))}
        </div>

        <Image
          src="/images/portfolio-ecommerce.jpg"
          alt="OpenCart storefront preview"
          width={520}
          height={280}
          className="h-44 w-full object-cover sm:h-48"
          priority
        />

        <div className="grid grid-cols-3 gap-2 p-3">
          {[
            { label: "Orders", val: "248" },
            { label: "Revenue", val: "₹4.2L" },
            { label: "Products", val: "1.2K" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg bg-orange-50 px-2 py-2 text-center"
            >
              <p className="text-[8px] text-orange-600">{stat.label}</p>
              <p className="text-xs font-bold text-gray-800">{stat.val}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Orbiting module chips */}
      {modules.map((mod, i) => {
        const positions = [
          "-left-2 top-4",
          "-right-3 top-12",
          "left-4 -bottom-2",
          "right-2 bottom-8",
          "-left-4 bottom-20",
          "right-0 top-2",
        ];
        return (
          <motion.span
            key={mod}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.08 }}
            className={`absolute ${positions[i]} z-20 rounded-full border border-orange-200 bg-white px-2.5 py-1 text-[10px] font-bold text-orange-600 shadow-md`}
          >
            {mod}
          </motion.span>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 shadow-lg"
      >
        <Code2 size={14} className="text-cyan-600" />
        <span className="text-xs font-bold text-gray-700">Open Source · PHP</span>
      </motion.div>

      <div className="orb absolute -right-6 top-0 h-36 w-36 bg-orange-400/20" />
      <div className="orb absolute -left-6 bottom-4 h-32 w-32 bg-cyan-400/20" />
    </div>
  );
}

export default function OpenCartDevelopmentPageContent() {
  const stats = getOpencartStats();

  return (
    <main className="bg-white">
      {/* Intro — no banner */}
      <section className="relative overflow-hidden border-b border-gray-100 pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(251,146,60,0.06),transparent_50%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-700">
              <ShoppingCart size={12} />
              Ecommerce Solutions
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {opencartHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-orange-600 sm:text-xl">
              {opencartHero.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
              {opencartHero.description}
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {opencartHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-razo-gray"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
            >
              Start Your OpenCart Project
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <AdminDashboardMockup />
        </div>
      </section>

      {/* Stats */}
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
              className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50/50 px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-cyan-600 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-razo-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
              {opencartIntroduction.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
              {opencartIntroduction.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {opencartCapabilities.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.label}
                    className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-razo-surface px-3 py-2.5"
                  >
                    <Icon size={16} className="shrink-0 text-cyan-600" />
                    <span className="text-xs font-medium text-razo-dark">
                      {cap.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
          >
            <Image
              src={opencartIntroduction.image}
              alt="OpenCart ecommerce development"
              width={600}
              height={400}
              className="h-56 w-full object-cover sm:h-64"
            />
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-gray-100 bg-razo-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Our Process
            </span>
            <h2 className="mt-2 text-xl font-bold text-razo-dark sm:text-2xl">
              From concept to live store
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {opencartProcess.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm"
              >
                <span className="text-2xl font-black text-cyan-500/25">
                  {step.step}
                </span>
                <h3 className="mt-1 font-bold text-razo-dark">{step.title}</h3>
                <p className="mt-1 text-xs text-razo-gray">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OpenCart */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-18">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="orb left-0 top-0 h-64 w-64 bg-cyan-500/10" />
        <div className="orb right-0 bottom-0 h-56 w-56 bg-orange-500/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Why OpenCart
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Why OpenCart Stands Out: Unveiling Its Superiority
            </h2>
            <p className="mt-3 text-sm text-white/55 sm:text-base">
              Popular for its scalability, flexibility, and open-source freedom —
              OpenCart powers stores across industries without locking you into
              proprietary ecosystems.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyOpencartFeatures.map((feature, i) => {
              const Icon = feature.icon;
              const isWide = i === 0;
              return (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`glass-card rounded-2xl p-5 sm:p-6 ${
                    isWide ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setting OpenCart Apart */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
            Setting OpenCart Apart
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-razo-gray">
            Compared to hosted platforms like Shopify or enterprise systems like
            Magento, OpenCart strikes a powerful balance of control, cost, and
            customization.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {opencartDifferentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="tilt-card group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-lg"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-100 to-orange-100 opacity-60 transition-transform group-hover:scale-125" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg">
                  <Icon size={22} />
                </span>
                <h3 className="relative mt-4 text-lg font-bold text-razo-dark">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-razo-gray">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Custom development services */}
      <section className="bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Custom Development
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Tailored OpenCart solutions for your business
            </h2>
            <p className="mt-3 text-sm text-razo-gray">
              We shape OpenCart around your workflows — not the other way around.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {opencartServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`overflow-hidden rounded-3xl bg-gradient-to-br ${service.accent} p-6 text-white shadow-xl`}
                >
                  <Icon size={26} className="text-white/90" />
                  <h3 className="mt-4 text-base font-bold leading-snug sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={homeRoutes.contact}
              className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
            >
              Discuss Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Portfolio
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Top Web Development Projects
            </h2>
          </div>
          <Link
            href={siteRoutes.caseStudies}
            className="inline-flex items-center gap-1 text-sm font-semibold text-razo-blue hover:underline"
          >
            View case studies
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {opencartProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="tilt-card group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-cyan-600 px-2.5 py-0.5 text-[10px] font-bold text-white">
                  {project.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-razo-dark">{project.title}</h3>
                <p className="mt-1.5 text-sm text-razo-gray">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-gray-100 bg-razo-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-lg font-bold text-razo-dark">
            Related Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {opencartRelated.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-razo-dark transition-colors hover:border-cyan-500 hover:text-cyan-700"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProductFAQ
        faqs={opencartFaqs}
        label="FAQ"
        title="Frequently Asked Questions"
        description="OpenCart themes, modules, SEO, hosting, multi-store setup, and how it compares to Magento."
        variant="light"
      />

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-18">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <Image
          src="/images/clients-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-md">
            <span className="rounded bg-cyan-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
              Testimonials
            </span>
            <p className="mt-3 text-4xl font-bold text-white">500+</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Clients Are Served
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {opencartTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-3xl p-6"
              >
                <Stars count={t.rating} />
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-500/40"
                  />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — no form */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div>
            <p className="text-lg font-bold text-razo-dark sm:text-xl">
              Let&apos;s Create Something Great Together
            </p>
            <p className="mt-1 text-sm text-razo-gray">
              OpenCart store setup, custom modules, or full redesign — we&apos;re ready.
            </p>
          </div>
          <Link
            href={homeRoutes.contact}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-sky-600 px-7 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Sparkles size={16} />
            Reach Out to Us
          </Link>
        </div>
      </section>
    </main>
  );
}
