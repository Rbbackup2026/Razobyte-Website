"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY_LOGO_URL } from "@/lib/company";

const DISPLAY_MS = 3000;
const EXIT_MS = 500;

type Phase = "loading" | "exiting" | "done";

export default function PreloaderGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<Phase>("loading");
  const finishCalled = useRef(false);

  const finish = useCallback(() => {
    if (finishCalled.current) return;
    finishCalled.current = true;

    setPhase("exiting");
    window.setTimeout(() => setPhase("done"), EXIT_MS);
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [phase]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(finish, reduced ? 800 : DISPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [finish]);

  const showPreloader = phase !== "done";

  return (
    <>
      <AnimatePresence mode="wait">
        {showPreloader && (
          <motion.div
            key="preloader"
            className="preloader-root"
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "exiting" ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Loading Razobyte"
            role="status"
          >
            <div className="preloader-mesh" />
            <div className="preloader-grid" />
            <div className="preloader-orb preloader-orb-a" />
            <div className="preloader-orb preloader-orb-b" />

            <motion.div
              className="preloader-content"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: phase === "exiting" ? 0 : 1,
                scale: phase === "exiting" ? 1.04 : 1,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="preloader-logo-bounce">
                <Image
                  src={COMPANY_LOGO_URL}
                  alt="Razobyte"
                  width={220}
                  height={58}
                  className="preloader-logo"
                  style={{ width: "auto", height: "3rem" }}
                  priority
                />
              </div>

              <p className="preloader-tagline">Developing Digital Solutions</p>

              <div className="preloader-bar">
                <div className="preloader-bar-fill preloader-bar-timed" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        id="site-root"
        className={phase === "done" ? "site-ready" : "site-pending"}
      >
        {children}
      </div>
    </>
  );
}
