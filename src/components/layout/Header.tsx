"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Phone, Search, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { sectionIdFromHref, homeRoutes } from "@/lib/routes";
import ServicesMegaMenu from "@/components/layout/ServicesMegaMenu";
import AboutDropdown from "@/components/layout/AboutDropdown";
import IndustryDropdown from "@/components/layout/IndustryDropdown";
import { isAboutSectionPath } from "@/lib/aboutNav";
import { industrySectionPaths } from "@/lib/industryNav";
import { COMPANY_LOGO_URL } from "@/lib/company";

const PHONE = "+91-8448158188";
const PHONE_HREF = "tel:+918448158188";

const SECTION_IDS = ["home", "about", "services", "industry", "contact"] as const;

function sectionFromHref(href: string) {
  return sectionIdFromHref(href);
}

function navItemClass(active: boolean) {
  return [
    "relative shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-semibold transition-all duration-200 xl:px-3.5 xl:text-sm",
    active
      ? "text-razo-blue"
      : "text-gray-600 hover:bg-razo-blue/[0.06] hover:text-razo-blue",
  ].join(" ");
}

function NavIndicator() {
  return (
    <motion.span
      layoutId="nav-active-indicator"
      className="absolute inset-x-1.5 -bottom-0.5 h-0.5 rounded-full bg-razo-blue shadow-[0_0_8px_rgba(43,141,239,0.45)]"
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
    />
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

  const isLinkActive = useCallback(
    (href: string, menu?: "services" | "about" | "industry") => {
      if (menu === "about") {
        return isAboutSectionPath(pathname) || aboutOpen;
      }
      if (menu === "industry") {
        return (
          (industrySectionPaths as readonly string[]).includes(pathname) ||
          industryOpen ||
          (isHome && activeSection === "industry")
        );
      }
      if (menu === "services") {
        if (!isHome) return servicesOpen;
        return activeSection === "services" || servicesOpen;
      }
      if (!isHome) {
        if (href.startsWith("/") && !href.includes("#") && pathname === href) {
          return true;
        }
        return false;
      }
      const id = sectionFromHref(href);
      return activeSection === id;
    },
    [isHome, pathname, activeSection, servicesOpen, aboutOpen, industryOpen]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-offset", "68px");
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        if (visible.size === 0) return;

        let bestId = "home";
        let bestRatio = 0;
        visible.forEach((ratio, id) => {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        setActiveSection(bestId);
      },
      { rootMargin: "-68px 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const hash = window.location.hash.replace("#", "");
    if (SECTION_IDS.includes(hash as (typeof SECTION_IDS)[number])) {
      setActiveSection(hash);
    }

    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
      if (
        aboutRef.current &&
        !aboutRef.current.contains(e.target as Node)
      ) {
        setAboutOpen(false);
      }
      if (
        industryRef.current &&
        !industryRef.current.contains(e.target as Node)
      ) {
        setIndustryOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openServices = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setAboutOpen(false);
    setIndustryOpen(false);
    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  const openAbout = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServicesOpen(false);
    setIndustryOpen(false);
    setAboutOpen(true);
  };

  const closeAbout = () => {
    closeTimerRef.current = setTimeout(() => setAboutOpen(false), 150);
  };

  const openIndustry = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setServicesOpen(false);
    setAboutOpen(false);
    setIndustryOpen(true);
  };

  const closeIndustry = () => {
    closeTimerRef.current = setTimeout(() => setIndustryOpen(false), 150);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) window.location.href = homeRoutes.services;
    setSearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-white transition-shadow duration-300 ${
        scrolled
          ? "border-gray-200 shadow-md shadow-black/[0.04]"
          : "border-gray-100"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center gap-3 px-4 sm:px-6 lg:gap-5 lg:px-8">
        {/* Logo */}
        <Link href={homeRoutes.home} className="shrink-0">
          <Image
            src={COMPANY_LOGO_URL}
            alt="Razobyte"
            width={170}
            height={44}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            "hasMegaMenu" in link && link.hasMegaMenu ? (
              <div
                key={link.label}
                ref={servicesRef}
                className="relative shrink-0"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen((p) => !p);
                    setAboutOpen(false);
                    setIndustryOpen(false);
                    if (isHome) setActiveSection("services");
                  }}
                  className={`flex items-center gap-0.5 ${navItemClass(isLinkActive(link.href, "services"))}`}
                  aria-expanded={servicesOpen}
                  aria-current={
                    isLinkActive(link.href, "services") ? "page" : undefined
                  }
                >
                  {isLinkActive(link.href, "services") && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-lg bg-razo-blue/[0.08]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-0.5">
                    Services
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                  {isLinkActive(link.href, "services") && <NavIndicator />}
                </button>
                {servicesOpen && (
                  <div onMouseEnter={openServices} onMouseLeave={closeServices}>
                    <ServicesMegaMenu onClose={() => setServicesOpen(false)} />
                  </div>
                )}
              </div>
            ) : "hasAboutMenu" in link && link.hasAboutMenu ? (
              <div
                key={link.label}
                ref={aboutRef}
                className="relative shrink-0"
                onMouseEnter={openAbout}
                onMouseLeave={closeAbout}
              >
                <button
                  type="button"
                  onClick={() => {
                    setAboutOpen((p) => !p);
                    setServicesOpen(false);
                    setIndustryOpen(false);
                  }}
                  className={`flex items-center gap-0.5 ${navItemClass(isLinkActive(link.href, "about"))}`}
                  aria-expanded={aboutOpen}
                  aria-current={
                    isLinkActive(link.href, "about") ? "page" : undefined
                  }
                >
                  {isLinkActive(link.href, "about") && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-lg bg-razo-blue/[0.08]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-0.5">
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                  {isLinkActive(link.href, "about") && <NavIndicator />}
                </button>
                {aboutOpen && (
                  <div onMouseEnter={openAbout} onMouseLeave={closeAbout}>
                    <AboutDropdown onClose={() => setAboutOpen(false)} />
                  </div>
                )}
              </div>
            ) : "hasIndustryMenu" in link && link.hasIndustryMenu ? (
              <div
                key={link.label}
                ref={industryRef}
                className="relative shrink-0"
                onMouseEnter={openIndustry}
                onMouseLeave={closeIndustry}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIndustryOpen((p) => !p);
                    setServicesOpen(false);
                    setAboutOpen(false);
                    if (isHome) setActiveSection("industry");
                  }}
                  className={`flex items-center gap-0.5 ${navItemClass(isLinkActive(link.href, "industry"))}`}
                  aria-expanded={industryOpen}
                  aria-current={
                    isLinkActive(link.href, "industry") ? "page" : undefined
                  }
                >
                  {isLinkActive(link.href, "industry") && (
                    <motion.span
                      layoutId="nav-active-bg"
                      className="absolute inset-0 rounded-lg bg-razo-blue/[0.08]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-0.5">
                    Industry
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${industryOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                  {isLinkActive(link.href, "industry") && <NavIndicator />}
                </button>
                {industryOpen && (
                  <div onMouseEnter={openIndustry} onMouseLeave={closeIndustry}>
                    <IndustryDropdown onClose={() => setIndustryOpen(false)} />
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (isHome) setActiveSection(sectionFromHref(link.href));
                }}
                className={navItemClass(isLinkActive(link.href))}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
              >
                {isLinkActive(link.href) && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-lg bg-razo-blue/[0.08]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
                {isLinkActive(link.href) && <NavIndicator />}
              </Link>
            )
          )}
        </nav>

        {/* Desktop actions — single line */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {/* Search */}
          <div ref={searchRef}>
            <form onSubmit={handleSearch}>
              <div
                className={`flex h-10 items-center overflow-hidden rounded-full border bg-gray-50 transition-all ${
                  searchOpen
                    ? "w-44 border-razo-blue/30 ring-1 ring-razo-blue/15"
                    : "w-36 border-gray-200 xl:w-40"
                }`}
              >
                <Search size={15} className="ml-3 shrink-0 text-gray-400" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                  placeholder="Search..."
                  className="min-w-0 flex-1 bg-transparent py-2 pr-3 pl-1.5 text-[13px] text-gray-700 outline-none placeholder:text-gray-400"
                />
              </div>
            </form>
          </div>

          {/* Phone + CTA — unified pill, one line */}
          <div className="flex h-10 shrink-0 items-stretch overflow-hidden rounded-full border border-razo-blue/25 shadow-sm">
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE}`}
              className="flex items-center gap-1.5 whitespace-nowrap bg-white px-3 text-xs font-semibold text-razo-blue transition-colors hover:bg-razo-blue/5 xl:px-4 xl:text-[13px]"
            >
              <Phone size={14} className="shrink-0" />
              Call Us
            </a>
            <Link
              href={homeRoutes.contact}
              className="flex items-center gap-1.5 whitespace-nowrap bg-razo-blue px-3 text-[13px] font-bold text-white transition-colors hover:bg-razo-blue-dark xl:px-4"
            >
              Book Your Session
              <ArrowRight size={14} className="hidden shrink-0 xl:block" />
            </Link>
          </div>
        </div>

        {/* Mobile toggles */}
        <div className="ml-auto flex shrink-0 items-center gap-1 lg:hidden">
          <a
            href={PHONE_HREF}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue"
            aria-label="Call us"
          >
            <Phone size={17} />
          </a>
          <button
            onClick={() => setSearchOpen((p) => !p)}
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      {searchOpen && (
        <form
          onSubmit={handleSearch}
          className="border-t border-gray-100 px-4 py-2.5 lg:hidden"
        >
          <div className="flex h-10 items-center rounded-full border border-gray-200 bg-gray-50 px-3">
            <Search size={15} className="shrink-0 text-gray-400" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="min-w-0 flex-1 bg-transparent py-2 pl-2 text-sm outline-none"
              autoFocus
            />
          </div>
        </form>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="max-h-[70vh] overflow-y-auto px-4 py-4">
            {navLinks.map((link) =>
              "hasMegaMenu" in link && link.hasMegaMenu ? (
                <div key={link.label} className="mb-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileAboutOpen(false);
                      setMobileIndustryOpen(false);
                      setMobileServicesOpen((p) => !p);
                    }}
                    className={`relative flex w-full items-center justify-between overflow-hidden rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isLinkActive(link.href, "services")
                        ? "text-razo-blue"
                        : "text-gray-800 hover:text-razo-blue"
                    }`}
                    aria-current={
                      isLinkActive(link.href, "services") ? "page" : undefined
                    }
                  >
                    {isLinkActive(link.href, "services") && (
                      <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-razo-blue" />
                    )}
                    {isLinkActive(link.href, "services") && (
                      <span className="absolute inset-0 bg-razo-blue/[0.06]" />
                    )}
                    <span className="relative z-10">Services</span>
                    <ChevronDown
                      size={16}
                      className={`relative z-10 text-razo-blue transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="px-1 pb-2">
                      <ServicesMegaMenu
                        variant="mobile"
                        onClose={() => {
                          setIsOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : "hasAboutMenu" in link && link.hasAboutMenu ? (
                <div key={link.label} className="mb-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileServicesOpen(false);
                      setMobileIndustryOpen(false);
                      setMobileAboutOpen((p) => !p);
                    }}
                    className={`relative flex w-full items-center justify-between overflow-hidden rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isLinkActive(link.href, "about")
                        ? "text-razo-blue"
                        : "text-gray-800 hover:text-razo-blue"
                    }`}
                    aria-current={
                      isLinkActive(link.href, "about") ? "page" : undefined
                    }
                  >
                    {isLinkActive(link.href, "about") && (
                      <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-razo-blue" />
                    )}
                    {isLinkActive(link.href, "about") && (
                      <span className="absolute inset-0 bg-razo-blue/[0.06]" />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown
                      size={16}
                      className={`relative z-10 text-razo-blue transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileAboutOpen && (
                    <AboutDropdown
                      variant="mobile"
                      onClose={() => {
                        setIsOpen(false);
                        setMobileAboutOpen(false);
                      }}
                    />
                  )}
                </div>
              ) : "hasIndustryMenu" in link && link.hasIndustryMenu ? (
                <div key={link.label} className="mb-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileServicesOpen(false);
                      setMobileAboutOpen(false);
                      setMobileIndustryOpen((p) => !p);
                    }}
                    className={`relative flex w-full items-center justify-between overflow-hidden rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                      isLinkActive(link.href, "industry")
                        ? "text-razo-blue"
                        : "text-gray-800 hover:text-razo-blue"
                    }`}
                    aria-current={
                      isLinkActive(link.href, "industry") ? "page" : undefined
                    }
                  >
                    {isLinkActive(link.href, "industry") && (
                      <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-razo-blue" />
                    )}
                    {isLinkActive(link.href, "industry") && (
                      <span className="absolute inset-0 bg-razo-blue/[0.06]" />
                    )}
                    <span className="relative z-10">Industry</span>
                    <ChevronDown
                      size={16}
                      className={`relative z-10 text-razo-blue transition-transform duration-200 ${mobileIndustryOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileIndustryOpen && (
                    <IndustryDropdown
                      variant="mobile"
                      onClose={() => {
                        setIsOpen(false);
                        setMobileIndustryOpen(false);
                      }}
                    />
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setIsOpen(false);
                    if (isHome) setActiveSection(sectionFromHref(link.href));
                  }}
                  className={`relative block overflow-hidden rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isLinkActive(link.href)
                      ? "text-razo-blue"
                      : "text-gray-800 hover:text-razo-blue"
                  }`}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                >
                  {isLinkActive(link.href) && (
                    <span className="absolute inset-y-1.5 left-0 w-0.5 rounded-full bg-razo-blue" />
                  )}
                  {isLinkActive(link.href) && (
                    <span className="absolute inset-0 bg-razo-blue/[0.06]" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            )}

            {/* Mobile CTA row — one line */}
            <div className="mt-4 flex gap-2 border-t border-gray-100 pt-4">
              <a
                href={PHONE_HREF}
                aria-label={`Call ${PHONE}`}
                className="flex h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-razo-blue/25 bg-white text-xs font-semibold text-razo-blue sm:text-sm"
              >
                <Phone size={15} className="shrink-0" />
                Call Us
              </a>
              <Link
                href={homeRoutes.contact}
                onClick={() => setIsOpen(false)}
                className="flex h-11 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-razo-blue text-xs font-bold text-white sm:text-sm"
              >
                Book Session
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
