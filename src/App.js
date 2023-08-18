import "./App.css";
import { useState } from "react";

function App() {
  const [incPresnt, setInc] = useState(0);
  const [decPresnt, setDec] = useState(0);

  const increamentFunction = () => setInc(incPresnt + 5);
  const decreamentFunction = () => setDec(decPresnt - 5);

  return (
    <>
      <div className="container">
        <h1 className="heading">Click</h1>

        <div>
          <button>-</button>
		
          <input />

          <button>+</button>
        </div>
      </div>
    </>
  );
}

export default App;
