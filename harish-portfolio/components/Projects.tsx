import Pitch from "./Pitch";

type Project = {
  name: string;
  stack: string;
  bullets: string[];
  linkLabel: string;
  linkHref: string;
};

// Update fpa's linkHref once the Streamlit app is deployed —
// swap it from the GitHub source to the live share.streamlit.io URL.
const projects: Project[] = [
  {
    name: "FP&A Forecasting & Variance Dashboard",
    stack: "Python · Streamlit · Pandas · Plotly · SQLite · openpyxl",
    bullets: [
      "Imports business data, validates inputs, generates KPIs, tracks run history",
      "SQLite-backed run history and automated Excel report exports",
      "Interactive dashboards for forecasting and variance analysis",
    ],
    linkLabel: "Source ↗",
    linkHref: "https://github.com/HarishKrishnaan/fpa-dashboard",
  },
  {
    name: "Row Counter",
    stack: "JavaScript · HTML · CSS",
    bullets: [
      "Front-end counting application handling user actions, edge cases, and errors",
      "Tested across varied inputs, refined for usability and reliability",
    ],
    linkLabel: "Source ↗",
    linkHref: "https://github.com/HarishKrishnaan/Row-Counter",
  },
];

export default function Projects() {
  return (
    <Pitch id="projects" label="Pitch 3 — Routes climbed" title="Projects">
      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div key={p.name} className="bg-panel rounded-lg px-6 sm:px-7 py-6">
            <div className="flex justify-between items-baseline flex-wrap gap-3">
              <h3 className="font-display font-bold text-[19px] text-cream">
                {p.name}
              </h3>
              <a
                href={p.linkHref}
                target="_blank"
                rel="noreferrer"
                className="text-[12.5px] text-gold border-b border-gold no-underline"
              >
                {p.linkLabel}
              </a>
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
