import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap'
import { useCart } from '../context/CartContext'

function Header() {
  const { cartItemsCount } = useCart()

  return (
    <Navbar expand="lg" bg='primary' variant='light' collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">
          <img 
            src="/images/nextgenpclogo.jpg" 
            alt="NextGenPC Logo" 
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/peripherals">Peripherals</NavDropdown.Item>
              <NavDropdown.Item href="/prebuilts">Prebuilts</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <i className="fa fa-shopping-cart"></i> Cart
              {cartItemsCount > 0 && (
                <Badge pill bg="success" className="ms-1">
                  {cartItemsCount}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link href="/user"><i className="fa fa-user"></i> User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
