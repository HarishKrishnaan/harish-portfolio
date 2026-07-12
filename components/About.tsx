// components/About.tsx
import Image from "next/image";
import Pitch from "./Pitch";

const interests = ["Rock climbing", "Hiking", "Web Design", "Socializing", "Working Out"];

export default function About() {
  return (
    <Pitch id="about" label="Pitch 1 — About" title="Who's climbing">
      <div className="relative">
        <div className="peer group shrink-0 w-max">
          <div className="relative w-[165px] h-[165px] group-hover:w-[330px] group-hover:h-[330px] transition-[width,height] duration-500 ease-out rounded-md overflow-hidden shadow-md">
            <Image
              src="/photo.jpg"
              alt="Harish Krishnan"
              fill
              sizes="330px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-2 w-[165px] text-[11px] text-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
            Kyrgyzstan — 2023
          </p>
        </div>

        <div
          className="absolute top-0 text-soft text-[15.5px] leading-relaxed
                     left-[193px] w-[calc(100%_-_193px)]
                     peer-hover:left-[358px] peer-hover:w-[calc(100%_-_358px)]
                     transition-[left] duration-500 ease-out"
        >
          <p>
            I'm a Computer Science graduate from Rutgers University, drawn to 
            web design, front-end development, and UI/UX. I love working on
            fulfilling projects with significant impact.
          </p>
          <p className="mt-3">
            When I&apos;m off the keyboard, I&apos;m usually on a rock face,
            on a trail, at the gym, or striking up conversations with strangers.
          </p>
        </div>
      </div>

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
    </Pitch>
  );
}