import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const { users, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const found = users.find((u) => u.email === email && u.pass === pass);
    if (found) {
      setError("");
      setUser(found);
      navigate("/");
    } else {
      setError("Access Denied: Invalid username or password");
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      <p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Login</button>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}
