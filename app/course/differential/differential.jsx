"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export function DifferentialContent() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="mx-auto md:p-8 p-2 rounded-md shadow-md"
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
        Diferensial
        </motion.h1>

        {/* Section for Pengertian */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Pengertian</h2>
          <p className="text-base leading-7 mb-4">
            Kalkulus diferensial adalah cabang dari kalkulus yang mempelajari laju perubahan suatu besaran. Ini berurusan dengan turunan, yang mewakili laju perubahan fungsi terhadap variabelnya.
          </p>
        </motion.section>

        {/* Section for Turunan */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Turunan</h2>
          <p className="text-base leading-7 mb-4">
            Turunan dari suatu fungsi mewakili laju perubahan nilai fungsi tersebut saat inputnya berubah. Ini mengukur kemiringan garis singgung terhadap grafik fungsi pada suatu titik tertentu.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Rumus</h3>
          <p className="text-base leading-7 mb-4">
            Turunan dari fungsi <em>f(x)</em> terhadap <em>x</em> dinotasikan sebagai <em>f'(x)</em> atau <em>dy/dx</em>. Ini didefinisikan sebagai:
          </p>
          <pre className=" rounded-md md:text-center  mb-6">
    f'(x) = lim(h -&gt; 0)[(f(x + h) - f(x))/h]
          </pre>
          <p className="text-base leading-7 mb-4">
            Dimana <em>lim</em> menyatakan batas saat <em>h</em> mendekati 0.
          </p>
        </motion.section>

        {/* Section for Aturan Diferensiasi */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Aturan Diferensiasi</h2>
          <p className="text-base leading-7 mb-4">
            Ada beberapa aturan untuk mencari turunan fungsi, termasuk:
          </p>
          <ul className="list-disc list-inside">
            <li className="text-base leading-7 mb-2">Aturan Konstan: Turunan dari sebuah konstanta adalah 0.</li>
            <li className="text-base leading-7 mb-2">Aturan Pangkat: Turunan dari <em>x^n</em> terhadap <em>x</em> adalah <em>nx^(n-1)</em>.</li>
            <li className="text-base leading-7 mb-2">Aturan Jumlah/Pengurangan: Turunan dari jumlah atau pengurangan fungsi adalah jumlah atau pengurangan dari turunan mereka.</li>
            <li className="text-base leading-7 mb-2">Aturan Perkalian: Turunan dari perkalian dua fungsi <em>u(x)</em> dan <em>v(x)</em> adalah <em>u'(x)v(x) + u(x)v'(x)</em>.</li>
            <li className="text-base leading-7 mb-2">Aturan Pembagian: Turunan dari pembagian dua fungsi <em>u(x)</em> dan <em>v(x)</em> adalah <em>(u'(x)v(x) - u(x)v'(x)) / (v(x))^2</em>.</li>
            <li className="text-base leading-7 mb-2">Aturan Rantai: Turunan dari komposisi fungsi <em>u(v(x))</em> adalah <em>u'(v(x)) * v'(x)</em>.</li>
          </ul>
        </motion.section>

        {/* Section for Contoh */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Contoh</h2>
          <p className="text-base leading-7 mb-4">
            Mari kita lihat beberapa contoh perhitungan turunan menggunakan berbagai aturan.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Contoh 1: Mencari Turunan dari Konstanta</h3>
          <p className="text-base leading-7 mb-4">
            Diberikan <em>f(x) = 5</em>, cari <em>f'(x)</em>.
          </p>
          <p className="text-base leading-7 mb-4">
            Solusi:
          </p>
          <pre className="  rounded-md text-center mb-6">
            f'(x) = 0
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh 2: Mencari Turunan dengan Aturan Pangkat</h3>
          <p className="text-base leading-7 mb-4">
            Diberikan <em>f(x) = 3x^2</em>, cari <em>f'(x)</em>.
          </p>
          <p className="text-base leading-7 mb-4">
            Solusi:
          </p>
          <pre className="  rounded-md text-center mb-6">
            f'(x) = 2 * 3x^(2-1) = 6x
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh 3: Mencari Turunan dari Jumlah</h3>
          <p className="text-base leading-7 mb-4">
            Diberikan <em>f(x) = 2x^3 + 5x^2 - 4x</em>, cari <em>f'(x)</em>.
          </p>
          <p className="text-base leading-7 mb-4">
            Solusi:
          </p>
          <pre className="  rounded-md text-center mb-6">
            f'(x) = 3 * 2x^(3-1) + 2 * 5x^(2-1) - 4<br />
            f'(x) = 6x^2 + 10x - 4
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh 4: Mencari Turunan dengan Aturan Perkalian</h3>
          <p className="text-base leading-7 mb-4">
            Diberikan <em>f(x) = (x^2 + 2x) * (3x - 1)</em>, cari <em>f'(x)</em>.
          </p>
          <p className="text-base leading-7 mb-4">
            Solusi:
          </p>
          <pre className="  rounded-md md:text-center mb-6">
            f'(x) = (2x + 2)*(3x - 1) + (x^2 + 2x) * 3<br />
            f'(x) = 6x^2 + 6x - 2 + 3x^2 + 6x<br />
            f'(x) = 9x^2 + 12x - 2
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Contoh 5: Mencari Turunan dengan Aturan Rantai</h3>
          <p className="text-base leading-7 mb-4">
            Diberikan <em>f(x) = (2x^3 + 5x)^2</em>, cari <em>f'(x)</em>.
          </p>
          <p className="text-base leading-7 mb-4">
            Solusi:
          </p>
          <pre className="  rounded-md text-center mb-6">
            f'(x) = 2 * (2x^3 + 5x) * (3x^2 + 5)<br />
            f'(x) = 2 * (2x^3 + 5x) * (3x^2 + 5)
          </pre>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}

