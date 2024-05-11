import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { HeadingDivider } from "components";
import Image from "next/image";

export function AboutSection() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const controls = useAnimation();
  const dividerControls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      dividerControls.start("visible");
    }
  }, [controls, dividerControls, inView]);

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="section" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeadingDividerWithAnimation controls={dividerControls} />
        </motion.div>
        {/* Wrapper div dengan kelas responsif */}
        <div className="pt-10 pb-16 max-w-7xl flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Bagian kiri untuk teks */}
          <motion.div
            className="text-xl font-light leading-relaxed flex-1 order-2 md:order-1"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 0.5,
                },
              },
              hidden: {
                opacity: 0,
                x: -200,
              },
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
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.17, 0.55, 0.55, 1],
                  delay: 1,
                },
              },
              hidden: {
                opacity: 0,
                x: 200,
              },
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

function HeadingDividerWithAnimation({ controls }) {
  return (
    <motion.div
      className="flex justify-start items-start mt-2 mb-5"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 20,
          },
        },
        hidden: {
          opacity: 0,
          scale: 0,
        },
      }}
    >
      <HeadingDivider title="About Us" />
    </motion.div>
  );
}
