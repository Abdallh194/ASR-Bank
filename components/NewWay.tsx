import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NewWay = () => {
  return (
    <div className="NewWay">
      <Container fluid>
        <Row>
          <Col lg={6} className="bg-side">
            <Image
              src="/new-way.png"
              alt=""
              width={800}
              height={500}
              className="img-fluid"
            />
          </Col>
          <Col lg={6} className="info-card">
            <div className="head">EASY TO USE DASHBOARD</div>
            <div className="info">
              <span>See everything.</span> <span>Control everything.</span>
            </div>
            <div className="desc mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              laboriosam animi nesciunt explicabo mollitia, quaerat ipsum a iste
              doloribus est iusto sit aliquam. Totam nostrum aliquam mollitia
              excepturi, repudiandae voluptatibus.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewWay;
