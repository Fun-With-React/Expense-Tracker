import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Nav,Container} from 'react-bootstrap'
import History from './History'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Link to="/history">
                 <History/>
                    </Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header