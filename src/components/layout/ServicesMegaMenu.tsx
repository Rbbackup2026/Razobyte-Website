"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Layers,
} from "lucide-react";
import {
  servicesMegaMenu,
  type MegaMenuCategory,
} from "@/lib/megaMenu";
import { homeRoutes } from "@/lib/routes";

const allCategories = servicesMegaMenu.flatMap((card) => card.categories);

const categoryGroups = [
  {
    label: "Create & Design",
    titles: ["Design", "Ecommerce Solutions", "Game Development"],
  },
  {
    label: "Build & Develop",
    titles: ["Website Development", "Mobile Applications Development"],
  },
  {
    label: "Grow & Support",
    titles: ["Digital Marketing", "Maintenance & Support"],
  },
];

const groupedCategories = categoryGroups.map((group) => ({
  ...group,
  categories: allCategories.filter((c) => group.titles.includes(c.title)),
}));

function CategoryBlock({
  category,
  onClose,
  index,
}: {
  category: MegaMenuCategory;
  onClose?: () => void;
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.04, duration: 0.25 }}
      className="group/cat rounded-xl p-3.5 transition-colors hover:bg-razo-blue/[0.04]"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-razo-blue/20 to-razo-blue/5 text-razo-blue shadow-sm ring-1 ring-razo-blue/10 transition-transform duration-200 group-hover/cat:scale-105">
          <Icon size={18} strokeWidth={2} />
        </span>
        <h4 className="text-sm font-bold leading-tight text-razo-dark">
          {category.title}
        </h4>
      </div>
      <ul className="space-y-1.5">
        {category.items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onClose}
              className="group/link flex items-center gap-1.5 rounded-md py-1 pl-1 text-[13px] leading-snug text-gray-500 transition-all hover:pl-2 hover:text-razo-blue"
            >
              <ChevronRight
                size={13}
                className="shrink-0 text-razo-blue opacity-0 transition-all group-hover/link:opacity-100"
              />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

type ServicesMegaMenuProps = {
  onClose?: () => void;
  variant?: "dropdown" | "mobile";
};

export default function ServicesMegaMenu({
  onClose,
  variant = "dropdown",
}: ServicesMegaMenuProps) {
  if (variant === "mobile") {
    return (
      <div className="space-y-4">
        {groupedCategories.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-widest text-razo-blue/70">
              {group.label}
            </p>
            <div className="space-y-2">
              {group.categories.map((category, i) => (
                <div
                  key={category.title}
                  className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
                >
                  <CategoryBlock
                    category={category}
                    onClose={onClose}
                    index={i}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <Link
          href={homeRoutes.contact}
          onClick={onClose}
          className="flex items-center justify-center gap-2 rounded-full bg-razo-blue py-3 text-sm font-bold text-white"
        >
          Free Consultation
          <ArrowRight size={15} />
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 z-40 w-[min(920px,calc(100vw-32px))] -translate-x-1/2"
      style={{ top: "var(--header-offset, 68px)" }}
    >
      <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl shadow-razo-blue/10 ring-1 ring-black/[0.04]">
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-razo-blue via-razo-blue-light to-razo-blue-dark" />

        <div className="flex">
          {/* Featured sidebar */}
          <aside className="relative hidden w-[220px] shrink-0 overflow-hidden border-r border-gray-100 bg-gradient-to-br from-razo-blue/[0.07] via-white to-razo-blue/[0.03] p-5 sm:block">
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-razo-blue/10 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-razo-blue/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-razo-blue">
                <Sparkles size={11} />
                Services
              </span>
              <h3 className="mt-3 text-base font-bold leading-snug text-razo-dark">
                End-to-End Digital Solutions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                From design and development to marketing and long-term support —
                built around your business goals.
              </p>

              <ul className="mt-4 space-y-2">
                {["Custom workflows", "Scalable architecture", "Dedicated support"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[11px] font-medium text-gray-600"
                    >
                      <span className="h-1 w-1 rounded-full bg-razo-blue" />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <Link
                href={homeRoutes.services}
                onClick={onClose}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-razo-blue transition-colors hover:text-razo-blue-dark"
              >
                <Layers size={13} />
                View all services
                <ArrowRight size={13} />
              </Link>
            </div>
          </aside>

          {/* Service columns */}
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="grid gap-4 sm:grid-cols-3">
              {groupedCategories.map((group, gi) => (
                <div key={group.label}>
                  <p className="mb-2 border-b border-gray-100 pb-2 text-[10px] font-bold uppercase tracking-widest text-razo-blue/80">
                    {group.label}
                  </p>
                  <div className="space-y-1">
                    {group.categories.map((category, ci) => (
                      <CategoryBlock
                        key={category.title}
                        category={category}
                        onClose={onClose}
                        index={gi * 3 + ci}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 bg-gradient-to-r from-gray-50/80 to-razo-blue/[0.04] px-4 py-3 sm:flex-row sm:px-5">
          <p className="text-center text-xs text-gray-500 sm:text-left">
            Not sure where to start?{" "}
            <span className="font-semibold text-razo-dark">
              Our experts will guide you.
            </span>
          </p>
          <Link
            href={homeRoutes.contact}
            onClick={onClose}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-razo-blue px-4 py-2 text-xs font-bold text-white shadow-md shadow-razo-blue/25 transition-all hover:bg-razo-blue-dark hover:shadow-lg hover:shadow-razo-blue/30"
          >
            Free Consultation
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
