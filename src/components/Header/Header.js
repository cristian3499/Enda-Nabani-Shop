import React from 'react'
import  {NavLink}  from "react-router-dom";
import {  } from "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoEneba from '../../assets/images/enda-nabani-logo.jpg';

export const Header = () => {
  return (
    <>
    <header class="main-header">
    <Navbar collapseOnSelect  expand="lg" style={{backgroundColor: '#fcf4dd'}}>
      <Container>
      <Navbar.Brand style={{ textAlign: 'center' }} href="#">
            <img
              alt="Logo Eneba"
              src={LogoEneba}
              width="100"
              height="100"
              className="d-inline-block align-top"
              />{''}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link><NavLink style={{textDecoration: 'none', color: '#d81a5a'}} to="/"> Inicio</NavLink></Nav.Link>
            <Nav.Link ><NavLink style={{textDecoration: 'none', color: '#d81a5a'}} to="/nosotros"> Sobre nosotros</NavLink></Nav.Link>
            <Nav.Link ><NavLink style={{textDecoration: 'none', color: '#d81a5a'}} to="/productos"> Tienda</NavLink></Nav.Link>
            {/* <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link ><NavLink style={{textDecoration: 'none', color: '#d81a5a'}} to="/nuestros-servicios">Nuestro servicio</NavLink></Nav.Link>
            <Nav.Link ><NavLink style={{textDecoration: 'none', color: '#d81a5a'}} to="/contactanos">Contactanos</NavLink></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Carrito</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
  )
}
