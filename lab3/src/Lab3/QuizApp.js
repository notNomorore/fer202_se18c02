import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
    {
        id: 1,
        question: "What is the capital of France ?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id: 2, 
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        id: 3, 
        question: "Who wrote 'Hamlet'?",
        options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
        answer: "William Shakespeare"
    },
    {
        id: 4, 
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        id: 5, 
        question: "Who discovered gravity when an apple fell on his head?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        id: 6, 
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Gold", "Silver", "Iron"],
        answer: "Oxygen"
    },
    {
        id: 7, 
        question: "What year did World War II end?",
        options: ["1945", "1918", "1939", "1965"],
        answer: "1945"
    },
    {
        id: 8, 
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        id: 9, 
        question: "Which country is famous for sushi?",
        options: ["China", "Japan", "Korea", "Thailand"],
        answer: "Japan"
    },
    {
        id: 10, 
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        id: 11, 
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Asia", "Europe", "North America"],
        answer: "Asia"
    },
    {
        id: 12, 
        question: "How many bones are in the adult human body?",
        options: ["206", "208", "300", "150"],
        answer: "206"
    },
    {
        id: 13, 
        question: "Which company created the iPhone?",
        options: ["Samsung", "Google", "Apple", "Microsoft"],
        answer: "Apple"
    },
    {
        id: 14, 
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        answer: "Vatican City"
    },
    {
        id: 15, 
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Lettuce", "Cucumber"],
        answer: "Avocado"
    },
    {
        id: 16, 
        question: "Who is known as the father of computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        id: 17, 
        question: "Which planet is the largest in the solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        id: 18, 
        question: "Which language has the most native speakers worldwide?",
        options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
        answer: "Mandarin Chinese"
    },
    {
        id: 19, 
        question: "What is the national sport of Canada?",
        options: ["Basketball", "Ice Hockey", "Soccer", "Cricket"],
        answer: "Ice Hockey"
    },
    {
        id: 20, 
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic Acid", "Dynamic Neural Algorithm", "Data Network Analysis", "Digital Number Array"],
        answer: "Deoxyribonucleic Acid"
    }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ứng dụng Quiz</h1>
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          questionData={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};
export default QuizApp;
