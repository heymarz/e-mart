import React, {useContext} from 'react';
import DataContext from '../../DataContext';
import {GrCart, GrAddCircle, GrLogout, GrLogin } from 'react-icons/gr';
import {FaStar} from 'react-icons/fa';
import {BiHomeAlt} from 'react-icons/bi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import './navbar.css'

function MenuNav () {
const {loggedin, logoutUser} = useContext(DataContext)

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
        <Nav.Link href='/sales'>Own Posts</Nav.Link>
        <Nav.Link href="/login" onClick={handleLogout}><GrLogout />Log out</Nav.Link>
        <Nav.Link href='/posts'><GrAddCircle />New Post</Nav.Link>
      </div>
    )
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="info" >
      <Container>
        <Navbar.Brand href="#home"><GrCart />E-Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Row>
              <Col>
                { loggedin ? loggedInLinks() : loggedOutLinks() }
              </Col> 
              <Col>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link eventKey={2} href="/contact">
                  Contacts
                </Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MenuNav;