type SubPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SubPageHero({
  eyebrow,
  title,
  description,
}: SubPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-razo-black py-16 sm:py-20">
      <div className="orb -right-20 top-0 h-64 w-64 bg-razo-blue/20" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-widest text-razo-blue">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">{description}</p>
      </div>
    </section>
  );
}
