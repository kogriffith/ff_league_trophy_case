import React from 'react'
import {Link,Route} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavLink} from 'reactstrap'

const CustomNavbar = () => (
  <div>
    <Navbar>
      <Nav>
        <NavItem>
          <NavLink href="/home">Home</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default CustomNavbar
