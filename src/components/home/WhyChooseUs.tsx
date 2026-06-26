"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import { Sparkles, Lightbulb, Link2 } from "lucide-react";

const icons = [Sparkles, Lightbulb, Link2];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-razo-black to-razo-dark py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="tilt-card overflow-hidden rounded-3xl">
              <Image
                src="/images/team.jpg"
                alt="Team collaboration"
                width={600}
                height={450}
                className="h-[320px] w-full object-cover sm:h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              The Razobyte{" "}
              <span className="gradient-text-blue">Advantage</span>
            </h2>

            <div className="mt-10 space-y-6">
              {whyChooseUs.map((item, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="glass-card group flex gap-5 rounded-2xl p-6 transition-all hover:border-razo-blue/30"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-razo-blue to-razo-blue-dark shadow-lg shadow-razo-blue/25 transition-transform group-hover:scale-110">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
