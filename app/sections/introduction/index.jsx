"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { useScrollTo } from "hooks";
import { useMediaQuery } from "utils";
import { ReactTyped } from "react-typed";

export function WelcomeSection() {
  const introRef = useRef(null);
  const { scrollToEl } = useScrollTo();
  const isTabletUp = useMediaQuery("(min-width: 768px)");

  const [count, setCount] = useState(0);
  const texts = [
    "calculating determinants with ease",
    "understanding Calculus 2 concepts",
    "solving challenging practice problems",
  ];

  // Pergantian teks secara berkala
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  // Variabel animasi
  const textAnimations = {
    initial: { opacity: 0, translateY: -10 },
    animate: { opacity: 1, translateY: 0 },
    transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="intro"
        className="section flex flex-col items-center justify-center  md:min-h-screen py-40 md:py-10"
        ref={introRef}
      >
        {/* Judul dengan efek animasi */}
        <motion.h1
          className="text-3xl md:text-5xl xl:text-6xl font-bold text-center max-w-5xl"
          {...textAnimations}
        >
          Welcome to{" "}
          <ReactTyped
            strings={["detrixCalc"]}
            typeSpeed={100}
            backSpeed={50}
            loop
            className="text-blue-light font-bold"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-3xl md:text-5xl xl:text-6xl font-bold text-center max-w-5xl"
          {...textAnimations}
        >
          Your gateway to mastering <mark>calculus</mark>.
        </motion.h2>

        {/* Animasi teks bergulir */}
        <motion.div className="mt-3 w-full max-w-5xl" {...textAnimations}>
          <div className="relative h-16 overflow-hidden flex justify-center items-center">
            <motion.span
              style={{
                top: `${-count * 100}%`,
                transition: "top 0.5s ease-in-out ease-in-expo",
                lineHeight: "2rem",
                whiteSpace: "pre-wrap",
              }}
              className="absolute flex flex-col"
            >
              {texts.map((text, index) => (
                <div
                  key={index}
                  className="h-16 w-full flex justify-center items-center text-center md:text-2xl"
                  style={{ padding: "0 1rem" }}
                >
                  <b>{text.split(" ")[0]}</b>{" "}
                  {text.split(" ").slice(1).join(" ")}
                </div>
              ))}
            </motion.span>
          </div>
        </motion.div>

        {/* Deskripsi dan tombol untuk kalkulator */}
        <motion.p
          className="mt-3 mb-10 text-gray-500 text-md text-center max-w-lg"
          {...textAnimations}
        >
          Explore our learning resources and start using our determinant
          calculator.
        </motion.p>

        <motion.div className="text-center" {...textAnimations}>
          <Link
            href="#calculator"
            onClick={scrollToEl}
            className="btn bg-blue-light py-4 px-6 rounded-lg shadow-lg dark:shadow-gray-900 shadow-blue-950"
            aria-label="Go to calculator"
          >
            Let's Calculate
          </Link>
        </motion.div>
      </section>
    </LazyMotion>
  );
}