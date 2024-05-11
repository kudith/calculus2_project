"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { SITE_ROUTES } from "../constants";
import { useScrollTo } from "hooks";

export function Logo() {
  const pathname = usePathname();
  const introRef = useRef(null);

  useEffect(() => {
    // cek kondisi link
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
    scrollToEl(e);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.h3
        className="text-xl md:text-2xl font-bold"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {pathname === SITE_ROUTES.course ? (
          <Link
            href={SITE_ROUTES.home}
            aria-label="Go to home page"
            role="link"
          >
            <span>detrix</span>
            <mark>Calc</mark>
          </Link>
        ) : (
          <Link
            href="#intro"
            onClick={onClick}
            aria-label="Scroll to top"
            role="link"
          >
            <span>detrix</span>
            <mark>Calc</mark>
          </Link>
        )}
      </m.h3>
    </LazyMotion>
  );
}
