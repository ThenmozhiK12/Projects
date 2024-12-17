import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import './Navbar1.css';
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <div className="logo-section d-flex align-items-center">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11246/11246092.png"
            width="25"
            height="25"
            className="logo"
            alt="App Logo"
          />
          <span className="ms-2">Rural Aid</span>
        </Navbar.Brand>
      </div>
      <div className="menu-section d-flex justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto12">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/signup">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </div>
      
    </Navbar>
  );
};

export default NavBar;
