import React from 'react'

const Task = ({ todo, addTask }) => {
    console.log('Rendering Child');
    
  return (
    <div>
        {todo.map((i, index) => 
            <p key={index}>{index+1}. {i}</p>
        )}
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default React.memo(Task)
