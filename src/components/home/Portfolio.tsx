"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <section id="industry" className="relative bg-razo-surface py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-bold text-razo-dark sm:text-4xl">
            Featured <span className="gradient-text-blue">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className={`tilt-card group cursor-pointer overflow-hidden rounded-3xl transition-all ${
                active === i
                  ? "ring-2 ring-razo-blue shadow-xl shadow-razo-blue/20"
                  : ""
              }`}
              style={{
                transform:
                  active === i
                    ? "rotateY(-2deg) rotateX(2deg) scale(1.02)"
                    : undefined,
              }}
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-razo-dark/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-wider text-razo-blue-light">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {portfolio.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Portfolio item ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                active === i
                  ? "w-8 bg-razo-blue"
                  : "w-2.5 bg-razo-blue/30 hover:bg-razo-blue/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
