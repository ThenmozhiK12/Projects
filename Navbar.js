import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = ({ username, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleNavigate = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  const handleLogout = () => {
    if (onLogout && typeof onLogout === 'function') {
      onLogout(); // Call the onLogout function passed as a prop
      navigate('/'); // Redirect to home or login page after logout
    } else {
      console.error('onLogout is not a function');
    }
  };

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
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Complaints" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/raise-complaint" className='drop'>Raise a Complaint</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/donate" className="donate-btn">Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="profile-section d-flex align-items-center">
        <div onClick={toggleDropdown} className="d-flex align-items-center profile-dropdown-toggle">
          <Image
            src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg"
            roundedCircle
            className="profile-pic"
          />
          <h5 className='profile-name'>
            {username ? (
              <span className='profile-name'>{username}</span>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </h5>
        </div>
        {dropdownOpen && (
          <div className="profile-dropdown">
            {username && (
              <div onClick={handleLogout} className="dropdown-item">Logout</div>
            )}
            {!username && (
              <div onClick={() => handleNavigate('/login')} className="dropdown-item">Login</div>
            )}
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default NavigationBar;
