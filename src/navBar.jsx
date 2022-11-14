import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {


  return (
    <div className ="navbar-custom">

    <Container>

    <div className ="navBar">
      
      <Nav.Link href="/" >HOME</Nav.Link>
      <Nav.Link href="/prijava"style={{marginLeft: 30,color:"white" }} >LOGIN</Nav.Link>
      <Nav.Link href="/provera"style={{marginLeft: 30,color:"white"}}>REVIEWS</Nav.Link>
      <Nav.Link href="/stats"style={{marginLeft: 30,color:"white"}}>STATS</Nav.Link>
      <Nav.Link href="/contact"style={{marginLeft: 30,color:"white"}}>CONTACT</Nav.Link>


    </div>
    
        </Container>
</div>
  );

}

export default NavBar;
