import React, { useState } from "react";

import { exampleTwo } from "../../axios";

export default function ApiTwo() {
  const [data, setData] = useState();
  const getData = async () => {
    let response = await exampleTwo.get("/photos");
    setData(response.data);
    console.log(response.data[0].url);
  };
  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  );
}
