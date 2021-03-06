import React from 'react'
import {GrCart, GrAddCircle, GrLogout, GrLogin } from 'react-icons/gr';
import {FaStar} from 'react-icons/fa';
import {BiHomeAlt} from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

function MenuNav ({loggedin, logoutUser}) {

  function loggedOutLinks(){
    return (
      <div>
        <Nav.Link href="/"><BiHomeAlt />Home</Nav.Link>
        <Nav.Link href="/signup"><AiOutlineUserAdd/>Sign up</Nav.Link>
        <Nav.Link href='/login'><GrLogin/>Log in</Nav.Link>
      </div>
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
     <div>
        <Nav.Link href="/"><BiHomeAlt />Home</Nav.Link>
        <Nav.Link href='/favorites'><FaStar />Favorites</Nav.Link>
        <Nav.Link href="#!" onClick={handleLogout}><GrLogout />Log out</Nav.Link>
        <Nav.Link href='/posts'><GrAddCircle />New Post</Nav.Link>
      </div>
    )
  }

  return (
    <Navbar collapseOnSelect expand="md" bg="info" >
      <Container>
        <Navbar.Brand href="#home"><GrCart />E-Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          { loggedin ? loggedInLinks() : loggedOutLinks() } 
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuNav;