import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" 
            onClick={() => setCount(count - 1)}>-</button>
            <span className='p-2'>{count}</span>
            <button type="button" className="btn btn-primary" 
            onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter
