import React from "react";
import { BallTriangle, FidgetSpinner } from "react-loader-spinner";
// require("dotenv").config();

export default function Weather() {
  //   console.log(process.env.SECRET_KEY1);
  //need to implement .env
  return (
    <div>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#ff0000", "#00ff00", "#0000ff"]}
        backgroundColor="#F4442E"
      />
    </div>
  );
}
