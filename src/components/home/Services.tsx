"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 section-glow" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our <span className="gradient-text-blue">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Comprehensive digital solutions tailored to accelerate your business growth
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
            >
              <Link
                href={service.href}
                className="tilt-card group relative block overflow-hidden rounded-3xl"
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-razo-black via-razo-black/60 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {service.description}
                    </p>
                    <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-razo-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
