import React, { useCallback, useState } from 'react'
import Task from './Task';

const Callback = () => {
    const [todo, setTodo] = useState([]);
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count+1)
    }

    const addTask = useCallback(( ) => {
        setTodo(prev => [...prev, 'New Task'])
    }, [todo]);

  return (
    <div>
      <Task todo={todo} addTask={addTask} />
 
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Callback;
