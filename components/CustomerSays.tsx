import { teamData } from "@/constants";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const CustomerSays = () => {
  return (
    <div className="Customer">
      <div className="head">Trusted by 3+ million website owners worldwide</div>
      <div className="container">
        {teamData.map((member, index) => (
          <div className="card" key={index}>
            <div className="Box">
              <Image
                src={member.src}
                alt={member.alt}
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
            <div className="details">
              <div className="customer-info d-flex align-items-center">
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={70}
                  height={70}
                  className="img-fluid"
                />
                <div className="">
                  <div className="name fs-5 fw-medium">{member.name}</div>
                  <div className="name">{member.position}</div>
                </div>
              </div>
              <div className="customer-msg">
                <div className="rate d-flex">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <div className="msg mt-3">{member.description}</div>
                <div className="read mt-3">Read Full Story</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSays;
