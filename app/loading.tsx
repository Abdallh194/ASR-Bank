"use client";
import Lottie from "lottie-react";
import React from "react";
import loader from "../public/lottieFiles/loading.json";

const Loading = () => (
  <Lottie
    style={{ maxWidth: "200px", margin: "auto" }}
    animationData={loader}
  />
);

export default Loading;
