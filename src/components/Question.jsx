import React from 'react';
import QuestionTimer from './QuestionTimer';
import Answer from './Answer';

const Question = ({questionText, answers, onSelectAnswer, answerState, onSkipAnswer, onSeletedAnswer}) => {
  return (
      <div className='question'>
            <QuestionTimer 
            timeout={10000} 
            ontimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answer answers={answers} 
            selectedAnswer={onSeletedAnswer} 
            answerState={answerState} onSelect={onSelectAnswer} />
        </div>
  );
}

export default Question;
