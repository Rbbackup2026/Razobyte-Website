"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Phone,
  MessageCircle,
  Users,
  Eye,
  GitBranch,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import ProductCTA from "@/components/products/ProductCTA";
import { homeRoutes } from "@/lib/routes";
import ProductFAQ from "@/components/products/ProductFAQ";
import { crmFaqs } from "@/lib/productFaqs";

const leadFeatures = [
  "Capture leads from multiple sources into a single dashboard.",
  "Automatically assign enquiries based on predefined business rules.",
  "Track every stage from initial enquiry to successful conversion.",
  "Schedule follow-ups with reminders and activity notifications.",
  "Maintain a complete timeline of calls, meetings, emails, and notes.",
  "Prevent duplicate records with intelligent validation.",
  "Measure conversion rates across campaigns, regions, and sales teams.",
];

const channels = [
  {
    icon: Phone,
    title: "Cloud Telephony Integration",
    description:
      "Connect your preferred telephony provider to enable click-to-call functionality, automatic call logging, and access to customer information during live conversations.",
    image: "/images/crm/communications.jpg",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Integration",
    description:
      "Integrate approved WhatsApp Business API providers to send messages, quotations, invoices, reminders, and customer updates directly from the CRM while maintaining a complete conversation history.",
    image: "/images/crm/lead-management.jpg",
  },
  {
    icon: Users,
    title: "Internal Team Collaboration",
    description:
      "Built-in team chat enables departments to coordinate customer requests, share files, and discuss opportunities without relying on external messaging applications.",
    image: "/images/crm/team.jpg",
  },
];

