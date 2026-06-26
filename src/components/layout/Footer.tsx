"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Star,
  Award,
} from "lucide-react";
import { footerServices, offices, socialLinks } from "@/lib/data";
import { COMPANY_LOGO_URL } from "@/lib/company";
import { homeRoutes, siteRoutes } from "@/lib/routes";

const companyLinks = [
  { label: "Home", href: homeRoutes.home },
  { label: "About Us", href: siteRoutes.about },
  { label: "Our Clients", href: siteRoutes.clients },
  { label: "Case Studies", href: siteRoutes.caseStudies },
  { label: "Blogs", href: siteRoutes.blogs },
  { label: "Careers", href: siteRoutes.careers },
  { label: "Pricing", href: siteRoutes.pricing },
  { label: "Healthcare", href: siteRoutes.healthcare },
  { label: "IT Consulting", href: siteRoutes.itConsulting },
  { label: "Product Engineering", href: siteRoutes.productEngineering },
  { label: "Services", href: homeRoutes.services },
  { label: "Reach Us", href: homeRoutes.contact },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Wave transition */}
      <div className="relative -mt-1 text-razo-black">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="url(#footer-wave)"
          />
          <defs>
            <linearGradient id="footer-wave" x1="0" y1="0" x2="1440" y2="80">
              <stop stopColor="#0a1628" />
              <stop offset="1" stopColor="#0d1f3c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="footer-mesh relative">
        {/* Ambient orbs */}
        <div
          className="footer-orb left-[5%] top-[10%] h-64 w-64 bg-razo-blue/40"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="footer-orb right-[10%] top-[30%] h-48 w-48 bg-blue-300/20"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="footer-orb bottom-[20%] left-[40%] h-56 w-56 bg-razo-blue-light/15"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Giant watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <p className="footer-watermark whitespace-nowrap">RAZOBYTE</p>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-16 overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(43,141,239,0.2) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="footer-badge-shimmer absolute inset-0 opacity-50" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-razo-blue-light">
                  Developing{" "}
                  <span className="text-white">Digital</span> Solutions
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Ready to build something{" "}
                  <span className="gradient-text">extraordinary?</span>
                </h2>
              </div>
              <Link
                href={homeRoutes.contact}
                className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-razo-blue-dark shadow-xl transition-all hover:scale-105 hover:shadow-razo-blue/30"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Brand + badges row */}
          <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_1fr]">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="inline-flex rounded-2xl bg-white px-5 py-3 shadow-2xl shadow-black/20">
                <Image
                  src={COMPANY_LOGO_URL}
                  alt="Razobyte"
                  width={180}
                  height={48}
                  className="h-10 w-auto sm:h-11"
                />
              </div>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/65">
                Empowering businesses with innovative digital solutions. Your
                trusted partner for IT consulting, software development, and
                digital transformation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, glyph }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Razobyte on ${label}`}
                    className="footer-social relative z-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-bold text-white backdrop-blur-sm"
                  >
                    <span className="relative z-10">{glyph}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-wrap gap-4 lg:justify-end"
            >
              <div className="footer-office-card flex min-w-[140px] flex-1 flex-col items-center rounded-2xl p-5 sm:max-w-[180px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20">
                  <Star size={22} className="fill-yellow-400 text-yellow-400" />
                </div>
                <p className="mt-3 text-xs text-white/50">Google Rating</p>
                <p className="text-2xl font-bold text-white">5.0</p>
                <p className="text-xs text-yellow-400">★★★★★</p>
              </div>
              <div className="footer-office-card flex min-w-[140px] flex-1 flex-col items-center rounded-2xl p-5 sm:max-w-[180px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-razo-blue/30">
                  <Award size={22} className="text-razo-blue-light" />
                </div>
                <p className="mt-3 text-xs text-white/50">HubSpot</p>
                <p className="text-lg font-bold text-white">Partner</p>
                <p className="text-xs text-razo-blue-light">Certified</p>
              </div>
            </motion.div>
          </div>

          {/* Links grid */}
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="mb-5 flex items-baseline gap-0.5 text-sm font-bold tracking-widest text-white">
                <span className="text-3xl font-bold text-razo-blue-light/40">
                  C
                </span>
                <span>OMPANY</span>
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link text-sm text-white/60">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {Object.entries(footerServices).map(([category, items], colIdx) => (
              <motion.div
                key={category}
                custom={colIdx + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="mb-5 flex items-baseline gap-0.5 text-sm font-bold tracking-widest text-white">
                  <span className="text-3xl font-bold text-razo-blue-light/40">
                    {category[0]}
                  </span>
                  <span>{category.slice(1).toUpperCase()}</span>
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="footer-link text-sm text-white/60">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-white/10 py-14"
          >
            <h3 className="mb-8 flex items-baseline gap-0.5 text-sm font-bold tracking-widest text-white">
              <span className="text-3xl font-bold text-razo-blue-light/40">G</span>
              <span>ET IN TOUCH</span>
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="footer-office-card group rounded-3xl p-7"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-bold text-white">
                      <span className="text-razo-blue-light">{office.city[0]}</span>
                      {office.city.slice(1)}
                    </h4>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-razo-blue/20 text-razo-blue-light opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3">
                    <li className="flex items-start gap-3 text-sm text-white/65">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-razo-blue-light" />
                      {office.address}
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/65">
                      <Phone size={16} className="shrink-0 text-razo-blue-light" />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-white">
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/65">
                      <Mail size={16} className="shrink-0 text-razo-blue-light" />
                      <a href={`mailto:${office.email}`} className="hover:text-white">
                        {office.email}
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-xs text-white/45">
                      <Clock size={14} className="shrink-0 text-razo-blue-light" />
                      {office.hours}
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom bar */}
          <div className="footer-glow-line mb-8" />
          <div className="flex flex-col items-center justify-between gap-5 pb-10 sm:flex-row">
            <p className="text-center text-xs text-white/40 sm:text-left">
              © 2026 Razobyte SoftTech. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/40">
              <Link href="#" className="footer-link transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span className="h-3 w-px bg-white/20" />
              <Link href="#" className="footer-link transition-colors hover:text-white">
                Terms of Service
              </Link>
              <span className="h-3 w-px bg-white/20" />
              <Link href={homeRoutes.home} className="footer-link transition-colors hover:text-white">
                Back to Top ↑
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
