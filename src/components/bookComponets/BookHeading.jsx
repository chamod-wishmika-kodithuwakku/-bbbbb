import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';


export const BookHeading = () => {
  return (
    <Navbar color='dark' dark>
    <Container>
      <div className="d-flex">
        <NavbarBrand href='/'>Books</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <Link className='btn btn-primary' to="/addbook" style={{ marginLeft: "230px" }}>Add Book</Link>
          </NavItem>
        </Nav>
      </div>
    </Container>
  </Navbar>
  
   
  )
}
