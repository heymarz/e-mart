import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/static/LoginForm"
import Home from "./components/pages/Home";
import Navbar from "./components/Navigation/Navbar";
import SignupForm from './components/static/SignupForm';
import Reviews from './components/pages/Reviews'

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [errors, setErrors] = useState([]);

  function loginUser(user){
    setCurrentUser(user);
    setLoggedin(true)
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedin(false);
  }

  function addErrors(errors){
    setErrors(errors)
  }
  function clearErrors() {
    setErrors([]);
  }

  useEffect(()=>{
    fetch('/me')
    .then(res=>{
      if(res.ok){
        res.json().then(user => loginUser(user))
      }
    })
  },[]);


  return (
    <Router>
      <Navbar loggedin={loggedin} logoutUser={logoutUser}/>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<LoginForm 
            errors={errors}
            addErrors={addErrors}
            clearErrors={clearErrors}
            loginUser={loginUser} 
            />}
          />
          <Route
            path="/signup"
            element={<SignupForm 
            errors={errors}
            addErrors={addErrors}
            clearErrors={clearErrors}
            loginUser={loginUser} 
            />}
          />
          <Route
            path="/reviews"
            element={<Reviews />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
