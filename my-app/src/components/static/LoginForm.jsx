import React, {useState} from 'react'
import {headers} from '../../Global'

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e){
    e.preventDefault();
    
    fetch('/login',{
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        user: { 
          username: username,
          password: password,
        }}),
      })
      .then((r)=>r.json())
      .then(data=>console.log(data))
    }
      
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>User name:</label>
        <input
          type="text"
          id="username"
          autoComplete='off'
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type = "password"
          id = "password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          autoComplete='current-password'
        />
        <br />
        <button type="submit">Sumbit</button>
      </form>
    </div>
  )
}

export default LoginForm