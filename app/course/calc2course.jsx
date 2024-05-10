"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export function Calc2Course() {
  // Efek animasi untuk teks
  const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="calculus2-content mx-auto p-8 rounded-md shadow-md"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl text-blue-light text-center font-bold mb-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Barisan dan Deret
        </motion.h1>

        <section className="mb-6">
          <motion.h2
            className="text-2xl font-semibold mb-3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Pengertian Barisan dan Deret
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Barisan adalah sekelompok besaran u<sub>1</sub>, u<sub>2</sub>, u
            <sub>3</sub>, ... yang diatur dengan tingkat tertentu dan setiap
            suku ditentukan menurut pola yang tetap.
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Deret dibentuk dengan penjumlahan suku barisan. Contoh: 2, 4, 6, 8,
            ... adalah barisan, sedangkan 2 + 4 + 8 ... adalah deret.
          </motion.p>
        </section>

        <section className="mb-6">
          <motion.h2
            className="text-2xl font-semibold mb-3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Contoh Barisan
          </motion.h2>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-xl font-medium mb-2">Barisan Aritmetika</h3>
            <p>
              Barisan 1, 4, 7, 10, ... adalah barisan aritmetika dengan suku
              umum u<sub>n</sub> = 1 + 3(n-1). Maka suku kelima adalah u
              <sub>5</sub> = 1 + 3(4) = 13.
            </p>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h3 className="text-xl font-medium mb-2">Barisan Geometri</h3>
            <p>
              Barisan 2, 10, 50, 250, ... adalah barisan geometri dengan suku
              umum u<sub>n</sub> = 2 x 5<sup>(n-1)</sup>. Misalnya u<sub>5</sub>{" "}
              = 2 x 5<sup>4</sup> = 2 x 625 = 1250.
            </p>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h3 className="text-xl font-medium mb-2">Barisan Alternatif</h3>
            <p>
              Barisan 1<sup>2</sup>, -2<sup>2</sup>, 3<sup>2</sup>, -4
              <sup>2</sup>, ... adalah barisan alternatif dengan suku umum u
              <sub>n</sub> = (-1)<sup>(n-1)</sup> * n<sup>2</sup>. Maka u
              <sub>5</sub> = (-1)<sup>4</sup> * 5<sup>2</sup> = 25.
            </p>
          </motion.div>
        </section>

        <section className="mb-6">
          <motion.h2
            className="text-2xl font-semibold mb-3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Contoh Deret
          </motion.h2>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h3 className="text-xl font-medium mb-2">Deret Aritmetika</h3>
            <p>
              Deret aritmetika adalah penjumlahan suku barisan aritmetika.
              Misalnya, jumlah 20 suku pertama deret 1 + 4 + 7 + 10 + ...
              adalah:
            </p>
            <p>
              S<sub>20</sub> = 10 * (2 + 19 * 3) = 10 * 59 = 590.
            </p>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <h3 className="text-xl font-medium mb-2">Deret Geometri</h3>
            <p>
              Deret geometri adalah penjumlahan suku barisan geometri. Misalnya,
              jumlah 5 suku pertama deret 2 + 4 + 8 + 16 + ... adalah:
            </p>
            <p>
              S<sub>5</sub> = (2 * (1 - 2<sup>5</sup>)) / (1 - 2) = (2 * (1 -
              32)) / -1 = 2 * -31 = -62.
            </p>
          </motion.div>
        </section>

        <section className="mb-6">
          <motion.h2
            className="text-2xl font-semibold mb-3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            Mean Aritmetika
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            Mean aritmetika dua angka P dan Q adalah bilangan A antara P dan Q,
            sehingga P + A + Q membentuk deret aritmetika. Rumus mean aritmetika
            adalah:
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            A = (P + Q) / 2.
          </motion.p>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.9 }}
          >
            Contoh: Mean aritmetika antara 12 dan 26 adalah (12 + 26) / 2 = 19.
          </motion.p>
        </section>

        <section className="mb-6">
          <motion.h2
            className="text-2xl font-semibold mb-3"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            Kesimpulan
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 2.1 }}
          >
            Barisan dan deret adalah konsep matematika yang melibatkan
            penjumlahan suku barisan atau barisan itu sendiri. Dengan memahami
            pola dan aturan dalam barisan dan deret, kita dapat menyelesaikan
            berbagai masalah matematika.
          </motion.p>
        </section>
      </motion.div>
    </LazyMotion>
  );
}

export default Calc2Course;
