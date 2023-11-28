import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./CommonNav.css";

function CommonNav() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      collapseOnSelect
      expand="md"
      className={`common-nav ${expanded ? "expanded" : ""}`}
    >
      <Container fluid>
        <Navbar.Toggle
          className="mx-auto text-bg-light"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-center py-2">
            <Nav.Link className="text-light nav_hover" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light nav_hover" href="#menu">
              Menu
            </Nav.Link>
            <Nav.Link className="text-light nav_hover" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="text-light nav_hover" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CommonNav;
