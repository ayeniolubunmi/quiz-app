import React, { useEffect, useState } from 'react';

const QuestionTimer = ({timeout, ontimeout}) => {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(()=>{
        setTimeout(timeout, ontimeout)
    },[timeout,ontimeout]);

    useEffect(()=>{
        setInterval(()=>{
            setRemainingTime((prevRemainingTime)=>prevRemainingTime-100)
        },100)
    },[]);

  return (
    <div>
      <progress id='question-time' max={timeout} value={remainingTime}/>
    </div>
  );
}

export default QuestionTimer;
