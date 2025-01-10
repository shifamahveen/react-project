import React, { useEffect, useState } from 'react'

const Storage = () => {
    const [name, setName] = useState(
        localStorage.getItem('name') ? localStorage.getItem('name') : ''
    );

    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name]);

  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Name: {name}</h2>
    </div>
  )
}

export default Storage;
