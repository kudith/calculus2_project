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
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function TechnologiesSection() {
  const textRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const technologies = [
    { src: Html, label: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { src: Css, label: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { src: Javascript, label: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { src: ReactImg, label: "React", url: "https://reactjs.org/" },
    { src: Tailwind, label: "Tailwind", url: "https://tailwindcss.com/" },
    { src: FramerMotion, label: "Framer Motion", url: "https://www.framer.com/motion/" },
    { src: Github, label: "Github", url: "https://github.com/" },
    { src: NextJS, label: "NextJS", url: "https://nextjs.org/" },
  ];

  return (
    <div id="technologies" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto mt-44 md:mt-auto flex flex-col justify-center h-full">
        <HeadingDivider title="Technologies" />
        <p
          ref={textRef}
          tabIndex="0"
          className="my-5 text-2xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <span className="font-semibold">detrix</span>
          <mark className="font-semibold">Calc</mark> team works with the
          following technologies and tools:
        </p>
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <a href={tech.url} target="_blank" rel="noopener noreferrer" key={index}>
              <motion.div
                ref={ref}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
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
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TechnologiesSection;
