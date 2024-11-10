import React from "react";
import { Nav } from "react-bootstrap";
import { BsGeoAlt } from "react-icons/bs";

const TopBar = () => {
  return (
    <div className="TopBar  d-flex justify-between align-items-center">
      <div className="menu d-flex  align-items-center w-50">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About Us</Nav.Link>
        <Nav.Link href="#">Services</Nav.Link>
        <Nav.Link href="#">Contact Us</Nav.Link>
      </div>

      <div className="logins d-flex  align-items-center">
        <Nav.Link href="/Login">Register</Nav.Link>
        <div className=" d-flex  align-items-center">
          <BsGeoAlt style={{ marginRight: "5px" }} /> Locate Us
        </div>
      </div>
    </div>
  );
};

export default TopBar;
