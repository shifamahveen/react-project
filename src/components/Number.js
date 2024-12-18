import React from 'react'

const Number = (props) => {
    const numbers = props.numbers;
    const nums = numbers.map((i) => {
        return <p>{i*2}</p>
    } )

  return (
    <>
      <div className='px-4 fs-2'>{numbers}</div>
      <div className='px-4 fs-2'>{nums}</div>
    </>
  )
}

export default Number;
