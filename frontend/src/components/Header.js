import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Login from "./Login";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Expense Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4">
            <Link to="/dashboard"> Dashbaord </Link>
            <Link to="/history"> History </Link>
          </Nav>
          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
