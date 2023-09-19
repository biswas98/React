import React from "react";
import { Puff } from "react-loader-spinner";

export const PuffLoader = () => {
  return (
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
  );
};
