import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {
    useEffect(() => {
        console.log('use Effect hook');
    }, []);

    useLayoutEffect(() => {
        console.log('use Layout Effect hook');
    }, [])

  return (
    <div>
        <h1>Hello</h1>
        <ul>
        {Array(200).fill('').map((item, index) => {
            <li key={index}>
                {Math.floor(Math.random() * 3)}
            </li>
        })}
        </ul>
    </div>
  )
}

export default LayoutEffect
