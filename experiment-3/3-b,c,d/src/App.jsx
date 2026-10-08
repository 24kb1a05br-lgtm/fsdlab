import { useEffect, useState } from "react";
import "./App.css";

// Component for sharing data using Props
function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

function App() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // API states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3(b) Fetch API using useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // 3(d) React Form
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Name: ${name}\nEmail: ${email}`);

    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <h1>React Programs</h1>

      {/* 3(b) API using useEffect */}
      <section>
        <h2>1. Fetch Data from API using useEffect</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="user-grid">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </section>

      {/* 3(c) Props */}
      <section>
        <h2>2. Sharing Data using Props</h2>

        {users.length > 0 && <UserCard user={users[0]} />}
      </section>

      {/* 3(d) Forms */}
      <section>
        <h2>3. React Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </section>

      {/* 3(e) Iterative rendering using map() */}
      <section>
        <h2>4. Iterative Rendering using map()</h2>

        <ul>
          {["React", "JavaScript", "HTML", "CSS", "Vite"].map(
            (item, index) => (
              <li key={index}>
                {index + 1}. {item}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}

export default App;