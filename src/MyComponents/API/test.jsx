import React, { useState, useEffect } from "react";

export default function Test() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await fetch("some url");
      res = await res.json();
      setResponse(res.services);
    })();
  }, []);

  return (
    <div>
      {response.map((services) => (
        <div>
          {services.events.map((event) => (
            <div>{event.resolved}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
