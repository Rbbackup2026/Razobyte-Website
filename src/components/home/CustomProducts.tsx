"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Layers, Boxes } from "lucide-react";
import { customProducts } from "@/lib/products";

const icons = [Database, Layers, Boxes];

export default function CustomProducts() {
  return (
    <section id="custom-products" className="relative bg-razo-surface py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-razo-blue/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            Enterprise Capabilities
          </span>
          <h2 className="mt-3 text-3xl font-bold text-razo-dark sm:text-4xl">
            Custom Products —{" "}
            <span className="gradient-text-blue">CRM & ERP</span> Built for You
          </h2>
          <p className="mt-4 text-razo-gray">
            We design and develop business-critical systems — not one-size-fits-all
            software. Scalable, secure, and aligned with your operations.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {customProducts.map((product, i) => {
            const Icon = icons[i] ?? Database;
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-razo-blue/20 hover:shadow-xl hover:shadow-razo-blue/10"
                >
                  {/* Card header */}
                  <div className="relative border-b border-gray-50 bg-gradient-to-br from-razo-blue/5 to-transparent p-6">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-razo-blue text-white shadow-lg shadow-razo-blue/25 transition-transform group-hover:scale-110">
                        <Icon size={22} />
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-razo-blue/15 bg-white text-razo-blue transition-all group-hover:bg-razo-blue group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-razo-dark">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-razo-blue">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-razo-gray">
                      {product.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {product.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-razo-dark/80"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-razo-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-razo-blue/10 px-2.5 py-0.5 text-[11px] font-medium text-razo-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto pt-6 text-sm font-semibold text-razo-blue transition-colors group-hover:text-razo-blue-dark">
                      Explore {product.title.split(" ")[0]} →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-razo-blue/10 bg-white px-6 py-5 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl">
              <Image
                src="/images/solutions.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-razo-gray">
              <span className="font-semibold text-razo-dark">
                Need a tailored system?
              </span>{" "}
              We scope, architect, and deliver production-ready software.
            </p>
          </div>
          <Link
            href="/custom-products"
            className="shrink-0 rounded-full bg-razo-blue px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-razo-blue-dark"
          >
            View All Capabilities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
