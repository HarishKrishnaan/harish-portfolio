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
    <section id={id} className="relative pl-14 sm:pl-[68px] py-12 sm:py-14">
      <div
        aria-hidden="true"
        className="absolute left-0 sm:left-6 top-[60px] w-5 h-5 rounded-full bg-panel border-2 border-gold"
      />
      <p className="font-display font-bold text-[12.5px] uppercase tracking-[0.1em] text-gold mb-2.5">
        {label}
      </p>
      <h2 className="font-display font-bold text-[26px] text-cream mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
