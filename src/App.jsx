import { useState } from 'react';
import './App.css';
import questions from './questionsComp/questions.json';
import Questions from './component/Questions';
import Result from './component/Result';

function App() {
  const [currentQue, setCurrentQue] = useState(0);
  const [userAns, setUserAns] = useState([]);

  const handleNextQue = (isCorrect) => {
    setUserAns([...userAns, isCorrect]);
    setCurrentQue(currentQue + 1);
  };

  const handleResetQuiz = () => {
    setCurrentQue(0);
    setUserAns([]);
  };

  const LastQuestion = currentQue >= questions.length;

  return (
    <div className="quiz-app">
      <h1>Quiz Time</h1>
      <div className="quiz-components">
        {!LastQuestion ? (
          <>
            <Questions
              question={questions[currentQue]}
              onAnsClick={handleNextQue}
            />
            <div className="btn-grp">
              <button onClick={() => setCurrentQue(currentQue + 1)}>Next</button>
              <button onClick={handleResetQuiz}>Reset Quiz</button>
            </div>
          </>
        ) : (
          <Result
            userAns={userAns}
            questions={questions}
            resetQuiz={handleResetQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
