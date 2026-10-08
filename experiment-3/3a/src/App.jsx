import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Counter using useState</h1>

        <div className="count">{count}</div>

        <button onClick={increaseCount}>
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;