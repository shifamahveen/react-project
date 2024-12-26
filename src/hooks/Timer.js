import React, { startTransition, useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const startTimer = () => {
      if(!running) {
        setRunning(true);
        const id = setInterval(() => setSeconds(seconds => seconds+1), 1000);
        setIntervalId(id)
      }
    }

    const stopTimer = () => {
      if(running) {
        setRunning(false);
        clearInterval(intervalId);
      }
    }

  return (
    <div>
        <h1>{seconds}</h1>
        {running ?
                <button onClick={stopTimer}>Stop</button> :
                <button onClick={startTimer}>Start</button>
        }
    </div>
  )
}

export default Timer
