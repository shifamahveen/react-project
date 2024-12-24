import React, { useState } from 'react'

const PrevState = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(prev => prev+1);
        setCount(prev => prev+1); 
        setCount(prev => prev+1); 
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default PrevState
