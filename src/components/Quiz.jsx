import React, { useState } from 'react';
import questions from '../questions';
const Quiz = () => {
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length

    function handleSelectedAnswer(selectedAnswer){
        setUserAnswer((prevSelectedAnswer)=>{
            return [...prevSelectedAnswer, selectedAnswer]
        })
    }
    
  return (
    <div id='quiz'>
        <div className='question'>
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {questions[activeQuestionIndex].answers.map((answer)=>(
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
