import Image from "next/image";
import { HeadingDivider } from "components";
import Html from "/public/assets/skills/html.png";
import Css from "/public/assets/skills/css.png";
import Javascript from "/public/assets/skills/javascript.png";
import ReactImg from "/public/assets/skills/react.png";
import Tailwind from "/public/assets/skills/tailwind.png";
import Github from "/public/assets/skills/github1.png";
import FramerMotion from "/public/assets/skills/framer-motion.png";
import NextJS from "/public/assets/skills/nextjs.png";
import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

export function TechnologiesSection() {
  const textRef = useRef(null);
  const stackRef = useRef(null);

  const isTextInView = useInView(textRef, { once: true });
  const isStackInView = useInView(stackRef, { once: true });

  return (
    <div id="technologies" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto mt-44 md:mt-auto flex flex-col justify-center h-full">
        <HeadingDivider title="Technologies" />
        <p
          ref={textRef}
          tabIndex="0"
          className="my-5 text-2xl"
          style={{
            transform: isTextInView ? "none" : "translateX(-200px)",
            opacity: isTextInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span className="font-semibold">detrix</span>
          <mark className="font-semibold">Calc</mark> team works with the
          following technologies and tools:
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { src: Html, label: "HTML" },
            { src: Css, label: "CSS" },
            { src: Javascript, label: "JavaScript" },
            { src: ReactImg, label: "React" },
            { src: Tailwind, label: "Tailwind" },
            { src: FramerMotion, label: "Framer Motion" },
            { src: Github, label: "Github" },
            { src: NextJS, label: "NextJS" },
          ].map((tech) => (
            <div
              key={tech.label}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={tech.src}
                    width="64px"
                    height="64px"
                    alt={tech.label}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{tech.label}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechnologiesSection;
