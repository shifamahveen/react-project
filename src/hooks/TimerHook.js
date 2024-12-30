import React, { useEffect, useState } from 'react'

const TimerHook = () => {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        let interval;
        // timer function
        if (active && !paused) {
            interval = setInterval(() => {
                setTime(time => time+1)
            }, 1000)
        } else {
           clearInterval(interval); 
        }

        return(() => clearInterval(interval));
    }, [active, paused]);

    const startTimer = () => {
        setActive(true);
        setPaused(false);
    }

    const pauseTimer = () => {
        setPaused(true);
    }

    const resetTimer = () => {
        setTime(0);
        setActive(false);
        setPaused(false)
    }

  return (
    <div className='container m-5 shadow rounded-lg p-5'>
      <h1 className='text-center'>{time}</h1>

        <div className='text-center'>
            {!active && !paused ?
                <button onClick={startTimer}>Start</button> :
                <button onClick={pauseTimer}>Pause</button>
            }

            <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  )
}

export default TimerHook