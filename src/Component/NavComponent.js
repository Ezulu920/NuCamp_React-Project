import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

const MainNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">AYO MUSIC</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">PRICING</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">DOWNLOAD</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">CONTACT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">LOGIN</NavLink>
                        </NavItem>
                        <NavbarText>|</NavbarText>
                         <NavItem>
                            <NavLink href="#">SIGN UP</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNav;