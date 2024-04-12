import React, { useState } from 'react';
import questions from '../questions';
import QuestionTimer from './QuestionTimer';
const Quiz = () => {
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;
    const isQuizCompleted= activeQuestionIndex === userAnswer.length;
    if(isQuizCompleted){
        <div id='summary'>
            <img src="" alt=""/>
            <h1>Quiz completed</h1>            
        </div>
    }
    const shuffleAnswers = [...questions[activeQuestionIndex].answers];
    shuffleAnswers.sort(()=>Math.random()-0.5);
    function handleSelectedAnswer(selectedAnswer){
        setUserAnswer((prevSelectedAnswer)=>{
            return [...prevSelectedAnswer, selectedAnswer]
        })
    }
    
  return (
    <div id='quiz'>
        <div className='question'>
            <QuestionTimer timeout={10000} ontimeout={()=>handleSelectedAnswer(null)} />
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {shuffleAnswers.map((answer)=>(
                    <li key={answer.id} className='answer'>
                        <button className='' onClick={()=>handleSelectedAnswer(answer)}>{answer}</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Quiz;
