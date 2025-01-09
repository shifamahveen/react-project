import { useState } from 'react';
import useLocalStorage from './custom/useLocalStorage';

const App = () => {
  const [color, setColor] = useLocalStorage('color', '');
  
  return (
      <>
        <input type='text' value={color} onChange={(event) => setColor(event.target.value)} />
        <h1>Color: {color}</h1>
      </>
  )
}

export default App;