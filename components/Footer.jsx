"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView, motion } from "framer-motion";
import { ConnectMedia, ScrollTop } from "components";

export function AppFooter() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });
  const year = new Date().getFullYear();

  // Konfigurasi animasi
  const transition = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "none" : "translateY(30px)",
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.footer
        ref={footerRef}
        initial={{ opacity: 0, translateY: 30 }}
        animate={transition}
        className="container-md mx-auto py-10 mt-10 border-t bg-gradient-to-r"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5">
          <div className="flex flex-col items-start md:flex-row md:items-center gap-5">
            <strong className="font-semi-bold text-sm md:text-base">
              Copyright &copy; {year} Detrix<mark>Calc</mark>. All rights
              reserved.
            </strong>
            <div className="flex items-center gap-2">
              <ConnectMedia />
            </div>
          </div>
          <div className="flex items-center">
            <ScrollTop />
          </div>
        </div>
      </motion.footer>
    </LazyMotion>
  );
}
