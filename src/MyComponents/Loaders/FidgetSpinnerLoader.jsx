import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

export const FidgetSpinnerLoader = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={["#ff0000", "#00ff00", "#0000ff"]}
      backgroundColor="#4fa94d"
    />
  );
};
