import React from "react";
import { BallTriangleLoader } from "../Loaders/BallTriangleLoader";
import { FidgetSpinnerLoader } from "../Loaders/FidgetSpinnerLoader";
import { PuffLoader } from "../Loaders/PuffLoader";
import { InfinitySpinLoader } from "../Loaders/InfinitySpinLoader";

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
