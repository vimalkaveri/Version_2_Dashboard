import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const TheHeader = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{
        backgroundColor: "#E6E6E7", // Custom background color
        padding: "5px 10px",
        color: "#333", // Custom text color for Navbar
      }}
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style={{ color: "#000" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#features" style={{ color: "#000" }}>
              Features
            </Nav.Link>
            <Nav.Link href="#logout" style={{ color: "#000" }}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TheHeader;
