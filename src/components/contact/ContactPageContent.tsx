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
  Headphones,
  Clock,
  Sparkles,
  Shield,
  CheckCircle2,
  Globe,
} from "lucide-react";
import {
  contactHero,
  contactPhones,
  contactOffices,
  contactQuickFacts,
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

const inputBase =
  "w-full rounded-xl border border-slate-200/80 bg-white/90 py-3 pr-4 text-sm text-razo-dark outline-none transition-all placeholder:text-slate-400 focus:border-razo-blue focus:bg-white focus:shadow-[0_0_0_4px_rgba(43,141,239,0.12)]";

function FormField({
  icon: Icon,
  children,
  className = "",
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`group relative flex items-stretch gap-0 overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 transition-all focus-within:border-razo-blue focus-within:shadow-[0_0_0_4px_rgba(43,141,239,0.12)] ${className}`}>
      <span className="flex w-11 shrink-0 items-center justify-center bg-gradient-to-b from-razo-blue/10 to-razo-blue/5 text-razo-blue transition-colors group-focus-within:from-razo-blue group-focus-within:to-razo-blue-dark group-focus-within:text-white">
        <Icon size={16} />
      </span>
      <div className="min-w-0 flex-1 [&_input]:border-0 [&_input]:bg-transparent [&_input]:shadow-none [&_input]:focus:shadow-none [&_select]:border-0 [&_select]:bg-transparent [&_select]:shadow-none [&_textarea]:border-0 [&_textarea]:bg-transparent [&_textarea]:shadow-none [&_textarea]:focus:shadow-none">
        {children}
      </div>
    </label>
  );
}

