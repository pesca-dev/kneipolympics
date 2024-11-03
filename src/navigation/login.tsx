import { FormEvent, useState } from "react";

import "./login.css";
import { useAuth } from "../hooks/useAuth";

export function Login() {
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    auth.login(username, password).then(console.log).catch(console.error);
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="login-form">
        <input
          type="email"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}
