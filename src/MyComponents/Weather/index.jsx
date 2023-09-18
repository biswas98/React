import React from "react";
import { BallTriangle } from "react-loader-spinner";
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
    </div>
  );
}
