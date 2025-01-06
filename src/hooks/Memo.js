import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    // counter increment
    const increment = () => {
        setCount(count+1)
    }

    // cube of number
    function findCube(num) {
        console.log('calculating cube');
        return Math.pow(num, 3);
    }
    // const result = findCube(number);
    const result = useMemo(() => {
        return findCube(number)
    }, [number])

    return (
        <div>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <h1>Cube: {result}</h1>

            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Memo;