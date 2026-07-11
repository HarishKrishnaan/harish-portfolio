import Image from "next/image";
import Pitch from "./Pitch";

const interests = ["Rock climbing", "Hiking", "Videogames", "New friends"];

export default function About() {
  return (
    <Pitch id="about" label="Pitch 1 — About" title="Who's climbing">
      <div className="flex flex-col sm:flex-row gap-7 items-start">
        <div className="group relative w-[110px] shrink-0">
          <Image
            src="/photo.jpg"
            alt="Harish Krishnan"
            width={110}
            height={110}
            className="relative rounded-md object-cover contrast-[1.05] w-[110px] h-[110px] shadow-md transition-transform duration-300 ease-out origin-top-left group-hover:scale-[1.35] group-hover:shadow-xl group-hover:z-20"
            priority
          />
          <span className="absolute left-0 top-[118px] w-[150px] text-[11px] text-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none">
            Kyrgyzstan — 2023
          </span>
        </div>
        <div>
          <p className="text-soft text-[15.5px] leading-relaxed max-w-[52ch]">
            Computer Science graduate from Rutgers University, drawn to web
            design, front-end development, and UI/UX — anything that feels
            impactful and fulfilling to build.
          </p>
          <p className="text-soft text-[15.5px] leading-relaxed max-w-[52ch] mt-3">
            When I&apos;m off the keyboard, I&apos;m usually on a rock face,
            on a trail, in a videogame, or making new friends along the way.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {interests.map((tag) => (
              <span
                key={tag}
                className="text-[12.5px] border border-line text-soft px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-line hover:text-cream cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Pitch>
  );
}