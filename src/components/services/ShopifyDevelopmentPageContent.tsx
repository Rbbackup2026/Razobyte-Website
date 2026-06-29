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
  Store,
  Zap,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  shopifyHero,
  shopifyHighlights,
  getShopifyStats,
  shopifyIntroSections,
  whyShopifyFeatures,
  shopifyBenefits,
  shopifyServices,
  shopifyProjects,
  shopifyRelated,
  shopifyTestimonials,
  shopifyProcess,
  shopifyFaqs,
} from "@/lib/shopifyDevelopment";
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

function StorefrontMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* 3D phone frame */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="tilt-card relative z-10 mx-auto w-[260px] overflow-hidden rounded-[2rem] border-[6px] border-gray-800 bg-gray-900 shadow-2xl shadow-emerald-500/20 sm:w-[280px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-gray-800" />
        <div className="relative bg-white pt-6">
          <div className="flex items-center justify-between bg-[#96bf48] px-3 py-2">
            <Store size={14} className="text-white" />
            <span className="text-[10px] font-bold text-white">My Store</span>
            <ShoppingCart size={14} className="text-white" />
          </div>
          <Image
            src="/images/portfolio-ecommerce.jpg"
            alt="Shopify store preview"
            width={280}
            height={360}
            className="h-56 w-full object-cover"
            priority
          />
          <div className="grid grid-cols-2 gap-1.5 p-2">
            {["New Arrivals", "Best Sellers"].map((label) => (
              <div
                key={label}
                className="rounded-lg bg-gray-50 px-2 py-1.5 text-center text-[9px] font-semibold text-gray-600"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating product cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute -left-6 top-16 z-20 rounded-xl border border-white/80 bg-white p-2 shadow-xl"
      >
        <div className="h-10 w-10 rounded-lg bg-emerald-100" />
        <p className="mt-1 text-[9px] font-bold text-gray-700">₹1,299</p>
        <p className="text-[8px] text-emerald-600">+24% sales</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="absolute -right-4 top-32 z-20 rounded-xl border border-white/80 bg-white px-3 py-2 shadow-xl"
      >
        <p className="text-[10px] font-bold text-[#96bf48]">24h</p>
        <p className="text-[8px] text-gray-500">Fast dispatch</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 shadow-lg"
      >
        <Image
          src="/images/erp/shopify.svg"
          alt="Shopify"
          width={20}
          height={20}
          className="h-5 w-5"
        />
        <span className="text-xs font-bold text-gray-700">Powered by Shopify</span>
      </motion.div>

      <div className="orb absolute -right-8 top-0 h-40 w-40 bg-emerald-400/20" />
      <div className="orb absolute -left-8 bottom-8 h-32 w-32 bg-razo-blue/15" />
    </div>
  );
}

export default function ShopifyDevelopmentPageContent() {
  const stats = getShopifyStats();

  return (
    <main className="bg-white">
      {/* Intro — no banner */}
      <section className="border-b border-gray-100 pt-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
              <ShoppingCart size={12} />
              Ecommerce Solutions
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              {shopifyHero.title}
            </h1>
            <p className="mt-3 text-lg font-semibold text-[#5e8e3e] sm:text-xl">
              {shopifyHero.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
              {shopifyHero.description}
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {shopifyHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-razo-gray"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#96bf48]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
            >
              Hire Shopify Developers
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <StorefrontMockup />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-gradient-to-r from-emerald-50/80 via-white to-razo-blue/5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card-light rounded-2xl px-4 py-5 text-center"
            >
              <p className="text-2xl font-bold text-razo-blue sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-razo-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="mb-8 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
            How We Work
          </span>
          <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
            Store launch in four clear phases
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shopifyProcess.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <span className="text-3xl font-black text-emerald-500/20">
                {step.step}
              </span>
              <h3 className="mt-1 font-bold text-razo-dark">{step.title}</h3>
              <p className="mt-1 text-sm text-razo-gray">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intro sections with images */}
      {shopifyIntroSections.map((section, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={section.id}
            className={index % 2 === 0 ? "bg-razo-surface py-14 lg:py-16" : "py-14 lg:py-16"}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
                  {section.description}
                </p>
                <Link
                  href={homeRoutes.contact}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-razo-blue hover:underline"
                >
                  Talk to our team
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover sm:h-64"
                />
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Why Shopify */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-18">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="orb right-0 top-0 h-64 w-64 bg-emerald-500/10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              Why Shopify
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Unraveling Its Superiority
            </h2>
            <p className="mt-3 text-sm text-white/55 sm:text-base">
              Shopify has earned its reputation as a leading e-commerce platform
              for compelling reasons — each contributing to its unrivaled appeal
              among businesses worldwide.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyShopifyFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
            Why Choose Shopify?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-razo-gray">
            Everything you need to run, grow, and scale an online store — in one platform.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {shopifyBenefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-medium text-razo-dark">{benefit.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Core services */}
      <section className="bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
                Our Services
              </span>
              <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
                Add Smart Features With Shopify Developers
              </h2>
            </div>
            <Link
              href={homeRoutes.contact}
              className="btn-3d inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            >
              Hire Shopify Development
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {shopifyServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`tilt-card overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-6 text-white shadow-xl`}
                >
                  <Icon size={28} className="text-white/90" />
                  <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
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
          {shopifyProjects.map((project, i) => (
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
                <span className="absolute left-3 top-3 rounded-full bg-[#96bf48] px-2.5 py-0.5 text-[10px] font-bold text-white">
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

      {/* Related platforms */}
      <section className="border-t border-gray-100 bg-razo-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-6 text-center text-lg font-bold text-razo-dark">
            Explore Other Ecommerce Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {shopifyRelated.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-razo-dark transition-colors hover:border-razo-blue hover:text-razo-blue"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProductFAQ
        faqs={shopifyFaqs}
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything about Shopify — themes, dropshipping, POS, payments, SEO, and costs in India."
        variant="light"
      />

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-18">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <Image
          src="/images/testimonial-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-md">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Testimonials
            </span>
            <p className="mt-3 text-4xl font-bold text-white">500+</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Clients Are Served
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {shopifyTestimonials.map((t, i) => (
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
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-emerald-500/40"
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

      {/* Compact CTA — no form */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 sm:flex">
              <Zap size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">
                Ready to launch your Shopify store?
              </p>
              <p className="mt-1 text-sm text-razo-gray">
                From theme design to custom apps — we build stores that sell.
              </p>
            </div>
          </div>
          <Link
            href={homeRoutes.contact}
            className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white"
          >
            <Sparkles size={16} />
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
