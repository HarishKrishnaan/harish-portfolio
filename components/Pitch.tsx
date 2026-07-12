export default function Pitch({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative pl-14 sm:pl-[68px] py-6 sm:py-8 scroll-mt-8">
      <a
        href={`#${id}`}
        aria-label={`Jump to ${title} section`}
        className="absolute left-0 sm:left-6 top-[52px] sm:top-[68px] w-5 h-5 rounded-full bg-panel border-2 border-gold block transition-shadow duration-300 hover:shadow-[0_0_12px_2px_rgba(217,166,46,0.5)] cursor-pointer"
      />
      <div className="border border-line/50 rounded-md px-6 sm:px-8 py-7 sm:py-9">
        <p className="font-display font-bold text-[12.5px] uppercase tracking-[0.1em] text-gold mb-2.5">
          {label}
        </p>
        <h2 className="font-display font-bold text-[26px] text-cream mb-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}