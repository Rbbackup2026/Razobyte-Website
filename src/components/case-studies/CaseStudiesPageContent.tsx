"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Send,
  Star,
  TrendingUp,
  ChevronDown,
  Sparkles,
  Quote,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Building2,
  MessageSquare,
} from "lucide-react";
import {
  caseStudiesStats,
  caseStudies,
  industries,
  caseStudyTestimonials,
  contactServiceOptions,
} from "@/lib/caseStudies";
import { homeRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
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

export default function CaseStudiesPageContent() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState<string>("All Industries");

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchIndustry =
        industry === "All Industries" || cs.industry === industry;
      const q = query.trim().toLowerCase();
      const matchQuery =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.client.toLowerCase().includes(q) ||
        cs.summary.toLowerCase().includes(q) ||
        cs.industry.toLowerCase().includes(q);
      return matchIndustry && matchQuery;
    });
  }, [query, industry]);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0d3d7a] via-razo-blue-dark to-razo-blue pt-28">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="orb -right-16 top-8 h-56 w-56 bg-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
              <Sparkles size={12} />
              Case Studies
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              Our Success Stories
            </h1>
            <p className="mt-2 text-lg font-semibold text-razo-blue-light sm:text-xl">
              Results Through Technology & Innovation
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
              At Razobyte we don&apos;t just build websites, apps, and
              integrations — we create real impact for businesses across
              different industries. Whether it&apos;s healthcare, e-commerce,
              finance, or IT solutions, our work helps companies streamline
              operations, improve customer experience, and drive growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="tilt-card overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image
                src="/images/solutions.jpg"
                alt="Razobyte case study success"
                width={520}
                height={320}
                className="h-48 w-full object-cover sm:h-56 lg:h-60"
                priority
              />
            </div>
            <div className="absolute -bottom-3 left-4 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-md">
              <p className="flex items-center gap-1.5 text-xs font-bold text-white">
                <TrendingUp size={14} className="text-amber-300" />
                Real Impact. Real Results.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-4 sm:px-6 lg:grid-cols-4 lg:gap-3 lg:py-5">
            {caseStudiesStats.map((stat, i) => {
              const gradients = [
                "from-sky-400/90 to-razo-blue",
                "from-violet-500/90 to-indigo-700",
                "from-slate-500/90 to-slate-700",
                "from-razo-blue to-razo-blue-dark",
              ];
              return (
                <div
                  key={stat.label}
                  className={`rounded-xl bg-gradient-to-br ${gradients[i]} px-3 py-3 text-center text-white ring-1 ring-white/15 sm:py-3.5`}
                >
                  <p className="text-xl font-bold sm:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/90 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search & filter */}
      <section className="border-b border-gray-100 bg-razo-surface py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 sm:flex-row sm:px-6">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-razo-gray"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search case studies..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-razo-dark shadow-sm outline-none transition-colors focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
            />
          </div>
          <div className="relative sm:w-48">
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-razo-blue py-3 pl-4 pr-10 text-sm font-semibold text-white shadow-sm outline-none"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>
                  {ind === "All Industries" ? "Industry" : ind}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white"
            />
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl px-4 text-center text-sm text-razo-gray sm:px-6">
          Here are some of the successful projects we&apos;ve delivered, showing
          how technology can make businesses smarter, faster, and more
          efficient.
        </p>
      </section>

      {/* Case studies list */}
      <section className="py-14 lg:py-18">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:space-y-20">
          {filtered.length === 0 ? (
            <p className="text-center text-razo-gray">
              No case studies match your search. Try a different keyword or
              industry.
            </p>
          ) : (
            filtered.map((study, index) => {
              const reversed = index % 2 === 1;
              return (
                <motion.article
                  key={study.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="tilt-card group relative overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-razo-blue/5">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-razo-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-razo-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {study.tag}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-razo-blue">
                      {study.client}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
                      {study.industry}
                    </span>
                    <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-[1.65rem]">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-sm font-medium text-razo-gray">
                      {study.summary}
                    </p>
                    <div className="mt-4 space-y-3">
                      {study.paragraphs.map((p) => (
                        <p
                          key={p.slice(0, 40)}
                          className="text-sm leading-relaxed text-razo-gray"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {study.results.map((r) => (
                        <li
                          key={r}
                          className="rounded-full border border-razo-blue/15 bg-razo-blue/5 px-3 py-1 text-xs font-medium text-razo-blue"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={homeRoutes.contact}
                      className="btn-3d mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
                    >
                      View Case Study
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              );
            })
          )}
        </div>
      </section>

      {/* Let's Talk */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-razo-black to-[#0d3d7a] py-16 lg:py-20">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="orb -left-20 top-10 h-72 w-72 bg-razo-blue/25" />
        <div className="orb -right-16 bottom-0 h-64 w-64 bg-sky-400/15" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-razo-blue-light">
                <Sparkles size={12} />
                Let&apos;s Talk
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-[2rem]">
                Take the First Step{" "}
                <span className="gradient-text-blue">Towards Success</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Share your project goals and our team will respond with a
                thoughtful plan — free consultation, clear scope, and no
                generic pitches.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "Free initial consultation",
                  "Response within 24 business hours",
                  "Dedicated project communication",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-white/75"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-razo-blue-light"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:+918448158188"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <Phone size={15} className="text-razo-blue-light" />
                  +91-8448158188
                </a>
                <a
                  href="mailto:info@razobyte.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <Mail size={15} className="text-razo-blue-light" />
                  info@razobyte.com
                </a>
              </div>

              <div className="relative mt-8">
                <div className="tilt-card relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
                  <Image
                    src="/images/cta-team.jpg"
                    alt="Razobyte consultation team"
                    width={560}
                    height={360}
                    className="h-44 w-full object-cover sm:h-52"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-razo-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-4 right-4 rounded-2xl border border-white/15 bg-razo-blue/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/80">
                    Client satisfaction
                  </p>
                  <p className="flex items-center gap-1 text-lg font-bold text-white">
                    100%
                    <Star size={14} className="text-amber-300" fill="currentColor" />
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { label: "Google Partner", sub: "Premier", accent: "text-sky-300" },
                  { label: "Meta Business", sub: "Partner", accent: "text-blue-300" },
                  { label: "Google Reviews", sub: "5.0 rating", accent: "text-amber-300", stars: 5 },
                  { label: "HubSpot", sub: "Solutions Partner", accent: "text-orange-300" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="glass-card rounded-2xl p-3.5 text-center transition-transform hover:-translate-y-0.5"
                  >
                    <p className="text-[11px] font-bold text-white/90">
                      {badge.label}
                    </p>
                    <p className={`mt-0.5 text-[10px] font-medium ${badge.accent}`}>
                      {badge.sub}
                    </p>
                    {badge.stars ? (
                      <div className="mt-1 flex justify-center">
                        <Stars count={badge.stars} />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="glass-card-light tilt-card overflow-hidden rounded-3xl"
            >
              <div className="bg-gradient-to-r from-razo-blue to-razo-blue-dark px-6 py-5 sm:px-8 sm:py-6">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Book Your Session
                </h3>
                <p className="mt-1 text-sm text-white/80">
                  We&apos;re here to help you grow and succeed
                </p>
              </div>

              <form
                className="space-y-3.5 p-6 sm:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="relative block sm:col-span-1">
                    <User
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-razo-dark outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                    />
                  </label>
                  <label className="relative block sm:col-span-1">
                    <Mail
                      size={15}
                      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-razo-dark outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                    />
                  </label>
                </div>

                <label className="relative block">
                  <Phone
                    size={15}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number *"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-razo-dark outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                  />
                </label>

                <label className="relative block">
                  <Building2
                    size={15}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                  />
                  <input
                    type="text"
                    placeholder="Company Name / Website (If Any)"
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-razo-dark outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                  />
                </label>

                <div className="relative">
                  <select
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm text-razo-gray outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                  >
                    <option value="" disabled>
                      Select Services *
                    </option>
                    {contactServiceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                  />
                </div>

                <label className="relative block">
                  <MessageSquare
                    size={15}
                    className="pointer-events-none absolute left-3.5 top-4 text-razo-gray"
                  />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project / message"
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-razo-dark outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                  />
                </label>

                <button
                  type="submit"
                  className="btn-3d flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white"
                >
                  Submit Request
                  <Send size={16} />
                </button>

                <p className="text-center text-[11px] text-razo-gray">
                  By submitting, you agree to be contacted about your inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-18">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 max-w-md">
            <span className="rounded bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-razo-blue">
              Testimonials
            </span>
            <p className="mt-3 text-4xl font-bold text-white">500+</p>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Clients Are Served
            </p>
            <p className="mt-2 text-sm text-white/55">
              Words by our amazing clients. Razobyte offers a full range of
              consultancy and solutions for sustainable growth.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {caseStudyTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-3xl p-6"
              >
                <Quote size={28} className="text-razo-blue/50" />
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
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-razo-blue/40"
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

      {/* CTA */}
      <section className="bg-razo-black py-12 lg:py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/hero.jpg"
              alt=""
              width={80}
              height={80}
              className="hidden h-16 w-16 rounded-xl object-cover sm:block"
            />
            <p className="text-center text-xl font-bold text-white sm:text-left sm:text-2xl">
              Ready to drive real results?
            </p>
          </div>
          <Link
            href={homeRoutes.contact}
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-razo-blue shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Need Help? Let&apos;s Connect
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
