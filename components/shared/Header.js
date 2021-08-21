import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';
import Profile from '../Profile';


const BsNavLink = props => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const LoginLink = () =>
  <a className="nav-link port-navbar-link" href="/api/auth/login">Login</a>
{/* <a className="nav-link port-navbar-link" href="/api/v1/login">Login</a> */ }

const LogoutLink = () =>
  <a className="nav-link port-navbar-link" href="/api/auth/logout">Logout</a>

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { user, error, isLoading } = useUser();

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <div className="navbar-brand">
          <Link href="/">
            <a className="port-navbar-brand">Filip Jerga</a>
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
              {
                user ? <Profile /> :
                  <LoginLink />
              }
            </NavItem>
            <NavItem className="port-navbar-item">
              {
                user &&
                <LogoutLink />
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;