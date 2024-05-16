"use client";

import { motion, LazyMotion, domAnimation } from "framer-motion";

export function ComplexNumbersContent() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="complex-numbers-content mx-auto p-8 rounded-md shadow-md"
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

        {/* Section untuk Bilangan Kompleks */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-2">Bilangan Kompleks</h2>
          <h3 className="text-2xl font-semibold mb-4">
            1. Pengertian Bilangan Kompleks
          </h3>
          <p className="text-base leading-7">
            Bilangan kompleks adalah bilangan yang terdiri dari bagian riil dan
            bagian imajiner. Bagian riil adalah bilangan nyata, sedangkan bagian
            imajiner adalah bilangan yang mengandung i, di mana i adalah akar
            kuadrat dari -1.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            2. Bentuk Umum Bilangan Kompleks
          </h3>
          <p className="text-base leading-7">
            Bentuk umum bilangan kompleks ditulis sebagai <strong>z = a + bi</strong>, 
            di mana a adalah bagian riil, dan b adalah bagian imajiner. Di sini, a dan b 
            adalah bilangan riil, sedangkan i adalah satuan imajiner.
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            3. Operasi pada Bilangan Kompleks
          </h3>
          <p className="text-base leading-7">
            Sama seperti bilangan riil, kita bisa melakukan operasi aritmatika
            pada bilangan kompleks, seperti penjumlahan, pengurangan,
            perkalian, dan pembagian.
          </p>

          <h4 className="text-xl font-semibold mb-4 mt-2">
            i. Penjumlahan dan Pengurangan
          </h4>
          <p className="text-base leading-7">
            Penjumlahan dan pengurangan dilakukan dengan menjumlahkan atau
            mengurangkan bagian riil dengan riil, dan bagian imajiner dengan
            imajiner. Misalnya:
          </p>
          <p className="text-base leading-7">
            (a + bi) + (c + di) = (a + c) + (b + d)i
          </p>
          <p className="text-base leading-7">
            (a + bi) - (c + di) = (a - c) + (b - d)i
          </p>

          <h4 className="text-xl font-semibold mb-4 mt-2">
            ii. Perkalian
          </h4>
          <p className="text-base leading-7">
            Perkalian dua bilangan kompleks menggunakan sifat distributif dan
            mengingat bahwa i<sup>2</sup> = -1. Misalnya:
          </p>
          <p className="text-base leading-7">
            (a + bi)(c + di) = ac + adi + bci + bdi<sup>2</sup> = (ac - bd) + (ad + bc)i
          </p>

          <h4 className="text-xl font-semibold mb-4 mt-2">
            iii. Pembagian
          </h4>
          <p className="text-base leading-7">
            Untuk membagi bilangan kompleks, kita kalikan pembilang dan
            penyebut dengan konjugat penyebutnya untuk menghilangkan bagian
            imajiner di penyebut. Misalnya:
          </p>
          <p className="text-base leading-7">
            z<sub>1</sub> / z<sub>2</sub> = (a + bi) / (c + di) × (c - di) / (c - di)
          </p>
          <p className="text-base leading-7">
            = (ac + bd + (bc - ad)i) / (c<sup>2</sup> + d<sup>2</sup>)
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            4. Sifat Bilangan Kompleks
          </h3>
          <p className="text-base leading-7">
            Bilangan kompleks memiliki beberapa sifat penting, termasuk sifat
            berikut:
          </p>
          <ul className="list-disc ml-7">
            <li>
              <strong>Kompleks konjugat:</strong> Konjugat dari z = a + bi adalah z̄ = a - bi.
            </li>
            <li>
              <strong>Modulus:</strong> Modulus dari z = a + bi adalah |z| = √(a² + b²).
            </li>
            <li>
              <strong>Argumen:</strong> Argumen dari z adalah sudut θ yang dibentuk dengan sumbu riil.
            </li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 mt-4">
            5. Bentuk Polar dan Eksponensial
          </h3>
          <p className="text-base leading-7">
            Bilangan kompleks juga dapat ditulis dalam bentuk polar dan eksponensial. Bentuk polar adalah:
          </p>
          <p className="text-base leading-7">
            z = r(cos θ + i sin θ), di mana r adalah modulus dan θ adalah argumen.
          </p>
          <p className="text-base leading-7">
            Bentuk eksponensial adalah:
          </p>
          <p className="text-base leading-7 mb-4">
            z = re<sup>iθ</sup>.
          </p>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}
