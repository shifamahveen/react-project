import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('blue');

    // no deps array
    useEffect(() => {
        console.log("Component rendered");
    })
    
    // Empty deps array
    useEffect(() => {
        console.log("Component mounted");
    }, [])
    
    // with deps
    useEffect(() => {
        console.log("Component updated");

        return() => {
            console.log("Cleanup function executed");
        }
    }, [color, count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>

            <h1>Color: {color}</h1>
            <button onClick={() => setColor('green')}>Color change</button>
        </div>
    )
}

export default Effect
