import React, {useEffect, useState} from 'react'
import {headers} from '../../Global'
import Errors from './Errors';
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
       
      <Form onSubmit={handleLogin}>
        <Form.Group className="ms-5" controlId="formGroupUsername">
          <Form.Label>User name:</Form.Label>
          <Form.Control
            type="username"
            autoComplete='off'
            placeholder="Enter username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="ms-5" controlId="formGroupPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type = "password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete='current-password'
          />
        </Form.Group>
        <br />
        <Button className="ms-5" variant="primary" size="sm" type="submit">Submit</Button>
        
      </Form>
      <Errors errors={errors} />
    </div>
  )
}

export default LoginForm