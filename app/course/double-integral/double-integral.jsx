"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export function DoubleIntegralContent() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="md:mx-auto md:p-8 rounded-md shadow-md"
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
          Integral Lipat Dua
        </motion.h1>

        {/* Section for Double Integral */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Pengertian Integral Lipat Dua</h2>
          <h3 className="text-2xl font-semibold mb-4">1. Apa itu Integral Lipat Dua?</h3>
          <p className="text-base leading-7">
            Integral lipat dua adalah metode untuk menghitung volume di bawah permukaan suatu fungsi di daerah tertentu. Integral ini memperluas konsep integral tunggal ke dua dimensi, memungkinkan kita untuk menghitung volume dan luas area yang lebih kompleks.
          </p>

          <h3 className="text-2xl font-semibold mb-4">2. Notasi Integral Lipat Dua</h3>
          <p className="text-base leading-7">
            Integral lipat dua dari fungsi <em>f(x, y)</em> di atas daerah <em>D</em> dinyatakan sebagai:
          </p>
          <pre className=" rounded-md md:text-center mb-6">
            ∬<sub>D</sub> f(x, y) dA
          </pre>
          <p className="text-base leading-7">
            Di mana <em>D</em> adalah daerah integrasi dalam bidang <em>xy</em>, dan <em>dA</em> merupakan elemen area kecil dalam daerah tersebut.
          </p>

          <h3 className="text-2xl font-semibold mb-4">3. Cara Menghitung Integral Lipat Dua</h3>
          <p className="text-base leading-7">
            Untuk menghitung integral lipat dua, kita perlu mengintegrasikan fungsi <em>f(x, y)</em> terlebih dahulu terhadap salah satu variabel (misalnya <em>y</em>), kemudian hasilnya diintegrasikan terhadap variabel lainnya (misalnya <em>x</em>). Proses ini bisa dibalik tergantung pada batas integrasi.
          </p>
          <pre className=" rounded-md md:text-center mb-6">
            ∬<sub>D</sub> f(x, y) dA = ∫<sub>a</sub><sup>b</sup> ∫<sub>c</sub><sup>d</sup> f(x, y) dy dx
          </pre>
          <p className="text-base leading-7">
            Di sini, integral pertama dilakukan terhadap <em>y</em> dari <em>c</em> ke <em>d</em>, dan hasilnya diintegrasikan terhadap <em>x</em> dari <em>a</em> ke <em>b</em>.
          </p>

          <h3 className="text-2xl font-semibold mb-4">4. Contoh Soal Integral Lipat Dua</h3>
          <p className="text-base leading-7">
            Berikut adalah contoh soal integral lipat dua:
          </p>
          <p className="text-base leading-7 mb-4">
            Misalkan kita memiliki fungsi <em>f(x, y) = x + y</em> dan kita ingin menghitung integral lipat dua di daerah persegi dengan batas <em>0 ≤ x ≤ 1</em> dan <em>0 ≤ y ≤ 1</em>.
          </p>
          <pre className=" rounded-md md:text-center mb-6">
            ∬<sub>D</sub> (x + y) dA = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>1</sup> (x + y) dy dx
          </pre>
          <p className="text-base leading-7 mb-4">
            Langkah pertama adalah mengintegrasikan <em>f(x, y)</em> terhadap <em>y</em> dari 0 hingga 1:
          </p>
          <pre className=" rounded-md md:text-center mb-6">
            ∫<sub>0</sub><sup>1</sup> (x + y) dy = [xy + (y<sup>2</sup>/2)]<sub>0</sub><sup>1</sup> = x + 1/2
          </pre>
          <p className="text-base leading-7 mb-4">
            Kemudian hasilnya diintegrasikan terhadap <em>x</em> dari 0 hingga 1:
          </p>
          <pre className=" rounded-md md:text-center mb-6">
            ∫<sub>0</sub><sup>1</sup> (x + 1/2) dx = [x<sup>2</sup>/2 + (1/2)x]<sub>0</sub><sup>1</sup> = 1/2 + 1/2 = 1
          </pre>
          <p className="text-base leading-7 mb-4">
            Setelah melakukan kedua integrasi tersebut, kita akan mendapatkan hasil akhir untuk volume di bawah permukaan fungsi tersebut di daerah yang diberikan, yaitu 1.
          </p>

          <h3 className="text-2xl font-semibold mb-4">5. Aplikasi Integral Lipat Dua</h3>
          <p className="text-base leading-7">
            Integral lipat dua memiliki banyak aplikasi dalam berbagai bidang, termasuk fisika, teknik, dan probabilitas. Contohnya, dalam fisika, integral lipat dua digunakan untuk menghitung massa dan pusat massa dari suatu objek dengan densitas yang bervariasi. Dalam probabilitas, integral lipat dua digunakan untuk menghitung peluang gabungan dari dua variabel acak kontinu.
          </p>
          <pre className=" rounded-md md:text-center mb-6">
            Massa = ∬<sub>D</sub> ρ(x, y) dA
          </pre>
          <p className="text-base leading-7">
            Di mana ρ(x, y) adalah fungsi densitas massa pada titik (x, y) di dalam daerah D.
          </p>

          <h3 className="text-2xl font-semibold mb-4">6. Perubahan Batas Integral</h3>
          <p className="text-base leading-7">
            Dalam beberapa kasus, mengubah urutan integrasi atau mengubah batas integral dapat mempermudah perhitungan. Teknik ini dikenal sebagai perubahan variabel atau substitusi dalam integral ganda. Contohnya, menggunakan koordinat polar bisa sangat berguna saat menghitung integral di daerah yang berbentuk lingkaran.
          </p>
          <pre className=" rounded-md text-center mb-6">
            ∬<sub>D</sub> f(x, y)dA = ∬<sub>D'</sub> f(rcosθ, rsinθ)r dr dθ
          </pre>
          <p className="text-base leading-7">
            Di mana <em>r</em> adalah jarak dari asal ke titik (x, y), dan <em>θ</em> adalah sudut antara sumbu <em>x</em> dan garis yang menghubungkan asal dengan titik (x, y).
          </p>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}
