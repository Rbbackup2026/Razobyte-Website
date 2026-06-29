"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  ChevronRight,
  CheckCircle2,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  websiteDesignIntro,
  webDesignStack,
  getWebsiteDesignStats,
  websiteDesignPillars,
  websiteDesignProjects,
  websiteDesignBlogs,
  websiteDesignRelated,
  websiteDesignDeliverables,
  websiteDesignFaqs,
} from "@/lib/websiteDesign";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06 },
  }),
};

function BrowserMockupStack() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.55 }}
        className="tilt-card relative z-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-razo-blue/15"
      >
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 flex-1 rounded-md bg-white px-2 py-0.5 text-[10px] text-razo-gray">
            razobyte.com
          </span>
        </div>
        <Image
          src="/images/service-web.jpg"
          alt="Website design preview"
          width={480}
          height={300}
          className="h-48 w-full object-cover sm:h-52"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 12, rotate: 6 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute -right-4 top-8 z-0 hidden w-[85%] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg sm:block"
      >
        <div className="h-2 bg-razo-blue/20" />
        <div className="h-32 bg-gradient-to-br from-sky-50 to-razo-blue/10" />
      </motion.div>

      {webDesignStack.map((tool, i) => {
        const positions = [
          "-left-3 top-6",
          "-right-2 top-16",
          "left-2 bottom-16",
          "right-0 bottom-8",
          "left-1/2 -top-3 -translate-x-1/2",
          "-right-4 bottom-24",
        ];
        return (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + i * 0.07 }}
            className={`absolute ${positions[i]} z-20 rounded-full border border-razo-blue/15 bg-white px-3 py-1 text-[10px] font-bold text-razo-blue shadow-md`}
          >
            {tool}
          </motion.span>
        );
      })}
    </div>
  );
}

export default function WebsiteDesignPageContent() {
  const stats = getWebsiteDesignStats();

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
            <Link
              href={homeRoutes.services}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-razo-blue hover:underline"
            >
              <LayoutTemplate size={13} />
              Design Services
            </Link>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              Best Website Design Company — Web Design Services
            </h1>

            <p className="mt-3 text-lg font-semibold text-razo-blue sm:text-xl">
              {websiteDesignIntro.eyebrow}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
              {websiteDesignIntro.description}
            </p>

            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <BrowserMockupStack />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-gradient-to-r from-razo-blue/5 via-sky-50 to-razo-blue/5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-razo-blue/10 bg-white px-4 py-5 text-center shadow-sm"
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

      {/* Deliverables bento */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              What You Get
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Websites built to perform &amp; impress
            </h2>
            <p className="mt-3 text-sm text-razo-gray sm:text-base">
              From research and wireframes to pixel-perfect launch — we handle
              every layer of your website design with a focus on results.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {websiteDesignDeliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-razo-gray"
                >
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-razo-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl"
          >
            <Image
              src="/images/hero.jpg"
              alt="Professional website design"
              width={560}
              height={380}
              className="h-full min-h-[240px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Pillars — bento on large screens */}
      <section className="bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Why Razobyte
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Design that works as hard as you do
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {websiteDesignPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-razo-black/70 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-razo-blue text-white shadow-lg">
                      <Icon size={18} />
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-razo-dark">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-razo-gray">
                      {pillar.description}
                    </p>
                    <Link
                      href={homeRoutes.contact}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-razo-blue hover:underline"
                    >
                      Get in Touch
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
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
              Top Website Design Projects
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
          {websiteDesignProjects.map((project, i) => (
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
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-razo-blue">
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

      {/* Related + blogs */}
      <section className="border-t border-gray-100 bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Explore More
            </span>
            <h2 className="mt-2 text-xl font-bold text-razo-dark sm:text-2xl">
              Complete your digital presence
            </h2>
            <div className="mt-6 space-y-3">
              {websiteDesignRelated.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-razo-blue/10 text-razo-blue">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-razo-dark">{svc.title}</p>
                      <p className="mt-0.5 text-xs text-razo-gray">
                        {svc.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-razo-dark sm:text-2xl">
                Latest Insights
              </h2>
              <Link
                href={siteRoutes.blogs}
                className="text-sm font-semibold text-razo-blue hover:underline"
              >
                All blogs →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {websiteDesignBlogs.map((post, i) => (
                <motion.article
                  key={post.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-28 overflow-hidden">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold leading-snug text-razo-dark">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs text-razo-gray">
                      {post.excerpt}
                    </p>
                    <Link
                      href={post.href}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-razo-blue"
                    >
                      Read more
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ProductFAQ
        faqs={websiteDesignFaqs}
        label="FAQ"
        title="Frequently Asked Questions"
        description="Common questions about website design — from responsive layouts and SEO to costs and eCommerce differences."
        variant="light"
      />

      {/* Compact CTA */}
      <section className="border-t border-gray-100 bg-razo-black py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-razo-blue/20 text-razo-blue sm:flex">
              <Sparkles size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-white sm:text-xl">
                Let&apos;s Create Something Great Together
              </p>
              <p className="mt-1 text-sm text-white/50">
                Your next website starts with a conversation — let&apos;s design it right.
              </p>
            </div>
          </div>
          <Link
            href={homeRoutes.contact}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-razo-blue shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Globe size={16} />
            Need Help? Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
