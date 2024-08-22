import React from 'react';
import "../App.css";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';




function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">EliteMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" color='white'>HOME</Nav.Link>
            <Nav.Link href="AboutUs">ABOUT US</Nav.Link>
            <NavDropdown title="PRODUCTS" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">MENS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                WOMENS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">KIDS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                NEW COLLECTIONS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="Questions">F&Qs</Nav.Link>
            <Nav.Link eventKey={2} href="Login">
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;