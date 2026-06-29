"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, ArrowRight, Zap, Sparkles, Box } from "lucide-react";
import { gamePages, type GameVariant } from "@/lib/gameDevelopment";
import { homeRoutes } from "@/lib/routes";

function LoadingBar({ accent }: { accent: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 97 ? 12 : p + Math.random() * 8));
    }, 400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto mt-8 w-full max-w-xs">
      <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/50">
        <span>Loading</span>
        <span style={{ color: accent }}>{Math.floor(progress)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: accent, width: `${progress}%` }}
          layout
        />
      </div>
    </div>
  );
}

function Visual2D({ accent }: { accent: string }) {
  const pixels = ["■", "▲", "●", "◆", "★", "♦"];
  return (
    <div className="relative flex h-64 w-full items-center justify-center sm:h-72">
      <div className="game-pixel-grid absolute inset-0 rounded-2xl opacity-60" />
      {pixels.map((p, i) => (
        <motion.span
          key={i}
          className="absolute font-mono text-lg sm:text-xl"
          style={{ color: accent, left: `${15 + (i % 3) * 30}%`, top: `${20 + Math.floor(i / 3) * 25}%` }}
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
        >
          {p}
        </motion.span>
      ))}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 rounded-2xl border-4 border-white/20 bg-black/40 px-8 py-6 font-mono shadow-2xl backdrop-blur-sm"
        style={{ boxShadow: `0 0 40px ${accent}44` }}
      >
        <p className="text-4xl font-black sm:text-5xl" style={{ color: accent, textShadow: `0 0 20px ${accent}` }}>
          2D
        </p>
        <p className="mt-1 text-center text-[10px] text-white/60">INSERT COIN</p>
      </motion.div>
    </div>
  );
}

function Visual3D({ accent }: { accent: string }) {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden sm:h-72">
      <div className="absolute inset-x-0 bottom-0 top-1/2 overflow-hidden opacity-40">
        <div className="game-perspective-grid absolute inset-0" />
      </div>
      <motion.div
        className="relative z-10 h-32 w-32"
        style={{ transformStyle: "preserve-3d", animation: "game-rotate-slow 8s linear infinite" }}
      >
        {[
          "translateZ(64px)",
          "rotateY(180deg) translateZ(64px)",
          "rotateY(90deg) translateZ(64px)",
          "rotateY(-90deg) translateZ(64px)",
          "rotateX(90deg) translateZ(64px)",
          "rotateX(-90deg) translateZ(64px)",
        ].map((transform, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 bg-white/5 backdrop-blur-sm"
            style={{
              transform,
              borderColor: accent,
              boxShadow: `inset 0 0 20px ${accent}33`,
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute h-40 w-40 rounded-full opacity-30 blur-3xl"
        style={{ background: accent, animation: "game-pulse-glow 3s ease-in-out infinite" }}
      />
    </div>
  );
}

function VisualMetaverse({ accent }: { accent: string }) {
  return (
    <div className="relative flex h-64 w-full items-center justify-center sm:h-72">
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border-2"
          style={{
            width: 120 + ring * 50,
            height: 120 + ring * 50,
            borderColor: `${accent}${ring === 0 ? "cc" : ring === 1 ? "66" : "33"}`,
          }}
          animate={{ rotate: ring % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 12 + ring * 4, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
        />
      ))}
      <motion.div
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-black/50 backdrop-blur-md"
        style={{ borderColor: accent, boxShadow: `0 0 60px ${accent}66` }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Box size={36} style={{ color: accent }} />
      </motion.div>
      {["VR", "WEB3", "AI"].map((tag, i) => (
        <motion.span
          key={tag}
          className="absolute rounded-full border px-2 py-0.5 text-[9px] font-bold"
          style={{
            color: accent,
            borderColor: `${accent}66`,
            left: `${20 + i * 28}%`,
            top: `${15 + (i % 2) * 55}%`,
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

export default function GameComingSoonContent({ variant }: { variant: GameVariant }) {
  const config = gamePages[variant];
  const Icon = variant === "2d" ? Zap : variant === "3d" ? Box : Sparkles;

  return (
    <main className={`relative min-h-screen overflow-hidden bg-gradient-to-b ${config.bgGradient} pt-28`}>
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {variant === "2d" && <div className="game-scanlines pointer-events-none absolute inset-0 z-20" />}

      <div className="orb left-1/4 top-20 h-64 w-64 opacity-30" style={{ background: config.glow }} />
      <div className="orb right-1/4 bottom-20 h-72 w-72 opacity-20" style={{ background: config.glow }} />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ borderColor: `${config.accent}44`, color: config.accentLight }}
        >
          <Gamepad2 size={14} />
          Game Development
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl"
          style={variant === "metaverse" ? { animation: "game-glitch 4s infinite" } : undefined}
        >
          {config.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.35em] sm:text-base"
          style={{ color: config.accent }}
        >
          {config.tagline}
          <span className="inline-block w-2 animate-[game-blink_1s_step-end_infinite]">_</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 w-full max-w-lg"
        >
          {variant === "2d" && <Visual2D accent={config.accent} />}
          {variant === "3d" && <Visual3D accent={config.accent} />}
          {variant === "metaverse" && <VisualMetaverse accent={config.accent} />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8"
        >
          <p
            className="text-4xl font-black uppercase tracking-wider sm:text-5xl lg:text-6xl"
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${config.accent}`,
              textShadow: `0 0 40px ${config.glow}`,
            }}
          >
            Coming Soon
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/55 sm:text-base"
        >
          {config.description}
        </motion.p>

        <LoadingBar accent={config.accent} />

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {config.features.map((f) => (
            <li
              key={f}
              className="rounded-full border px-3 py-1.5 text-[11px] font-medium text-white/70"
              style={{ borderColor: `${config.accent}33`, background: `${config.accent}11` }}
            >
              {f}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={homeRoutes.contact}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5"
            style={{ background: config.accent, boxShadow: `0 8px 32px ${config.glow}` }}
          >
            <Icon size={16} />
            Notify Me at Launch
          </Link>
          <Link
            href={homeRoutes.services}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
            style={{ borderColor: `${config.accent}44` }}
          >
            All Services
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/30">Also explore</span>
          {config.siblingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold hover:underline"
              style={{ color: config.accentLight }}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
