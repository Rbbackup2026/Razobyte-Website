"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { homeRoutes } from "@/lib/routes";

export default function CTABanner() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[360px]"
        >
          <Image
            src="/images/cta-team.jpg"
            alt="Team working"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-razo-blue/90 via-razo-blue/75 to-razo-blue-dark/80" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          <div className="relative flex flex-col items-start justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to Optimize Your Product & Accelerate Growth?
              </h2>
              <p className="mt-4 text-white/80">
                Let&apos;s build something extraordinary together. Our experts are
                ready to transform your digital vision into reality.
              </p>
            </div>
            <a
              href={homeRoutes.contact}
              className="shrink-0 rounded-full bg-white px-8 py-4 text-sm font-bold text-razo-blue-dark shadow-xl transition-transform hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
