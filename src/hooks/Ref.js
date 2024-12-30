import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    // counting number of re renders
    const [color, setColor] = useState('blue');
    const [number, setCount] = useState(0);
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    })

  return (
    <div>
      <h1>Color: {color}</h1>
      <button onClick={() => setColor('green')}>Change</button>

      <h1>Count: {number}</h1>
      <button onClick={() => setCount(number+1)}>Increment</button>

      <h2>Renders: {count.current}</h2>
    </div>
  )
}

export default Ref
