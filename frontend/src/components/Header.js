import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Login from "./Login";
import { useSelector } from "react-redux";

const Header = () => {
  const { token } = useSelector((state) => state.loginSlice);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Expense Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-4">{token ? <Link to="/history"> History </Link> : ""}</Nav>
          {token ? "" : <Login />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
