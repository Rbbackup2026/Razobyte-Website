"use client";

import { motion } from "framer-motion";
import { getStats } from "@/lib/data";

export default function StatsBar() {
  const stats = getStats();
  return (
    <section className="relative z-10 -mt-4 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl"
      >
        <div className="glass-card grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-razo-blue/20 bg-razo-blue/5 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-razo-black/60 px-6 py-8 text-center transition-colors hover:bg-razo-blue/10 sm:px-8"
            >
              <p className="text-3xl font-bold text-razo-blue-light sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-razo-blue transition-all group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
