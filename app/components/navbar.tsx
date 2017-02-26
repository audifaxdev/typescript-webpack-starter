import * as React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

export interface NavProps { slug: string; }

export const MyNavBar = (props: NavProps) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Welcome @ React TSX Starter KIT ;  {props.slug}</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav activeKey="3.3" pullRight={true}>
      <IndexLinkContainer to="/">
        <NavItem href="/" eventKey={1}>Home</NavItem>
      </IndexLinkContainer>
      <IndexLinkContainer to="/about">
        <NavItem href="/about" eventKey={2}>About</NavItem>
      </IndexLinkContainer>
      <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Login</MenuItem>
        <MenuItem eventKey={3.2}>Logout</MenuItem>
        <MenuItem eventKey={3.3}>Username</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);