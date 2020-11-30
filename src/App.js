import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Who is the manager for the Dunder Mifflin branch in Scranton?',
			answerOptions: [
				{ answerText: 'David Wallace', isCorrect: false },
				{ answerText: 'Jan Levinson', isCorrect: false },
				{ answerText: 'Michael Scott', isCorrect: true },
				{ answerText: 'Karen Filippelli', isCorrect: false },
			],
		},
		{
			questionText: 'What color were the shirts the Nashua branch wore at the company picnic?',
			answerOptions: [
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Black', isCorrect: false },
			],
		},
		{
			questionText: 'The entire office watch Andy in a community theater production of what play?',
			answerOptions: [
				{ answerText: 'Sweeney Todd', isCorrect: true },
				{ answerText: 'Death of a Salesman', isCorrect: false },
				{ answerText: 'Romeo and Juliet', isCorrect: false },
				{ answerText: 'The Book of Mormon', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of the criminal who was terrorizing Scranton in the later seasons of the show?',
			answerOptions: [
				{ answerText: 'The Scranton Burglar', isCorrect: false },
				{ answerText: 'The Scranton Slasher', isCorrect: false },
				{ answerText: 'The Scranton Stealer', isCorrect: false },
				{ answerText: 'The Scranton Strangler', isCorrect: true },
			],
		},
	];

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);

const [ score, setScore] = useState(0);

const handleAnswerButtonClick = (isCorrect) => {
if(isCorrect===true){
  alert("That's correct!");
  setScore(score + 1);
}


  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion);
  }else {
    setShowScore(true);
  }
  
}

	return (
		<div className='app'>
		
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOptions)=> (
              <button onClick={()=> handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
              ))} 
					</div>
				</>
			)}
		</div>
	);
}