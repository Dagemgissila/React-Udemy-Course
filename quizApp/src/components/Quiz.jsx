import { useState } from "react";
import QUESTIONS from "../questions.js";
import isQuizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={isQuizComplete} alt="" />
        <h1>Quiz Completed</h1>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeOut={() => handleSelectAnswer(null)}
        />
        <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              // Explicit return statement here
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
