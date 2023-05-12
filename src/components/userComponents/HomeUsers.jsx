import React from 'react';
import { Heading } from './Heading';
import { UserList } from './UserList';
import { Link } from 'react-router-dom';
import { Container, Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap';


export const HomeUsers = () => {
  return (
   <div>
    <Heading/>
    <UserList/>
   </div>
   
  )
}
