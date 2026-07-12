const links = [
  { label: "Email", href: "mailto:harkrishnan2e@gmail.com" },
  { label: "GitHub", href: "https://github.com/HarishKrishnaan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harish-krishnan-568579325/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative pl-14 sm:pl-[68px] py-12 sm:py-14 pb-24 scroll-mt-8 border-t border-line/40">
      <a
        href="#contact"
        aria-label="Jump to Contact section"
        className="absolute left-0 sm:left-6 top-[60px] w-5 h-5 rounded-full bg-panel border-2 border-gold block transition-shadow duration-300 hover:shadow-[0_0_12px_2px_rgba(217,166,46,0.5)] cursor-pointer"
      />
      <p className="font-display font-bold text-[12.5px] uppercase tracking-[0.12em] text-gold">
        Summit — Contact
      </p>
      <h2 className="font-display font-bold text-[26px] text-cream mt-2.5 mb-5">
        Let&apos;s connect
      </h2>
      <div className="flex flex-wrap gap-6">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            className="text-cream text-[15px] no-underline border-b border-soft transition-all duration-200 hover:text-gold hover:border-gold hover:-translate-y-0.5 inline-block"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}