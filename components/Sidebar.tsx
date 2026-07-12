"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex flex-col gap-2.5 fixed left-10 top-1/2 -translate-y-1/2 w-[150px]"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`px-4 py-3 rounded-md border text-[12.5px] font-display font-bold uppercase tracking-wide transition-all duration-200 ${
              isActive
                ? "border-gold bg-panel text-cream"
                : "border-line text-soft hover:border-gold/50 hover:text-cream hover:bg-panel/50"
            }`}
          >
            {s.label}
          </a>
        );
      })}
    </nav>
  );
}