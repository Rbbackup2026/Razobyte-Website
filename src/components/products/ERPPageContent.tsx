"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  BarChart3,
  Package,
  Wallet,
  Users,
  Sparkles,
  Link2,
} from "lucide-react";
import ProductCTA from "@/components/products/ProductCTA";
import ProductFAQ from "@/components/products/ProductFAQ";
import { erpFaqs } from "@/lib/productFaqs";
import { homeRoutes } from "@/lib/routes";
import {
  erpPlatforms,
  erpConsultingServices,
  erpTechnologies,
} from "@/lib/erp";

const erpModules = [
  { icon: Wallet, label: "Finance", value: "₹1.2Cr", trend: "Reconciled" },
  { icon: Package, label: "Inventory", value: "3,840", trend: "SKUs live" },
  { icon: Users, label: "HR & Payroll", value: "248", trend: "Employees" },
  { icon: BarChart3, label: "Reporting", value: "Real-time", trend: "Dashboards" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ERPPageContent() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 bg-razo-black">
        <div className="orb -right-20 top-0 h-80 w-80 bg-razo-blue/20" />
        <div className="orb -left-32 bottom-0 h-64 w-64 bg-razo-blue/10" />
        <div className="absolute inset-0 grid-pattern opacity-25" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/30 bg-razo-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-razo-blue-light">
              ERP Solutions
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Experience Across Leading ERP Platforms
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Every organization has different operational requirements, existing
              technology investments, and long-term digital transformation goals.
              While ERPNext serves as our preferred platform, our experience extends
              across several widely adopted ERP ecosystems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Our consultants recommend solutions based on business objectives —
              not software preferences — covering customization, migration,
              integration, support, and process optimization.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["ERPNext", "Odoo", "Dynamics 365", "SAP", "NetSuite", "Zoho"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
            >
              Discuss Your ERP Needs
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* ERP module preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-white/10 p-5 shadow-2xl shadow-razo-blue/10 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Layers size={18} className="text-razo-blue-light" />
                  <div>
                    <p className="text-xs font-medium text-white/40">
                      Unified ERP Console
                    </p>
                    <p className="text-lg font-bold text-white">Operations Hub</p>
                  </div>
                </div>
                <span className="rounded-full bg-razo-blue/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-razo-blue-light">
                  ERPNext Primary
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {erpModules.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div
                      key={mod.label}
                      className="rounded-xl border border-white/8 bg-white/5 p-3.5"
                    >
                      <Icon size={16} className="text-razo-blue-light" />
                      <p className="mt-2 text-base font-bold text-white">
                        {mod.value}
                      </p>
                      <p className="text-[11px] font-medium text-white/50">
                        {mod.label}
                      </p>
                      <p className="mt-0.5 text-[10px] text-razo-blue-light/80">
                        {mod.trend}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-razo-blue/20 bg-razo-blue/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-razo-blue-light" />
                  <p className="text-xs font-semibold text-white">
                    Cross-platform integration ready
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-white/45">
                  Tally · Salesforce · Shopify · WooCommerce
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-razo-blue/20 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Platform experience cards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            ERP Platforms We Have Experience With
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55">
            Practical implementation experience across leading enterprise systems —
            enabling informed recommendations aligned with your operational reality.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {erpPlatforms.map((platform, i) => (
            <motion.article
              key={platform.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                platform.primary
                  ? "border-razo-blue/40 bg-gradient-to-br from-razo-blue/15 to-razo-blue/5 shadow-lg shadow-razo-blue/10"
                  : "border-white/10 bg-white/5 hover:border-razo-blue/25"
              }`}
            >
              {platform.primary && (
                <span className="absolute right-4 top-4 rounded-full bg-razo-blue px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Primary
                </span>
              )}
              <h3 className="pr-16 text-lg font-bold text-white">{platform.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {platform.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Consulting services */}
      <section className="border-y border-gray-100 bg-razo-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              End-to-End Delivery
            </span>
            <h2 className="mt-3 text-2xl font-bold text-razo-dark sm:text-3xl">
              Our ERP Consulting Services Include
            </h2>
          </motion.div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {erpConsultingServices.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm transition-shadow hover:shadow-md"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-razo-blue"
                />
                <span className="text-sm font-medium text-razo-dark">{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recommendation quote */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-24">
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass-card relative overflow-hidden rounded-2xl border-l-4 border-l-razo-blue p-8 sm:p-10"
        >
          <div className="orb -right-10 -top-10 h-40 w-40 bg-razo-blue/15" />
          <p className="relative text-sm font-semibold uppercase tracking-wider text-razo-blue-light">
            Technology Recommendation Based on Business Needs
          </p>
          <p className="relative mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Rather than promoting a single ERP platform, we evaluate your operational
            processes, scalability requirements, industry workflows, and future growth
            plans to recommend the solution best suited to your organization. Whether
            the requirement involves ERPNext, Odoo, Microsoft Dynamics 365, SAP
            Business One, Oracle NetSuite, or a hybrid ecosystem, our focus remains on
            delivering a solution that aligns with your business objectives.
          </p>
        </motion.blockquote>
      </section>

      {/* Technology logo grid */}
      <section className="border-t border-white/5 bg-razo-dark/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Platform Ecosystem
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              ERP Technology Expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-white/50 sm:text-base">
              Core ERP platforms and integration partners we work with to build
              connected, scalable enterprise systems.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {erpTechnologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all hover:border-razo-blue/30 hover:bg-white/8 hover:shadow-lg hover:shadow-razo-blue/10"
              >
                {tech.integration && (
                  <span className="absolute right-2 top-2 flex items-center gap-0.5 rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white/50">
                    <Link2 size={8} />
                    Int.
                  </span>
                )}
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 transition-transform group-hover:scale-110">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-lg object-contain"
                  />
                </div>
                <p className="text-xs font-semibold leading-tight text-white sm:text-sm">
                  {tech.name}
                </p>
                {tech.integration && (
                  <p className="mt-1 text-[10px] text-white/40">Integration</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ
        faqs={erpFaqs}
        title="ERP Questions, Answered"
        description="Common questions about platform selection, implementation, migration, integrations, and ongoing ERP support."
      />

      <ProductCTA
        title="Ready to find the right ERP for your organization?"
        description="Book a free consultation, call our team, or chat on WhatsApp — we'll help you evaluate platforms and plan your implementation."
      />
    </main>
  );
}
