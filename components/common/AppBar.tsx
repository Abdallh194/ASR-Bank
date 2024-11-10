"use client";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropMenu from "../ui/DropDownMenu";

function AppBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-transparent"
      data-bs-theme="dark"
    >
      <Navbar.Brand href="/" className="d-flex align-items-center logo">
        Tanmia Bank
        <Image
          src="/logo.png"
          alt="logo img"
          width={40}
          height={40}
          className="img-fluid ml-1"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <DropMenu />
        </Nav>
      </Navbar.Collapse>
      <div className="gb-btn">Internet banking</div>
    </Navbar>
  );
}

export default AppBar;
