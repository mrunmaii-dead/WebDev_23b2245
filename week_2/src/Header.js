import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/rpi.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Kiep
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home"><FaHome /></Nav.Link>
          <Nav.Link href="#user"><FaUser /></Nav.Link>
          <Nav.Link href="#settings"><FaCog /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
