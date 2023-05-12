import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';


export const HeadingUsers = () => {
  return (
    <Navbar color='dark' dark>
    <Container>
      <div className="d-flex">
        <NavbarBrand href='/'>User List</NavbarBrand>
        </div>
    </Container>
  </Navbar>
  
   
  )
}
