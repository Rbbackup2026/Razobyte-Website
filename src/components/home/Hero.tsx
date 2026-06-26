"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getHeroStats } from "@/lib/data";
import { homeRoutes } from "@/lib/routes";

export default function Hero() {
  const heroStats = getHeroStats();
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      <div className="orb -left-32 top-20 h-96 w-96 bg-razo-blue/30" />
      <div className="orb -right-32 top-40 h-80 w-80 bg-blue-400/20" />
      <div className="orb bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 bg-razo-blue/15" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block rounded-full border border-razo-blue/30 bg-razo-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-razo-blue-light">
              Developing Digital Solutions
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Grow Your Business with{" "}
              <span className="gradient-text">Expert Digital</span>{" "}
              Marketing Strategies
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/60">
              Reach your audience, increase visibility & achieve better results
              with tailored campaigns powered by cutting-edge technology.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={homeRoutes.contact}
                className="btn-3d rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              >
                Get Started Today
              </a>
              <a
                href={homeRoutes.services}
                className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-razo-blue hover:bg-razo-blue/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-razo-blue/20">
                <Image
                  src="/images/hero-growth.png"
                  alt="Digital growth and marketing analytics"
                  width={700}
                  height={500}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="glass-card absolute z-10 rounded-2xl px-4 py-3"
                  style={{
                    top: i === 0 ? "5%" : "auto",
                    bottom: i === 1 ? "8%" : "auto",
                    right: i === 0 ? "-2%" : "auto",
                    left: i === 1 ? "-2%" : "auto",
                  }}
                >
                  <p className="text-xl font-bold text-razo-blue-light">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
