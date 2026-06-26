"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY_LOGO_URL } from "@/lib/company";
import {
  X,
  Code2,
  Smartphone,
  Cloud,
  PenTool,
  Calendar,
  ArrowRight,
  Headphones,
  Clock,
  Shield,
} from "lucide-react";
import { homeRoutes } from "@/lib/routes";

const STORAGE_KEY = "razobyte-popup-dismissed";
const DELAY_MS = 5000;

const services = [
  { icon: Code2, label: "Custom Development" },
  { icon: Smartphone, label: "Web & Mobile" },
  { icon: Cloud, label: "Cloud Solutions" },
  { icon: PenTool, label: "UI/UX Design" },
];

const trustBadges = [
  { icon: Headphones, label: "Expert Consultation" },
  { icon: Clock, label: "Timely Delivery" },
  { icon: Shield, label: "100% Secure" },
];

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setIsOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Book free consulting"
        >
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628] shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close popup"
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              <X size={15} />
            </button>

            <div className="px-6 pb-6 pt-8 text-center">
              {/* Logo */}
              <div className="mx-auto inline-flex rounded-xl bg-white px-5 py-2.5 shadow-lg">
                <Image
                  src={COMPANY_LOGO_URL}
                  alt="Razobyte"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Developing Digital Solutions
              </p>

              <h2 className="mt-5 text-xl font-bold leading-snug text-white sm:text-[1.35rem]">
                Let&apos;s Build Something{" "}
                <span className="text-razo-blue-light">Amazing</span> Together!
              </h2>

              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-white/60">
                Get expert solutions for your{" "}
                <span className="text-razo-blue-light">website</span>,{" "}
                <span className="text-razo-blue-light">application</span>, or
                digital idea.
              </p>

              {/* Decorative visual — no text, won't clip */}
              <div className="relative mx-auto mt-5 h-36 w-full max-w-[320px] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="/images/hero-growth.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-razo-blue/10" />
              </div>

              {/* Services */}
              <div className="mt-5 grid grid-cols-4 gap-2">
                {services.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 py-2.5"
                  >
                    <Icon size={15} className="text-razo-blue-light" />
                    <span className="px-0.5 text-[8px] leading-tight text-white/55 sm:text-[9px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={homeRoutes.contact}
                onClick={close}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-razo-blue py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-razo-blue/30 transition hover:bg-razo-blue-dark"
              >
                <Calendar size={16} />
                Book Free Consulting
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>

              {/* Trust */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1 text-[10px] text-white/40"
                  >
                    <Icon size={11} className="text-razo-blue-light" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
