"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { searchSite, type SiteSearchItem } from "@/lib/siteSearch";

type NavSearchProps = {
  variant?: "desktop" | "mobile";
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate?: () => void;
};

export default function NavSearch({
  variant = "desktop",
  open,
  onOpenChange,
  onNavigate,
}: NavSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchSite(query, 8), [query]);
  const showDropdown = open && results.length > 0;
  const isMobile = variant === "mobile";

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (!showDropdown || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, showDropdown]);

  const goTo = (entry: SiteSearchItem) => {
    router.push(entry.href);
    setQuery("");
    onOpenChange(false);
    onNavigate?.();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = results[activeIndex] ?? results[0];
    if (match) goTo(match);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      onOpenChange(false);
    }
  };

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`}>
      <form onSubmit={handleSubmit}>
        <div
          className={`flex items-center overflow-hidden rounded-full border bg-gray-50 transition-all ${
            isMobile
              ? "h-10 w-full border-gray-200 px-3"
              : open
                ? "h-10 w-52 border-razo-blue/30 ring-1 ring-razo-blue/15 xl:w-60"
                : "h-10 w-36 border-gray-200 xl:w-44"
          }`}
        >
          <Search size={15} className="shrink-0 text-gray-400" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => onOpenChange(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search site..."
            aria-label="Search website"
            aria-expanded={showDropdown}
            aria-controls="nav-search-results"
            aria-autocomplete="list"
            role="combobox"
            className={`min-w-0 flex-1 bg-transparent py-2 text-gray-700 outline-none placeholder:text-gray-400 ${
              isMobile ? "pl-2 text-sm" : "pl-1.5 pr-3 text-[13px]"
            }`}
            autoFocus={isMobile && open}
          />
        </div>
      </form>

      {showDropdown && (
        <div
          id="nav-search-results"
          ref={listRef}
          role="listbox"
          className={`absolute z-[60] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/10 ${
            isMobile
              ? "left-0 right-0 top-[calc(100%+8px)]"
              : "right-0 top-[calc(100%+10px)] w-72 xl:w-80"
          }`}
        >
          <div className="border-b border-gray-50 bg-gradient-to-r from-razo-blue/5 to-transparent px-3 py-2">
            <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-razo-blue">
              <Sparkles size={11} />
              {query.trim() ? "Results" : "Popular on Razobyte"}
            </p>
          </div>

          <ul className="max-h-64 overflow-y-auto py-1">
            {results.map((entry, i) => (
              <li key={entry.id} role="option" aria-selected={i === activeIndex}>
                <button
                  type="button"
                  data-index={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => goTo(entry)}
                  className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                    i === activeIndex
                      ? "bg-razo-blue/8 text-razo-blue"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold">
                      {entry.label}
                    </span>
                    <span className="block truncate text-[11px] text-gray-400">
                      {entry.category}
                    </span>
                  </span>
                  <ArrowRight
                    size={14}
                    className={`shrink-0 ${i === activeIndex ? "opacity-100" : "opacity-30"}`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {query.trim() && (
            <div className="border-t border-gray-50 px-3 py-2 text-center">
              <Link
                href={results[0]?.href ?? "/"}
                onClick={() => {
                  setQuery("");
                  onOpenChange(false);
                  onNavigate?.();
                }}
                className="text-[11px] font-semibold text-razo-blue hover:underline"
              >
                Press Enter to open top result
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
