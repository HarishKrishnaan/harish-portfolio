export default function Footer() {
  return (
    <footer className="border-t border-line/40">
      <div className="max-w-[920px] mx-auto pl-14 sm:pl-[68px] pr-4 sm:pr-6 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-bold text-cream text-[15px]">
            Harish Krishnan
          </p>
          <p className="text-soft text-[13.5px] mt-2 max-w-[32ch] leading-relaxed">
            Software developer building front-end and UI/UX work worth
            climbing toward.
          </p>
        </div>

        <div>
          <p className="font-display font-bold text-gold text-[11px] uppercase tracking-wide mb-3">
            Navigate
          </p>
          <div className="flex flex-col gap-2">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-cream text-[14px] no-underline w-fit transition-colors duration-200 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display font-bold text-gold text-[11px] uppercase tracking-wide mb-3">
            Connect
          </p>
          <div className="flex flex-col gap-2">
            <a href="mailto:harkrishnan2e@gmail.com" className="text-cream text-[14px] no-underline w-fit transition-colors duration-200 hover:text-gold">
              Email ↗
            </a>
            <a href="https://github.com/HarishKrishnaan" target="_blank" rel="noreferrer" className="text-cream text-[14px] no-underline w-fit transition-colors duration-200 hover:text-gold">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/harish-krishnan-568579325/" target="_blank" rel="noreferrer" className="text-cream text-[14px] no-underline w-fit transition-colors duration-200 hover:text-gold">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line/40">
        <div className="max-w-[920px] mx-auto pl-14 sm:pl-[68px] pr-4 sm:pr-6 py-5 flex justify-between items-center text-[11.5px] text-soft">
          <span>© 2026 Harish Krishnan</span>
          <span>Built with Next.js + TypeScript</span>
        </div>
      </div>
    </footer>
  );
}