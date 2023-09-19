import React from "react";
import {
  BallTriangleLoader,
  FidgetSpinnerLoader,
  PuffLoader,
  InfinitySpinLoader,
} from "../Loaders/indexLoader";

import "./styles.css";

export default function Weather() {
  return (
    <div className="bodyContainer">
      <div className="loaderContainer">
        <BallTriangleLoader />
        <FidgetSpinnerLoader />
        <PuffLoader />
        <InfinitySpinLoader />
      </div>
    </div>
  );
}
