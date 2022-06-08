import React, {useEffect, useState} from 'react';
import {headers} from "../../Global";
import Errors from './Errors';

function SignupForm({loginUser, addErrors, clearErrors, errors}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSignup(e){
    e.preventDefault();

      fetch("/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
            password_confirmation: passwordConfirmation,
        }}),
      })
      .then((r)=>r.json())
      .then(data=>{
        if(data.id){
          loginUser(data)
        }else{
          addErrors([data.error])
        }
      })
  }

  useEffect(()=>{
    return()=>clearErrors()
  },[])

  return (
    <div>
      <h1>Sign up Form</h1>
      <form onSubmit = {handleSignup}>
        <label htmlFor="usename">Username: </label>
        <input 
          type = "text"
          id = "username"
          autoComplete='off'
          placeholder = "Adam West"
          value = {username}
          onChange = {(e)=>setUsername(e.target.value)}
        />
        <br />
        <label htmlFor = "password">Password: </label>
        <input
          type = "password"
          id = "password"
          value = {password}
          onChange = {(e)=> setPassword(e.target.value)}
          autoComplete = "current-password"
        />
        <br />
        <label htmlFor="password">Password Confirmation: </label>
        <input
          type = "password"
          id = "password_confirmation"
          value = {passwordConfirmation}
          onChange = {(e)=>setPasswordConfirmation(e.target.value)}
          autoComplete = "current-password"
        />
        <br />
        <button type="submit">Sign up</button>
      </form>
      <Errors errors={errors} />
   </div>
  )
}

export default SignupForm