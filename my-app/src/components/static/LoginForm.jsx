import React, {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom';
import {headers} from '../../Global'
import Errors from './Errors';
import { useNavigate } from 'react-router-dom';
import "./styles.css";


function LoginForm({ loginUser, addErrors, clearErrors, errors }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      .then(data=>{
        if(data.id){
          loginUser(data);
          navigate("/");
        }else{
          addErrors(data.errors)
        }
        })
    }

    useEffect(()=>{
      return()=>clearErrors();
    },[])
      
  return (
    <div>
      <h2 className='header'>Log In</h2>
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
        <button type="submit">Submit</button>
      </form>
      <Errors errors={errors} />
      
    </div>
  )
}

export default LoginForm