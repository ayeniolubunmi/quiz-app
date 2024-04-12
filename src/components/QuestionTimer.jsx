import React, { useEffect, useState } from 'react';

const QuestionTimer = ({timeout, ontimeout}) => {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()=>{
        const timer = setTimeout(timeout, ontimeout)
        return ()=>{
            clearTimeout(timer);
        }
    },[timeout,ontimeout]);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime((prevRemainingTime)=>prevRemainingTime-100)
        },100);
        return()=>{
            clearInterval(interval)
        }
    },[]);

  return (
    <div>
      <progress id='question-time' max={timeout} value={remainingTime}/>
    </div>
  );
}

export default QuestionTimer;
