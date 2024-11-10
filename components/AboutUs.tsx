"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//mui
import { FaStar, FaShieldAlt, FaPlane } from "react-icons/fa";
const AboutUs = () => {
  const features = [
    {
      icon: <FaStar />,
      title: "Rewards",
      description:
        "The best credit cards offer some tantalizing combinations of promotions and prizes.",
      className: "d-flex align-items-center mt-5",
    },
    {
      icon: <FaShieldAlt />,
      title: "100% Secured",
      description:
        "We take proactive steps to make sure your information and transactions are secure.",
      className: "d-flex align-items-center mt-5 active",
    },
    {
      icon: <FaPlane />,
      title: "Balance Transfer",
      description:
        "A balance transfer credit card can save you a lot of money in interest charges.",
      className: "d-flex align-items-center mt-5",
    },
  ];
  return (
    <div className="AboutUs">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="main-head">
              Investment In Your <span>Life</span> , <span>Health</span> and
              <span> Wealth</span>
            </div>
            <div className="desc mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              officia corporis distinctio doloremque dolor deserunt laudantium
            </div>

            {features.map((feature, index) => (
              <div className={feature.className} key={index}>
                <div className="icon">{feature.icon}</div>
                <div className="info">
                  <div className="feature-head">{feature.title}</div>
                  <div className="feature-info">{feature.description}</div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={12} lg={6} className="img-card">
            <Image
              src="/about.png"
              alt="about img"
              width={700}
              height={700}
              className="img-fluid"
            />
            <div className=" absolute w-[40%] z-[0] aspect-square top-0 pink__gradient"></div>
            <div className=" absolute w-[40%] z-[1] aspect-square bottom-40 rounded-full white__gradient"></div>
            <div className=" absolute w-[50%] z-[0] aspect-square bottom-20 right-20 blue__gradient"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
