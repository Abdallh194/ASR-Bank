import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaConnectdevelop, FaPlane, FaStar } from "react-icons/fa";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { SiFsecure, SiIcicibank } from "react-icons/si";

const Service = () => {
  const features = [
    {
      icon: <FaConnectdevelop />,
      title: "Development",
      description:
        "We provide top-notch development services tailored to your needs.",
      className: "Service-Card",
    },
    {
      icon: <SiFsecure />,
      title: "Security",
      description:
        "Our security measures ensure your data is always protected.",
      className: "Service-Card Active-card",
    },
    {
      icon: <HiOutlineBanknotes />,
      title: "Cost Efficiency",
      description:
        "We help you save costs with our efficient financial solutions.",
      className: "Service-Card",
    },
    {
      icon: <SiIcicibank />,
      title: "Financial Stability",
      description:
        "Our services provide stability to your financial operations.",
      className: "Service-Card",
    },
    {
      icon: <FaStar />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
      className: "Service-Card",
    },
    {
      icon: <FaPlane />,
      title: "Global Reach",
      description: "Our services reach clients all over the world.",
      className: "Service-Card",
    },
  ];
  return (
    <div className="Service" id="Service">
      <Container>
        <div className="head">Our Service Feature</div>
        <div className="info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          illum laudantium quia aperiam. Tempore debitis repudiandae, fuga
          assumenda mollitia repellendus
        </div>
        <Row>
          {features.map((f, idx) => (
            <Col lg={4} className={f.className} key={idx}>
              <div className="icon">{f.icon}</div>
              <div className="card-head mt-3">{f.title}</div>
              <div className="card-desc mt-2">{f.description}</div>
              <div className="learn mt-4">Learn More</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
