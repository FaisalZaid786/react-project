import React, {useContext} from 'react'
import {userContext} from '../context/UserContextProvider'

function Profile() {
  const {user} = useContext(userContext)

    console.log(user)
  return (
    <>
      {user ? <div>Welcome: {user.username}</div> : <div>Please Login</div>}
    </>
  ) 
}

export default Profile