"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, ChevronUp } from "lucide-react";

const SHOW_AFTER_PX = 380;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    setProgress(maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0);
    setVisible(scrollTop > SHOW_AFTER_PX);
  }, []);

  useEffect(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [updateScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 26;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 40 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="back-to-top-root fixed bottom-6 right-5 z-[90] sm:bottom-8 sm:right-8"
        >
          {/* Orbiting dot */}
          <motion.span
            className="back-to-top-orbit absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            aria-hidden
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-razo-blue-light shadow-[0_0_10px_rgba(90,168,245,0.8)]" />
          </motion.span>

          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full border border-razo-blue/30"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            aria-hidden
          />

          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="back-to-top-btn group relative flex h-[60px] w-[60px] items-center justify-center rounded-full outline-none sm:h-[68px] sm:w-[68px]"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.08, rotateX: 8, rotateY: -8 }}
            whileTap={{ scale: 0.94, y: 2 }}
            style={{ transformStyle: "preserve-3d", perspective: 800 }}
          >
            {/* Progress ring */}
            <svg
              className="absolute inset-0 -rotate-90"
              viewBox="0 0 60 60"
              aria-hidden
            >
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="rgba(43,141,239,0.15)"
                strokeWidth="3"
              />
              <circle
                cx="30"
                cy="30"
                r="26"
                fill="none"
                stroke="url(#bttGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-[stroke-dashoffset] duration-150"
              />
              <defs>
                <linearGradient id="bttGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5aa8f5" />
                  <stop offset="100%" stopColor="#2b8def" />
                </linearGradient>
              </defs>
            </svg>

            {/* 3D cap */}
            <span className="back-to-top-cap absolute inset-[6px] rounded-full" aria-hidden />

            {/* Icon stack */}
            <span className="relative z-10 flex flex-col items-center gap-0">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronUp
                  size={18}
                  className="text-white/90 drop-shadow-sm"
                  strokeWidth={2.5}
                />
              </motion.span>
              <ArrowUp
                size={14}
                className="-mt-2 text-razo-blue-light opacity-90 transition-transform group-hover:-translate-y-0.5"
                strokeWidth={2.5}
              />
            </span>

            {/* Tooltip label */}
            <span className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-full bg-razo-dark px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-all group-hover:opacity-100 group-hover:-translate-y-1">
              Top
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
