import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import '../styles/NavBar.scss';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">Kai Ying's Porfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavigationBar;