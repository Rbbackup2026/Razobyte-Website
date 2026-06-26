"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative min-h-[500px] overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/testimonial-bg.jpg"
        alt="Office background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-razo-black/85" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              500+ Clients{" "}
              <span className="gradient-text-blue">Are Served</span>
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              Words by our amazing clients. Razobyte offers a full range of
              consultancy and solutions for sustainable growth.
            </p>
            <div className="mt-8 flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-razo-blue hover:bg-razo-blue/20"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-razo-blue hover:bg-razo-blue/20"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8"
              >
                <Quote size={32} className="text-razo-blue/50" />
                <p className="mt-4 text-lg text-white/80 leading-relaxed">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-razo-blue/50"
                  />
                  <div>
                    <p className="font-bold text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-white/50">
                      {testimonials[current].role}
                    </p>
                    <div className="mt-1 flex gap-0.5">
                      {Array.from({ length: testimonials[current].rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
