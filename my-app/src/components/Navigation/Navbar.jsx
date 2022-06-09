import React from 'react'
import {Link} from "react-router-dom";
import {GrCart, GrAddCircle, GrLogout, GrLogin } from 'react-icons/gr';
import {FaStar} from 'react-icons/fa';
import {BiHomeAlt} from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai'
import './navbar.css'

function Navbar ({loggedin, logoutUser}) {

  function loggedOutLinks(){
    return (
      <nav className="nav-bar">
        <span className="nav-Links">
          <Link to="/"><BiHomeAlt />Home</Link>
        </span>
        <span className="nav-Links">
          <Link to="/signup"><AiOutlineUserAdd/>Sign up</Link>
        </span>
        <span className="nav-Links">
          <Link to="/login"><GrLogin/>Log in</Link>
        </span>
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
      <nav className='nav-bar'>
        <span className="nav-Links">
          <Link to="/">Home</Link>
        </span>
        <span className="nav-Links">
          <a href="#!" onClick={handleLogout}><GrLogout />Log out</a>
        </span>
        <span className="nav-Links">
          <Link to="/favorites"><FaStar />Favorites</Link>
        </span>
        <span className="nav-Links">
          <Link to="/posts"><GrAddCircle />Posts</Link>
        </span>
      </nav>
    )
  }

  return (
    <div className='nav-bar'>
     <GrCart color="green" size="2em" /><h1 color="green">E-Mart</h1>{ loggedin ? loggedInLinks() : loggedOutLinks() } 
      
    </div>
  )
}

export default Navbar