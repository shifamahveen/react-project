import React, { useRef } from 'react'

const DOM = () => {
    const inputName = useRef(null);

    const addName = () => {
        inputName.current.value = "Alex";
        inputName.current.style.width = "500px";
        inputName.current.style.color = "red";
        inputName.current.focus();
    }

  return (
    <div>
      <input type='text' ref={inputName} />
      <button onClick={addName}>Apply DOM</button>
    </div>
  )
}

export default DOM