import React, { useEffect, useRef, useState } from 'react'

const Mutable = () => {
    const countRef = useRef(0);
    const [count, setCount] = useState(0);

    const incrementRef = () => {
        countRef.current += 1;
    }

    useEffect(() => {
        console.log("Re rendered");
    });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>

      <h1>Ref Count: {countRef.current}</h1>
      <button onClick={incrementRef}>IncrementRef</button>
    </div>
  )
}

export default Mutable
