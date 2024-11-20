import React from "react";

const Result = ({ userAns, questions, resetQuiz }) => {
  const correctAns = userAns.filter((ans) => ans).length;

  return (
    <div className="results">
      <h2>Quiz Result</h2>
      <p>
        You Ans <span style={{ fontSize: "30px" }}>{correctAns}</span> out of{" "}
        <span style={{ fontSize: "30px" }}>{questions.length}</span> Question
      </p>
      <button
        onClick={resetQuiz}
        style={{ width: "100%", backgroundColor: "red" }}
      >
        CLick Here TO Retry
      </button>
    </div>
  );
};

export default Result;
