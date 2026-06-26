"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "Custom Development tailored to your business goals",
  "Seamless Integration with existing systems",
  "Ongoing Support & maintenance packages",
];

export default function Solutions() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="orb -left-20 top-1/3 h-64 w-64 bg-razo-blue/15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Delivering IT Solutions
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Technology-Driven{" "}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              We bridge the gap between vision and technology, delivering
              solutions that drive measurable business outcomes and sustainable
              growth.
            </p>
            <ul className="mt-8 space-y-4">
              {solutions.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-razo-blue"
                  />
                  <span className="text-white/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="tilt-card overflow-hidden rounded-3xl">
              <Image
                src="/images/solutions.jpg"
                alt="Technology solutions dashboard"
                width={600}
                height={450}
                className="h-[320px] w-full object-cover sm:h-[400px]"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass-card absolute -bottom-6 -left-4 rounded-2xl px-6 py-4 sm:-left-8"
            >
              <p className="text-sm text-white/60">Growth Rate</p>
              <p className="text-3xl font-bold text-green-400">+147%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
