import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SubPageHero from "@/components/pages/SubPageHero";
import { homeRoutes } from "@/lib/routes";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Razobyte",
  description:
    "Join Razobyte — build websites, apps, CRM, ERP, and digital products with a passionate team in Gurgaon.",
};

const openings = [
  {
    title: "Full Stack Developer",
    type: "Full-time · Gurgaon",
    tags: ["React", "Node.js", "Laravel"],
  },
  {
    title: "UI/UX Designer",
    type: "Full-time · Remote / Hybrid",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    title: "Digital Marketing Specialist",
    type: "Full-time · Gurgaon",
    tags: ["SEO", "Google Ads", "Analytics"],
  },
  {
    title: "Business Development Executive",
    type: "Full-time · Gurgaon",
    tags: ["B2B Sales", "IT Services", "Client Relations"],
  },
];

const perks = [
  "Collaborative, growth-focused culture",
  "Work on diverse client projects",
  "Learning & skill development support",
  "Flexible hybrid options for eligible roles",
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <SubPageHero
          eyebrow="Careers"
          title="Build the Future with Razobyte"
          description="We're always looking for curious, driven people who care about quality work and meaningful client outcomes."
        />

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {perks.map((perk) => (
              <div
                key={perk}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
              >
                {perk}
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-xl font-bold text-white">Open Positions</h2>
          <div className="mt-6 space-y-4">
            {openings.map((job) => (
              <article
                key={job.title}
                className="glass-card rounded-2xl p-5 transition-colors hover:border-razo-blue/30 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-white/50">
                      <Briefcase size={14} />
                      {job.type}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={homeRoutes.contact}
                    className="inline-flex items-center gap-1.5 rounded-full bg-razo-blue px-4 py-2 text-xs font-bold text-white hover:bg-razo-blue-dark"
                  >
                    Apply
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-razo-blue/20 bg-razo-blue/5 p-6 text-center sm:p-8">
            <MapPin className="mx-auto text-razo-blue-light" size={24} />
            <p className="mt-3 font-semibold text-white">Don&apos;t see your role?</p>
            <p className="mt-1 text-sm text-white/55">
              Send your resume — we&apos;re open to exceptional talent across disciplines.
            </p>
            <Link
              href={homeRoutes.contact}
              className="btn-3d mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
            >
              <Clock size={14} />
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
