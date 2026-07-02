"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
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
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg shadow-razo-blue/5"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-razo-dark via-razo-dark/90 to-transparent px-5 pb-5 pt-16">
                  <span className="inline-block rounded-full bg-razo-blue/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