function ContactInfoPanel() {
  return (
    <div className="flex w-full max-w-md flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="tilt-card relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_60px_rgba(43,141,239,0.15)] backdrop-blur-xl"
      >
        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-razo-blue/10 blur-2xl" />
        <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-razo-blue">
          Contact Info
        </p>
        <h3 className="relative mt-1 text-lg font-bold text-razo-dark">
          Talk to our experts
        </h3>

        <div className="relative mt-5 space-y-3">
          <a
            href={contactPhones.mobileTel}
            className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50/80 p-3.5 transition-all hover:-translate-y-0.5 hover:border-razo-blue/25 hover:shadow-lg hover:shadow-razo-blue/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-razo-blue to-razo-blue-dark text-white shadow-lg shadow-razo-blue/30">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                Phone
              </p>
              <p className="text-sm font-bold text-razo-dark group-hover:text-razo-blue">
                {contactPhones.mobile}
              </p>
            </div>
            <ArrowRight
              size={14}
              className="ml-auto text-razo-gray opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-razo-blue group-hover:opacity-100"
            />
          </a>

          <a
            href={contactPhones.landlineTel}
            className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50/80 p-3.5 transition-all hover:-translate-y-0.5 hover:border-razo-blue/25 hover:shadow-lg hover:shadow-razo-blue/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-lg shadow-sky-500/30">
              <Headphones size={18} />
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                Landline
              </p>
              <p className="text-sm font-bold text-razo-dark group-hover:text-razo-blue">
                {contactPhones.landline}
              </p>
            </div>
            <ArrowRight
              size={14}
              className="ml-auto text-razo-gray opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-razo-blue group-hover:opacity-100"
            />
          </a>

          <a
            href={contactPhones.emailHref}
            className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-r from-white to-sky-50/80 p-3.5 transition-all hover:-translate-y-0.5 hover:border-razo-blue/25 hover:shadow-lg hover:shadow-razo-blue/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
              <Mail size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-razo-gray">
                Email
              </p>
              <p className="truncate text-sm font-bold text-razo-dark group-hover:text-razo-blue">
                {contactPhones.email}
              </p>
            </div>
            <ArrowRight
              size={14}
              className="ml-auto shrink-0 text-razo-gray opacity-0 transition-all group-hover:translate-x-0.5 group-hover:text-razo-blue group-hover:opacity-100"
            />
          </a>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-2.5">
        {contactQuickFacts.map((fact, i) => (
          <motion.div
            key={fact.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-2xl border border-white/80 bg-white/70 px-2 py-3 text-center shadow-sm backdrop-blur-sm"
          >
            <p className="text-[9px] font-medium uppercase tracking-wide text-razo-gray sm:text-[10px]">
              {fact.label}
            </p>
            <p className="mt-0.5 text-[10px] font-bold leading-tight text-razo-blue sm:text-xs">
              {fact.value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="tilt-card relative hidden overflow-hidden rounded-3xl border border-white/60 shadow-xl lg:block"
      >
        <Image
          src="/images/contact.jpg"
          alt="Razobyte team consultation"
          width={400}
          height={260}
          className="h-44 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-razo-dark/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl bg-white/15 px-3 py-2 backdrop-blur-md">
          <span className="text-[11px] font-semibold text-white">
            Free strategy call
          </span>
          <span className="flex items-center gap-1 text-[10px] text-white/80">
            <Globe size={11} /> Remote & on-site
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function BookSessionForm({
  submitted,
  onSubmit,
}: {
  submitted: boolean;
  onSubmit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.55 }}
      className="relative"
    >
      <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-razo-blue via-sky-400 to-razo-blue-dark opacity-40 blur-sm" />
      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_32px_80px_rgba(43,141,239,0.2)]">
        <div className="relative overflow-hidden bg-gradient-to-br from-razo-blue via-razo-blue to-razo-blue-dark px-6 py-6 sm:px-8 sm:py-7">
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 left-1/3 h-24 w-24 rounded-full bg-sky-300/20 blur-xl" />
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/90">
                <Sparkles size={11} /> Free Consultation
              </span>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-[1.65rem]">
                Book Your Session
              </h2>
              <p className="mt-1.5 max-w-sm text-sm text-white/75">
                We&apos;re Here to Help You Grow and Succeed
              </p>
            </div>
            <div className="hidden rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-sm sm:block">
              <p className="text-2xl font-bold text-white">24h</p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                Response
              </p>
            </div>
          </div>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-10 text-center sm:p-14"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
              <CheckCircle2 size={32} />
            </span>
            <p className="mt-5 text-xl font-bold text-razo-dark">Thank you!</p>
            <p className="mt-2 max-w-xs text-sm text-razo-gray">
              Your session request is in. We&apos;ll reach out within 24 business
              hours.
            </p>
          </motion.div>
        ) : (
          <form
            className="space-y-6 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div>
              <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-razo-gray">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-razo-blue/10 text-[10px] text-razo-blue">
                  01
                </span>
                Your Details
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <FormField icon={User}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    className={inputBase}
                  />
                </FormField>
                <FormField icon={Mail}>
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    className={inputBase}
                  />
                </FormField>
              </div>
              <div className="mt-3">
                <FormField icon={Phone}>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number *"
                    className={inputBase}
                  />
                </FormField>
              </div>
            </div>

            <div>
              <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-razo-gray">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-razo-blue/10 text-[10px] text-razo-blue">
                  02
                </span>
                Project Info
              </p>
              <div className="space-y-3">
                <FormField icon={Building2}>
                  <input
                    type="text"
                    placeholder="Company Name / Website (If Any)"
                    className={inputBase}
                  />
                </FormField>

                <FormField icon={ChevronDown}>
                  <select
                    required
                    defaultValue=""
                    className={`${inputBase} appearance-none text-razo-gray`}
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
                </FormField>

                <FormField icon={MessageSquare} className="items-start">
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Us About Your Project / Message *"
                    className={`${inputBase} resize-none py-3`}
                  />
                </FormField>
              </div>
            </div>

            <div className="space-y-4 pt-1">
              <button
                type="submit"
                className="btn-3d group flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold text-white"
              >
                Submit Request
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-razo-gray sm:justify-between">
                <span className="flex items-center gap-1.5">
                  <Shield size={13} className="text-emerald-500" />
                  Your data is secure
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-razo-blue" />
                  Reply within 24 hours
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}

export default function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-[#e8f4fd] to-razo-blue/15 pt-28">
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="orb left-0 top-20 h-64 w-64 bg-razo-blue/20" />
        <div className="orb right-0 top-10 h-72 w-72 bg-sky-300/30" />

        <div className="relative mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/20 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-razo-blue shadow-sm backdrop-blur-sm">
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

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="flex justify-center lg:justify-start lg:pt-4">
              <ContactInfoPanel />
            </div>
            <BookSessionForm
              submitted={submitted}
              onSubmit={() => setSubmitted(true)}
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-white">
          <svg viewBox="0 0 1440 80" fill="currentColor" className="block w-full">
            <path d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

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
                      {office.city}
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
