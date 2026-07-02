"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Send,
  CheckCircle2,
} from "lucide-react";
import ProductCTA from "@/components/products/ProductCTA";
import {
  getAboutStats,
  journeyServices,
  coreValues,
  aboutServices,
  clientSegments,
  differentiators,
  contactServiceOptions,
} from "@/lib/about";
import { homeRoutes } from "@/lib/routes";
import { COMPANY_FOUNDED_YEAR, getYearsOfExperience } from "@/lib/company";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPageContent() {
  const aboutStats = getAboutStats();
  const yearsOfExperience = getYearsOfExperience();

  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-razo-black">
        <div className="orb -right-24 top-0 h-96 w-96 bg-razo-blue/20" />
        <div className="orb -left-32 bottom-0 h-72 w-72 bg-razo-blue/10" />
        <div className="absolute inset-0 grid-pattern opacity-25" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/30 bg-razo-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-razo-blue-light">
              <Calendar size={12} />
              Founded {COMPANY_FOUNDED_YEAR} · Gurgaon
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Building Digital Foundations with{" "}
              <span className="gradient-text">Integrity, Insight & Impact</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              RazoByte is a digital solutions company that blends technology and
              strategy to help businesses grow, operate efficiently, and connect
              with customers online. Headquartered in Gurgaon, we serve clients
              across healthcare, cosmetics, education, real estate, and beyond.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              We don&apos;t believe in one-size-fits-all shortcuts. Every business
              has its own story — we help shape that story through thoughtful web
              development, strategic marketing, and intelligent automation
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-white/50">
                <MapPin size={14} className="text-razo-blue-light" />
                India · Dubai · Europe · SE Asia
              </span>
            </div>
            <Link
              href="#about-contact"
              className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
            >
              Book Your Session
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="tilt-card overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-razo-blue/10">
              <Image
                src="/images/team.jpg"
                alt="RazoByte team collaborating"
                width={640}
                height={440}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="glass-card absolute -bottom-5 -left-4 rounded-2xl px-5 py-4 sm:-left-6">
              <p className="text-2xl font-bold text-razo-blue-light">{COMPANY_FOUNDED_YEAR}</p>
              <p className="text-xs text-white/55">Year Founded</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4">
          {aboutStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-razo-blue sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-razo-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Our Journey
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              A Decade of Digital Partnership
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Over the last {yearsOfExperience}+ years, we&apos;ve grown from a small tech team to a
              full-service digital partner. What started as a vision to help
              businesses simplify their IT has evolved into a comprehensive suite
              of services — from websites and apps to CRM, ERP, and automation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              We&apos;ve served clients across India and beyond, with strong
              footprints in Dubai, Europe, and South East Asia. No matter the
              region or industry, our focus stays the same: solve problems,
              deliver on promises, and build trust through results.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 lg:hidden">
              <Image
                src="/images/about-hero.png"
                alt="RazoByte journey"
                width={600}
                height={360}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {journeyServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-razo-blue/30 hover:bg-razo-blue/[0.06] sm:p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-razo-blue/20 to-razo-blue/5 text-razo-blue ring-1 ring-razo-blue/10 transition-transform group-hover:scale-105">
                    <Icon size={20} />
                  </span>
                  <p className="mt-3 text-xs font-semibold leading-snug text-white/80 sm:text-[13px]">
                    {service.title}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-gray-100 bg-razo-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Our Principles
            </span>
            <h2 className="mt-3 text-2xl font-bold text-razo-dark sm:text-3xl">
              What We Stand For
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-razo-blue/10 text-razo-blue">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-bold text-razo-dark">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-razo-gray">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            Capabilities
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-white/55">
            End-to-end digital solutions — from first sketch to launch and beyond.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card group rounded-2xl p-6 transition-colors hover:border-razo-blue/30"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-razo-blue/15 text-razo-blue-light transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-white/20 transition-colors group-hover:text-razo-blue-light"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-t border-white/5 bg-razo-dark/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src="/images/cta-team.jpg"
                alt="Team working together"
                width={600}
                height={420}
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-razo-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white/80">
                Partnering with teams who are ready to grow — from idea to scale.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
                Clients & Industries
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Who We Work With
              </h2>
              <p className="mt-4 text-base text-white/55">
                Whether you&apos;re launching something new or scaling what already
                works, we adapt to your stage, sector, and ambitions.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {clientSegments.map((segment, i) => {
                  const Icon = segment.icon;
                  return (
                    <motion.div
                      key={segment.title}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-razo-blue/25"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-razo-blue/15 text-razo-blue-light">
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {segment.title}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                          {segment.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-y border-gray-100 bg-razo-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              The RazoByte Way
            </span>
            <h2 className="mt-3 text-2xl font-bold text-razo-dark sm:text-3xl">
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
                    i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-razo-blue text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-bold text-razo-dark">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-razo-gray">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="about-contact" className="relative py-20 lg:py-28">
        <div className="orb right-0 top-0 h-80 w-80 bg-razo-blue/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
                Let&apos;s Talk
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Take the First Step Towards Success
              </h2>
              <p className="mt-4 text-base text-white/55">
                We&apos;re here to help you grow and succeed. Share your project
                details and our team will get back to you with a thoughtful
                response — no generic pitches.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Free initial consultation",
                  "Transparent timelines & scope",
                  "Dedicated project communication",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 size={16} className="shrink-0 text-razo-blue" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm text-white/45">
                Prefer the homepage contact section?{" "}
                <Link
                  href={homeRoutes.contact}
                  className="font-semibold text-razo-blue-light hover:underline"
                >
                  Reach us here →
                </Link>
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="bg-gradient-to-r from-razo-blue to-razo-blue-dark px-6 py-5 sm:px-8">
                <h3 className="text-xl font-bold text-white">Book Your Session</h3>
                <p className="mt-1 text-sm text-white/80">
                  We&apos;re here to help you grow and succeed
                </p>
              </div>
              <form
                className="space-y-4 p-6 sm:p-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
                />
                <input
                  type="tel"
                  required
                  placeholder="Your Phone Number *"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
                />
                <input
                  type="text"
                  placeholder="Company Name / Website (If Any)"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
                />
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60 outline-none transition-colors focus:border-razo-blue"
                >
                  <option value="" disabled>
                    Select Services *
                  </option>
                  {contactServiceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-razo-dark text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project / message"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
                />
                <button
                  type="submit"
                  className="btn-3d flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white"
                >
                  <Send size={16} />
                  Submit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductCTA
        title="Ready to shape your digital story with RazoByte?"
        description="Book a free consultation, call our team, or chat on WhatsApp — let's build something that lasts."
      />
    </main>
  );
}
