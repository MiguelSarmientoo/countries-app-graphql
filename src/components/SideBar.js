import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

function Sidebar() {
  const location = useLocation(); 

  return (
    <Navbar bg="dark" variant="dark" className="sidebar" sticky="top">
      <Navbar.Brand className="sidebar-logo">
        <img
          src="https://lanzadera.es/wp-content/uploads/2023/09/FractalUp_logo1_420x420.png"
          alt="Logo"
          className="logo-img"
        />
      </Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Link 
          as={Link} 
          to="/" 
          className={location.pathname === '/' ? "nav-link active" : "nav-link"}
        >
          Home
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/vista1" 
          className={location.pathname === '/vista1' ? "nav-link active" : "nav-link"}
        >
          Vista 1
        </Nav.Link>
        <Nav.Link 
          as={Link} 
          to="/vista2" 
          className={location.pathname === '/vista2' ? "nav-link active" : "nav-link"}
        >
          Vista 2
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Sidebar;
