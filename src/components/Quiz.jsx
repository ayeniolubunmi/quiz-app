import React, { useCallback, useState } from 'react';
import questions from '../questions';
import Question from './Question';
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
        <Question key={activeQuestionIndex} questionText={questions[activeQuestionIndex].text} 
        answers={questions[activeQuestionIndex].answers} 
        answerState={answerState} 
        onSelectAnswer={handleSelectedAnswer} 
        onSkipAnswer={handleSkipAnswer} onSeletedAnswer={userAnswer[userAnswer.length-1]} />
    </div>
  );
}

export default Quiz;
