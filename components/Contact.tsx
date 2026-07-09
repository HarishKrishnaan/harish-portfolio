// Replace the LinkedIn href below with your real profile URL once you have it handy.
const links = [
  { label: "Email", href: "mailto:harkrishnan2e@gmail.com" },
  { label: "GitHub", href: "https://github.com/HarishKrishnaan/profile" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harish-krishnan-568579325/" },
  { label: "Resume", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <footer className="relative pl-14 sm:pl-[68px] py-12 sm:py-14 pb-24">
      <div
        aria-hidden="true"
        className="absolute left-0 sm:left-6 top-[60px] w-5 h-5 rounded-full bg-panel border-2 border-gold"
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
            className="text-cream text-[15px] no-underline border-b border-soft hover:text-gold hover:border-gold transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
