// components/About.tsx
import Image from "next/image";
import Pitch from "./Pitch";

const interests = ["Rock climbing", "Hiking", "Videogames", "New friends"];

export default function About() {
  return (
    <Pitch id="about" label="Pitch 1 — About" title="Who's climbing">
      <div className="flex flex-row gap-7 items-start">
        <div className="shrink-0">
          <div className="peer relative w-[165px] h-[165px] hover:w-[330px] hover:h-[330px] transition-[width,height] duration-500 ease-out rounded-md overflow-hidden shadow-md">
            <Image
              src="/photo.jpg"
              alt="Harish Krishnan"
              fill
              sizes="330px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-[11px] text-soft opacity-0 peer-hover:opacity-100 transition-opacity duration-300 delay-150">
            Kyrgyzstan — 2023
          </p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-soft text-[15.5px] leading-relaxed">
            Computer Science graduate from Rutgers University, drawn to web
            design, front-end development, and UI/UX — anything that feels
            impactful and fulfilling to build.
          </p>
          <p className="text-soft text-[15.5px] leading-relaxed mt-3">
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