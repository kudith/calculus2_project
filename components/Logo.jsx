"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { SITE_ROUTES } from "../constants";
import { useScrollTo } from "hooks";
import LogoSVG from "../public/assets/svg/x-square.svg";  

export function Logo() {
  const pathname = usePathname();
  const introRef = useRef(null);

  useEffect(() => {
    // Check if the current path is home
    if (pathname === SITE_ROUTES.home || pathname === "/") {
      const introElement = introRef.current;
      if (introElement) {
        introElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleScrollToIntro = () => {
    const introElement = introRef.current;
    if (introElement) {
      introElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollToEl } = useScrollTo();

  const onClick = (e) => {
    if (pathname === SITE_ROUTES.home || pathname === "/") {
      e.preventDefault();
      handleScrollToIntro();
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.h3
        className="text-xl md:text-2xl font-bold flex items-center"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        <Link
          href={SITE_ROUTES.home}
          onClick={onClick}
          aria-label="Go to home page"
          role="link"
          className="flex items-center"
        >
          <LogoSVG className="max-w-full mt-1 h-fit mr-1" />
          <span>detrix</span>
          <mark>Calc</mark>
        </Link>
      </m.h3>
    </LazyMotion>
  );
}
