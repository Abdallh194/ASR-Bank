import { sections } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosShareAlt } from "react-icons/io";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcJcb,
  FaCcDinersClub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          {sections.map((section, index) => (
            <Col lg={2} md={4} xs={6} className="foot-card" key={index}>
              <div className="head">{section.head}</div>
              <div className="links mt-4">
                {section.links.map((link, idx) => (
                  <div
                    className="link mt-2 d-flex align-items-center"
                    key={idx}
                  >
                    {link} <IoIosShareAlt style={{ marginLeft: "5px" }} />
                  </div>
                ))}
              </div>
            </Col>
          ))}
          <Link href="/" className="d-flex align-items-center logo">
            Tanmia Bank
            <Image
              src="/logo.png"
              alt="logo img"
              width={40}
              height={40}
              className="img-fluid ml-1"
            />
          </Link>
          <Col lg={6}>
            <div className="d-flex visa align-items-center">
              <FaCcVisa className="icon" />
              <FaCcMastercard className="icon" />
              <FaCcAmex className="icon" />
              <FaCcDiscover className="icon" />
              <FaCcJcb className="icon" />
              <FaCcDinersClub className="icon" />
              <div className="more">and More....</div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex social">
              <FaLinkedin className="icon" />
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
            <div className="policy">
              <span>Privacy policy</span> <span>Refund policy</span>
              <span>Terms of service</span>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="copy">
          <div className="">
            © {new Date().getFullYear()} Tanmia Bank - Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Odit laboriosam animi nesciunt
            explicabo mollitia
          </div>
          <div className="dev">
            Designed By{" "}
            <a
              href="https://abdallh-rakha.vercel.app/"
              target="_blank"
              className="fw-medium"
              style={{ textDecoration: "none" }}
            >
              Abdallh Sabry
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
