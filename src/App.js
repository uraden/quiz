import React, {useState} from 'react'
import './App.css';

function App() {
  
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many continents on earth?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
    },
    {
			questionText: 'What is the oldest country in the world?',
			answerOptions: [
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Egypt', isCorrect: false },
				{ answerText: 'Iran', isCorrect: false },
				{ answerText: 'San Marino', isCorrect: true },
			],
    },
    {
			questionText: 'Which country won FIFA world cup 1994?',
			answerOptions: [
				{ answerText: 'Brazil', isCorrect: true },
				{ answerText: 'Germany', isCorrect: false },
				{ answerText: 'Argentina', isCorrect: true },
				{ answerText: 'France', isCorrect: false },
			],
    },
    
    {
			questionText: 'What is the closest star to earth?',
			answerOptions: [
				{ answerText: 'Rigil Kentaurus	', isCorrect: false },
				{ answerText: 'Proxima Centauri', isCorrect: true },
				{ answerText: "Barnard's Star", isCorrect: false },
				{ answerText: 'Luyten', isCorrect: false },
			],
    },
    
    {
			questionText: 'How many months in the calendar year have exactly 30 days?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '3', isCorrect: false },
			],
    },
	];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);




  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;

    if(isCorrect){
      setScore(score + 1)
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    setCurrentQuestion(nextQuestion);
  };

  
  return (
    <div className="app">
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
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
		                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} className="btn">{answerOption.answerText}</button>
	              ))}
					</div>
				</>
			)}
    </div>
  );
}

export default App;
