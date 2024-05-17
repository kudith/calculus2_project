"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export function ComplexNumberContent() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="mx-auto md:p-8  rounded-md shadow-md"
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
          Bilangan Kompleks
        </motion.h1>

        {/* Section for Complex Numbers */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Pengertian Bilangan Kompleks</h2>
          <p className="text-base leading-7 mb-4">
            Bilangan kompleks adalah bentuk bilangan yang terdiri dari bagian real dan bagian imajiner. Representasi umum dari bilangan kompleks adalah <em>a + bi</em> di mana <em>a</em> adalah bagian real, <em>b</em> adalah bagian imajiner, dan <em>i</em> adalah satuan imajiner.
          </p>

          <h2 className="text-3xl font-semibold mb-2">Grafik Bilangan Kompleks</h2>
          <p className="text-base leading-7 mb-4">
            Bilangan kompleks yang dituliskan dengan <em>z = a + bi</em> bisa disingkat dengan pasangan terurut <em>(a, b)</em>. Sehingga bilangan kompleks juga dapat dituliskan dalam sebuah bidang datar seperti koordinat titik pada sistem koordinat Kartesius. Bidang kompleks atau bidang Argand adalah bidang yang digunakan untuk menggambarkan bilangan kompleks.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Bidang Kompleks</h3>
          <p className="text-base leading-7 mb-4">
            Apabila terdapat bilangan kompleks <em>z = 4 + 6i</em>, angka 4 adalah bilangan real positif terletak di kuadran I, sementara 6 adalah bilangan imajiner positif. Seperti halnya koordinat Kartesius, grafik bidang kompleks juga dibagi berdasarkan daerahnya atau kuadrannya:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Kuadran I: Sudut 0° sampai dengan 90°</li>
            <li>Kuadran II: Sudut 90° sampai dengan 180°</li>
            <li>Kuadran III: Sudut 180° sampai dengan 270°</li>
            <li>Kuadran IV: Sudut 270° sampai dengan 360°</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Contoh Penerapan Bilangan Kompleks</h3>
          <p className="text-base leading-7 mb-4">
            Bilangan kompleks banyak digunakan dalam kehidupan sehari-hari, terutama di bidang teknik dan fisika. Contohnya, dalam fisika modern seperti mekanika kuantum dan dalam bidang pemrosesan sinyal digital.
          </p>

          <h2 className="text-3xl font-semibold mb-2">Bilangan Riil dan Bilangan Imajiner</h2>
          <p className="text-base leading-7 mb-4">
            Bilangan riil adalah sistem bilangan yang biasa digunakan dalam aktivitas sehari-hari, mencakup bilangan rasional dan irasional. Bilangan imajiner adalah bilangan yang nilainya merupakan akar kuadrat dari bilangan negatif. Misalnya, <em>√-1</em> yang dinotasikan dengan <em>i</em>.
          </p>

          <h2 className="text-3xl font-semibold mb-2">Operasi Bilangan Kompleks</h2>
          <h3 className="text-2xl font-semibold mb-4">Operasi Penjumlahan dan Pengurangan</h3>
          <p className="text-base leading-7 mb-4">
            Operasi penjumlahan dan pengurangan pada bilangan kompleks dilakukan dengan menjumlahkan atau mengurangkan bagian real dan bagian imajiner secara terpisah.
          </p>
          <p className="text-base leading-7 mb-4">
            Contoh:
          </p>
          <pre className="rounded-sm md:text-center mb-6">
            (3 - 2i) + (4 + 5i)<br/> = (3 + 4) + (-2 + 5)i = 7 + 3i<br />
          </pre>
          <pre className="rounded-sm md:text-center mb-6">
            (3 - 2i) - (4 + 5i)<br/> = (3 - 4) + (-2 - 5)i = -1 - 7i
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Operasi Perkalian</h3>
          <p className="text-base leading-7 mb-4">
            Operasi perkalian pada bilangan kompleks memiliki sifat distributif seperti pada bilangan real. Contohnya:
          </p>
          <pre className="rounded-md md:text-center mb-6">
          (2 - 5i)(1 - 2i) = 2 - 4i - 5i + 10i²<br/> = 2 - 9i - 10 = -8 - 9i
          </pre>
          <p className="text-base leading-7 mb-4">
            Perkalian bilangan kompleks konjugat menghasilkan bilangan real:
          </p>
          <pre className="rounded-md md:text-center mb-6">
            (6 - 8i)(6 + 8i) = 36 - (8i)²<br/><br/> = 36 + 64 = 100
          </pre>

          <h3 className="text-2xl font-semibold mb-4">Operasi Pembagian</h3>
          <p className="text-base leading-7 mb-4">
            Pembagian bilangan kompleks dilakukan dengan mengalikan pembilang dan penyebut dengan konjugat dari penyebut agar penyebutnya menjadi bilangan real.
          </p>
          <p className="text-base leading-7 mb-4">
            Contoh:
          </p>
          <pre className="rounded-md md:text-center mb-6">
            (3 + 2i) / (1 - i)<br />
            = (3 + 2i)(1 + i) / (1 - i)(1 + i)<br />
            = (3 + 3i + 2i + 2i²) / (1 - i²)<br />
            = (3 + 5i - 2) / (1 + 1)<br />
            = (1 + 5i) / 2<br />
            = 1/2 + 5/2i
          </pre>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}
