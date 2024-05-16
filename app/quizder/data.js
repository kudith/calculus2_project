export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "Diberikan \\ deret \\ geometri: 3, 6, 12, 24, ... \\\\ Jika \\ suku \\ pertama \\ adalah \\ 3 \\ dan \\ rasio \\ antar \\ suku \\\\ adalah \\ 2, \\ berapakah \\ suku \\ ke \\ 5 \\ dari \\ deret \\ tersebut?",
      answers: ["96", "48", "72", "36"],
      correctAnswer: "48",
      explanation: `Untuk \\ mencari \\ suku \\ ke \\ 5 \\ dari \\ deret \\ geometri, \\ kita \\\\ menggunakan \\ rumus \\ umum \\ untuk \\ suku \\ ke \\ n \\ dari \\\\ deret \\ geometri: an = a1 . r^(n-1) \\\\ maka: \\ a5 = 3.2^(5-1) = 3.2^4 = 3.16 =48`,
    },
    {
      id: 2,
      question: "Diberikan \\ deret \\ aritmatika: 2, 6, 10, 14, ... \\\\ Jika \\ suku \\ pertama \\ adalah \\ 2 \\ dan \\ beda \\ antar \\ suku \\\\ adalah \\ 4, \\ berapakah \\ suku \\ ke \\ 5 \\ dari \\ deret \\ tersebut?",
      answers: ["16", "18", "20", "22"],
      correctAnswer: "18",
      explanation: `Untuk \\ mencari \\ suku \\ ke \\ 5 \\ dari \\ deret \\ aritmatika, \\ kita \\\\ menggunakan \\ rumus \\ umum \\ untuk \\ suku \\ ke \\ n \\ dari \\ deret \\\\ aritmatika: an = a1 + (n-1).d. \\\\ maka: a5 = 2+(5-1).4 = 2+4.4 = 2+16 =18 \\\\ Jadi, \\ suku \\ ke \\ 5 \\ dari \\ deret \\ aritmatika \\ tersebut \\ adalah \\ 18.`,
    },
    {
      id: 3,
      question: "Diberikan \\ deret \\ aritmatika: 10, 15, 20, 25, ... \\\\ Jika \\ suku \\ pertama \\ adalah \\ 10 \\ dan \\ beda \\ antar \\ suku \\\\ adalah \\ 5, \\ berapakah \\ jumlah \\ 8 \\ suku \\ pertama \\ dari \\\\ deret \\ tersebut?",
      answers: ["220", "240", "260", "280"],
      correctAnswer: "220",
      explanation: `Untuk \\ mencari \\ jumlah \\ n \\ suku \\ pertama \\ dari \\ deret \\ aritmatika, \\\\ kita \\ menggunakan \\ rumus: Sn = n/2 . (2a + (n-1)d) \\\\ maka: S8 = 8/2 . (2.10+(8-1).5) \\\\ = 4.(20+7.5) = 4.(20+35) \\\\ = 4.55 = 220 \\\\ Jadi, \\ jumlah \\ 8 \\ suku \\ pertama \\ dari \\ deret \\ aritmatika \\ tersebut \\\\ adalah \\ 220.`,
    },
    {
      id: 4,
      question: "Diberikan \\ sebuah \\ deret \\ kombinasi \\ yang \\ terdiri \\\\ dari \\ 10 \\ suku: 5,5/2,0,-5/2,-5,9,16,24,33,43. \\ Deret \\ tersebut \\\\ merupakan?",
      answers: ["Deret aritmatika", "Deret geometri", "keduanya", "tidak keduanya"],
      correctAnswer: "keduanya",
      explanation: `Deret \\ yang \\ diberikan \\ terdiri \\ dari \\ dua \\ bagian \\ yang \\ memiliki \\\\ pola \\ berbeda. \\ Bagian \\ pertama \\ dari \\ deret \\ (5 \\ sampai -5) \\ merupakan \\ deret \\ aritmatika, \\ sedangkan \\ bagian \\ kedua \\\\ (9 \\ sampai \\ 43) \\ juga \\ merupakan \\ deret \\ geometri. \\\\ Sementara \\ itu, \\ untuk \\ bagian \\ kedua \\ dari \\ deret \\ (9 \\ sampai \\ 43), \\\\ kita \\ juga \\ dapat \\ melihat \\ bahwa \\ setiap \\ suku \\ memiliki \\ beda \\ yang \\\\ sama, \\ yaitu \\ 7. \\ Ini \\ menunjukkan \\ bahwa \\ bagian \\ kedua \\ deret \\\\ tersebut \\ juga \\ merupakan \\ deret \\ geometri.`,
    },
    {
      id: 5,
      question: "Diberikan \\ sebuah \\ deret \\ kombinasi \\ yang \\ terdiri \\\\ dari \\ 10 \\ suku: 5,5/2,0,-5/2,-5,9,16,24,33,43. \\ Jika \\ deret \\\\ tersebut \\ merupakan \\ deret \\ aritmatika, \\ suku \\ ke \\ 15 \\\\ dari \\ deret \\ tersebut \\ adalah:",
      answers: ["-30", "-29", "-28", "-27"],
      correctAnswer: "-30",
      explanation: `kita \\ gunakan \\ rumus \\ umum \\ suku \\ ke \\ n \\ dari \\ deret \\ aritmatika:an = a1 + (n-1).d \\\\ maka: a15 = 5 + (15-1) .(-5/2) \\\\ a15 = 5 + 14 .(-5/2) \\\\ a15 = 5- 35 \\\\ a15 = -30 \\\\ Jadi, \\ suku \\ ke \\ 15 \\ dari \\ deret \\ aritmatika \\ adalah -30`,
    },
  ],
};
