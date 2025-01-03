import React, { useContext } from 'react';
import { GlobalVar } from '../App.js';

const Child = () => {
    const passedVal = useContext(GlobalVar);
    console.log(passedVal);
    
    return <h1>Child Component: {passedVal}</h1>
}

export default Child;