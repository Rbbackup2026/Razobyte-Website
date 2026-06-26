"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { technologies, techCategories } from "@/lib/data";
import { siteRoutes } from "@/lib/routes";
import { ArrowRight, Code2 } from "lucide-react";

const categoryColors: Record<string, string> = {
  frontend: "bg-sky-500/10 text-sky-600",
  backend: "bg-emerald-500/10 text-emerald-600",
  mobile: "bg-violet-500/10 text-violet-600",
  data: "bg-amber-500/10 text-amber-700",
  deploy: "bg-orange-500/10 text-orange-600",
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  data: "DevOps",
  deploy: "Deploy",
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof techCategories)[number]["id"]
  >("all");

  const filtered =
    activeCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-razo-surface py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-razo-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-razo-blue/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-razo-blue">
              <Code2 size={15} />
              Core Development
            </span>
            <h2 className="mt-3 text-3xl font-bold text-razo-dark sm:text-4xl lg:text-[2.6rem]">
              Technologies We{" "}
              <span className="gradient-text-blue">Master</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-razo-gray">
              From web and mobile to backend systems and cloud-ready deployments —
              we build with modern, battle-tested stacks your product can scale on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden rounded-2xl border border-razo-blue/15 bg-white px-6 py-4 shadow-lg shadow-razo-blue/5 lg:block"
          >
            <p className="text-3xl font-bold text-razo-blue">
              {technologies.length}+
            </p>
            <p className="text-sm font-medium text-razo-gray">Core technologies</p>
          </motion.div>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start"
        >
          {techCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-razo-blue text-white shadow-md shadow-razo-blue/25"
                  : "border border-gray-200 bg-white text-razo-gray hover:border-razo-blue/30 hover:text-razo-blue"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Tech grid */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:border-razo-blue/20 hover:shadow-xl hover:shadow-razo-blue/10 sm:p-5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-razo-blue/[0.04] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <span
                  className={`relative mb-3 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${categoryColors[tech.category]}`}
                >
                  {categoryLabels[tech.category]}
                </span>

                <div className="relative mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-100 transition-all group-hover:scale-110 group-hover:ring-razo-blue/20 sm:h-16 sm:w-16">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                  />
                </div>

                <p className="relative text-center text-xs font-bold text-razo-dark sm:text-sm">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Marquee strip */}
        <div className="marquee-mask relative mt-12 overflow-hidden rounded-2xl border border-gray-100 bg-white py-3 shadow-sm">
          <div className="marquee-track flex w-max">
            {[...technologies, ...technologies].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="mx-6 shrink-0 text-sm font-semibold text-razo-gray/70"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center lg:text-left">
          <Link
            href={siteRoutes.productEngineering}
            className="btn-3d inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white"
          >
            Explore Product Engineering
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
