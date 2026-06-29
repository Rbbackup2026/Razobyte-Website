"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  User,
  Building2,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  Pin,
  Headphones,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  contactHero,
  contactPhones,
  contactOffices,
  contactQuickFacts,
  contactCta,
  contactServiceOptions,
} from "@/lib/contact";
import { homeRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

function StickyNoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -6, y: 20 }}
      animate={{ opacity: 1, rotate: -3, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative mx-auto w-full max-w-xs sm:max-w-sm"
    >
      <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/40">
          <Pin size={16} className="text-white" fill="currentColor" />
        </span>
      </div>

      <div
        className="relative rounded-sm bg-[#fff9c4] px-6 pb-6 pt-8 shadow-[8px_12px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.8)]"
        style={{
          transform: "perspective(800px) rotateX(4deg) rotateY(-6deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_0%,transparent_50%)]" />
        <p className="relative text-center font-[family-name:var(--font-poppins)] text-lg font-bold text-razo-dark">
          Contact Info
        </p>
        <div className="relative mt-4 space-y-3">
          <a
            href={contactPhones.mobileTel}
            className="flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2.5 transition-colors hover:bg-white/90"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-razo-blue text-white shadow-md">
              <Phone size={16} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                Phone
              </p>
              <p className="text-sm font-bold text-razo-dark">
                {contactPhones.mobile}
              </p>
            </div>
          </a>
          <a
            href={contactPhones.landlineTel}
            className="flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2.5 transition-colors hover:bg-white/90"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white shadow-md">
              <Headphones size={16} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                Landline
              </p>
              <p className="text-sm font-bold text-razo-dark">
                {contactPhones.landline}
              </p>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">
      {/* Hero — light sky gradient with 3D sticky note + floating form */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-[#dbeafe] to-razo-blue/20 pt-28">
        <div className="absolute inset-0 grid-pattern opacity-[0.07]" />
        <div className="orb left-0 top-20 h-64 w-64 bg-razo-blue/20" />
        <div className="orb right-0 top-10 h-72 w-72 bg-sky-300/30" />

        <div className="relative mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-razo-blue backdrop-blur-sm">
              <Sparkles size={12} />
              Reach Us
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.75rem]">
              {contactHero.headline}
            </h1>
            <p className="mt-2 text-xl font-semibold text-razo-blue sm:text-2xl">
              {contactHero.subheadline}
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-razo-gray sm:text-base">
              {contactHero.description}
            </p>
          </motion.div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <div className="flex flex-col items-center gap-8 lg:items-start lg:pt-6">
              <StickyNoteCard />

              <div className="grid w-full max-w-sm grid-cols-3 gap-2 sm:max-w-md">
                {contactQuickFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="glass-card-light rounded-2xl px-2 py-3 text-center"
                  >
                    <p className="text-[10px] font-medium text-razo-gray">
                      {fact.label}
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-razo-blue">
                      {fact.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="tilt-card hidden overflow-hidden rounded-2xl border border-white/60 shadow-xl lg:block"
              >
                <Image
                  src="/images/contact.jpg"
                  alt="Razobyte team consultation"
                  width={400}
                  height={260}
                  className="h-44 w-full object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="glass-card-light tilt-card relative overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(43,141,239,0.18)]"
            >
              <div className="bg-gradient-to-r from-razo-blue to-razo-blue-dark px-6 py-5 sm:px-8 sm:py-6">
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  Book Your Session
                </h2>
                <p className="mt-1 text-sm text-white/80">
                  We&apos;re Here to Help You Grow and Succeed
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center p-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Send size={24} />
                  </span>
                  <p className="mt-4 text-lg font-bold text-razo-dark">
                    Thank you!
                  </p>
                  <p className="mt-1 text-sm text-razo-gray">
                    We&apos;ll get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-3.5 p-6 sm:p-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label className="relative block">
                      <User
                        size={15}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                      />
                    </label>
                    <label className="relative block">
                      <Mail
                        size={15}
                        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-razo-gray"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email *"
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
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
                      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
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
                      className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
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
                      required
                      placeholder="Tell Us About Your Project / Message *"
                      className="w-full resize-none rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-razo-blue focus:ring-2 focus:ring-razo-blue/15"
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn-3d flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white"
                  >
                    Submit
                    <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 text-white">
          <svg viewBox="0 0 1440 80" fill="currentColor" className="block w-full">
            <path d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Office locations */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
              Our Offices
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-razo-gray">
              Visit us in Gurugram or Ahmedabad — or connect remotely from
              anywhere in the world.
            </p>
          </motion.div>

          <div className="mt-12 space-y-16">
            {contactOffices.map((office, index) => {
              const reversed = index % 2 === 1;
              return (
                <motion.article
                  key={office.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-razo-blue/5">
                    <div className="relative aspect-[16/10] w-full bg-gray-100">
                      <iframe
                        title={`${office.city} office map`}
                        src={office.mapEmbed}
                        className="absolute inset-0 h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="glass-card-light rounded-3xl p-6 sm:p-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-razo-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-razo-blue">
                      <MapPin size={12} />
                      {office.country} — {office.city}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-razo-dark sm:text-2xl">
                      Razobyte {office.city}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-razo-gray">
                      {office.address}
                    </p>

                    <div className="mt-6 space-y-3">
                      <a
                        href={office.phoneTel}
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-shadow hover:shadow-md"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue">
                          <Phone size={18} />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                            Phone
                          </p>
                          <p className="text-sm font-bold text-razo-dark">
                            {office.phone}
                          </p>
                        </div>
                      </a>
                      <a
                        href={office.emailHref}
                        className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 transition-shadow hover:shadow-md"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue">
                          <Mail size={18} />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                            Email
                          </p>
                          <p className="text-sm font-bold text-razo-dark">
                            {office.email}
                          </p>
                        </div>
                      </a>
                      <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue">
                          <Clock size={18} />
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                            Hours
                          </p>
                          <p className="text-sm font-bold text-razo-dark">
                            Mon – Sat: 9:00 AM – 6:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-razo-blue hover:underline"
                    >
                      Open in Google Maps
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-16">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="orb right-0 top-0 h-56 w-56 bg-razo-blue/20" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left sm:px-6">
          <div>
            <p className="text-lg font-bold text-white sm:text-xl">
              {contactCta.title}
            </p>
            <p className="mt-1 text-sm text-white/55">{contactCta.description}</p>
          </div>
          <a
            href={contactPhones.mobileTel}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-razo-blue shadow-lg transition-transform hover:-translate-y-0.5"
          >
            {contactCta.button}
            <Phone size={16} />
          </a>
        </div>
      </section>

      {/* Secondary link */}
      <section className="border-t border-gray-100 bg-razo-surface py-8">
        <p className="text-center text-sm text-razo-gray">
          Prefer browsing our homepage?{" "}
          <Link
            href={homeRoutes.home}
            className="font-semibold text-razo-blue hover:underline"
          >
            Back to Home →
          </Link>
        </p>
      </section>
    </main>
  );
}
