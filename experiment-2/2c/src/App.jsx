import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button!");

  const handleClick = () => {
    setMessage("Button clicked successfully!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Button Click Event</h1>

        <p>{message}</p>

        <button onClick={handleClick}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;