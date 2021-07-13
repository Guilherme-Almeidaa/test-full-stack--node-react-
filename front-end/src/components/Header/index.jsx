import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap';
function Header () {
    return (
        <header>
     
 
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Funcionários</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

 

        </header>

    )
}

export default Header;