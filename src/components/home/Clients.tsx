"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/lib/data";
import { COMPANY_PROJECTS_PLUS, COMPANY_COUNTRIES_PLUS } from "@/lib/company";
import { Building2, Globe2, Award } from "lucide-react";

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group mx-3 flex h-[72px] w-[160px] shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-razo-blue/20 hover:shadow-lg hover:shadow-razo-blue/10 sm:h-[80px] sm:w-[180px]">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={140}
        height={56}
        className="h-auto w-full max-w-[130px] object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof clients;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
      >
        {doubled.map((client, i) => (
          <LogoCard key={`${client.name}-${i}`} {...client} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const row1 = clients.slice(0, 4);
  const row2 = clients.slice(4);

  return (
    <section id="clients" className="relative overflow-hidden bg-razo-surface py-20 lg:py-28">
      {/* Subtle bg decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-razo-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-razo-blue/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-center lg:text-left"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              Our Clients
            </span>
            <h2 className="mt-2 text-3xl font-bold text-razo-dark sm:text-4xl">
              Trusted by{" "}
              <span className="gradient-text-blue">Industry Leaders</span>
            </h2>
            <p className="mt-3 text-razo-gray">
              Partnering with brands worldwide to deliver exceptional digital
              experiences.
            </p>
          </motion.div>

          {/* Stats pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 lg:justify-end"
          >
            {[
              { icon: Building2, value: COMPANY_PROJECTS_PLUS, label: "Projects" },
              { icon: Globe2, value: COMPANY_COUNTRIES_PLUS, label: "Countries" },
              { icon: Award, value: "98%", label: "Retention" },
            ].map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-razo-blue/10 bg-white px-4 py-3 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-razo-blue/10 text-razo-blue">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-lg font-bold leading-none text-razo-dark">
                    {value}
                  </p>
                  <p className="text-xs text-razo-gray">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="space-y-5"
        >
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </motion.div>
      </div>
    </section>
  );
}
