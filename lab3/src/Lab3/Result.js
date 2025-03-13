import React from "react";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Quiz Hoàn Thành!</h2>
      <p>Điểm của bạn: {score} / {totalQuestions}</p>
      <button onClick={restartQuiz} style={{ padding: "10px", cursor: "pointer" }}>
        Chơi Lại
      </button>
    </div>
  );
};

export default Result;
