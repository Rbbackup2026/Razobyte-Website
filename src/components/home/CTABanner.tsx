"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Rocket, Zap, Target } from "lucide-react";
import { homeRoutes } from "@/lib/routes";

const perks = [
  { icon: TrendingUp, label: "98% Client Retention" },
  { icon: Rocket, label: "395+ Projects" },
  { icon: Zap, label: "14M+ Lines of Code" },
];

function GrowthMockup() {
  const metrics = [
    { label: "Traffic", val: "+142%", color: "#2b8def" },
    { label: "Leads", val: "3.2x", color: "#10b981" },
    { label: "ROI", val: "4.8x", color: "#f59e0b" },
  ];

  return (
    <div className="relative mx-auto flex h-[280px] w-full max-w-sm items-center justify-center sm:h-[300px]">
      <div className="absolute h-48 w-48 rounded-full border border-dashed border-razo-blue/30 sm:h-56 sm:w-56" />
      <div className="absolute h-64 w-64 rounded-full border border-razo-blue/10" />

      {[
        { icon: "📈", label: "Growth", x: -90, y: -40 },
        { icon: "🎯", label: "Leads", x: 95, y: -35 },
        { icon: "⚡", label: "Speed", x: -85, y: 50 },
      ].map((item, i) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
          className="absolute z-20 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg backdrop-blur-md"
          style={{ transform: `translate(${item.x}px, ${item.y}px)` }}
        >
          <span>{item.icon}</span> {item.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateY: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, type: "spring" }}
        className="tilt-card relative z-10 w-[220px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:w-[240px]"
        style={{ boxShadow: "0 28px 70px rgba(43, 141, 239, 0.35)" }}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-razo-blue to-razo-blue-dark px-3 py-2">
          <span className="flex items-center gap-1 text-[9px] font-bold text-white">
            <Target size={12} /> GROWTH HUB
          </span>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
          />
        </div>
        <div className="bg-slate-900 p-3">
          <p className="mb-2 text-[8px] font-bold text-slate-400">LIVE METRICS</p>
          <div className="space-y-1.5">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between rounded-lg bg-slate-800 px-2 py-1.5">
                <span className="text-[9px] text-slate-400">{m.label}</span>
                <span className="text-xs font-bold" style={{ color: m.color }}>{m.val}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute -right-2 top-8 z-30 text-3xl"
      >
        🚀
      </motion.div>
    </div>
  );
}

export default function CTABanner() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="absolute inset-0 section-glow opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-razo-dark via-razo-black to-razo-blue-dark/40 shadow-2xl"
        >
          <div className="grid-pattern absolute inset-0 opacity-20" />
          <div className="orb absolute -left-20 top-0 h-64 w-64 bg-razo-blue/20" />
          <div className="orb absolute -right-16 bottom-0 h-56 w-56 bg-blue-400/15" />

          <div className="relative grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/30 bg-razo-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-razo-blue-light">
                <Sparkles size={12} /> Let&apos;s Grow Together
              </span>
              <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Ready to Optimize Your Product &{" "}
                <span className="gradient-text-blue">Accelerate Growth?</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                Let&apos;s build something extraordinary together. Our experts are ready to
                transform your digital vision into measurable results.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {perks.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.span
                      key={p.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="glass-card flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white/90"
                    >
                      <Icon size={14} className="text-razo-blue-light" />
                      {p.label}
                    </motion.span>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={homeRoutes.contact}
                  className="btn-3d inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Get Started Today <ArrowRight size={16} />
                </Link>
                <Link
                  href={homeRoutes.services}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-razo-blue hover:bg-razo-blue/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="tilt-card absolute inset-0 overflow-hidden rounded-2xl opacity-40 lg:opacity-100">
                <Image
                  src="/images/cta-team.jpg"
                  alt="Razobyte team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-razo-black/80 via-razo-black/30 to-transparent" />
              </div>
              <div className="relative flex min-h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-razo-black/40 backdrop-blur-sm sm:min-h-[300px]">
                <GrowthMockup />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
