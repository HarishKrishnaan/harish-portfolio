import Pitch from "./Pitch";

const known = [
  "Java", "JavaScript", "Python", "HTML", "CSS", "C", "MySQL",
  "Streamlit", "Pandas", "Plotly", "openpyxl",
];

const learning = ["Next.js", "TypeScript", "Tailwind", "SQLite"];

export default function Skills() {
  return (
    <Pitch id="skills" label="Pitch 2 — Gear" title="Skills">
      <div className="flex flex-wrap gap-2.5">
        {known.map((skill) => (
          <span
            key={skill}
            className="text-[13.5px] px-3.5 py-2 bg-panel rounded text-cream border-l-2 border-gold transition-all duration-200 hover:-translate-y-0.5 hover:bg-line cursor-default"
          >
            {skill}
          </span>
        ))}
        {learning.map((skill) => (
          <span
            key={skill}
            className="text-[13.5px] px-3.5 py-2 bg-panel rounded text-soft italic border-l-2 border-line transition-all duration-200 hover:-translate-y-0.5 hover:text-cream hover:border-gold cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </Pitch>
  );
}