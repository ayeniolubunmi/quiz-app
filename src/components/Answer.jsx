import React, { useRef, useState } from 'react';

const Answer = ({answers, selectedAnswer, answerState, onSelect}) => {
    const shuffledAnswers = useRef();
    const [shuffleAnswers, setShuffleAnswers]=useState([])
    
    if(!shuffledAnswers.current){
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(()=>Math.random()-0.5);
    }
    
  return (
    <div>
            <ul id='answers'>
                {shuffleAnswers.current.map((answer)=>{
                    const isSelected = selectedAnswer === answer;
                    let cssClass = '';
                    if(answerState === 'answered' && isSelected){
                        cssClass = 'selected';
                    }
                    if((answerState==='answered'|| answerState ==='wrong') && isSelected){
                        cssClass = answerState;
                    }
                    return (
                        <li key={answer.id} className='answer'>
                            <button className={cssClass} 
                            onClick={()=>onSelect(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
    </div>
  );
}

export default Answer;
