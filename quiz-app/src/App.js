import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'What is the  capital of India ?',
      answerOptions: [
        {answerText: 'Mumbai', isCorrect: false},
        {answerText: 'Bengluru', isCorrect: false},
        {answerText: 'Delhi', isCorrect: true},
        {answerText: 'Kolkata', isCorrect: false},
      ],
    },

    {
      questionText: 'Who is the CEO of TATA ?',
      answerOptions: [
        {answerText: 'Mukesh Ambani', isCorrect: false},
        {answerText: 'Ratan Tata', isCorrect: true},
        {answerText: 'Narayan Murthy', isCorrect: false},
        {answerText: 'Anand Mahindra', isCorrect: false},
      ],
    },

    {
      questionText: 'Which of the following is an IOS device ?',
      answerOptions: [
        {answerText: 'Iphone', isCorrect: true},
        {answerText: 'Samsung', isCorrect: false},
        {answerText: 'Redmi', isCorrect: false},
        {answerText: 'Oppo', isCorrect: false},
      ],
    },

    {
      questionText: 'What is the value of Pi ?',
      answerOptions: [
        {answerText: '0.1257', isCorrect: false},
        {answerText: '3.154', isCorrect: false},
        {answerText: '1.0025', isCorrect: false},
        {answerText: '3.14', isCorrect: true},
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true) {
      alert("This answer is correct!");
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
    
  }

  return (
    <div className='app'>
      {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}
      {showScore ? (
        <div className='score-section'>You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>  
          </div>
          <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
