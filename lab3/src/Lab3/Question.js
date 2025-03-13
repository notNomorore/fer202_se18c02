import React from "react";

const Question = ({ questionData, handleAnswer }) => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>{questionData.question}</h2>
      <div>
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{ display: "block", width: "100%", margin: "10px 0", padding: "10px", cursor: "pointer" }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
