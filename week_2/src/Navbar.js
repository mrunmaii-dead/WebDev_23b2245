import React from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer';
import './Navbar.css'
import { useState } from 'react';
import { Navbar, Nav, Container,Button,Form,FormControl } from 'react-bootstrap';
import { FaUserCircle, FaMapMarkerAlt, FaBookmark, FaBars,FaSearch,FaAdjust, FaStickyNote,FaSun,FaMoon  } from 'react-icons/fa';
import { FiEdit2 ,  FiToggleLeft} from "react-icons/fi"

const NavigationBar = ({darkMode , toggleDarkMode}) => {
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <Navbar  >
      <Container>
        
        <Navbar.Brand href="" className = "navbar-brand-icon"><FaStickyNote /> Keep</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mx-auto d-flex align-items-center">
            
            <FormControl type="text" placeholder="Search!" className="mr-sm-2" />
            <Button variant="outline-secondary">
              <FaSearch />
            </Button>
          </Form>
          <Nav className="ml-auto">
            
          
            <Nav.Link href="" className="nav-link-icon"  onClick = {toggleDarkMode}> {darkMode ? <FaMoon /> : <FaSun />} </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export default NavigationBar;
