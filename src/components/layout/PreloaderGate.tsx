"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY_LOGO_URL } from "@/lib/company";

const DISPLAY_MS = 3000;
const EXIT_MS = 500;

type Phase = "loading" | "exiting" | "done";

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 17) % 88)}%`,
  delay: `${(i * 0.35) % 4}s`,
  duration: `${4.5 + (i % 4) * 0.8}s`,
  size: 3 + (i % 3),
}));

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
            <div className="preloader-orb preloader-orb-c" />

            <div className="preloader-particles" aria-hidden>
              {PARTICLES.map((p) => (
                <span
                  key={p.id}
                  className="preloader-particle"
                  style={{
                    left: p.left,
                    animationDelay: p.delay,
                    animationDuration: p.duration,
                    width: p.size,
                    height: p.size,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="preloader-content"
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: phase === "exiting" ? 0 : 1,
                y: phase === "exiting" ? -8 : 0,
                scale: phase === "exiting" ? 1.03 : 1,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="preloader-logo-stage">
                <span className="preloader-logo-ring preloader-logo-ring-a" aria-hidden />
                <span className="preloader-logo-ring preloader-logo-ring-b" aria-hidden />
                <span className="preloader-logo-glow" aria-hidden />

                <div className="preloader-logo-shine-wrap">
                  <Image
                    src={COMPANY_LOGO_URL}
                    alt="Razobyte"
                    width={260}
                    height={68}
                    className="preloader-logo preloader-logo-bright"
                    style={{ width: "auto", height: "3.25rem" }}
                    priority
                  />
                  <span className="preloader-logo-shine" aria-hidden />
                </div>
              </div>

              <motion.p
                className="preloader-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === "exiting" ? 0 : 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Developing Digital Solutions
              </motion.p>

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
