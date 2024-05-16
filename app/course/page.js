"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import determinantImage from "/public/assets/calculus_course/determinant.jpg";
import seriesArithmeticImage from "/public/assets/calculus_course/series-aritmethic.jpg";
import complexNumberImage from "/public/assets/calculus_course/complex-numbers.jpg";

const contentList = [
  {
    id: "determinant",
    title: "Determinan",
    route: "/course/determinant",
    description: "Pelajari konsep dasar dan aplikasi dari determinan dalam matematika.",
    image: determinantImage
  },
  {
    id: "series-arithmetic",
    title: "Barisan dan Deret",
    route: "/course/series-arithmetic",
    description: "Telusuri pola-pola dalam barisan dan deret.",
    image: seriesArithmeticImage
  },
  {
    id: "complex-numbers",
    title: "Bilangan Kompleks",
    route: "/course/complex-numbers",
    description: "Pahami sifat-sifat unik dari bilangan kompleks dan operasi-operasinya.",
    image: complexNumberImage
  }
];

export default function Page() {
  return (
    <div className="container-md min-h-screen items-center flex mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contentList.map((content) => (
          <Link key={content.id} href={content.route}>
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
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
                <h3 className="text-lg md:text-xl font-semibold mb-2 ">{content.title}</h3>
                <p className="text-sm md:text-base mb-4">{content.description}</p>
                <p className="text-blue-500 font-semibold">Klik untuk memulai</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
