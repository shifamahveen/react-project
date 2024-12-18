import React from 'react'

const Conditions = (props) => {
  return (
    <div>
      {props.msgs.length > 0 &&
        <p>You have {props.msgs} unread messages</p>
      }
    </div>
  )
}

export default Conditions;
