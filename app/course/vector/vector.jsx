import { motion, LazyMotion, domAnimation } from "framer-motion";

export function VectorContent() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className="vector-content mx-auto p-8 rounded-md shadow-md"
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
          Vektor
        </motion.h1>

        {/* Section untuk Vektor */}
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          {/* 1. Pengertian Vektor */}
          <h3 className="text-2xl font-semibold mb-4">1. Pengertian Vektor</h3>
          <p className="text-base leading-7">
            Vektor adalah besaran yang memiliki besar dan arah. Dalam
            matematika, vektor dapat direpresentasikan sebagai anak panah yang
            menghubungkan dua titik dalam ruang. Vektor berbeda dengan skalar,
            yang hanya memiliki besar tanpa arah.
          </p>

          {/* 2. Representasi Vektor */}
          <h3 className="text-2xl font-semibold mb-4">2. Representasi Vektor</h3>
          <p className="text-base leading-7">
            Vektor dapat direpresentasikan dalam bentuk koordinat atau
            komponen-komponennya. Jika vektor direpresentasikan dalam bentuk
            koordinat, biasanya digunakan koordinat kartesian (x, y, z). Misalnya, 
            sebuah vektor <em>v</em> dapat direpresentasikan sebagai v = (v<sub>x</sub>, v<sub>y</sub>, v<sub>z</sub>).
          </p>

          {/* 3. Operasi pada Vektor */}
          <h3 className="text-2xl font-semibold mb-4">3. Operasi pada Vektor</h3>
          <p className="text-base leading-7">
            Terdapat beberapa operasi yang dapat dilakukan pada vektor, antara lain:
          </p>

          {/* Penjumlahan dan Pengurangan */}
          <h4 className="text-xl font-semibold mb-4 mt-2">i. Penjumlahan dan Pengurangan</h4>
          <p className="text-base leading-7">
            Penjumlahan vektor dilakukan dengan menjumlahkan komponen-komponen
            vektor yang sejenis. Pengurangan vektor dilakukan dengan
            mengurangkan komponen-komponen vektor yang sejenis. Misalnya:
          </p>
          <p className="text-base leading-7">
            v + w = (v<sub>x</sub> + w<sub>x</sub>, v<sub>y</sub> + w<sub>y</sub>, v<sub>z</sub> + w<sub>z</sub>)
          </p>
          <p className="text-base leading-7">
            v - w = (v<sub>x</sub> - w<sub>x</sub>, v<sub>y</sub> - w<sub>y</sub>, v<sub>z</sub> - w<sub>z</sub>)
          </p>
          <p className="text-base leading-7">
            <strong>Contoh Soal:</strong> Jika v = (3, 4, 5) dan w = (1, 2, 3), 
            hitunglah v + w dan v - w.
          </p>
          <p className="text-base leading-7">
            <strong>Jawaban:</strong> 
            <br />
            v + w = (3 + 1, 4 + 2, 5 + 3) = (4, 6, 8)
            <br />
            v - w = (3 - 1, 4 - 2, 5 - 3) = (2, 2, 2)
          </p>

          {/* Perkalian dengan Skalar */}
          <h4 className="text-xl font-semibold mb-4 mt-2">ii. Perkalian dengan Skalar</h4>
          <p className="text-base leading-7">
            Perkalian vektor dengan skalar dilakukan dengan mengalikan setiap
            komponen vektor dengan skalar tersebut. Misalnya:
          </p>
          <p className="text-base leading-7">
            αv = (αv<sub>x</sub>, αv<sub>y</sub>, αv<sub>z</sub>)
          </p>
          <p className="text-base leading-7">
            <strong>Contoh Soal:</strong> Jika v = (2, -3, 4) dan α = 3, 
            hitunglah 3v.
          </p>
          <p className="text-base leading-7">
            <strong>Jawaban:</strong> 3v = 3(2, -3, 4) = (6, -9, 12)
          </p>

          {/* Produk Dot dan Produk Cross */}
          <h3 className="text-2xl font-semibold mb-4">4. Produk Dot dan Produk Cross</h3>
          <p className="text-base leading-7">
            Produk dot dan produk cross adalah dua operasi penting dalam
            vektor. Produk dot menghasilkan skalar sedangkan produk cross
            menghasilkan vektor.
          </p>

          {/* Produk Dot */}
          <h4 className="text-xl font-semibold mb-4 mt-2">i. Produk Dot</h4>
          <p className="text-base leading-7">
            Produk dot antara dua vektor v dan w dinyatakan sebagai:
            <br />
            v · w = v<sub>x</sub>w<sub>x</sub> + v<sub>y</sub>w<sub>y</sub> + v<sub>z</sub>w<sub>z</sub>
          </p>
          <p className="text-base leading-7">
            <strong>Contoh Soal:</strong> Jika v = (1, 2, 3) dan w = (4, -5, 6), 
            hitunglah v · w.
          </p>
          <p className="text-base leading-7">
            <strong>Jawaban:</strong> v · w = (1)(4) + (2)(-5) + (3)(6) = 4 - 10 + 18 = 12
          </p>

          {/* Produk Cross */}
          <h4 className="text-xl font-semibold mb-4 mt-2">ii. Produk Cross</h4>
          <p className="text-base leading-7">
            Produk cross antara dua vektor v dan w dinyatakan sebagai:
            <br />
            v × w = (v<sub>y</sub>w<sub>z</sub> - v<sub>z</sub>w<sub>y</sub>, 
            v<sub>z</sub>w<sub>x</sub> - v<sub>x</sub>w<sub>z</sub>, 
            v<sub>x</sub>w<sub>y</sub> - v<sub>y</sub>w<sub>x</sub>)
          </p>
          <p className="text-base leading-7">
            <strong>Contoh Soal:</strong> Jika v = (1, 2, 3) dan w = (4, 5, 6), 
            hitunglah v × w.
          </p>
          <p className="text-base leading-7">
            <strong>Jawaban:</strong>
            <br />
            v × w = ((2)(6) - (3)(5), (3)(4) - (1)(6), (1)(5) - (2)(4)) 
            = (12 - 15, 12 - 6, 5 - 8) 
            = (-3, 6, -3)
          </p>

          {/* Representasi Geometris Vektor */}
          <h3 className="text-2xl font-semibold mb-4 mt-4">5. Representasi Geometris Vektor</h3>
          <p className="text-base leading-7">
            Vektor juga dapat direpresentasikan secara geometris sebagai
            anak panah yang menghubungkan dua titik dalam ruang. Panjang anak panah
            menggambarkan besar vektor dan arah anak panah menunjukkan arah
            vektor. Representasi ini sering digunakan dalam fisika untuk menggambarkan
            gaya, kecepatan, dan besaran vektor lainnya.
          </p>
          <p className="text-base leading-7">
            <strong>Contoh Soal:</strong> Gambarkan vektor v = (3, 4) pada bidang kartesian.
          </p>
          <p className="text-base leading-7">
            <strong>Jawaban:</strong> Gambarkan titik (3, 4) pada bidang kartesian dan tarik 
            anak panah dari titik asal (0, 0) ke titik (3, 4). Panjang anak panah adalah 
            √(3² + 4²) = 5 unit dan arahnya dari (0, 0) ke (3, 4).
          </p>
        </motion.section>
      </motion.div>
    </LazyMotion>
  );
}
