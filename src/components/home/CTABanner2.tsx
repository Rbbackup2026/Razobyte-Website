"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { homeRoutes } from "@/lib/routes";

export default function CTABanner2() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[280px] overflow-hidden rounded-3xl bg-razo-dark sm:min-h-[320px]"
        >
          <Image
            src="/images/cta-journey.jpg"
            alt="Digital journey"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-razo-black/90 to-razo-blue-dark/60" />

          <div className="relative flex flex-col items-center justify-between gap-8 p-8 sm:flex-row sm:p-12">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Bridging Vision with Technology
              </h2>
              <p className="mt-2 text-lg text-razo-blue-light">
                Start Your Digital Journey!
              </p>
            </div>
            <div className="flex items-center gap-6">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-razo-blue/20 text-razo-blue-light"
              >
                <Rocket size={32} />
              </motion.div>
              <a
                href={homeRoutes.contact}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-razo-dark shadow-xl transition-transform hover:scale-105"
              >
                Need Help? Let&apos;s Connect
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
