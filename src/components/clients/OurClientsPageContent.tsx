"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Sparkles,
  CheckCircle2,
  Star,
} from "lucide-react";
import { clients } from "@/lib/data";
import {
  heroStats,
  trustStatistics,
  whyChooseRazobyte,
  testimonials,
  featuredProjects,
  industries,
  successProcess,
  retentionReasons,
} from "@/lib/ourClients";
import { homeRoutes, siteRoutes } from "@/lib/routes";

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
    <span className="flex gap-0.5 text-amber-400" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </span>
  );
}

function ClientLogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="tilt-card mx-2.5 flex h-[76px] w-[168px] shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white px-4 shadow-md shadow-razo-blue/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-razo-blue/25 hover:shadow-xl hover:shadow-razo-blue/15 sm:h-[84px] sm:w-[184px]">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={140}
        height={56}
        className="h-auto w-full max-w-[128px] object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
      />
    </div>
  );
}

function LogoMarquee({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...clients, ...clients];
  return (
    <div className="marquee-mask relative overflow-hidden py-1">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
      >
        {doubled.map((client, i) => (
          <ClientLogoCard key={`${client.name}-${i}`} {...client} />
        ))}
      </div>
    </div>
  );
}

export default function OurClientsPageContent() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-razo-black">
        <div className="orb -right-24 top-0 h-[28rem] w-[28rem] bg-razo-blue/25" />
        <div className="orb -left-32 bottom-0 h-80 w-80 bg-razo-blue/10" />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/30 bg-razo-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-razo-blue-light">
              <Globe2 size={13} />
              Trusted by Businesses Worldwide
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
              Building Long-Term Partnerships Through{" "}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg">
              At Razobyte, we don&apos;t just deliver software—we build lasting
              relationships. From ambitious startups to established enterprises,
              our clients trust us to transform ideas into high-performance
              digital solutions that drive measurable business growth.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {heroStats.map((stat) => (
                <span
                  key={stat.label}
                  className="glass-card rounded-full px-4 py-2 text-xs font-semibold text-white/80 sm:text-sm"
                >
                  <span className="text-razo-blue-light">{stat.value}</span>{" "}
                  {stat.label}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={siteRoutes.caseStudies}
                className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              >
                View Success Stories
                <ArrowRight size={16} />
              </Link>
              <Link
                href={homeRoutes.contact}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-razo-blue hover:bg-razo-blue/10"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative perspective-[1200px]"
          >
            <div className="tilt-card overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-razo-blue/20">
              <Image
                src="/images/clients-bg.jpg"
                alt="Razobyte client partnerships"
                width={680}
                height={480}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-razo-black/80 via-transparent to-transparent" />
            </div>
            <div className="glass-card absolute -bottom-6 -left-4 rounded-2xl px-6 py-4 sm:-left-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <Sparkles size={16} className="text-razo-blue-light" />
                250+ Global Partners
              </p>
              <p className="mt-1 text-xs text-white/50">
                Startups · SMEs · Enterprises
              </p>
            </div>
            <div className="glass-card absolute -right-3 top-8 rounded-2xl px-5 py-3 sm:-right-6">
              <p className="text-2xl font-bold text-razo-blue-light">98%</p>
              <p className="text-xs text-white/55">Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust statistics */}
      <section className="relative border-b border-gray-100 bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(43,141,239,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Trust Statistics
            </span>
            <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
              Delivering Results That{" "}
              <span className="gradient-text-blue">Matter</span>
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustStatistics.map((stat, i) => (
              <motion.div
                key={stat.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card-light group tilt-card rounded-3xl p-6 text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <p className="text-4xl font-bold text-razo-blue transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </p>
                <h3 className="mt-3 text-sm font-semibold text-razo-dark">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-razo-gray">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-razo-surface py-16 lg:py-24">
        <div className="orb -left-40 top-20 h-72 w-72 bg-razo-blue/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Why Companies Choose Razobyte
            </span>
            <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
              More Than a Technology Partner
            </h2>
            <p className="mt-4 text-razo-gray">
              Every business is unique, and so are its challenges. We combine
              technical expertise, creative thinking, and strategic planning to
              deliver solutions that create measurable impact.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseRazobyte.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card group rounded-3xl border border-white bg-white p-6 shadow-lg shadow-razo-blue/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-razo-blue/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-razo-blue to-razo-blue-dark text-white shadow-lg shadow-razo-blue/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-razo-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-razo-gray">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="relative overflow-hidden border-y border-gray-100 bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Our Valued Clients
            </span>
            <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
              Trusted by Growing Businesses
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-razo-gray">
              Over the years, we&apos;ve partnered with startups, SMEs,
              enterprises and organizations across multiple industries. Every
              collaboration reflects our commitment to quality, innovation and
              customer success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-12 space-y-5"
          >
            <LogoMarquee />
            <LogoMarquee reverse />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-razo-black py-16 lg:py-24">
        <div className="orb right-0 top-1/4 h-64 w-64 bg-razo-blue/20" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue-light">
              What Our Clients Say
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Real Experiences. Real Results.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <motion.article
                key={item.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card tilt-card flex flex-col rounded-3xl p-6 lg:p-7"
              >
                <Stars count={item.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/70">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-razo-blue/40"
                  />
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-white/50">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="relative bg-razo-surface py-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Featured Client Projects
            </span>
            <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
              Delivering Digital Excellence Across Industries
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <motion.article
                key={project.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="tilt-card group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg shadow-razo-blue/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-razo-blue/15"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-razo-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-razo-blue/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {project.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-razo-dark">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-razo-gray">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y border-gray-100 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Industries We Serve
            </span>
            <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
              Sector Expertise Across the Globe
            </h2>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.span
                  key={industry.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="tilt-card inline-flex items-center gap-2 rounded-2xl border border-razo-blue/10 bg-razo-surface px-4 py-3 text-sm font-medium text-razo-dark shadow-sm transition-all hover:-translate-y-1 hover:border-razo-blue/30 hover:bg-white hover:shadow-md"
                >
                  <Icon size={16} className="text-razo-blue" />
                  {industry.name}
                </motion.span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success process */}
      <section className="relative overflow-hidden bg-razo-black py-16 lg:py-24">
        <div className="orb -left-32 bottom-0 h-80 w-80 bg-razo-blue/15" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue-light">
              Our Success Process
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              From Idea to Impact
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {successProcess.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card tilt-card relative rounded-3xl p-5 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-razo-blue to-razo-blue-dark text-sm font-bold text-white shadow-lg shadow-razo-blue/30">
                  {step.step}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/55">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
                Why Our Clients Stay With Us
              </span>
              <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
                Partnerships Built on{" "}
                <span className="gradient-text-blue">Trust & Results</span>
              </h2>
              <p className="mt-4 text-razo-gray">
                Our clients return because we deliver consistently — with
                transparency, quality, and a team that treats every project as
                their own.
              </p>
              <div className="tilt-card mt-8 overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
                <Image
                  src="/images/team.jpg"
                  alt="Razobyte dedicated team"
                  width={600}
                  height={380}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {retentionReasons.map((reason, i) => (
                <div
                  key={reason}
                  className="glass-card-light flex items-start gap-3 rounded-2xl px-4 py-3.5 transition-transform hover:-translate-y-0.5"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-razo-blue"
                  />
                  <span className="text-sm font-medium text-razo-dark">
                    {reason}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-razo-black py-16 lg:py-24">
        <div className="orb left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-razo-blue/20" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue-light">
              Ready to Build Something Amazing?
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Let&apos;s Turn Your Vision Into Reality
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Whether you&apos;re launching a startup, scaling an enterprise, or
              modernizing your digital infrastructure, Razobyte is here to help.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href={homeRoutes.contact}
                className="btn-3d inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              >
                Let&apos;s Build Together
                <ArrowRight size={16} />
              </Link>
              <Link
                href={homeRoutes.contact}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-razo-blue hover:bg-razo-blue/10"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
