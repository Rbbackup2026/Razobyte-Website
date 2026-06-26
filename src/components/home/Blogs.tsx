"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { blogs } from "@/lib/data";
import { ArrowRight, Calendar } from "lucide-react";

export default function Blogs() {
  return (
    <section id="blogs" className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
            Insights
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Latest <span className="gradient-text-blue">Blogs</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="tilt-card group overflow-hidden rounded-3xl glass-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-white/50">
                  <Calendar size={14} />
                  {blog.date}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-razo-blue-light transition-colors">
                  {blog.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 line-clamp-2">
                  {blog.excerpt}
                </p>
                <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-razo-blue-light transition-colors hover:text-white">
                  Read more
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
