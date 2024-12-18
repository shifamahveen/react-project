import React from 'react'

const Name = (props) => {
    const users = props.users.filter(user => user.isActive);
    // const students = users.map((user,index) => {
    //     return <h1 key={index}>{user}</h1>
    // });

  return (
    <div>
      <li className='text-primary fs-1'></li>
    </div>
  )
}

export default Name
