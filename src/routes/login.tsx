import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Button, FormControl, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./login.css";

export function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    auth
      .login(username, password)
      .then(() => {
        navigate("/");
      })
      .catch(console.error);
  }

  return (
    <>
      <h2>Login</h2>
      <FormControl className="login-form">
        <TextField
          type="email"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="standard"
          label="Username"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
        />
        <Button onClick={() => onSubmit()}>Login</Button>
      </FormControl>
    </>
  );
}
