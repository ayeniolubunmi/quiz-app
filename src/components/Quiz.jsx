import React, { useCallback, useState } from 'react';
import questions from '../questions';
import QuestionTimer from './QuestionTimer';
const Quiz = () => {
    const [answerState, setAnswerState] = useState('');
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length-1;
    const isQuizCompleted= activeQuestionIndex === userAnswer.length;
    if(isQuizCompleted){
        <div id='summary'>
            <img src="" alt=""/>
            <h1>Quiz completed</h1>            
        </div>
    }
    const shuffleAnswers = [...questions[activeQuestionIndex].answers];
    shuffleAnswers.sort(()=>Math.random()-0.5);
    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer){
        setAnswerState('answered')
        setUserAnswer((prevSelectedAnswer)=>{
            return [...prevSelectedAnswer, selectedAnswer]
        })
        setTimeout(()=>{
            if(selectedAnswer === questions[activeQuestionIndex].answers[0]){
                setAnswerState('correct')
            }else{
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('')
            }, 2000)
        }, 1000)
    },[activeQuestionIndex]);
    const handleSkipAnswer = (()=>handleSelectedAnswer(null), [handleSelectedAnswer])
  return (
    <div id='quiz'>
        <div className='question'>
            <QuestionTimer 
            key={activeQuestionIndex} 
            timeout={10000} 
            ontimeout={handleSkipAnswer} />
            <h2>{questions[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {shuffleAnswers.map((answer)=>{
                    const isSelected = userAnswer[userAnswer.length-1] === answer;
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
                            onClick={()=>handleSelectedAnswer(answer)}>{answer}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  );
}

export default Quiz;
