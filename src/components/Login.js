import React from 'react'

const Login = (props) => {
  return (
    <div>
      {props.isLogged ?
      <button onClick={props.Logout}>Logout</button> :
      <button onClick={props.Login}>Login</button>
      }
    </div>
  )
}

export default Login
