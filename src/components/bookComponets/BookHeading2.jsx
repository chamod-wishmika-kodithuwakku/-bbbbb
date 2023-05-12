import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';


export const BookHeading2 = () => {
  return (
    <Navbar color='dark' dark>
    <Container>
      <div className="d-flex">
        <NavbarBrand href='/'>Book List</NavbarBrand>
      </div>
    </Container>
  </Navbar>
  
   
  )
}
