"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";

export function Calculus2Content() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="calculus2-content mx-auto p-8 rounded-md shadow-md"
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
          Determinan
        </motion.h1>

        {/* Section untuk Determinan Matriks */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Determinan Matriks</h2>
          <h3 className="text-2xl font-semibold mb-4">
            1. Pengertian Determinan Matriks
          </h3>
          <p className="text-base leading-7">
            Determinan matriks merupakan suatu nilai yang dihitung dari
            unsur-unsur matriks persegi. Ingat, hanya matriks persegi yang bisa
            dihitung determinannya.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            2. Rumus Determinan Matriks
          </h3>
          <p className="text-base leading-7">
            Setelah memahami pengertian determinan matriks, kamu pasti penasaran
            bagaimana rumus untuk menghitung determinan matriks ini. Determinan
            dari suatu matriks biasanya akan ditulis sebagai{" "}
            <strong>`det A`, `det(A)`, atau `det |A|`</strong>.
          </p>

          {/* Menambahkan gambar PNG */}
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/4.png"
              width={200}
              height={200}
              alt="matriks ordo 2x2"
            />
          </div>

          <p className="text-base leading-7">
            Nah, dari matriks tersebut kita akan punya dua diagonal sebagaimana
            berikut:
          </p>
          <ul className="list-disc ml-7">
            <li>
              Diagonal utama: <strong>p</strong> dan <strong>s</strong>
            </li>
            <li>
              Diagonal kedua: <strong>q</strong> dan <strong>r</strong>
            </li>
          </ul>
          <p>
            Determinan matriks ordo 2x2 dapat diperoleh dengan cara mengurangkan
            hasil kali diagonal utama dengan hasil kali diagonal kedua. Kalau
            dituliskan ke dalam rumus maka akan seperti ini :
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/2.png"
              width={450}
              height={450}
              alt="matriks ordo 2x2"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            3. Rumus Determinan Matriks Ordo 3x3
          </h3>
          <p className="text-base leading-7">
            Berbeda dengan matriks ordo 2x2, pada matriks ordo 3x3 ini ada dua
            rumus yang bisa kamu gunakan untuk mencari nilai determinan pada
            suatu matriks. Pertama menggunakan aturan Sarrus dan kedua memakai
            metode minor kofaktor. Apa sih perbedaan keduannya? Yuk kita simak!
          </p>
          <p>Misalkan nih kamu punya matriks Q berordo 3x3 sebagai berikut:</p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/3.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p>
            Seperti inilah rumus untuk menghitung determinannya menggunakan
            kedua metode tersebut!
          </p>
          <h4 className="text-xl font-semibold mb-4 mt-2">i. Aturan Sarrus</h4>
          <p className="text-base leading-7">
            Untuk menggunakan aturan sarrus, kamu harus menambahkan kolom
            pertama yang berisikan a,d,g dan kolom kedua kedua yang berisikan
            b,e,h di sebelah matriks utama seperti berikut.
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/3.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/8.png"
              width={50}
              height={50}
              alt="matriks ordo 2x2"
            />
          </div>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/6.png"
              width={500}
              height={500}
              alt="matriks ordo 2x2"
            />
          </div>
          <p>
            Setelah itu seperti menghitung determinan matrik pada ordo 3x3, kamu
            tinggal menjumlahkan seluruh perkalian diagonal utama kemudian
            dikurangkan penjumlahan matriks diagonal kedua seperti rumus
            berikut:
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/7.png"
              width={500}
              height={500}
              alt="matriks ordo 2x2"
            />
          </div>

          <h4 className="text-xl font-semibold mb-4">
            ii. Aturan Minor-Kofaktor
          </h4>
          <p className="text-base leading-7">
            Ada dua elemen yang harus dicari jika akan menggunakan aturan ini,
            pertama adalah Minor dan yang kedua adalah kofaktor. Untuk mencari
            nilai Minor maka kamu harus menghilangkan salah satu baris atau
            kolom terlebih dahulu. Misalnya nih kamu ingin menghilangkan baris
            nomor satu yang berisi a, b, dan c. Maka kamu akan memperoleh 3
            minor dari matriks tersebut sebagaimana berikut: Q11 yang berarti
            Minor kesatu atau M11 diperoleh dengan menghilangkan elemen di baris
            ke-1 dan kolom ke-1.
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/9.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p>
            Q12 yang berarti Minor kesatu atau M12 diperoleh dengan
            menghilangkan elemen di baris ke-1 dan kolom ke-2.
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/11.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p className="text-base leading-7">
            Q13 yang berarti Minor kesatu atau M13 diperoleh dengan
            menghilangkan elemen di baris ke-1 dan kolom ke-3.
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/12.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p className="text-base leading-7">
            Selanjutnya kamu harus mencari nilai kofaktor yang biasanya
            dilambangkan dengan C atau K. Nilai ini bisa kamu dapatkan dengan
            rumus:
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/13.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p className="text-base leading-7">
            Maka dari rumus tersebut kita akan dapat tiga kofaktor sebagai
            berikut:
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/14.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p className="text-base leading-7">
            Setelah Minor dan Kofaktornya ketemu, maka kamu bisa menghitung
            nilai determinannya dengan rumus berikut:
          </p>
          <div className="container mb-8 mt-6">
            <Image
              src="/assets/calculus_course/15.png"
              width={400}
              height={400}
              alt="matriks ordo 2x2"
            />
          </div>
          <p className="text-base leading-7 mb-4">
            Bagaimana, sudah paham sampai disini? Biar makin paham, nanti kita
            akan berikan contoh soal di bawah ya!
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            3. Sifat Determinan Matriks
          </h3>
          <p className="text-base leading-7">
            Sebelum membahas contoh soal, penting untuk memahami sifat-sifat
            dari determinan matriks. Jika X dan Y merupakan matriks berordo nxn,
            maka sifat determinan matriks dapat dirangkum sebagai berikut:
          </p>
          <ul className="list-disc ml-7">
            <li>|XY| = |X| * |Y|</li>
            <li>|XT| = |X|, di mana T adalah transpose matriks</li>
            <li>
              |kX| = k^n * |X|, di mana k adalah bilangan skalar/riil dan n
              adalah ordo matriks A
            </li>
            <li>|X^-1| = 1 / |X| (invers matriks)</li>
            <li>
              Jika ada baris atau kolom yang semua elemennya bernilai nol, maka
              determinan matriksnya adalah 0
            </li>
            <li>
              Jika ada dua baris atau kolom yang elemennya sama ataupun
              merupakan kelipatannya, maka determinan matriksnya juga adalah 0
            </li>
          </ul>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}
