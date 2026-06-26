import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { primaryPhone, primaryPhoneTel, whatsappHref } from "@/lib/data";
import { homeRoutes } from "@/lib/routes";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type ProductCTAProps = {
  title?: string;
  description?: string;
};

export default function ProductCTA({
  title = "Ready to build a system that fits your business?",
  description = "Talk to our team — book a consultation, call directly, or chat on WhatsApp.",
}: ProductCTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-razo-black py-16 lg:py-20">
      <div className="orb left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-razo-blue/15" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href={homeRoutes.contact}
            className="btn-3d inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
          >
            Book a Free Consultation
            <ArrowRight size={16} />
          </Link>

          <a
            href={primaryPhoneTel}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-razo-blue/40 hover:bg-razo-blue/10"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-razo-blue text-white">
              <Phone size={14} />
            </span>
            <span className="whitespace-nowrap">{primaryPhone}</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-400 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/15"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
              <WhatsAppIcon size={15} />
            </span>
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
