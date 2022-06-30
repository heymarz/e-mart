import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from "./components/static/LoginForm"
import Home from "./components/pages/Home";
import Navbar from "./components/Navigation/Navbar";
import SignupForm from './components/static/SignupForm';
import PostInput from './components/pages/Posts/PostInput';
import ErrorPage from "./components/static/ErrorPage";

function App() {
  const [currentUser, setCurrentUser] = useState({});
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
  },[])

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
            path="/posts"
            element={<PostInput userId={currentUser.id} />}
          />
          <Route 
            path="*"
            element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
