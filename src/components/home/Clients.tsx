"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients, type ClientBrand } from "@/lib/clients";
import { COMPANY_PROJECTS_PLUS, COMPANY_COUNTRIES_PLUS } from "@/lib/company";
import { Building2, Globe2, Award, Sparkles, Handshake } from "lucide-react";

function LogoCard({ client, index }: { client: ClientBrand; index: number }) {
  return (
    <div
      className="group relative mx-3 shrink-0 sm:mx-4"
      style={{ perspective: 900 }}
    >
      <div
        className="relative flex h-[88px] w-[200px] items-center gap-3 overflow-hidden rounded-2xl border bg-white px-4 shadow-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl sm:h-[96px] sm:w-[220px] sm:px-5"
        style={{
          borderColor: `${client.accent}22`,
          boxShadow: `0 8px 24px ${client.accent}12`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${client.accentLight} 0%, transparent 55%)`,
          }}
        />
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
          style={{ background: client.accent }}
        />

        <div
          className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
          style={{ background: `linear-gradient(145deg, ${client.accentLight}, #fff)` }}
        >
          <Image
            src={client.favicon}
            alt={`${client.name} icon`}
            width={56}
            height={56}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
        </div>

        <div className="relative min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-razo-dark sm:text-[15px]">
            {client.name}
          </p>
          <p
            className="mt-0.5 truncate text-[10px] font-semibold uppercase tracking-wide sm:text-[11px]"
            style={{ color: client.accent }}
          >
            {client.industry}
          </p>
          <span
            className="mt-2 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100"
            style={{ background: client.accent }}
          >
            Partner
          </span>
        </div>

        <span
          className="absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-300 group-hover:w-full"
          style={{ background: client.accent }}
        />
      </div>

      <span
        className="pointer-events-none absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white opacity-80"
        style={{ background: client.accent }}
      >
        {index + 1}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: ClientBrand[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden py-1">
      <div
        className={`marquee-track flex w-max ${reverse ? "marquee-reverse" : ""}`}
      >
        {doubled.map((client, i) => (
          <LogoCard key={`${client.name}-${i}`} client={client} index={i % items.length} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  const row1 = clients.slice(0, 4);
  const row2 = clients.slice(4);

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f3f8ff] to-razo-surface py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-[0.05]" />
      <div className="orb pointer-events-none absolute -left-32 top-10 h-72 w-72 bg-razo-blue/15" />
      <div className="orb pointer-events-none absolute -right-24 bottom-0 h-80 w-80 bg-sky-400/12" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-razo-blue/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-razo-blue/20 bg-razo-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-razo-blue">
              <Handshake size={13} />
              Our Clients
            </span>
            <h2 className="mt-4 text-3xl font-bold text-razo-dark sm:text-4xl">
              Trusted by{" "}
              <span className="gradient-text-blue">Industry Leaders</span>
            </h2>
            <p className="mt-3 text-razo-gray">
              Partnering with brands worldwide to deliver exceptional digital
              experiences — across retail, health, fintech, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 lg:justify-end"
          >
            {[
              {
                icon: Building2,
                value: COMPANY_PROJECTS_PLUS,
                label: "Projects",
                color: "#2b8def",
                bg: "#e8f4fd",
              },
              {
                icon: Globe2,
                value: COMPANY_COUNTRIES_PLUS,
                label: "Countries",
                color: "#0ea5e9",
                bg: "#e0f7ff",
              },
              {
                icon: Award,
                value: "98%",
                label: "Retention",
                color: "#7c3aed",
                bg: "#f1e9ff",
              },
            ].map(({ icon: Icon, value, label, color, bg }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg shadow-razo-blue/5"
                style={{ borderColor: `${color}22` }}
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: bg, color }}
                >
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
        >
          <Sparkles size={14} className="text-razo-blue" />
          {clients.map((c) => (
            <span
              key={c.name}
              className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm"
              style={{ background: c.accent }}
            >
              {c.industry}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-3xl border border-razo-blue/10 bg-white/60 p-4 shadow-inner backdrop-blur-sm sm:p-5"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-8 bg-gradient-to-b from-razo-blue/5 to-transparent" />
          <div className="space-y-4">
            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
