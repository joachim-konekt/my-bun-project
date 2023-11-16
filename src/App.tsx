import { useState } from "react";
import { Router } from "react-router";
import "./App.css";

function App() {
  const [count1, setCount1] = useState(-25);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vites + ffox saidf</h1>
      <div className="card">
        <button onClick={() => setCount1((count1) => count1 + 1)}>
          count is not {count1}
        </button>
        <button onClick={() => setCount2((count2) => count2 - 1)}>
          sdssd is {count2}
        </button>
        <p style={{ color: "red" }}>
          Eddddddddsvddvit this andclear save to test HMR
        </p>
      </div>
      <button>click</button>
    </>
  );
}

export default App;
