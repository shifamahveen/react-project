import React, { useEffect, useState, useRef } from 'react';

const RefPrevState = () => {
    const [age, setAge] = useState(40);
    const prevAge = useRef();

    useEffect(() => {
      prevAge.current = age;
    }, [age]);

  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={() => setAge(age+2)}>Double Age</button>
      {/* display prev state of reference variable */}
      <h1>Previous Age: {prevAge.current}</h1>
    </div>
  )
}

export default RefPrevState
