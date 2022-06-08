import React from 'react'
import {Link} from "react-router-dom";

function Navbar ({loggedin, logoutUser}) {

  function loggedOutLinks(){
    return (
      <nav className="nav-Links">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/signup">Sign up</Link></div>
        <div><Link to="/login">Log in</Link></div>
      </nav>
    )
  }
  function handleLogout(){
    fetch("/logout", {
      method: "DELETE",
    })
    .then(()=>logoutUser());
  }

  function loggedInLinks(){
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#!" onClick={handleLogout}>Log out</a></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
    )
  }

  return (
    <div>
      { loggedin ? loggedInLinks() : loggedOutLinks() }
    </div>
  )
}

export default Navbar