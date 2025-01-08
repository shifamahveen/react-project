import React, { useReducer } from 'react'

const initialValue = 0;

const calculate = (count, action) => {
    switch(action.type) {
        case 'increment': return count+1;
        case 'decrement': return count-1;
        case 'reset': return 0;
        default: return count;
    }
}

const Reducer = () => {
    // const [state, dispatch] = useReducer(reducer, initialValue);
    const [count, dispatch] = useReducer(calculate, initialValue);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default Reducer
