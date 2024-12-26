import React, { useState } from 'react'

const Obj = () => {
    const [person, setPerson] = useState({
        name: "Smith",
        age: 67,
        location: "USA"
    })

    const updateDetails = () => {
        setPerson((prev) => {
            return {...prev, age: 45, name: 'Adam'} 
            // updates the mentioned properties from the object
        })
    }

  return (
    <div>
      <h1>Name: {person.name}</h1>
      <p>Age: {person.age}</p>
      <p>Location: {person.location}</p>

      <button onClick={updateDetails}>Update Details</button>
    </div>
  )
}

export default Obj
