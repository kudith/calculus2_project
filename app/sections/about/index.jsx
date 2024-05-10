"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { HeadingDivider } from "components";
import Image from "next/image";

export function AboutSection() {
  const ref = useRef(null);

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="section">
        <HeadingDivider title="About Us" />
        {/* Wrapper div dengan kelas responsif */}
        <div className="pt-10 pb-16 max-w-7xl flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Bagian kiri untuk teks */}
          <motion.div
            tabIndex="0"
            ref={ref}
            className="text-xl font-light leading-relaxed flex-1 order-2 md:order-1"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.5,
            }}
          >
            <p>
              Welcome to CalcSphere, your trusted resource for all things
              calculus. Our goal is to provide you with a comprehensive platform
              to master calculus concepts, from calculating determinants to
              solving complex problems.
            </p>
            <p>
              Our team of experienced mathematicians and developers is dedicated
              to creating an engaging learning experience for you. Whether
              you're a student, educator, or enthusiast, we have curated
              resources and interactive tools to support your journey.
            </p>
            <p>
              With CalcSphere, you'll have access to interactive exercises,
              detailed explanations, and practice problems that will help you
              strengthen your understanding of calculus concepts.
            </p>
            <p className="my-3.5">
              Our mission is to make learning calculus accessible and enjoyable
              for everyone. We believe in continuous improvement, so feel free
              to reach out with any feedback or suggestions!
            </p>
          </motion.div>

          {/* Bagian kanan untuk gambar SVG */}
          <motion.div
            className="flex-1 order-2 md:order-1 w-full h-auto"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.17, 0.55, 0.55, 1],
              delay: 0.5,
            }}
          >
            {/* Komponen Image menggunakan layout responsif */}
            <Image
              src={"/assets/calculus2.svg"}
              alt="Calculus illustration"
              width={500}
              height={500}
              className="w-full h-auto" // gunakan className untuk mengatur ukuran
              priority
            />
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
}
