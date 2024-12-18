import React from 'react'

const Even = (props) => {
    const evenNumbers = props.numbers.filter(i => i%2===0) 

    return (
        <div>
        <h1>{evenNumbers}</h1>
        </div>
    )
}

export default Even
