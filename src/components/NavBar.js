import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { mainBody } from "../store/config";

const NavBar = () => {
  return (
    <NavBar className={"px-3 fixed-top  navbar-white"} expand="lg">
      <Navbar.Brand className="navbar-brand" href={"#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link
            className="nav-item lead"
            target="_blank"
            rel="noreferrer noopener"
            href=""
          >
            Resume
          </Nav.Link>
          <Nav.Link href="#about" className="nav-item lead">
            About
          </Nav.Link>
          <Nav.Link href="#skills" className="nav-item lead">
            Skills
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </NavBar>
  );
};

export default NavBar;
