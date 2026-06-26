"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { aboutNavItems, aboutOverview } from "@/lib/aboutNav";
import { homeRoutes } from "@/lib/routes";

type AboutDropdownProps = {
  onClose?: () => void;
  variant?: "dropdown" | "mobile";
};

export default function AboutDropdown({
  onClose,
  variant = "dropdown",
}: AboutDropdownProps) {
  const OverviewIcon = aboutOverview.icon;

  if (variant === "mobile") {
    return (
      <div className="space-y-2 px-1 pb-2">
        <Link
          href={aboutOverview.href}
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl border border-razo-blue/20 bg-razo-blue/5 p-3.5 transition-colors hover:bg-razo-blue/10"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-razo-blue text-white">
            <OverviewIcon size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-razo-dark">{aboutOverview.label}</p>
            <p className="text-xs text-razo-gray">{aboutOverview.description}</p>
          </div>
          <ArrowRight size={14} className="shrink-0 text-razo-blue" />
        </Link>

        <div className="grid gap-2 sm:grid-cols-2">
          {aboutNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all hover:border-razo-blue/25 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-razo-blue/10 text-razo-blue">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-razo-dark">{item.label}</p>
                  <p className="truncate text-[10px] text-razo-gray">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-full z-40 mt-2 w-[min(520px,calc(100vw-32px))] -translate-x-1/2"
    >
      <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-razo-blue/10 ring-1 ring-black/[0.04]">
        <div className="h-1 bg-gradient-to-r from-razo-blue via-razo-blue-light to-razo-blue-dark" />

        <Link
          href={aboutOverview.href}
          onClick={onClose}
          className="group flex items-center gap-4 border-b border-gray-100 bg-gradient-to-r from-razo-blue/[0.06] to-transparent px-5 py-4 transition-colors hover:from-razo-blue/10"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-razo-blue text-white shadow-md shadow-razo-blue/25 transition-transform group-hover:scale-105">
            <OverviewIcon size={20} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1.5 text-sm font-bold text-razo-dark">
              <Sparkles size={13} className="text-razo-blue" />
              {aboutOverview.label}
            </p>
            <p className="text-xs text-razo-gray">{aboutOverview.description}</p>
          </div>
          <ArrowRight
            size={16}
            className="shrink-0 text-razo-blue/40 transition-all group-hover:translate-x-0.5 group-hover:text-razo-blue"
          />
        </Link>

        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-2">
          {aboutNavItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex h-full items-start gap-3 rounded-xl p-3 transition-all hover:bg-razo-blue/[0.05]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-razo-blue/15 to-razo-blue/5 text-razo-blue ring-1 ring-razo-blue/10 transition-transform group-hover:scale-105">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="flex items-center gap-1 text-[13px] font-bold text-razo-dark transition-colors group-hover:text-razo-blue">
                      {item.label}
                      <ArrowRight
                        size={12}
                        className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-razo-gray">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="border-t border-gray-100 bg-gray-50/80 px-4 py-2.5 text-center">
          <Link
            href={homeRoutes.contact}
            onClick={onClose}
            className="text-[11px] font-semibold text-razo-blue hover:underline"
          >
            Have questions? Reach out to our team →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
