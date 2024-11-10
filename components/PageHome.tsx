"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "./common/AppBar";
import home from "../public/lottieFiles/home.json";
import Lottie from "lottie-react";
import TopBar from "./common/TopBar";

const PageHome = () => {
  return (
    <div className="PageHome">
      <div className="overlay left-0 top-0 position-absolute w-100 h-100">
        <Container style={{ maxWidth: "1600px" }}>
          <TopBar />
          <AppBar />
          <Row>
            <Col md={12} lg={6} className="info-card">
              <div className="main-head">
                <span className="sp_01 d-block">The Best Bank</span>
                <span className="sp_02 d-block">
                  <span className="circle"> To</span> Manage Your
                </span>
                <span className="sp_03 d-block">Finance</span>
              </div>
              <div className="sub-head mt-2">
                Stop Worrying About Your Money
              </div>

              <div className="cards justify-between d-flex mt-5 ">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front visa-card card_01 cus-class p-4">
                      <div className="top-card-head fs-5 fw-medium">
                        Total Market Size
                      </div>
                      <span className="fs-5 mt-5 d-inline-block">
                        <span>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                      </span>
                      <div className="d-flex justify-between mt-2 align-items-center">
                        <div className="price fs-4 fw-medium">$10.00B</div>
                        <div>Up to Date</div>
                      </div>
                    </div>

                    <div className="flip-card-back visa-card visa-card-flip card_01 p-4">
                      <div className="top-card-head fs-5 fw-medium">
                        Total Market Size
                      </div>
                      <span className="fs-5 mt-5 d-inline-block">
                        <span>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                      </span>
                      <div className="d-flex justify-between mt-2 align-items-center">
                        <div className="price fs-4 fw-medium">$10.00B</div>
                        <div>Up to Date</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front visa-card card_02 p-4">
                      <div className="top-card-head fs-5 fw-medium">
                        Total Market Size
                      </div>
                      <span className="fs-5 mt-5 d-inline-block">
                        <span>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                      </span>
                      <div className="d-flex justify-between mt-2 align-items-center">
                        <div className="price fs-4 fw-medium">$10.00B</div>
                        <div>Up to Date</div>
                      </div>
                    </div>

                    <div className="flip-card-back visa-card card_02 p-4">
                      <div className="top-card-head fs-5 fw-medium">
                        Total Market Size
                      </div>
                      <span className="fs-5 mt-5 d-inline-block">
                        <span>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                        <span style={{ marginLeft: "10px" }}>xxxx</span>
                      </span>
                      <div className="d-flex justify-between mt-2 align-items-center">
                        <div className="price fs-4 fw-medium">$10.00B</div>
                        <div>Up to Date</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={12} lg={6} className="animation-card">
              <div className="info fs-6 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, fugit ducimus necessitatibus error quas laboriosam
                quia, qui tempore impedit dolore minima vero quisquam
              </div>
              <div className="d-flex align-items-center animation-btns mt-4">
                <div className="gb-btn mr-3">Open Your Account</div>
                <div className="invest">Invest</div>
              </div>
              <Lottie animationData={home} className="animation" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PageHome;
