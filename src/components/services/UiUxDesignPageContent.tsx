"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Quote,
  PenTool,
  ChevronRight,
  Layers,
  MonitorSmartphone,
} from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  uiUxQuote,
  designTools,
  getUiUxStats,
  uiUxPillars,
  uiUxProjects,
  webDesignProjects,
  relatedServices,
  uiUxBlogPosts,
  uiUxProcess,
  uiUxFaqs,
} from "@/lib/uiUxDesign";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06 },
  }),
};

export default function UiUxDesignPageContent() {
  const stats = getUiUxStats();

  return (
    <main className="bg-white">
      {/* Editorial intro — no banner */}
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
              <PenTool size={13} />
              Design Services
            </Link>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">
              UI/UX Design &amp; Development Services to Enhance User Experience
            </h1>

            <blockquote className="relative mt-6 border-l-4 border-razo-blue pl-5">
              <Quote
                size={28}
                className="absolute -left-1 -top-1 text-razo-blue/20"
                fill="currentColor"
              />
              <p className="text-base italic leading-relaxed text-razo-gray sm:text-lg">
                &ldquo;{uiUxQuote.text}&rdquo;
              </p>
              <footer className="mt-2 text-sm font-semibold text-razo-dark">
                — {uiUxQuote.author}
              </footer>
            </blockquote>

            <p className="mt-5 text-sm leading-relaxed text-razo-gray sm:text-base">
              We craft interfaces that balance beauty and function — from mobile
              apps and dashboards to marketing websites — so every interaction
              feels intentional and every user journey ends in success.
            </p>

            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white"
            >
              Start Your Design Project
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="tilt-card relative w-full max-w-md overflow-hidden rounded-3xl border border-gray-100 shadow-2xl shadow-razo-blue/10">
              <Image
                src="/images/service-design.jpg"
                alt="UI/UX design workspace"
                width={520}
                height={400}
                className="h-64 w-full object-cover sm:h-72"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-razo-black/50 via-transparent to-transparent" />
            </div>

            {designTools.map((tool, i) => {
              const positions = [
                "left-0 top-4",
                "right-0 top-8",
                "left-4 bottom-12",
                "right-2 bottom-20",
                "left-1/2 -top-2 -translate-x-1/2",
                "right-6 bottom-4",
              ];
              return (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className={`absolute ${positions[i]} glass-card-light rounded-full px-3 py-1.5 text-[11px] font-bold text-razo-blue shadow-md`}
                >
                  {tool}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-gray-100 bg-razo-surface">
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

      {/* Process steps */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="mb-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
            Our Approach
          </span>
          <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
            From insight to interface
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {uiUxProcess.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="text-3xl font-black text-razo-blue/15">
                {step.step}
              </span>
              <h3 className="mt-2 font-bold text-razo-dark">{step.title}</h3>
              <p className="mt-1.5 text-sm text-razo-gray">{step.detail}</p>
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-razo-blue/5 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-20">
          {uiUxPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={pillar.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    width={600}
                    height={400}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-razo-blue text-white shadow-lg shadow-razo-blue/25">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-razo-dark sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-razo-gray sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* UI/UX projects */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Portfolio
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Top UI/UX Design Projects
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

        <div className="grid gap-6 sm:grid-cols-2">
          {uiUxProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="tilt-card group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={320}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                />
                <span className="absolute left-4 top-4 rounded-full bg-razo-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {project.tag}
                </span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-razo-blue">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-razo-dark">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-razo-gray">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Web design projects */}
      <section className="border-t border-gray-100 bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Web Design
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Top Web Design Projects
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {webDesignProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="tilt-card group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-razo-black/70 to-transparent p-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                        {project.category}
                      </p>
                      <h3 className="text-base font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="p-4 text-sm text-razo-gray">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services + blogs */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Grow Further
            </span>
            <h2 className="mt-2 text-xl font-bold text-razo-dark sm:text-2xl">
              Complement your design with marketing
            </h2>
            <div className="mt-6 space-y-3">
              {relatedServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    className="glass-card-light flex items-start gap-3 rounded-2xl p-4 transition-shadow hover:shadow-md"
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
              {uiUxBlogPosts.map((post, i) => (
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
        faqs={uiUxFaqs}
        label="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about UI/UX design — from tools and process to eCommerce and mobile success."
        variant="light"
      />

      {/* Closing CTA — compact, not a banner */}
      <section className="border-t border-gray-100 bg-razo-black py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div className="flex items-center gap-4">
            <span className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-razo-blue/20 text-razo-blue sm:flex">
              <Layers size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-white sm:text-xl">
                Let&apos;s Create Something Great Together
              </p>
              <p className="mt-1 text-sm text-white/50">
                Share your vision — we&apos;ll turn it into an experience users love.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={homeRoutes.contact}
              className="btn-3d inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            >
              <MonitorSmartphone size={16} />
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
