import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Functional Component Counter</h1>

        <h2>{count}</h2>

        <button onClick={increaseCount}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default Counter;