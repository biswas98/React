import React from "react";
require("dotenv").config();

export default function Weather() {
  console.log(process.env.SECRET_KEY1);
  return <div>Hello</div>;
}
