import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { username } = useParams();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>This is the profile of {username}</p>
    </div>
  )
}

export default Profile;