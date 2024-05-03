import React, {useState, useContext} from 'react'
import {userContext} from '../context/UserContextProvider'



function Login() {
    const [username, setUsername] = useState('')
    const [passsword, setPasssword] = useState('')
    const [error, setError] = useState(null)

    const {user, setUser} = useContext(userContext)
    
    const handleSubmit = (e) => {
      e.preventDefault()
      
      if(!username && !passsword) {
        setError('please fill all the details')
        return
      }
      setUser({username, passsword})      
    }
  return (
    <>
    
    { user ? null: <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
       
        <input type='password'
        value={passsword}
        onChange={(e) => setPasssword(e.target.value)}
        placeholder='password' />

        {
          error ? <p>{error}</p> : null
        }

        <button onClick={handleSubmit}>Submit</button>
    </div> }
    
    </>
    
  )
}

export default Login

