"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import determinantImage from "/public/assets/calculus_course/determinant.jpg";
import seriesArithmeticImage from "/public/assets/calculus_course/series-aritmethic.jpg";
import complexNumberImage from "/public/assets/calculus_course/complex-numbers.jpg";
import differentialImage from "/public/assets/calculus_course/differential.jpg";
import vectorImage from "/public/assets/calculus_course/vector.jpg";
import doubleIntegralImage from "/public/assets/calculus_course/double-integrals.jpg"; 

const contentList = [
  {
    id: "determinant",
    title: "Determinan",
    route: "/course/determinant",
    description: "Pelajari konsep dasar dan aplikasi dari determinan dalam matematika.",
    image: determinantImage,
  },
  {
    id: "series-arithmetic",
    title: "Barisan dan Deret",
    route: "/course/series-arithmetic",
    description: "Telusuri pola-pola dalam barisan dan deret.",
    image: seriesArithmeticImage,
  },
  {
    id: "complex-numbers",
    title: "Bilangan Kompleks",
    route: "/course/complex-numbers",
    description: "Pahami sifat-sifat unik dari bilangan kompleks dan operasi-operasinya.",
    image: complexNumberImage,
  },
  {
    id: "differential",
    title: "Diferensial",
    route: "/course/differential",
    description: "Jelajahi konsep diferensial dan penggunaannya dalam kalkulus.",
    image: differentialImage,
  },
  {
    id: "vector",
    title: "Vektor",
    route: "/course/vector",
    description: "Pelajari dasar-dasar vektor dan aplikasinya dalam berbagai bidang.",
    image: vectorImage,
  },
  {
    id: "double-integral",
    title: "Integral Lipat Dua",
    route: "/course/double-integral",
    description: "Eksplorasi konsep integral lipat dua dan penerapannya.",
    image: doubleIntegralImage,
  },
];

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container-md min-h-screen items-center flex flex-col mx-auto px-4 py-8"
    >
      <motion.h1
        variants={titleVariants}
        className="text-3xl md:text-4xl text-blue-light mt-8 md:mt-10 font-bold mb-10 md:mb-20"
      >
        Calculus 2 Course
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {contentList.map((content) => (
          <Link key={content.id} href={content.route}>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              variants={itemVariants}
            >
              <div className="relative h-48 md:h-56">
                <div className="h-full">
                  <Image
                    className="absolute object-cover"
                    src={content.image}
                    alt={content.title}
                    layout="fill"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {content.title}
                </h3>
                <p className="text-sm md:text-base mb-4">{content.description}</p>
                <p className="text-blue-500 font-semibold">Klik untuk memulai</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
