"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const YOUTUBE_VIDEO_ID = "qW0pNw_LROU";

export default function AboutVideo() {
  const [showVideo, setShowVideo] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section id="about-video" className="relative pb-20 pt-4 lg:pb-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setShowVideo(true)}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            Our Story
          </span>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            See How We Build{" "}
            <span className="gradient-text-blue">Digital Excellence</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-razo-blue/10"
        >
          <div className="relative aspect-video w-full bg-razo-dark">
            {showVideo ? (
              <iframe
                src={embedUrl}
                title="Razobyte — Developing Digital Solutions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-10 w-10 animate-pulse rounded-full bg-razo-blue/30" />
              </div>
            )}
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
