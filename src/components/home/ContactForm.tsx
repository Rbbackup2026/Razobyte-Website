"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="orb right-0 top-0 h-80 w-80 bg-razo-blue/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden rounded-3xl"
          >
            <div className="bg-gradient-to-r from-razo-blue to-razo-blue-dark px-8 py-6">
              <h2 className="text-2xl font-bold text-white">Book Your Session</h2>
              <p className="mt-1 text-sm text-white/80">
                Let&apos;s discuss your project requirements
              </p>
            </div>
            <form
              className="space-y-4 p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-razo-blue"
              />
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/60 outline-none transition-colors focus:border-razo-blue">
                <option value="">Select Service</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="design">UI/UX Design</option>
              </select>
              <button
                type="submit"
                className="btn-3d flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white"
              >
                <Send size={16} />
                Submit Request
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="tilt-card overflow-hidden rounded-3xl">
              <Image
                src="/images/contact.jpg"
                alt="Consultation meeting"
                width={600}
                height={500}
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="mt-6 flex gap-4">
              <div className="glass-card flex-1 rounded-2xl p-4 text-center">
                <p className="text-xs text-white/50">Google Partner</p>
                <p className="mt-1 text-lg font-bold text-razo-blue-light">
                  ★★★★★
                </p>
              </div>
              <div className="glass-card flex-1 rounded-2xl p-4 text-center">
                <p className="text-xs text-white/50">Meta Business Partner</p>
                <p className="mt-1 text-lg font-bold text-razo-blue-light">
                  Certified
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
