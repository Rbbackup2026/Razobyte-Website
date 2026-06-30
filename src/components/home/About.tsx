"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatYearsPlus } from "@/lib/company";
import { homeRoutes } from "@/lib/routes";

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="orb right-0 top-1/2 h-72 w-72 -translate-y-1/2 bg-razo-blue/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="tilt-card relative overflow-hidden rounded-3xl shadow-2xl shadow-razo-blue/15">
              <Image
                src="https://res.cloudinary.com/ddcx08e0s/image/upload/v1782824015/lofg_ty81rw.png"
                alt="Razobyte - We Build Websites, Applications, Digital Success"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="glass-card absolute -bottom-6 -right-4 rounded-2xl px-6 py-4 sm:-right-8">
              <p className="text-2xl font-bold text-razo-blue-light">{formatYearsPlus()}</p>
              <p className="text-sm text-white/60">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Your Trusted Partner for{" "}
              <span className="gradient-text-blue">IT Consulting</span> & Digital
              Transformation
            </h2>
            <p className="mt-6 text-white/60 leading-relaxed">
              At Razobyte, we empower businesses to thrive in the digital age.
              As a leading provider of innovative digital solutions, we specialize
              in delivering top-notch IT services, result-driven digital marketing
              strategies, and cutting-edge web and mobile app development.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Our collaborative approach fosters open communication and
              transparency, ensuring a seamless partnership that drives your
              success — from startups to established enterprises.
            </p>
            <a
              href={homeRoutes.aboutVideo}
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-razo-blue-light transition-colors hover:text-white"
            >
              Watch Our Story
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
