import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';


export const Heading = () => {
  return (
    <Navbar color='dark' dark>
    <Container>
      <div className="d-flex">
        <NavbarBrand href='/'>Users</NavbarBrand>
        <Nav className="ml-auto">
          <NavItem>
            <Link className='btn btn-primary' to="/add" style={{ marginLeft: "230px" }}>Add User</Link>
          </NavItem>
        </Nav>
      </div>
    </Container>
  </Navbar>
  
   
  )
}
