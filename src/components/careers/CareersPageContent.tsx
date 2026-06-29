"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Megaphone,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import {
  careersStats,
  whyJoinRazobyte,
  innovationPillars,
  companyValues,
  jobOpenings,
} from "@/lib/careers";
import { homeRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export default function CareersPageContent() {
  return (
    <main className="bg-white">
      {/* Hero banner — compact, full width */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-razo-blue via-razo-blue-dark to-[#0d3d7a] pt-28">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="orb -right-16 top-6 h-48 w-48 bg-white/10" />
        <div className="orb -left-20 bottom-0 h-40 w-40 bg-razo-blue-light/15" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
              Take the next step in your career
            </span>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
              WE ARE HIR
              <span className="inline-flex align-middle">
                <Megaphone
                  size={32}
                  className="mx-0.5 text-amber-300 sm:size-10"
                  strokeWidth={2.2}
                />
              </span>
              NG
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
              Join Razobyte — an IT & digital solutions company where ambitious
              talent builds products that matter for clients worldwide.
            </p>
            <Link
              href={homeRoutes.contact}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-razo-blue shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="Razobyte team hiring"
                width={480}
                height={280}
                className="h-44 w-full object-cover sm:h-48 lg:h-52"
                priority
              />
            </div>
            <div className="absolute bottom-3 left-3 rounded-xl border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-sm">
              <p className="flex items-center gap-1.5 text-xs font-bold text-white">
                <Megaphone size={14} className="text-amber-300" />
                We&apos;re Hiring!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-4 sm:px-6 lg:grid-cols-4 lg:gap-3 lg:py-5">
            {careersStats.map((stat, i) => {
              const gradients = [
                "from-sky-400/90 to-razo-blue",
                "from-violet-500/90 to-indigo-700",
                "from-slate-500/90 to-slate-700",
                "from-razo-blue to-razo-blue-dark",
              ];
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`rounded-xl bg-gradient-to-br ${gradients[i]} px-3 py-3 text-center text-white shadow-md ring-1 ring-white/15 sm:px-4 sm:py-3.5`}
                >
                  <p className="text-xl font-bold sm:text-2xl">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/90 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job openings — directly below banner */}
      <section className="bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-razo-blue">
              Join Our Team
            </span>
            <h2 className="mt-2 text-2xl font-bold text-razo-dark sm:text-3xl">
              Current Job Openings
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-razo-gray sm:text-base">
              Ready to make an impact? Here are some of the roles we&apos;re
              hiring for
            </p>
          </motion.div>

          <div className="mt-8 space-y-3">
            {jobOpenings.map((job, i) => (
              <motion.article
                key={job.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link
                  href={homeRoutes.contact}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-razo-blue/30 hover:shadow-md sm:p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-razo-blue/10 text-razo-blue transition-colors group-hover:bg-razo-blue group-hover:text-white">
                      <Briefcase size={22} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-razo-dark group-hover:text-razo-blue">
                        {job.title}
                      </h3>
                      <p className="mt-1 flex flex-wrap items-center gap-3 text-sm text-razo-gray">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={14} className="text-razo-blue" />
                          {job.location}
                        </span>
                        <span className="rounded-full bg-razo-blue/10 px-2.5 py-0.5 text-xs font-semibold text-razo-blue">
                          {job.type}
                        </span>
                        <span className="text-xs text-razo-gray">
                          {job.department}
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue transition-all group-hover:bg-razo-blue group-hover:text-white">
                    <ChevronRight size={20} />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Shape the future */}
      <section className="border-t border-gray-100 bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-razo-dark sm:text-4xl">
              Shape the Future with Us
            </h2>
            <p className="mt-5 text-base leading-relaxed text-razo-gray lg:text-lg">
              We&apos;re not just building technology; we&apos;re shaping the
              future. Whether you&apos;re an experienced developer, a creative
              marketer, or someone just starting your career, there&apos;s a
              place for you here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why join */}
      <section className="bg-white py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-razo-dark sm:text-4xl">
              Why Join Razobyte?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-razo-gray">
              Luck may open doors, but hard work builds the path forward
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whyJoinRazobyte.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`tilt-card rounded-3xl border border-white bg-gradient-to-br ${item.bg} p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8`}
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md ${item.accent}`}
                  >
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-razo-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-razo-gray">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-gray-100 bg-razo-surface py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-razo-dark sm:text-4xl">
              How We Work
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-razo-gray">
              We believe the journey is just as important as the destination.
              Here&apos;s how we do things
            </p>
          </motion.div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
                <Image
                  src="/images/cta-team.jpg"
                  alt="Razobyte collaborative team"
                  width={600}
                  height={420}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 rounded-2xl border border-razo-blue/20 bg-white px-4 py-3 shadow-xl sm:-right-6">
                <p className="text-xs font-bold uppercase tracking-wider text-razo-blue">
                  Innovation First
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card-light rounded-3xl p-6 sm:p-8">
                <p className="flex items-center gap-2 text-lg font-bold text-razo-dark">
                  <Sparkles size={20} className="text-razo-blue" />
                  Innovation First
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {innovationPillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded-full border border-razo-blue/15 bg-razo-blue/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-razo-blue"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-relaxed text-razo-gray">
                  From brainstorm to deployment, every idea gets room to grow.
                  We encourage experimentation, rapid prototyping, and
                  solutions that push boundaries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-razo-black py-14 lg:py-20">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-razo-blue/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              We live by a set of values that guide everything we do
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="glass-card tilt-card rounded-3xl p-6 text-center"
                >
                  <span
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ring-4 ${value.ring}`}
                  >
                    <Icon size={26} className={value.color} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-razo-black py-12 lg:py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <motion.p
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center text-2xl font-bold text-white sm:text-left sm:text-3xl"
          >
            Success is earned not given!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href={homeRoutes.contact}
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-razo-blue shadow-xl transition-transform hover:-translate-y-0.5"
            >
              Apply Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
