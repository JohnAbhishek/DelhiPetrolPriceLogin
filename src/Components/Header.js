import React from 'react'
import {Nav,Navbar,Container}from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useNavigate}from 'react'

function Header() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home" style={{color:'red',textShadow:'20rpm'}}>DASHBOARD</Navbar.Brand>
        <Navbar.Brand href="#home" style={{color:''}}>Petrol and Diesel Price At Delhi from 2016-17 To 2021-22</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              <span>Welcome John</span>
            </Nav.Link>
            <Link to='/'>
              <span className='btn btn-primary'>Logout</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header