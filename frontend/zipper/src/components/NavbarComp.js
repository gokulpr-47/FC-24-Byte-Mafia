import React from 'react'
import {Container, Navbar, Offcanvas, Nav} from 'react-bootstrap'

export default function NavbarComp(){
    return(
      <Navbar key={'sm'} expand={'sm'} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">ZIPPER.</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="end"
          >
          <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
              Offcanvas
          </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1">HOME</Nav.Link>
              <Nav.Link href="#action2">CONTACT</Nav.Link>
              <Nav.Link href="#action2">BLOG</Nav.Link>
              <Nav.Link href="#action2">ABOUT</Nav.Link>
              <Nav.Link href="#action2">LOGIN</Nav.Link>
          </Nav>
          </Offcanvas.Body>
      </Navbar.Offcanvas>
      </Container>
  </Navbar>
  // <h1>hello</h1>
    )
}