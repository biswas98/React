import React from "react";
import { FidgetSpinner, Puff, InfinitySpin } from "react-loader-spinner";
import { BallTriangleLoader } from "../Loaders/BallTriangleLoader";
import { FidgetSpinnerLoader } from "../Loaders/FidgetSpinnerLoader";

import "./styles.css";

export default function Weather() {
  return (
    <div className="bodyContainer">
      <div className="loaderContainer">
        <BallTriangleLoader />
        <FidgetSpinnerLoader />
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    </div>
  );
}
