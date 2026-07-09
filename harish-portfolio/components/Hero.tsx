export default function Hero() {
  return (
    <header className="relative pl-14 sm:pl-[68px] pt-24 sm:pt-32 pb-16">
      <div
        aria-hidden="true"
        className="absolute left-0 sm:left-6 top-[104px] w-5 h-5 rounded-full bg-gold border-4 border-bg"
      />
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
        <div>
          <div className="text-xl sm:text-[22px] font-bold text-gold">2026</div>
          <div className="text-[11px] uppercase tracking-wide text-soft mt-1">
            Rutgers grad
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-[22px] font-bold text-gold">15+</div>
          <div className="text-[11px] uppercase tracking-wide text-soft mt-1">
            Tools &amp; languages
          </div>
        </div>
        <div>
          <div className="text-xl sm:text-[22px] font-bold text-gold">NJ</div>
          <div className="text-[11px] uppercase tracking-wide text-soft mt-1">
            Based in
          </div>
        </div>
      </div>
    </header>
  );
}
