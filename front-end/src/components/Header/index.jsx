import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';
function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Funcionários</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Início</Nav.Link>
          <Nav.Link href="/register">Cadastrar Funcionário</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
}

export default Header;
