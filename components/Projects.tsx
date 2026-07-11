// components/Projects.tsx
import Pitch from "./Pitch";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  stack: string;
  bullets: string[];
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    name: "FP&A Forecasting & Variance Dashboard",
    stack: "Python · Streamlit · Pandas · Plotly · SQLite · openpyxl",
    bullets: [
      "Imports business data, validates inputs, generates KPIs, tracks run history",
      "SQLite-backed run history and automated Excel report exports",
      "Interactive dashboards for forecasting and variance analysis",
    ],
    links: [
      { label: "Live Demo ↗", href: "https://fpnadashboardhk.streamlit.app/" },
      { label: "Source Code ↗", href: "https://github.com/HarishKrishnaan/fpa-dashboard" },
    ],
  },
  {
    name: "Row Counter",
    stack: "JavaScript · HTML · CSS",
    bullets: [
      "Front-end counting application handling user actions, edge cases, and errors",
      "Tested across varied inputs, refined for usability and reliability",
    ],
    links: [
      { label: "Live Demo ↗", href: "https://row-counter-inky.vercel.app/" },
      { label: "Source Code ↗", href: "https://github.com/HarishKrishnaan/Row-Counter" },
    ],
  },
];

export default function Projects() {
  return (
    <Pitch id="projects" label="Pitch 3 — Routes climbed" title="Projects">
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-panel rounded-lg px-6 sm:px-7 py-6 transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-transparent hover:border-gold/30"
          >
            <div className="flex justify-between items-baseline flex-wrap gap-3">
              <h3 className="font-display font-bold text-[19px] text-cream">
                {p.name}
              </h3>
              <div className="flex gap-4 flex-wrap">
                {p.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12.5px] text-gold border-b border-gold no-underline transition-all duration-200 hover:text-cream hover:border-cream"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-[12.5px] text-soft my-2 tracking-wide">
              {p.stack}
            </p>
            <ul className="list-disc pl-[18px] text-soft text-[14.5px] leading-relaxed marker:text-gold">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Pitch>
  );
}