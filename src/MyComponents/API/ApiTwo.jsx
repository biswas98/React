import React, { useState } from "react";

import { exampleTwo } from "../../axios";

export default function ApiTwo() {
  const [data, setData] = useState();
  const getData = async () => {
    let response = await exampleTwo.get("/photos");
    setData(response.data);
  };
  return (
    <div>
      {!data
        ? null
        : data?.map((item) => {
            return <img src={item.url} alt="img" />;
          })}
      <button onClick={getData}>Click</button>
    </div>
  );
}
