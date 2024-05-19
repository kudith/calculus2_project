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
        {/* Wrapper div  */}
        <div className="pt-10 pb-16 max-w-7xl flex flex-col-reverse md:flex-row gap-10 items-center">
          {/* Bagian kiri untuk teks */}
          <motion.div
            className="text-xl font-light leading-relaxed flex-1 order-2 md:order-1"
            initial="hidden"
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  opacity: { duration: 0.5, ease: "easeOut" },
                  y: { duration: 1, ease: [0.17, 0.55, 0.55, 1] },
                },
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
          >
            <p>
              DetrixCalc, platform yang tim kami ciptakan untuk memenuhi tugas mata kuliah Kalkulus II semester 2. Disini kami menyediakan rangkuman materi kuliah yang komprehensif, quiz interaktif untuk menguji pemahaman, dan kalkulator khusus yang membantu dalam memecahkan soal-soal dengan mudah dan cepat.
            </p>
            <p>
              Kami berdedikasi untuk menyediakan sumber daya belajar yang berkualitas. Kami memahami tantangan yang dihadapi dalam mempelajari kalkulus, sehingga kami berupaya menyajikan materi dengan cara yang lebih sederhana dan mudah dipahami.
            </p>
            <p className="my-3.5">
            Seperti yang dikatakan oleh B.J. Habibie, "Belajar tanpa berpikir itu tidaklah berguna, tapi berpikir tanpa belajar itu sangatlah berbahaya." Kami berharap platform ini dapat menjadi sumber belajar yang membantu berpikir kritis dan mendalam.
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
                y: 0,
                transition: {
                  opacity: { duration: 0.5, ease: "easeOut" },
                  y: { duration: 1, ease: [0.17, 0.55, 0.55, 1] },
                },
              },
              hidden: {
                opacity: 0,
                y: 50,
              },
            }}
          >
            {/* Komponen Image  */}
            <Image
              src={"/assets/calculus2.svg"}
              alt="Calculus illustration"
              width={500}
              height={500}
              className="w-full h-auto"
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
      className="flex justify-start items-start mt-2 mb-2"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            opacity: { duration: 0.5, ease: "easeOut" },
            x: { duration: 1, ease: [0.17, 0.55, 0.55, 1] }, 
          },
        },
        hidden: {
          opacity: 0,
          x: -50, 
        },
      }}
    >
      <HeadingDivider title="About Us" />
    </motion.div>
  );
}
