import React, { useState } from 'react'

const ChangeColor = () => {
    // const [variable, setVariable] = useState(initialValue);
    const [color, setColor] = useState('Purple');

    const updateColor = () => {
        setColor('Blue');
    }

    return (
    <div>
      <h1>Color: {color}</h1>
      <button onClick={updateColor}>Change Color</button>
    </div>
  )
}
export default ChangeColor;