import React, { useEffect, useState } from "react";
import exampleOne from "../../axios";

import "./apiStyle.css";

export default function API() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const weatherAPI = async () => {
    try {
      let response = await exampleOne.get("/posts");
      // console.log('successfull');
      response = response.data;
      setData(response);
      console.log("success");
    } catch (error) {
      let err = error.message;
      console.log(err);
      setError(err);
      setData(err);
    }
  };

  useEffect(() => {
    weatherAPI();
  }, []);

  return (
    <div className="apiContainer">
      {data != error ? (
        <div className="quotes-container">
          {data.map((item, index) => {
            // console.log(item);
            return <div className="quotes">{item?.body}</div>;
          })}
        </div>
      ) : (
        <div className="error-container">{data}</div>
      )}
    </div>
  );
}
