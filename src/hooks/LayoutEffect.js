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
        {Array(20000).fill('').map((item, index) => {
            <h4 key={index}>
                {Math.floor(Math.random() * 10)}
            </h4>
        })}
    </div>
  )
}

export default LayoutEffect
