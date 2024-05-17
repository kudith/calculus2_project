export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: `Hitung \\ integral \\ lipat \\ dua \\ dari \\ fungsi \\ f(x,y) = x + y \\ pada \\ daerah \\ yang \\ dibatasi \\ oleh \\ x = 0, x =1, y = 0 , y = 1 \\ ∬ D(x+y)dA`,
      answers: ["0,5", "1", "1,5", "2"],
      correctAnswer: "1",
      explanation: `∬ D(x+y)dA = ∫_0^1 ∫_0^1 (x+y) dy dx \\\\ = ∫_0^1[ xy + (y^2/2)] dx \\\\ = ∫_0^1( x + (1/2)) dx \\\\ = [x^2/2  + x/2]0 \\\\ =   1/2  +1/2  = 1`,
    },
    {
      id: 2,
      question: `Hitung \\ integral \\ dari \\ fungsi \\ f(x,y) = xy \\ pada \\ daerah \\ yang \\ dibatasi \\ oleh \\ x = 0, x =1, y = 0, y = 2 \\\\ ∬D xydA`,
      answers: ["0,5", "1", "2", "4"],
      correctAnswer: "1",
      explanation: `∬D xy dA = ∫_0^1∫_0^2xy dy dx \\\\ = ∫_0^1[x (y^2/2)  ]  2¦0  dx \\\\ = ∫_0^1 [2x]  dx \\\\ = [x^2 ]  1¦0 \\\\ =  1`,
    },
    {
      id: 3,
      question: `Hitung \\ integral \\ lipat \\ dua \\ dari \\ fungsi \\ f (x,y) = x^2  + y^2 \\ pada \\ daerah \\ yang \\ dibatasi \\ oleh \\ x = 0, x = 1, y = 0 \\ dan \\ y = x \\\\ ∬D(x^2+y^2)dA`,
      answers: ["	1/6", "1/3", "1/2", "2/3"],
      correctAnswer: "1/3",
      explanation: `∬D(x^2+y^2)dA = ∫_0^1∫_0^x(x^2+y^2)dy dx \\\\ = ∫_0^1[x^2 y +  (y^3/3)  ]  x¦0  dx \\\\ = ∫_0^1[x^3  +  (x^3/3)  ]  dx \\\\ = ∫_0^1[  (4x^3/3)  ]  dx \\\\ = [  (x^4/3)  ]  1¦0 \\\\ =  1/3`,
    },
    {
      id: 4,
      question: `	Hitung \\ integral \\ lipat \\ dua \\ dari \\ fungsi \\ f(x,y) = e^(x+y) \\ pada \\ daerah \\ persegi \\ panjang \\ yang \\ dibatasi \\\\ oleh \\ 0 <= x <= 1 dan 0 <= y <= 1`,
      answers: ["e-1", "e-1^2", "e^2-1", "e^2-2"],
      correctAnswer: "e-1^2",
      explanation: `∬D e^(x+y) dA = ∫_0^1∫_0^1e^(x+y)  dy dx \\\\ = ∫_0^1[e^(x+y)  ]  1¦0  dx \\\\ = ∫_0^1(e^(x+1)  -e^2  )dx \\\\ = e∫_0^1e^(x ) dx -∫_0^1e^(x )   dx \\\\ = e[e^x]1¦0 - [e^x]1¦0 \\\\ = e(e-1) - (e-1) \\\\ = (e-1) (e-1) =(e-1)^2  `,
    },
    {
      id: 5,
      question: `Hitung \\ integral \\ lipat \\ dua \\ dari \\ fungsi \\ f(x,y) = x cos(y) \\ pada \\ daerah \\ persegi \\ panjang \\ yang \\ dibatasi \\\\ oleh \\ 0 <= x <=  1 \\ dan \\ 0 <= y <= π \\\\ ∬D  x cos(y) dA`,
      answers: ["0", "1", "1/2", "-1"],
      correctAnswer: "0",
      explanation: `∬D x cos(y) dA = ∫_0^1∫_0^πx cos(y) dy dx \\\\ = ∫_0^1x[sin(y) ]  π¦0  dx \\\\ = ∫_0^1x[0-0 ]  dx  = 0`,
    },
  ],
};
