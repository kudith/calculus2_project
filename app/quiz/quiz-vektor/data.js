export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: `Diketahui \\ dua \\ vektor \\ A \\ dan \\ B \\ sebagai \\ berikut: \\\\ A = 3i + 4j \\\\ B = -2i + 5j \\\\ Hasil \\ penjumlahan \\ vektor \\ A \\ dan \\ B \\ adalah…`,
      answers: ["i + 9j", "i + 8j", "i + 7j", "i + 6j"],
      correctAnswer: "i + 9j",
      explanation: `Penjumlahan \\ vektor \\ A \\ dan \\ B \\ dilakukan \\ dengan \\\\ menambahkan \\ komponen-komponen \\ vektor. \\ Sehingga \\ A + B = (3 - 2)i + (4 + 5)j = i + 9j.`,
    },
    {
      id: 2,
      question: `Jika \\ |AB| = 5 \\ dan \\ |AC| = 7, \\ serta \\ sudut \\ antara \\ vektor \\ AB \\ dan \\ AC \\ adalah \\\\ 60 \\ derajat, maka \\ |BC| \\ adalah…`,
      answers: ["2", "3", "4", "5"],
      correctAnswer: "4",
      explanation: `Dengan \\ menggunakan \\ hukum \\ cosinus, \\ kita \\ bisa \\ mencari \\\\ panjang \\ sisi \\ BC \\ dari \\ segitiga \\ ABC. \\\\ Rumus \\ cosinus: cos(60°) = (AC² + AB² - BC²) / (2 * AC * AB). \\ Setelah \\ dihitung, \\ kita \\ mendapatkan \\ BC = 4.`,
    },
    {
      id: 3,
      question: `Diketahui \\ dua \\ vektor \\ A \\ dan \\ B \\ memiliki \\\\ magnitudo \\ atau \\ besar \\ vektor \\ masing-masing \\ 8 \\ dan \\ 6. \\ Jika \\ sudut \\ antara \\ kedua \\ vektor \\\\ adalah \\ 90 \\ derajat, \\ maka \\ hasil \\ perkalian \\\\ skalarnya \\ adalah…`,
      answers: ["14", "24", "32", "48"],
      correctAnswer: "48",
      explanation: `Rumus \\ perkalian \\ skalar \\ antara \\ dua \\ vektor \\ adalah: \\ A . B = |A| * |B| * cos(θ). \\ Jika \\ θ \\ adalah \\ sudut \\ antara \\ kedua \\ vektor. \\\\ Dengan \\ menggantikan \\ nilainya, \\ kita \\ mendapatkan \\ A . B = 8 * 6 * cos(90°) = 48.`,
    },
    {
      id: 4,
      question: `Vektor \\ A = 3i - 2j \\ dan \\ vektor \\ B = -i + 4j. \\ Hasil \\ perkalian \\ dot \\ (skalar) \\ dari \\ kedua \\ vektor \\\\ tersebut \\ adalah…`,
      answers: ["-10", "10", "-11", "11"],
      correctAnswer: "-11",
      explanation: `Perkalian \\ dot \\ (skalar) \\ antara \\ dua \\ vektor \\ adalah \\ hasil \\\\ penjumlahan \\ perkalian \\ komponen-komponen \\ vektor \\ yang \\ searah. \\\\ Jadi, \\ A . B = (3 * -1) + (-2 * 4) = -3 – 8 = -11.`,
    },
    {
      id: 5,
      question: `Vektor \\ A = 3i - 4j \\ dan \\ vektor \\ B = 5i + 2j. \\ Sudut \\ antara \\ kedua \\ vektor \\ tersebut \\ adalah…`,
      answers: ["30 derajat", "45 derajat", "60 derajat", "90 derajat"],
      correctAnswer: "60 derajat",
      explanation: `Sudut \\ antara \\ dua \\ vektor \\ dapat \\ dihitung \\ menggunakan \\ rumus \\\\ cosinus: \\ cos(θ) = (A . B) / (|A| * |B|). \\\\ Setelah \\ dihitung, \\ kita \\ mendapatkan \\ cos(θ) = (3 * 5 + (-4) * 2) / (√(3^2 + (-4)^2) * √(5^2 + 2^2)) dan kita mendapatkan θ ≈ 60°.`,
    },
  ],
};
