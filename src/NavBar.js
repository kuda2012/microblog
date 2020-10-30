import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="md">
        <NavLink to="/" className="navbar-brand">
          Microblog
        </NavLink>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink className="link" to="/new">
              Add a new post
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
