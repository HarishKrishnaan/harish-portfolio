import Image from "next/image";
import Pitch from "./Pitch";

const interests = ["Rock climbing", "Hiking", "Videogames", "New friends"];

export default function About() {
  return (
    <Pitch id="about" label="Pitch 1 — About" title="Who's climbing">
      <div className="flex flex-col sm:flex-row gap-7 items-start">
        <Image
          src="/photo.jpg"
          alt="Harish Krishnan"
          width={130}
          height={130}
          className="rounded-md object-cover grayscale-[20%] contrast-[1.05] w-[130px] h-[130px]"
          priority
        />
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
                className="text-[12.5px] border border-line text-soft px-3 py-1.5 rounded-full"
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
