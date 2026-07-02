"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { ProductFaq } from "@/lib/productFaqs";
import FAQBackground from "@/components/shared/FAQBackground";

type ProductFAQProps = {
  faqs: ProductFaq[];
  label?: string;
  title?: string;
  description?: string;
  variant?: "light" | "dark";
};

export default function ProductFAQ({
  faqs,
  label = "FAQ",
  title = "Frequently Asked Questions",
  description,
  variant = "light",
}: ProductFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLight = variant === "light";

  return (
    <section
      className={`relative overflow-hidden ${
        isLight
          ? "border-t border-gray-100 bg-razo-surface py-20 lg:py-28"
          : "border-t border-white/5 bg-razo-black py-20 lg:py-28"
      }`}
    >
      <FAQBackground variant={isLight ? "light" : "dark"} />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            {label}
          </span>
          <h2
            className={`mt-3 text-2xl font-bold sm:text-3xl ${
              isLight ? "text-razo-dark" : "text-white"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mx-auto mt-4 max-w-xl text-sm sm:text-base ${
                isLight ? "text-razo-gray" : "text-white/55"
              }`}
            >
              {description}
            </p>
          )}
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={
                isLight
                  ? "glass-card-light overflow-hidden rounded-2xl"
                  : "glass-card overflow-hidden rounded-2xl border border-white/10"
              }
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                aria-expanded={openIndex === i}
              >
                <span
                  className={`font-semibold ${
                    isLight ? "text-razo-dark" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-razo-blue/10 text-razo-blue">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className={`border-t px-5 pb-5 pt-3 sm:px-6 sm:pb-6 ${
                        isLight
                          ? "border-razo-blue/10 text-razo-gray"
                          : "border-white/10 text-white/60"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
