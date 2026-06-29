"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Tags,
} from "lucide-react";
import {
  pricingCategories,
  seoPricingRows,
  planMeta,
  allPlansIncluded,
  planRecommendations,
  addOnServices,
  pricingFaqs,
  pricingStats,
  otherCategoryHighlights,
  type PricingCategoryId,
  type CellValue,
  type PlanId,
} from "@/lib/pricing";
import { homeRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05 },
  }),
};

const planIds: PlanId[] = ["silver", "gold", "diamond", "platinum"];

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
        <Check size={14} strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <X size={14} strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="text-sm font-medium text-razo-dark">{value}</span>
  );
}

export default function PricingPageContent() {
  const [activeTab, setActiveTab] = useState<PricingCategoryId>("seo");
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const otherCategory =
    activeTab !== "seo" ? otherCategoryHighlights[activeTab] : null;

  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-razo-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-razo-blue/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-22">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/20 bg-razo-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-razo-blue">
              <Tags size={13} />
              Razobyte Pricing
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.6rem]">
              Choose a pricing plan that{" "}
              <span className="gradient-text-blue">fits your goals</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-razo-gray lg:text-lg">
              Whether you&apos;re just starting out or scaling fast, Razobyte has
              a solution designed for you — transparent tiers, clear features,
              and room to grow.
            </p>
            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
            >
              Book Free Consultation
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="tilt-card relative overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-razo-blue/20">
              <Image
                src="/images/cta-team.jpg"
                alt="Razobyte pricing consultation"
                width={400}
                height={400}
                className="h-72 w-72 object-cover sm:h-80 sm:w-80"
                priority
              />
            </div>
            <div className="glass-card-light absolute -bottom-4 left-4 rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-lg font-bold text-razo-blue">4 Tiers</p>
              <p className="text-xs text-razo-gray">Silver to Platinum</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category tabs + pricing */}
      <section className="bg-razo-surface py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
              Razobyte Pricing
            </h2>
            <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-razo-blue to-transparent" />
          </div>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold transition-all sm:px-5 sm:text-sm ${
                  activeTab === cat.id
                    ? "bg-razo-blue text-white shadow-lg shadow-razo-blue/30"
                    : "border border-razo-blue/15 bg-white text-razo-gray hover:border-razo-blue/40 hover:text-razo-blue"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "seo" ? (
              <motion.div
                key="seo"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-10"
              >
                {/* Plan cards - mobile summary */}
                <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:hidden">
                  {planIds.map((id) => {
                    const meta = planMeta[id];
                    const priceRow = seoPricingRows[0];
                    return (
                      <div
                        key={id}
                        className={`tilt-card relative rounded-2xl border bg-white p-5 shadow-lg ${
                          id === "gold"
                            ? "border-razo-blue/40 ring-2 ring-razo-blue/20"
                            : "border-gray-100"
                        }`}
                      >
                        {id === "gold" && (
                          <span className="absolute -right-2 -top-2 rotate-12 rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                            Most Popular
                          </span>
                        )}
                        <p className={`text-lg font-bold ${meta.textColor}`}>
                          {meta.name}
                        </p>
                        <p className="mt-2 text-2xl font-bold text-razo-blue">
                          {priceRow[id] as string}
                        </p>
                        <p className="mt-1 text-xs text-razo-gray">/ month</p>
                        <Link
                          href={homeRoutes.contact}
                          className="mt-4 flex w-full items-center justify-center rounded-full bg-razo-blue py-2.5 text-sm font-semibold text-white"
                        >
                          Get Started
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {/* Comparison table */}
                <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-razo-blue/5">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gradient-to-r from-razo-blue/5 to-transparent">
                          <th className="px-5 py-4 text-sm font-semibold text-razo-dark">
                            Features
                          </th>
                          {planIds.map((id) => {
                            const meta = planMeta[id];
                            return (
                              <th
                                key={id}
                                className={`relative px-4 py-4 text-center ${
                                  id === "gold" ? "bg-razo-blue/[0.06]" : ""
                                }`}
                              >
                                {id === "gold" && (
                                  <span className="absolute -right-1 top-0 rotate-45 bg-red-500 px-6 py-0.5 text-[9px] font-bold uppercase text-white">
                                    Popular
                                  </span>
                                )}
                                <span
                                  className={`text-base font-bold ${meta.textColor}`}
                                >
                                  {meta.name}
                                </span>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {seoPricingRows.map((row, ri) => (
                          <tr
                            key={row.feature}
                            className={`border-b border-gray-50 transition-colors hover:bg-razo-blue/[0.02] ${
                              ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                            }`}
                          >
                            <td className="px-5 py-3.5 text-sm font-medium text-razo-dark">
                              {row.feature}
                            </td>
                            {planIds.map((id) => (
                              <td
                                key={id}
                                className={`px-4 py-3.5 text-center ${
                                  id === "gold"
                                    ? "bg-razo-blue/[0.03]"
                                    : ""
                                } ${row.highlight ? "font-bold" : ""}`}
                              >
                                <div className="flex justify-center">
                                  <CellContent value={row[id]} />
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                          <td className="px-5 py-4" />
                          {planIds.map((id) => (
                            <td key={id} className="px-4 py-4 text-center">
                              <Link
                                href={homeRoutes.contact}
                                className="inline-flex rounded-full bg-razo-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-razo-blue/25 transition-transform hover:-translate-y-0.5 hover:bg-razo-blue-dark"
                              >
                                Get Started
                              </Link>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mt-10"
              >
                {otherCategory && (
                  <div className="glass-card-light mx-auto max-w-3xl rounded-3xl p-8 text-center shadow-xl">
                    <h3 className="text-2xl font-bold text-razo-dark">
                      {otherCategory.title}
                    </h3>
                    <p className="mt-3 text-razo-gray">
                      {otherCategory.description}
                    </p>
                    <ul className="mt-6 grid gap-2 text-left sm:grid-cols-2">
                      {otherCategory.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-razo-dark"
                        >
                          <Check
                            size={16}
                            className="shrink-0 text-razo-blue"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={homeRoutes.contact}
                      className="btn-3d mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
                    >
                      Get Custom Quote
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-gray-100 bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">
              What&apos;s Included in All Plans?
            </h2>
            <ul className="mt-8 space-y-4">
              {allPlansIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue">
                    <Check size={16} />
                  </span>
                  <span className="text-sm leading-relaxed text-razo-gray">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-2xl">
              <Image
                src="/images/team.jpg"
                alt="Razobyte team"
                width={560}
                height={380}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-4 hidden overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
              <Image
                src="/images/service-marketing.jpg"
                alt="Digital marketing"
                width={200}
                height={140}
                className="h-28 w-40 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Which plan */}
      <section className="relative overflow-hidden bg-razo-black py-16 lg:py-22">
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="orb -left-32 top-0 h-80 w-80 bg-razo-blue/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Which Plan Is Right For You?
          </h2>
          <div className="mx-auto mt-3 h-px w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {planRecommendations.map((plan, i) => (
              <motion.div
                key={plan.tier}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card tilt-card rounded-2xl p-6 text-center transition-transform hover:-translate-y-1"
              >
                <p className={`text-lg font-bold ${plan.color}`}>{plan.tier}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-razo-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-razo-dark sm:text-3xl">
            Add-On Services{" "}
            <span className="text-base font-normal text-razo-gray">
              (On Demand)
            </span>
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-razo-blue to-transparent" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {addOnServices.map((addon, i) => (
              <motion.div
                key={addon.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="tilt-card group rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-all hover:-translate-y-2 hover:border-razo-blue/25 hover:shadow-xl"
              >
                <span className="text-3xl">{addon.icon}</span>
                <div className="mt-1 h-1 w-10 rounded-full bg-razo-blue/80 transition-all group-hover:w-16" />
                <h3 className="mt-4 text-sm font-bold text-razo-dark">
                  {addon.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-razo-gray">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-razo-dark sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-px w-24 bg-gradient-to-r from-transparent via-razo-blue to-transparent" />

          <div className="mt-10 space-y-3">
            {pricingFaqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    open
                      ? "border-razo-blue/30 bg-razo-blue shadow-lg shadow-razo-blue/20"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold sm:text-base ${
                      open ? "text-white" : "text-razo-dark"
                    }`}
                  >
                    {faq.question}
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${open ? "rotate-180 text-white" : "text-razo-blue"}`}
                    />
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-white/20 px-5 py-4 text-sm leading-relaxed text-white/90">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-razo-surface py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 px-4 sm:px-6 lg:grid-cols-4">
          {pricingStats.map((stat, i) => {
            const colors = [
              "from-rose-800 to-rose-900",
              "from-violet-700 to-violet-900",
              "from-orange-500 to-red-600",
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
                className={`tilt-card rounded-2xl bg-gradient-to-br ${colors[i]} p-5 text-center text-white shadow-xl`}
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs font-medium text-white/80">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-razo-black py-16 lg:py-20">
        <div className="orb right-0 top-0 h-64 w-64 bg-razo-blue/20" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:flex-row sm:px-6">
          <div className="relative shrink-0">
            <Image
              src="/images/hero.jpg"
              alt="Consultation"
              width={280}
              height={320}
              className="rounded-2xl object-cover shadow-2xl"
            />
            <span className="absolute -right-4 -top-4 text-5xl">🚀</span>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Choose the plan that fits today —{" "}
              <span className="gradient-text">grow without limits</span> tomorrow.
            </h2>
            <Link
              href={homeRoutes.contact}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-razo-dark transition-transform hover:-translate-y-0.5"
            >
              Need Help? Let&apos;s Connect
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
