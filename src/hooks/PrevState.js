import React, { useState } from 'react'

const PrevState = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count => count+1); // 0+1 => 1
        setCount(count => count+1); // 1+1 =>2
        setCount(count => count+1); // 2+1 => 3
    }

  return (
    <div>
      <h1>{count}</ h1>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default PrevState
