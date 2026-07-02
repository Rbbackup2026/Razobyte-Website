"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type FAQBackgroundProps = {
  variant?: "light" | "dark";
};

type PaperPlaneProps = {
  size?: number;
  body?: string;
  wingL?: string;
  wingR?: string;
  crease?: string;
  style?: "classic" | "minimal" | "craft";
};

function StaticBackdrop({ isLight }: { isLight: boolean }) {
  return (
    <>
      <div
        className={`absolute inset-0 ${
          isLight
            ? "bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(43,141,239,0.09),transparent),radial-gradient(ellipse_60%_40%_at_90%_90%,rgba(129,140,248,0.07),transparent)]"
            : "bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(43,141,239,0.14),transparent),radial-gradient(ellipse_50%_35%_at_10%_100%,rgba(99,102,241,0.1),transparent)]"
        }`}
      />
      <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
    </>
  );
}

function PaperPlane3D({
  size = 48,
  body = "#2b8def",
  wingL = "#60a5fa",
  wingR = "#1d6fc4",
  crease = "rgba(255,255,255,0.45)",
  style = "classic",
}: PaperPlaneProps) {
  if (style === "minimal") {
    return (
      <svg width={size} height={size} viewBox="0 0 80 80" className="drop-shadow-lg">
        <path d="M40 6 L8 50 L40 38 L72 50 Z" fill={body} />
        <path d="M40 38 L40 74" stroke={wingR} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (style === "craft") {
    return (
      <svg width={size} height={size} viewBox="0 0 80 80" className="drop-shadow-lg">
        <path d="M40 4 L6 52 L40 36 L74 52 Z" fill={body} />
        <path d="M40 36 L18 62 L40 50 Z" fill={wingL} opacity="0.9" />
        <path d="M40 36 L62 62 L40 50 Z" fill={wingR} opacity="0.75" />
        <path d="M40 4 L40 50" stroke={crease} strokeWidth="1.2" />
        <circle cx="40" cy="36" r="2" fill={crease} />
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-lg">
      <defs>
        <linearGradient id="planeBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={wingL} />
          <stop offset="100%" stopColor={body} />
        </linearGradient>
      </defs>
      <path d="M50 6 L10 56 L50 42 L90 56 Z" fill="url(#planeBody)" />
      <path d="M50 42 L24 70 L50 56 Z" fill={wingL} opacity="0.88" />
      <path d="M50 42 L76 70 L50 56 Z" fill={wingR} opacity="0.72" />
      <path d="M50 6 L50 56" stroke={crease} strokeWidth="1.2" />
      <path d="M50 42 L50 94" stroke={wingR} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function PathPlane({
  path,
  size,
  duration,
  delay = 0,
  planeProps,
  perspective = 600,
}: {
  path: string;
  size: number;
  duration: number;
  delay?: number;
  planeProps: PaperPlaneProps;
  perspective?: number;
}) {
  return (
    <div className="absolute left-0 top-0 h-full w-full" style={{ perspective }}>
      <motion.div
        className="absolute will-change-transform"
        style={{
          offsetPath: `path('${path}')`,
          offsetRotate: "auto",
        }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      >
        <motion.div
          animate={{
            rotateY: [0, 18, -12, 8, 0],
            rotateX: [0, -8, 6, -4, 0],
            scale: [1, 1.05, 0.96, 1.02, 1],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <PaperPlane3D size={size} {...planeProps} />
        </motion.div>
      </motion.div>
    </div>
  );
}

/** Precomputed orbit slots — avoids Math.cos hydration float drift in inline styles */
const ORBIT_SLOTS = {
  r90: [
    { left: "78px", top: "18px" },
    { left: "96px", top: "66px" },
    { left: "66px", top: "108px" },
    { left: "24px", top: "96px" },
    { left: "6px", top: "48px" },
  ],
  r130: [
    { left: "118px", top: "24px" },
    { left: "136px", top: "96px" },
    { left: "72px", top: "148px" },
    { left: "8px", top: "72px" },
  ],
} as const;

function OrbitRing({
  slots,
  planeSizes,
  duration,
  reverse,
  centerY,
  boxSize,
}: {
  slots: readonly { left: string; top: string }[];
  planeSizes: number[];
  duration: number;
  reverse?: boolean;
  centerY: string;
  boxSize: number;
}) {
  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top: centerY, width: boxSize, height: boxSize }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {slots.map((pos, i) => (
        <div
          key={i}
          className="absolute opacity-30"
          style={{ left: pos.left, top: pos.top }}
        >
          <motion.div
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            <PaperPlane3D
              size={planeSizes[i] ?? 18}
              style={i % 3 === 0 ? "minimal" : "craft"}
              body={i % 2 === 0 ? "#38bdf8" : "#818cf8"}
              wingL="#7dd3fc"
              wingR="#6366f1"
            />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

function LaunchPlane({
  startX,
  startY,
  colors,
  delay,
}: {
  startX: string;
  startY: string;
  colors: PaperPlaneProps;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: startX, top: startY }}
      initial={{ opacity: 0, scale: 0.3, rotate: -40 }}
      animate={{
        opacity: [0, 0.7, 0.7, 0],
        scale: [0.3, 1, 1, 0.6],
        x: [0, 40, 120, 220],
        y: [0, -60, -100, -140],
        rotate: [-40, -20, -8, 5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeOut",
        delay,
        times: [0, 0.15, 0.7, 1],
      }}
    >
      <PaperPlane3D size={32} style="craft" {...colors} />
      <motion.span
        className="absolute right-full top-1/2 mr-2 h-px w-8 bg-gradient-to-l from-razo-blue/30 to-transparent"
        animate={{ scaleX: [0.4, 1, 0.6], opacity: [0.2, 0.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay, ease: "easeOut" }}
      />
    </motion.div>
  );
}

function AnimatedLayer({ isLight }: { isLight: boolean }) {
  const blueSet: PaperPlaneProps = {
    body: "#2b8def",
    wingL: "#60a5fa",
    wingR: "#1558a0",
    style: "classic",
  };
  const skySet: PaperPlaneProps = {
    body: "#0ea5e9",
    wingL: "#7dd3fc",
    wingR: "#0284c7",
    style: "craft",
  };
  const violetSet: PaperPlaneProps = {
    body: "#6366f1",
    wingL: "#a5b4fc",
    wingR: "#4f46e5",
    style: "minimal",
  };

  const swoopPath = "M -40 180 Q 180 40, 400 120 T 900 80 T 1400 140";
  const loopPath =
    "M -60 320 Q 200 80, 420 200 Q 640 320, 500 420 Q 360 520, 180 400 Q 0 280, 200 180 Q 400 80, 700 160 T 1200 100";
  const wavePath = "M 1300 60 Q 1000 180, 700 100 Q 400 20, 100 120 Q -200 220, -80 280";

  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className={`h-48 w-48 rounded-full border border-dashed sm:h-64 sm:w-64 ${
            isLight ? "border-razo-blue/20" : "border-sky-400/25"
          }`}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`absolute inset-4 rounded-full border ${
            isLight ? "border-razo-blue/10" : "border-white/5"
          }`}
        />
        <motion.span
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.35em] text-razo-blue/40"
        >
          Ideas
        </motion.span>
      </div>

      <OrbitRing
        slots={ORBIT_SLOTS.r90}
        planeSizes={[18, 22, 18, 22, 18]}
        duration={28}
        centerY="42%"
        boxSize={180}
      />
      <OrbitRing
        slots={ORBIT_SLOTS.r130}
        planeSizes={[18, 22, 18, 22]}
        duration={36}
        reverse
        centerY="48%"
        boxSize={260}
      />

      <PathPlane path={swoopPath} size={52} duration={26} planeProps={blueSet} />
      <PathPlane path={loopPath} size={40} duration={34} delay={8} planeProps={skySet} />
      <PathPlane path={wavePath} size={36} duration={22} delay={4} planeProps={violetSet} />

      <LaunchPlane startX="18%" startY="88%" colors={skySet} delay={0} />
      <LaunchPlane startX="72%" startY="92%" colors={violetSet} delay={4} />
      <LaunchPlane startX="45%" startY="95%" colors={blueSet} delay={7} />

      <svg
        className="absolute left-[5%] top-[25%] h-16 w-28 opacity-20 sm:h-20 sm:w-36"
        viewBox="0 0 120 60"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M8 42 Q35 12, 70 28 T112 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-razo-blue"
          strokeDasharray="3 6"
          animate={{ strokeDashoffset: [0, -36] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      <svg
        className="absolute right-[8%] top-[60%] h-14 w-24 rotate-12 opacity-15 sm:w-32"
        viewBox="0 0 120 60"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M112 38 Q80 8, 45 22 T8 14"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-indigo-400"
          strokeDasharray="3 6"
          animate={{ strokeDashoffset: [0, 36] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {[
        { x: "12%", y: "18%", r: 12, d: 7 },
        { x: "78%", y: "22%", r: -18, d: 9 },
        { x: "85%", y: "68%", r: 8, d: 6 },
        { x: "22%", y: "74%", r: -10, d: 8 },
        { x: "55%", y: "12%", r: 6, d: 10 },
      ].map((scrap, i) => (
        <motion.div
          key={i}
          className={`absolute h-3 w-2 rounded-sm ${
            isLight ? "bg-razo-blue/15" : "bg-sky-300/20"
          }`}
          style={{ left: scrap.x, top: scrap.y, rotate: `${scrap.r}deg` }}
          animate={{
            y: [0, -40, -20, -55, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            rotate: [`${scrap.r}deg`, `${scrap.r + 20}deg`, `${scrap.r - 10}deg`, `${scrap.r}deg`],
            opacity: [0.2, 0.55, 0.35, 0.2],
          }}
          transition={{
            duration: scrap.d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      <motion.div
        className="absolute left-[30%] top-[30%] blur-[1px] opacity-20"
        animate={{ x: [0, 30, -15, 20, 0], y: [0, -20, 10, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <PaperPlane3D size={64} style="minimal" body="#94a3b8" wingL="#cbd5e1" wingR="#64748b" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="orb absolute -left-24 top-10 h-56 w-56 bg-razo-blue/25"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="orb absolute -right-20 bottom-8 h-64 w-64 bg-sky-400/20"
      />
    </>
  );
}

export default function FAQBackground({ variant = "light" }: FAQBackgroundProps) {
  const isLight = variant === "light";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <StaticBackdrop isLight={isLight} />
      {mounted && <AnimatedLayer isLight={isLight} />}
    </div>
  );
}
