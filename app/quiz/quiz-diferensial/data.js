
export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: `Tentukan \\ turunan \\ pertama \\ dari \\ fungsi \\ f(x) = x3 - 2x2 + 3x !`,
      answers: ["f'(x) = 3x2 - 4x + 3", "f'(x) = 3x4 - 2x + 3", "f'(x) = 3x3 - 3x + 4", "f'(x) = 3x1 - 4x + 3"],
      correctAnswer: "f'(x) = 3x2 - 4x + 3",
      explanation: `f'(x) = 3.1.x3-1 – 2.2x2-1 + 1.3.x1-1 \\\\ f'(x) = 3x2 – 4x + 3`,
    },
    {
      id: 2,
      question: `Carilah \\ turunan \\ pertama \\ dari \\ fungsi \\ f(x) = (3x + 2)(2x + 5) !`,
      answers: ["f'(x) = 12x + 18", "f'(x) = 12x + 19", "f'(x) = 19x + 19", "f'(x) = 19x + 12"],
      correctAnswer: "f'(x) = 12x + 19",
      explanation: `f(x) = (3x + 2)(2x + 5) \\\\ f(x) = 3x.2x + 3x.5 + 2.2x + 2.5 \\\\ f(x) = 6x2 + 15x + 4x + 10 \\\\ f(x) = 6x2 + 19x + 10 \\\\ f'(x) = 2.6.x2-1 + 1.19.x1-1 + 0.10.x0-1 \\\\ f'(x) = 12x + 19 + 0 \\\\ f'(x) = 12x + 19`,
    },
    {
      id: 3,
      question: `Hitunglah \\ turunan \\ pertama \\ dari \\ fungsi \\ f(x) = 4x½ !`,
      answers: ["f'(x) = 4x-½", "f'(x) = 1x-½", "f'(x) = 2x-1", "f'(x) = 2x-½"],
      correctAnswer: "f'(x) = 2x-½",
      explanation: `f'(x) = ½.4.x½-1 \\\\ f'(x) = 2x-½`,
    },
    {
      id: 4,
      question: `Berapakah \\ turunan \\ pertama \\ dari \\ fungsi \\ f(x) = 4 √x3 ?`,
      answers: ["f'(x) = 5 √x", "f'(x) = 1√x", "f'(x) = -6 √x", "d.	f'(x) = 6 √x"],
      correctAnswer: "d.	f'(x) = 6 √x",
      explanation: `f(x) = 4 √x \\\\ f(x) = 4 x3/2 \\\\ f'(x) = 3/2.4.x3/2 – 1 \\\\ f'(x) = 6x½ \\\\ f'(x) = 6 √x`,
    },
    {
      id: 5,
      question: `Tentukan \\ turunan \\ pertama \\ dari \\ fungsi \\ f(x) = (x2 + 3x + 4)(2x + 3).`,
      answers: ["f'(x) = 6x2 + 17x + 18", "f'(x) = 2x6 + 18x + 17", "f'(x) = 6x2 + 18x + 17", "f'(x) = 6x2 + 18x - 17"],
      correctAnswer: "f'(x) = 6x2 + 18x + 17",
      explanation: `Misal: \\\\ u = x2 + 3x + 4 \\\\ v = 2x + 3 \\\\ Maka:\\\\ u' = 2x + 3 \\\\ v' = 2 \\\\ Sehingga: \\\\ f'(x) = u'v + uv' \\\\ f'(x) = (2x + 3)(2x + 3) + (x2 + 3x + 4).2 \\\\ f'(x) = 4x2 + 12x + 9 + 2x2 + 6x + 8 \\\\ f'(x) = 6x2 + 18x + 17`,
    },
  ],
};
