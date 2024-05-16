export const matriksA1 = "\\begin{pmatrix} 3 & 5 \\\\ 4 & 6 \\end{pmatrix}";
export const matriksB1 = "\\begin{pmatrix} -6 & 5 \\\\ 2 & -4 \\end{pmatrix}";
export const matriksB2 = "\\begin{pmatrix} 2 & X \\\\ 4 & 8 \\end{pmatrix}";
export const matriksA2 = "\\begin{pmatrix} 4 & -1 & 1 \\\\ 4 & 5 & 3 \\\\ -2 & 0 & 0 \\end{pmatrix}";
export const matriksK1 = "\\begin{pmatrix} 4 & 2X \\\\ -6 & 8 \\end{pmatrix}";
export const matriks51 = "\\begin{pmatrix} 2 & -5 \\\\ 4 & 7 \\end{pmatrix}";
export const matriks52 = "\\begin{pmatrix} -12 & 1 \\\\ 10 & 19 \\end{pmatrix}";


export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: `Tentukan \\ determinan \\ dari \\ matriks\\\\ \A = ${matriksA1}\, \\ \B = ${matriksB1}\!`,
      answers: ["|A| = -2, |B| = 14", "|A| = 14, |B| = -2", "|A| = 38, |B| = 34", "|A| = 34, |B| = 38"],
      correctAnswer: "|A| = -2, |B| = 14",
    },
    {
      id: 2,
      question: `Perhatikan \\ determinan \\ matriks \\ \A = ${matriksB2}\, \\\\ jika \\ nilai \\ determinan \\ matriks \\ B \\ adalah \\ 4, \\\\ maka \\ nilai \\ x \\ adalah?`,
      answers: ["4", "3", "2", "1"],
      correctAnswer: "3",
    },
    {
      id: 3,
      question: `Tentukan \\ determinan \\ dari \\ matriks \\\\ \A = ${matriksA2}\ \\\\ dengan \\ metode \\ Minor-Kofaktor!`,
      answers: ["8", "-4", "6", "16"],
      correctAnswer: "16",
    },
    {
      id: 4,
      question: `Tentukan \\ nilai \\ x \\ pada \\ matriks \\\\ \K = ${matriksK1}\ . \\\\ Jika \\ matriks \\ K \\ merupakan \\ matriks \\ singular.`,
      answers: ["x = -8/3", "x = 8/3", "x = 5/2", "x = -8/-3"],
      correctAnswer: "x = -8/3",
    },
    {
      id: 5,
      question: `Jika \\ X \\ adalah \\ matriks \\ ordo \\ 2x2 \\ memenuhi \\\\ persamaan \\ matriks \\ ${matriks51} ,\\ \X = ${matriks52},\ determinan \\ |X|= `,
      answers: ["-7", "-6", "-4", "-3"],
      correctAnswer: "-7",
    },
  ],
};
