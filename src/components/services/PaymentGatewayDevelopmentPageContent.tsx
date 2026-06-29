"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, CreditCard } from "lucide-react";
import ProductFAQ from "@/components/products/ProductFAQ";
import {
  PAY_INDIGO,
  PAY_GREEN,
  paymentHero,
  paymentHighlights,
  getPaymentStats,
  paymentIntro,
  paymentTrustPillars,
  paymentSolutions,
  paymentFlowStakeholders,
  paymentMethods,
  paymentFeatures,
  paymentServices,
  paymentGateways,
  paymentProcess,
  paymentIndustries,
  paymentRelated,
  paymentProjects,
  paymentBlogs,
  paymentFaqs,
} from "@/lib/paymentGatewayDevelopment";
import { clients } from "@/lib/data";
import { homeRoutes } from "@/lib/routes";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.04 },
  }),
};

function SecureCheckoutMockup() {
  const orbit = [
    { label: "Razorpay", icon: "₹", x: -105, y: -48, color: PAY_INDIGO },
    { label: "Stripe", icon: "S", x: 108, y: -52, color: "#635bff" },
    { label: "UPI", icon: "📱", x: -95, y: 58, color: PAY_GREEN },
    { label: "PayPal", icon: "P", x: 100, y: 55, color: "#003087" },
  ];

  return (
    <div className="relative mx-auto flex h-[380px] w-full max-w-md items-center justify-center sm:h-[420px]">
      <div className="absolute h-56 w-56 rounded-full border border-dashed sm:h-64 sm:w-64" style={{ borderColor: `${PAY_INDIGO}44` }} />
      <div className="absolute h-80 w-80 rounded-full border" style={{ borderColor: `${PAY_GREEN}22` }} />

      {orbit.map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.08, type: "spring" }}
          className="absolute z-20 flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-[11px] font-bold shadow-lg"
          style={{ color: item.color, borderColor: `${item.color}44`, transform: `translate(${item.x}px, ${item.y}px)` }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white" style={{ background: item.color }}>
            {item.icon}
          </span>
          {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: -8 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[260px] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:w-[280px]"
        style={{ boxShadow: `0 28px 70px ${PAY_INDIGO}44` }}
      >
        <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: `linear-gradient(90deg, ${PAY_INDIGO}, ${PAY_GREEN})` }}>
          <span className="flex items-center gap-1.5 text-[10px] font-bold">
            <ShieldCheck size={14} /> SECURE CHECKOUT
          </span>
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px]">PCI DSS</span>
        </div>

        <div className="space-y-2.5 bg-slate-50 p-4">
          <div className="flex items-center gap-2 rounded-lg border border-indigo-100 bg-white px-3 py-2">
            <CreditCard size={14} style={{ color: PAY_INDIGO }} />
            <div className="flex-1">
              <p className="text-[9px] text-razo-gray">Card Number</p>
              <p className="text-[11px] font-mono font-semibold text-razo-dark">•••• •••• •••• 4242</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-indigo-100 bg-white px-3 py-2">
              <p className="text-[9px] text-razo-gray">Expiry</p>
              <p className="text-[11px] font-semibold text-razo-dark">12/28</p>
            </div>
            <div className="rounded-lg border border-indigo-100 bg-white px-3 py-2">
              <p className="text-[9px] text-razo-gray">CVV</p>
              <p className="text-[11px] font-semibold text-razo-dark">•••</p>
            </div>
          </div>
          <motion.button
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-full rounded-lg py-2.5 text-[11px] font-bold text-white"
            style={{ background: `linear-gradient(90deg, ${PAY_GREEN}, #059669)` }}
          >
            Pay ₹2,499 Securely
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-3 border-t border-gray-100 bg-white px-3 py-2">
          {["🔒 SSL", "✓ 3DS", "🛡 Token"].map((badge) => (
            <span key={badge} className="text-[9px] font-semibold text-razo-gray">{badge}</span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -right-2 top-16 z-30 rounded-xl border-2 border-white bg-emerald-500 px-3 py-2 text-center shadow-xl sm:right-0"
      >
        <p className="text-[9px] font-bold text-white/80">STATUS</p>
        <p className="text-xs font-bold text-white">APPROVED ✓</p>
      </motion.div>

      <div className="orb absolute -left-6 bottom-8 h-28 w-28" style={{ background: `${PAY_INDIGO}25` }} />
      <div className="orb absolute right-0 top-8 h-24 w-24" style={{ background: `${PAY_GREEN}20` }} />
    </div>
  );
}

export default function PaymentGatewayDevelopmentPageContent() {
  const stats = getPaymentStats();

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden border-b border-gray-100 pt-28" style={{ background: "linear-gradient(160deg, #eef2ff, #ecfdf5 45%, white)" }}>
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest" style={{ borderColor: `${PAY_INDIGO}44`, background: `${PAY_INDIGO}10`, color: PAY_INDIGO }}>
              <ShieldCheck size={12} /> Payment Gateway Integration
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-razo-dark sm:text-4xl lg:text-[2.65rem]">{paymentHero.title}</h1>
            <p className="mt-3 text-lg font-semibold" style={{ color: PAY_GREEN }}>{paymentHero.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{paymentHero.description}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {paymentHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-razo-gray">
                  <CheckCircle2 size={16} style={{ color: PAY_GREEN }} className="shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link href={homeRoutes.contact} className="btn-3d mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white">
              Book Your Session <ArrowRight size={16} />
            </Link>
          </motion.div>
          <SecureCheckoutMockup />
        </div>
      </section>

      <section className="border-b border-gray-100" style={{ background: `linear-gradient(90deg, ${PAY_INDIGO}06, ${PAY_GREEN}06)` }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border border-gray-100 bg-white px-4 py-5 text-center shadow-sm">
              <p className="text-2xl font-bold sm:text-3xl" style={{ color: PAY_INDIGO }}>{stat.value}</p>
              <p className="mt-1 text-xs text-razo-gray">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-b border-gray-100 py-6">
        <div className="payment-scroll mx-auto flex max-w-5xl gap-4 overflow-x-auto px-4 pb-2">
          {clients.slice(0, 8).map((c) => (
            <div key={c.name} className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-3 shadow-sm">
              <Image src={c.logo} alt={c.name} width={80} height={32} className="max-h-8 w-auto object-contain opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/portfolio-fintech.jpg" alt="Secure digital payments" width={600} height={420} className="h-64 w-full object-cover sm:h-80" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Experience Seamless Digital Transactions</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">{paymentIntro}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {paymentTrustPillars.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                    <Icon size={18} style={{ color: PAY_INDIGO }} />
                    <h3 className="mt-2 text-xs font-bold text-razo-dark">{item.title}</h3>
                    <p className="mt-1 text-[11px] text-razo-gray">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Payment Gateway Solutions</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-razo-gray">End-to-end design, development, and support for every payment touchpoint.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paymentSolutions.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="tilt-card group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${PAY_INDIGO}, ${PAY_GREEN})` }}>
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-razo-dark">{item.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "linear-gradient(160deg, #f8fafc, #eef2ff)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-razo-dark sm:text-3xl">How Does It Function?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-razo-gray">Every online payment flows through a secure ecosystem of stakeholders.</p>
          <div className="relative mx-auto flex h-[340px] max-w-lg items-center justify-center sm:h-[380px]">
            <div className="absolute h-64 w-64 rounded-full border-2 border-dashed border-indigo-200 sm:h-72 sm:w-72" />
            {paymentFlowStakeholders.map((node, i) => {
              const Icon = node.icon;
              const angle = (i / paymentFlowStakeholders.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="absolute z-10 flex flex-col items-center"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-white shadow-lg" style={{ background: node.color }}>
                    <Icon size={18} />
                  </span>
                  <span className="mt-1.5 max-w-[90px] text-center text-[10px] font-bold text-razo-dark">{node.label}</span>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-20 flex h-28 w-28 flex-col items-center justify-center rounded-2xl border-4 border-white bg-white text-center shadow-2xl sm:h-32 sm:w-32"
              style={{ boxShadow: `0 20px 50px ${PAY_INDIGO}33` }}
            >
              <ShieldCheck size={28} style={{ color: PAY_GREEN }} />
              <p className="mt-1 text-[10px] font-bold text-razo-dark">PAYMENT</p>
              <p className="text-[9px] font-semibold" style={{ color: PAY_GREEN }}>APPROVED</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">Payment Gateway UI/UX Solutions</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {paymentMethods.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${PAY_INDIGO}33` }}>
                    <Icon size={22} className="text-indigo-300" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/55">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark sm:text-3xl">Key Features of Our Payment Solutions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paymentFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="group rounded-2xl p-5 text-white shadow-lg transition hover:-translate-y-1"
                  style={{ background: `linear-gradient(135deg, ${PAY_INDIGO}, #4f46e5)`, borderRadius: "1.25rem 1.25rem 1.25rem 2.5rem" }}>
                  <Icon size={24} className="text-white/90 transition group-hover:scale-110" />
                  <h3 className="mt-4 text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs text-white/75">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Payment Integration Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paymentServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <Icon size={22} style={{ color: PAY_INDIGO }} />
                  <h3 className="mt-3 text-sm font-bold leading-snug text-razo-dark">{svc.title}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${PAY_INDIGO}, #4f46e5)` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">Supported Payment Gateways</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/75">We integrate with leading global and India-specific payment providers.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {paymentGateways.map((g, i) => (
              <motion.div key={g.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card flex flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg">
                <Image src={g.icon} alt={g.name} width={32} height={32} className="h-8 w-8 object-contain" />
                <span className="mt-2 text-xs font-bold text-razo-dark">{g.name}</span>
                <span className="text-[10px] font-semibold" style={{ color: PAY_GREEN }}>{g.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-razo-dark sm:text-3xl">Let&apos;s Talk — Take the First Step</h2>
            <p className="mt-4 text-sm leading-relaxed text-razo-gray sm:text-base">
              Ready to eliminate payment friction and boost conversions? Our team will audit your current checkout, recommend the right gateways, and deliver a secure integration tailored to your business.
            </p>
            <Link href={homeRoutes.contact} className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white" style={{ background: PAY_INDIGO }}>
              Book Your Session <ArrowRight size={14} />
            </Link>
          </div>
          <div className="tilt-card overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <Image src="/images/contact.jpg" alt="Payment consultation" width={600} height={420} className="h-64 w-full object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Industries We Serve</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paymentIndustries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
                  <Icon size={22} style={{ color: PAY_INDIGO }} />
                  <h3 className="mt-3 font-bold text-razo-dark">{ind.title}</h3>
                  <p className="mt-2 text-sm text-razo-gray">{ind.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "linear-gradient(160deg, #eef2ff, #ecfdf5)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-razo-dark">Our Integration Process</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {paymentProcess.map((p, i) => (
              <motion.div key={p.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: i % 2 === 0 ? PAY_INDIGO : PAY_GREEN }}>
                  {i + 1}
                </div>
                <h3 className="mt-3 text-xs font-bold text-razo-dark">{p.step}</h3>
                <p className="mt-1 text-[10px] text-razo-gray">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-razo-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-razo-dark">Payment Integration Projects</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {paymentProjects.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="tilt-card overflow-hidden rounded-2xl border bg-white shadow-md">
                <div className="relative h-44">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="300px" />
                  <span className="absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: PAY_INDIGO }}>{p.tag}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-razo-dark">{p.title}</h3>
                  <p className="mt-1 text-sm text-razo-gray">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: `linear-gradient(135deg, ${PAY_INDIGO}, ${PAY_GREEN})` }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Related Services</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paymentRelated.map((r, i) => (
              <motion.div key={r.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={r.href} className="block h-full rounded-2xl bg-white p-5 shadow-lg transition hover:-translate-y-1">
                  <Image src={r.icon} alt={r.label} width={36} height={36} className="h-9 w-9 rounded-lg object-contain" />
                  <h3 className="mt-4 font-bold text-razo-dark">{r.label}</h3>
                  <p className="mt-2 text-xs text-razo-gray">{r.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-razo-dark">Blogs</h2>
            <p className="mt-1 text-sm text-razo-gray">Insights on payments, security, and fintech trends.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {paymentBlogs.map((post, i) => (
              <motion.article key={post.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="relative h-32"><Image src={post.image} alt="" fill className="object-cover" sizes="250px" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-razo-dark">{post.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-razo-gray">{post.excerpt}</p>
                  <Link href={post.href} className="mt-2 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: PAY_INDIGO }}>Read more <ArrowRight size={12} /></Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ProductFAQ faqs={paymentFaqs} title="Frequently Asked Questions" description="Payment gateways, integration, security, costs, and international transactions." variant="light" />

      <section className="border-t py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ background: `linear-gradient(135deg, ${PAY_INDIGO}, ${PAY_GREEN})` }}>
              <ShieldCheck size={22} />
            </span>
            <div>
              <p className="text-lg font-bold text-razo-dark sm:text-xl">Let&apos;s create something great together</p>
              <p className="mt-1 text-sm text-razo-gray">Secure payment integrations built for trust and scale.</p>
            </div>
          </div>
          <Link href={homeRoutes.contact} className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white">
            <Sparkles size={16} /> Need Help? Let&apos;s Connect
          </Link>
        </div>
      </section>
    </main>
  );
}
