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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              gravida purus a ex facilisis, id lacinia ligula blandit. Cras
              imperdiet tristique diam, vel rhoncus tellus. Cras non commodo
              ipsum. Sed ac ultrices leo. Suspendisse vestibulum enim nec purus
              porttitor pellentesque eu rhoncus nulla. Sed volutpat efficitur
              nibh eu aliquam. Sed facilisis blandit dui quis porta. Suspendisse
              semper sodales eleifend. Sed sollicitudin sem a eros venenatis
              porttitor. Duis maximus eros vitae est ultricies, at finibus diam
              placerat. Curabitur molestie risus non lectus blandit, vitae
              aliquet ex blandit. Aliquam diam urna, malesuada eget nisl eu,
              molestie facilisis magna. Curabitur tellus nisi, elementum quis
              dolor ut, cursus tincidunt nunc. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Sed
              interdum lacus nec ornare dictum. Etiam sed molestie urna.
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
            x: { duration: 1, ease: [0.17, 0.55, 0.55, 1] }, // Mengatur pergerakan dari bawah ke atas
          },
        },
        hidden: {
          opacity: 0,
          x: -50, // Posisi awal dari bawah
        },
      }}
    >
      <HeadingDivider title="About Us" />
    </motion.div>
  );
}
