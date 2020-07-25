import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText,} from "reactstrap";

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar navbar-expand-sm  navbar-dark">
        <NavbarBrand className="logo" href="#">AYO MUSIC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navL" href="#">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navL" href="#">DOWNLOAD</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navL" href="#">PRICING</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navL" href="#">CONTACT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="navL" href="#">LOGIN</NavLink>
            </NavItem>
            <NavbarText>|</NavbarText>
            <NavItem>
              <NavLink className="navL" href="#">SIGN UP</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainNav;