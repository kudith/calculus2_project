"use client";
import React, { useState, useEffect } from "react";
import katex from "katex";
import { quiz } from "./data.js";
import "katex/dist/katex.min.css";
import "./quiz.css"; 

const QuizComponent = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quiz.totalQuestions).fill(null));
  const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer, explanation } = questions[activeQuestion];

  useEffect(() => {
    const questionElement = document.getElementById("question");
    if (questionElement) {
      katex.render(question, questionElement);
    }
  }, [question]);

  useEffect(() => {
    const explanationElement = document.getElementById("explanation");
    if (explanationElement) {
      katex.render(explanation, explanationElement);
    }
  }, [explanation]);

  const onAnswerSelected = (answer, idx) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[activeQuestion] = idx;
    setSelectedAnswers(newSelectedAnswers);
    setChecked(true);
  };

  const nextQuestion = () => {
    setResult((prev) => {
      const isCorrect = selectedAnswers[activeQuestion] !== null && answers[selectedAnswers[activeQuestion]] === correctAnswer;
      return isCorrect
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
    setChecked(false);
  };

  const prevQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion((prev) => prev - 1);
      setChecked(false);
    }
  };

  const startReview = () => {
    setReviewMode(true);
    setShowResult(false);
    setActiveQuestion(0);
  };

  const exitReview = () => {
    setReviewMode(false);
    setShowResult(true);
  };

  useEffect(() => {
    if (selectedAnswers[activeQuestion] !== null) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [activeQuestion, selectedAnswers]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full sm:max-w-xl mx-4 p-6 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-light">
          Quiz Page
        </h1>
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Question: {activeQuestion + 1}/{questions.length}
          </h2>
        </div>
        <div>
          {showResult ? (
            <div className="quiz-container">
              <h3 className="text-xl font-semibold mb-6">
                Results
              </h3>
              <h3 className="text-lg font-semibold mb-4">
                Overall {(result.score / (questions.length * 5)) * 100}%
              </h3>
              <p className="">
                Total Questions:{" "}
                <span className="font-semibold">{questions.length}</span>
              </p>
              <p className="">
                Total Score:{" "}
                <span className="font-semibold">{result.score}</span>
              </p>
              <p className="">
                Correct Answers:{" "}
                <span className="font-semibold">{result.correctAnswers}</span>
              </p>
              <p className="">
                Wrong Answers:{" "}
                <span className="font-semibold">{result.wrongAnswers}</span>
              </p>
              <button
                onClick={startReview}
                className="mt-8 w-full py-2 px-4  text-white font-semibold bg-blue-light rounded-lg hover:bg-blue-950"
              >
                Review
              </button>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
              >
                Restart
              </button>
            </div>
          ) : reviewMode ? (
            <div className="quiz-container">
              <h3
                id="question"
                className="text-xl font-semibold mb-6"
              >
                {question}
              </h3>
              {answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`block w-full py-2 px-4 mb-4 rounded-lg ${
                    selectedAnswers[activeQuestion] === idx
                      ? answers[selectedAnswers[activeQuestion]] === correctAnswer
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                      : "shadow-lg bg-brand-dark dark:bg-badge-light text-brand-light dark:text-brand-dark"
                  }`}
                  disabled
                >
                  {answer}
                </button>
              ))}
              <div className="mb-4">
                <strong>Explanation:</strong>
                <p id="explanation">{explanation}</p>
              </div>
              <div className="flex justify-between">
                {activeQuestion > 0 && (
                  <button
                    onClick={prevQuestion}
                    className="w-1/3 py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
                  >
                    Back
                  </button>
                )}
                {activeQuestion < questions.length - 1 ? (
                  <button
                    onClick={() => setActiveQuestion((prev) => prev + 1)}
                    className={`${
                      activeQuestion > 0 ? "w-1/3" : "w-full"
                    } py-2 px-4  text-white font-semibold rounded-lg bg-blue-light hover:bg-blue-950`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={exitReview}
                    className={`${
                      activeQuestion > 0 ? "w-1/3" : "w-full"
                    } py-2 px-4  text-white font-semibold rounded-lg bg-blue-light hover:bg-blue-950`}
                  >
                    Exit Review
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="quiz-container">
              <h3 id="question" className="text-xl font-semibold mb-6">
                {question}
              </h3>
              {answers.map((answer, idx)=> (
                <button
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={`block w-full py-2 px-4 mb-4 rounded-lg transition-colors duration-300 ease-in-out ${
                    selectedAnswers[activeQuestion] === idx
                      ? " text-white bg-blue-light"
                      : "dark:bg-white bg-brand-dark text-badge-light dark:text-brand-dark hover:bg-gray-950  dark:hover:bg-gray-400"
                  }`}
                >
                  {answer}
                </button>
              ))}
              <div className="flex justify-between">
                {activeQuestion > 0 && (
                  <button
                    onClick={prevQuestion}
                    className="w-1/3 py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
                  >
                    Back
                  </button>
                )}
                {checked && (
                  <button
                    onClick={nextQuestion}
                    className={`${
                      activeQuestion > 0 ? "w-1/3" : "w-full"
                    } py-2 px-4  text-white font-semibold rounded-lg bg-blue-light hover:bg-blue-950`}
                  >
                    {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;

