"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact" },
];

const stack = ["Next.js", "TypeScript", "Dijkstra", "Greedy TSP"];

export default function Sidebar() {
  const [active, setActive] = useState("about");
  const [hideStreakCard, setHideStreakCard] = useState(false);
  const [hideBuildingCard, setHideBuildingCard] = useState(false);
  const streakCardRef = useRef<HTMLDivElement>(null);
  const buildingCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
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
      if (el) sectionObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    function handleFooterProximity() {
      const footerEl = document.getElementById("site-footer");
      if (!footerEl) return;
      const footerTop = footerEl.getBoundingClientRect().top;

      if (streakCardRef.current) {
        setHideStreakCard(footerTop <= streakCardRef.current.getBoundingClientRect().bottom);
      }
      if (buildingCardRef.current) {
        setHideBuildingCard(footerTop <= buildingCardRef.current.getBoundingClientRect().bottom);
      }
    }

    handleFooterProximity();
    window.addEventListener("scroll", handleFooterProximity, { passive: true });
    window.addEventListener("resize", handleFooterProximity);
    return () => {
      window.removeEventListener("scroll", handleFooterProximity);
      window.removeEventListener("resize", handleFooterProximity);
    };
  }, []);

  return (
    <div className="hidden 2xl:block fixed left-11 top-11 w-[260px]">
      <nav aria-label="Section navigation" className="flex flex-col gap-1.5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`h-10 flex items-center px-5 rounded-md border text-[13px] font-display font-bold uppercase tracking-wide transition-all duration-200 ${
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

      <div
        ref={streakCardRef}
        className={`mt-4 border border-line/50 rounded-md p-3.5 transition-opacity duration-300 ${
          hideStreakCard ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <p className="font-display font-bold text-[11.5px] uppercase tracking-wide text-gold">
            GitHub Streak
          </p>
        </div>
        <img
          src="https://streak-stats.demolab.com/?user=HarishKrishnaan&theme=dark&hide_border=true&background=00000000&ring=D9A62E&fire=D9A62E&currStreakLabel=EDE9DD&currStreakNum=EDE9DD&sideNums=EDE9DD&sideLabels=A8A79B&dates=6B6E76&card_width=220"
          alt="Harish Krishnan's GitHub streak stats"
          className="w-full h-auto"
        />
        <a
          href="https://github.com/HarishKrishnaan"
          target="_blank"
          rel="noreferrer"
          className="block mt-1.5 text-[11.5px] text-soft transition-colors duration-200 hover:text-gold"
        >
          View profile ↗
        </a>
      </div>

      <div
        ref={buildingCardRef}
        className={`mt-3 border border-line/50 rounded-md p-3.5 transition-opacity duration-300 ${
          hideBuildingCard ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          <p className="font-display font-bold text-[11.5px] uppercase tracking-wide text-gold">
            Currently Building
          </p>
        </div>
        <p className="text-cream text-[14px] font-display font-bold mb-1">
          Grocery Store Navigator
        </p>
        <p className="text-soft text-[12px] leading-snug mb-2.5">
          Fastest walking route through a store, aisle by aisle.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 border border-line text-soft rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}