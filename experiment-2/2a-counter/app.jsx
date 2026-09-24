import React, { useState, Component } from "react";

// a. Class Component Counter
class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h2>a. Class Component Counter</h2>
        <h3>{this.state.count}</h3>

        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Increase
        </button>
      </div>
    );
  }
}


// b. Functional Component Counter
function FunctionalCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>b. Functional Component Counter</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}


// c. Button Click Event
function ButtonClick() {
  const [message, setMessage] = useState("Click the button");

  function handleClick() {
    setMessage("Button clicked!");
  }

  return (
    <div>
      <h2>c. Button Click Event</h2>
      <p>{message}</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}


// d. Conditional Rendering
function ConditionalRendering() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>d. Conditional Rendering</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <p>Welcome to React.js!</p>}
    </div>
  );
}


// e. String Literals
function StringLiterals() {
  const name = "Student";
  const subject = "React.js";

  return (
    <div>
      <h2>e. String Literals</h2>

      <p>{`Hello ${name}`}</p>
      <p>{`You are learning ${subject}`}</p>
    </div>
  );
}


// Main React Component
function App() {
  return (
    <div>
      <h1>Basics of React.js</h1>

      <ClassCounter />

      <hr />

      <FunctionalCounter />

      <hr />

      <ButtonClick />

      <hr />

      <ConditionalRendering />

      <hr />

      <StringLiterals />
    </div>
  );
}

export default App;