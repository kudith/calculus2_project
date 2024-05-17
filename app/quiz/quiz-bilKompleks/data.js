export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "Hitung \\ modulus \\ dari \\ bilangan \\ kompleks \\ z = 3 + 4i",
      answers: ["3", "4", "5", "√5"],
      correctAnswer: "5",
      explanation: `Modulus \\ dari \\ z = 3 + 4i \\ adalah: \\ |z| = √(3^2  + 4^2 )  =√(9 + 16)  = √25   = 5`,
    },
    {
      id: 2,
      question: "Hitung hasil kali dari z1 = 2 + 3i dan z2 = 1 - i",
      answers: ["5 - i", "2 + 3i ", "2 + i ", "5 + i "],
      correctAnswer: "5 + i ",
      explanation: `(2 + 3i)(1 - i) = 2 . 1 + 2.(-i) + 3i .1 + 3i . (-i) \\\\ = 2 - 2i + 3i - 3i^2 \\\\ = 2 + i - 3(-1) \\\\ = 2 + i + 3 \\\\ = 5 + i`,
    },
    {
      id: 3,
      question: "Temukan \\ konjugat \\ dari \\ bilangan \\ kompleks \\ z = 5 - 6i ",
      answers: ["5 + 6i", "-5 + 6i", "-5 - 6i", "5 - 6i"],
      correctAnswer: "5 + 6i",
      explanation: `Konjugat \\ dari \\ bilangan \\ kompleks \\ z = 5 - 6i \\ adalah \\ z = 5 + 6i`,
    },
    {
      id: 4,
      question: "Hitung \\ hasil \\ dari \\ (1+2i)+(3+4i)",
      answers: ["4 + 6i", "2 + 6i", "4 + 2i", "2 + 2i"],
      correctAnswer: "4 + 6i",
      explanation: `(1+2i)+(3+4i) = 1 +3+(2i+4i) = 4 + 6i`,
    },
    {
      id: 5,
      question: "Hitung \\ (2+i) x (1+i)",
      answers: ["1 + 2i", "2 + 3i", "1 + I", "3 + I"],
      correctAnswer: "2 + 3i",
      explanation: `(2+i) x (1+i) = 2 + 2i + i -1 \\\\ = 2 + 3i -1 \\ = 1 - 3i`,
    },
  ],
};
