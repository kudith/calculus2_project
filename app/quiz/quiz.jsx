"use client";
import React, { useState } from "react";
import { quiz } from "./data.js";

const QuizComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full sm:max-w-xl mx-4 p-6 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-900">
          Quiz Page
        </h1>
        <div>
          <h2 className="text-lg font-semibold mb-4 text-purple-900">
            Question: {activeQuestion + 1}/{questions.length}
          </h2>
        </div>
        <div>
          {!showResult ? (
            <div className="quiz-container">
              <h3 className="text-xl font-semibold mb-6 text-purple-900">
                {questions[activeQuestion].question}
              </h3>
              {answers.map((answer, idx) => (
                <button
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`block w-full py-2 px-4 mb-4 rounded-lg transition-colors duration-300 ease-in-out ${
                    selectedAnswerIndex === idx
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-white text-purple-900 hover:bg-gray-100"
                  }`}
                >
                  {answer}
                </button>
              ))}
              {checked ? (
                <button
                  onClick={nextQuestion}
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="w-full py-2 px-4 bg-gray-400 text-gray-700 font-semibold rounded-lg cursor-not-allowed"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container">
              <h3 className="text-xl font-semibold mb-6 text-purple-900">
                Results
              </h3>
              <h3 className="text-lg font-semibold mb-4 text-purple-900">
                Overall {(result.score / 25) * 100}%
              </h3>
              <p className="text-purple-900">
                Total Questions:{" "}
                <span className="font-semibold">{questions.length}</span>
              </p>
              <p className="text-purple-900">
                Total Score:{" "}
                <span className="font-semibold">{result.score}</span>
              </p>
              <p className="text-purple-900">
                Correct Answers:{" "}
                <span className="font-semibold">{result.correctAnswers}</span>
              </p>
              <p className="text-purple-900">
                Wrong Answers:{" "}
                <span className="font-semibold">{result.wrongAnswers}</span>
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-8 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
              >
                Restart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
