import React, { useState, useEffect } from "react";
import { Button, Form, Container, ListGroup, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { TfiAlarmClock, TfiAngleDoubleRight } from "react-icons/tfi";
import { ImLoop2 } from "react-icons/im";

const initialQuestions = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
];

function QuizApp() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswers, setNewAnswers] = useState(["", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(10);
  }, [currentQuestion]);

  const handleAddQuestion = () => {
    if (newQuestion && correctAnswer && newAnswers.every((ans) => ans)) {
      setQuestions([...questions, { question: newQuestion, answers: newAnswers, correctAnswer }]);
      setNewQuestion("");
      setNewAnswers(["", "", ""]);
      setCorrectAnswer("");
    }
  };

  const handleSelectAnswer = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer });
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h2>Quiz App</h2>
        <Form>
          <Form.Group>
            <Form.Label>New Question:</Form.Label>
            <Form.Control type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
          </Form.Group>
          {newAnswers.map((ans, i) => (
            <Form.Group key={i}>
              <Form.Label>Answer {i + 1}:</Form.Label>
              <Form.Control
                type="text"
                value={ans}
                onChange={(e) => {
                  let updatedAnswers = [...newAnswers];
                  updatedAnswers[i] = e.target.value;
                  setNewAnswers(updatedAnswers);
                }}
              />
            </Form.Group>
          ))}
          <Form.Group>
            <Form.Label>Correct Answer:</Form.Label>
            <Form.Control as="select" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
              <option value="">Select Correct Answer</option>
              {newAnswers.map((ans, i) => (
                <option key={i} value={ans}>{ans}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="success" onClick={handleAddQuestion} className="mt-2">Add Question</Button>
        </Form>

        {showScore ? (
          <div className="text-center mt-4">
            <h2>Your Score: {score} / {questions.length}</h2>
            <Button variant="primary" onClick={handleRestartQuiz}>Restart Quiz <ImLoop2 /></Button>
          </div>
        ) : (
          <div>
            <h4>Question {currentQuestion + 1}/{questions.length}: {questions[currentQuestion].question}</h4>
            <ProgressBar now={((currentQuestion + 1) / questions.length) * 100} className="my-3" />
            <TfiAlarmClock /> <h5 className={timeLeft < 5 ? "text-danger" : "text-dark"}>Time Left: {timeLeft}s</h5>
            <div className="mt-3">
              {questions[currentQuestion].answers.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswers[currentQuestion] === option
                    ? option === questions[currentQuestion].correctAnswer ? "success" : "danger"
                    : "outline-secondary"}
                  className="m-2"
                  onClick={() => handleSelectAnswer(option)}
                  disabled={!!selectedAnswers[currentQuestion]}
                >
                  {option}
                </Button>
              ))}
            </div>
            {selectedAnswers[currentQuestion] && (
              <h5 className="mt-3">
                {selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer ? (
                  <span className="text-success"><FaCheckCircle /> Correct! 🎉</span>
                ) : (
                  <span className="text-danger"><FaTimesCircle /> Incorrect! The correct answer is: {questions[currentQuestion].correctAnswer}</span>
                )}
              </h5>
            )}
            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedAnswers[currentQuestion]}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : <><TfiAngleDoubleRight /> Next Question <TfiAngleDoubleRight /></>}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuizApp;
