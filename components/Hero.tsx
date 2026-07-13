export default function Hero() {
  return (
    <header className="relative pl-14 sm:pl-[68px] pt-16 sm:pt-20 pb-6 sm:pb-8">
      <div
        aria-hidden="true"
        className="absolute left-0 sm:left-6 top-[97px] sm:top-[121px] w-5 h-5 rounded-full bg-gold border-4 border-bg"
      />
      <div className="border border-line/50 rounded-md px-6 sm:px-8 py-8 sm:py-10">
        <p className="font-display font-bold text-xs tracking-[0.16em] uppercase text-gold mb-4">
          Basecamp
        </p>
        <h1 className="font-display font-extrabold text-[42px] sm:text-[68px] leading-[0.98] tracking-tight text-cream">
          Harish Krishnan
        </h1>
        <p className="text-lg sm:text-[18px] text-soft mt-5 max-w-[50ch]">
          Software developer &amp; recent Rutgers CS grad, climbing toward
          front-end and UI/UX work worth building.
        </p>
        <div className="flex gap-8 sm:gap-9 mt-9 font-display">
          {[
            { n: "2026", l: "Rutgers grad" },
            { n: "15+", l: "Tools & languages" },
            { n: "NJ", l: "Based in" },
          ].map((s) => (
            <div
              key={s.l}
              className="transition-transform duration-200 hover:-translate-y-1 cursor-default"
            >
              <div className="text-xl sm:text-[22px] font-bold text-gold">{s.n}</div>
              <div className="text-[11px] uppercase tracking-wide text-soft mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}