const challenges = [
  {
    icon: GitBranch,
    title: "Multiple Communication Channels",
    description:
      "Phone calls, WhatsApp, emails, and meetings often exist in separate systems, making customer history difficult to track.",
  },
  {
    icon: Users,
    title: "Disconnected Teams",
    description:
      "Sales, support, and management frequently work with different information, leading to inconsistent customer experiences.",
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description:
      "Without real-time reporting, management lacks accurate insights into pipeline health, team productivity, and revenue forecasting.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Business Discovery",
    description:
      "We begin by understanding your sales process, communication channels, approval workflows, and reporting requirements.",
  },
  {
    step: "02",
    title: "Solution Configuration",
    description:
      "The CRM is configured around your business processes, user roles, and operational structure.",
  },
  {
    step: "03",
    title: "System Integration",
    description:
      "We connect telephony, WhatsApp, ERP modules, APIs, and third-party applications to create a unified ecosystem.",
  },
  {
    step: "04",
    title: "Training & Go-Live",
    description:
      "Users receive onboarding and hands-on training, followed by deployment and continuous technical support.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CRMPageContent() {
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
              Custom CRM Development
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Intelligent Lead Management That Keeps Every Opportunity Moving
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Centralize your entire lead lifecycle — from first enquiry to
              closed deal — with a CRM built around how your team actually sells.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Lead Pipeline", "WhatsApp", "Cloud Telephony", "Team Chat"].map(
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
              Request a Demo
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* CRM dashboard preview — no stock image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden rounded-2xl border border-white/10 p-5 shadow-2xl shadow-razo-blue/10 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-medium text-white/40">Sales Pipeline</p>
                  <p className="mt-0.5 text-lg font-bold text-white">Live Overview</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  <TrendingUp size={12} />
                  +24% this month
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { label: "Active Leads", value: "148", icon: Users },
                  { label: "In Pipeline", value: "₹2.4Cr", icon: BarChart3 },
                  { label: "Win Rate", value: "68%", icon: TrendingUp },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/8 bg-white/5 p-3"
                    >
                      <Icon size={14} className="text-razo-blue-light" />
                      <p className="mt-2 text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-white/45">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-medium text-white/40">Pipeline stages</p>
                {[
                  { stage: "New Enquiry", count: 42, pct: 85 },
                  { stage: "Qualified", count: 28, pct: 65 },
                  { stage: "Proposal Sent", count: 16, pct: 45 },
                  { stage: "Closed Won", count: 9, pct: 30 },
                ].map((row) => (
                  <div key={row.stage} className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs text-white/60">
                      {row.stage}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-razo-blue to-razo-blue-light"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-xs font-semibold text-white/70">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-razo-blue/20 bg-razo-blue/5 px-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-razo-blue text-white">
                  <MessageCircle size={14} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-white">
                    WhatsApp follow-up scheduled
                  </p>
                  <p className="text-[10px] text-white/45">Acme Corp · 2 min ago</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-razo-blue/20 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Lead Management intro */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative order-2 lg:order-1"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/crm/lead-management.jpg"
                alt="Lead management — placeholder"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <p className="text-base leading-relaxed text-white/65">
              A growing business generates leads from multiple channels—website
              enquiries, marketing campaigns, referrals, social media, and direct
              sales outreach. Without a structured system, valuable opportunities
              can be overlooked, follow-ups may be delayed, and teams often lose
              visibility into the sales pipeline.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Our CRM centralizes the entire lead lifecycle, ensuring that every
              enquiry is captured, assigned, tracked, and nurtured through clearly
              defined stages. Sales representatives always know what action to take
              next, while managers gain complete visibility into team performance
              and pipeline health.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Instead of relying on spreadsheets or disconnected applications,
              every interaction becomes part of a unified customer record,
              allowing your organization to maintain consistency throughout the
              sales journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Module offers */}
      <section className="border-y border-white/5 bg-razo-dark/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            What the Lead Management Module Offers
          </motion.h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-3">
              {leadFeatures.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-white/75 sm:text-base"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-razo-blue"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-2xl border-l-4 border-l-razo-blue p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-razo-blue-light">
                Business Impact
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Sales teams spend less time managing data and more time engaging
                with qualified prospects, resulting in improved response times and
                higher conversion rates.
              </p>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Unified conversations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            One Platform for Every Customer Conversation
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Customers no longer communicate through a single channel. A conversation
            may begin with a phone call, continue on WhatsApp, move to email, and
            conclude with an online meeting. Managing these interactions across
            separate applications creates fragmented customer records and makes
            collaboration difficult.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            Our CRM consolidates every communication channel into one centralized
            workspace, allowing teams to access customer history without switching
            between multiple tools.
          </p>
        </motion.div>

        <h3 className="mt-14 text-center text-lg font-bold text-razo-blue-light">
          Integrated Communication Channels
        </h3>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card group overflow-hidden rounded-2xl transition-colors hover:border-razo-blue/30"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={channel.image}
                    alt={`${channel.title} — placeholder`}
                    fill
                    className="object-cover opacity-60 transition-opacity group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-razo-black/90 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-razo-blue text-white">
                    <Icon size={20} />
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white">{channel.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {channel.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 rounded-2xl border border-razo-blue/20 bg-razo-blue/5 px-6 py-8 text-center sm:px-10"
        >
          <h3 className="text-lg font-bold text-white">Why It Matters</h3>
          <p className="mx-auto mt-3 max-w-2xl text-base italic text-white/70">
            Instead of asking, &ldquo;Who spoke with this customer last?&rdquo; or
            &ldquo;Where is the latest quotation?&rdquo;, your team can instantly
            access a complete history of every interaction from a single customer
            profile.
          </p>
        </motion.div>
      </section>

      {/* Business challenges */}
      <section className="border-t border-white/5 bg-razo-surface py-20 text-razo-dark lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="text-2xl font-bold sm:text-3xl">
                Business Challenges{" "}
                <span className="text-razo-blue">We Solve</span>
              </h2>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-6xl font-bold leading-none text-razo-blue">
                  72%
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-razo-gray">
                of sales delays occur because follow-ups are missed or not
                documented.
              </p>
              <div className="relative mt-8 hidden overflow-hidden rounded-xl lg:block">
                <Image
                  src="/images/crm/challenges.jpg"
                  alt="Business challenges — placeholder"
                  width={280}
                  height={200}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
              {challenges.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-razo-blue/10 text-razo-blue">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 font-bold text-razo-dark">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-razo-gray">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation approach */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Our CRM Implementation Approach
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-razo-blue/50 via-razo-blue/20 to-transparent sm:block" />

          {implementationSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pb-10 last:pb-0"
            >
              <div className="flex gap-6 sm:gap-8">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-razo-blue bg-razo-black text-sm font-bold text-razo-blue-light shadow-lg shadow-razo-blue/20">
                  {item.step}
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-razo-blue/25">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
              {i < implementationSteps.length - 1 && (
                <div className="ml-6 mt-2 flex justify-center py-1 sm:ml-6">
                  <ArrowDown size={18} className="text-razo-blue/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <ProductFAQ
        faqs={crmFaqs}
        title="CRM Questions, Answered"
        description="Common questions about custom CRM development, integrations, implementation timelines, and ongoing support."
      />

      <ProductCTA
        title="Ready to unify your sales pipeline and customer conversations?"
        description="Book a free consultation, call our team, or start a WhatsApp chat — whichever works best for you."
      />
    </main>
  );
}
