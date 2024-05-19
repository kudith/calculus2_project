"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export function ArithmeticGeometricSequenceContent() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="container-md mx-auto md:p-8 p-4 rounded-md shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl text-blue-light text-center font-bold mb-6"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Barisan dan Deret
        </motion.h1>

        {/* Section Arithmetic Sequence */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Barisan Aritmetika</h2>
          <p className="text-base leading-7 mb-4">
            Barisan aritmetika adalah barisan bilangan dimana setiap suku berikutnya diperoleh dari menambahkan suku sebelumnya dengan sebuah konstanta yang disebut beda. Representasi umum dari barisan aritmetika adalah <em>a<sub>n</sub> = a<sub>1</sub> + (n - 1)d</em>, di mana <em>a<sub>n</sub></em> adalah suku ke-n, <em>a<sub>1</sub></em> adalah suku pertama, <em>n</em> adalah indeks suku, dan <em>d</em> adalah beda.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Rumus Umum Barisan Aritmetika</h3>
          <p className="text-base leading-7 mb-4">
            Rumus umum untuk suku ke-n pada barisan aritmetika adalah:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            a<sub>n</sub> = a<sub>1</sub> + (n - 1)d
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Barisan Aritmetika</h3>
          <p className="text-base leading-7 mb-4">
            Contoh barisan aritmetika dengan suku pertama <em>a<sub>1</sub> = 2</em> dan beda <em>d = 3</em>:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            2, 5, 8, 11, 14, ...
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Perhitungan Suku Barisan Aritmetika</h3>
          <p className="text-base leading-7 mb-4">
            Misalkan kita ingin mencari suku ke-10 dari barisan aritmetika dengan suku pertama <em>a<sub>1</sub> = 3</em> dan beda <em>d = 4</em>:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            a<sub>10</sub> = 3 + (10 - 1) * 4<br />
            a<sub>10</sub> = 3 + 9 * 4<br />
            a<sub>10</sub> = 3 + 36<br />
            a<sub>10</sub> = 39
          </pre>
        </motion.section>

        {/* Section Geometric Sequence */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Barisan Geometri</h2>
          <p className="text-base leading-7 mb-4">
            Barisan geometri adalah barisan bilangan dimana setiap suku berikutnya diperoleh dari mengalikan suku sebelumnya dengan sebuah konstanta yang disebut rasio. Representasi umum dari barisan geometri adalah <em>a<sub>n</sub> = a<sub>1</sub> * r^(n - 1)</em>, di mana <em>a<sub>n</sub></em> adalah suku ke-n, <em>a<sub>1</sub></em> adalah suku pertama, <em>r</em> adalah rasio, dan <em>n</em> adalah indeks suku.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Rumus Umum Barisan Geometri</h3>
          <p className="text-base leading-7 mb-4">
            Rumus umum untuk suku ke-n pada barisan geometri adalah:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            a<sub>n</sub> = a<sub>1</sub> * r^(n - 1)
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Barisan Geometri</h3>
          <p className="text-base leading-7 mb-4">
            Contoh barisan geometri dengan suku pertama <em>a<sub>1</sub> = 3</em> dan rasio <em>r = 2</em>:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            3, 6, 12, 24, 48, ...
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Perhitungan Suku Barisan Geometri</h3>
          <p className="text-base leading-7 mb-4">
            Misalkan kita ingin mencari suku ke-5 dari barisan geometri dengan suku pertama <em>a<sub>1</sub> = 2</em> dan rasio <em>r = 3</em>:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            a<sub>5</sub> = 2 * 3^(5 - 1)<br />
            a<sub>5</sub> = 2 * 3^4<br />
            <sub>5</sub> = 2 * 81<br />
            <sub>5</sub> = 162
          </pre>
        </motion.section>

        {/* Section for Arithmetic Series */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Deret Aritmetika</h2>
          <p className="text-base leading-7 mb-4">
            Deret aritmetika adalah hasil penjumlahan dari suku-suku berturut-turut pada suatu barisan aritmetika. Jika jumlah suku pada deret aritmetika bernilai <em>n</em>, maka deret aritmetika dapat direpresentasikan sebagai:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            S<sub>n</sub> = n/2 * (a<sub>1</sub> + a<sub>n</sub>)
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Deret Aritmetika</h3>
          <p className="text-base leading-7 mb-4">
            Contoh deret aritmetika dari barisan aritmetika sebelumnya:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            2 + 5 + 8 + 11 + 14
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Perhitungan Jumlah Deret Aritmetika</h3>
          <p className="text-base leading-7 mb-4">
            Misalkan kita ingin mencari jumlah 10 suku pertama dari deret aritmetika dengan suku pertama <em>a<sub>1</sub> = 2</em> dan beda <em>d = 3</em>:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            S<sub>10</sub> = 10/2 * (2 + 39)<br />
            S<sub>10</sub> = 5 * 41<br />
            S<sub>10</sub> = 205
          </pre>
        </motion.section>

        {/* Section Geometric Series */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Deret Geometri</h2>
          <p className="text-base leading-7 mb-4">
            Deret geometri adalah hasil penjumlahan dari suku-suku berturut-turut pada suatu barisan geometri. Jika jumlah suku pada deret geometri bernilai <em>n</em>, maka deret geometri dapat direpresentasikan sebagai:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            S<sub>n</sub> = a<sub>1</sub> * (r<sup>n</sup> - 1) / (r - 1)
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Deret Geometri</h3>
          <p className="text-base leading-7 mb-4">
            Contoh deret geometri dari barisan geometri sebelumnya:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            3 + 6 + 12 + 24 + 48
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh Perhitungan Jumlah Deret Geometri</h3>
          <p className="text-base leading-7 mb-4">
            Misalkan kita ingin mencari jumlah 5 suku pertama dari deret geometri dengan suku pertama <em>a<sub>1</sub> = 3</em> dan rasio <em>r = 2</em>:
          </p>
          <pre className=" p-4 rounded-md text-center mb-6">
            S<sub>5</sub> = 3 * (2^5 - 1) / (2 - 1)<br />
            S<sub>5</sub> = 3 * (32 - 1) / 1<br />
            S<sub>5</sub> = 3 * 31<br />
            S<sub>5</sub> = 93
          </pre>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}

