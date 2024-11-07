import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Alert, Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppwriteException } from "appwrite";

export function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [err, setErr] = useState<string | undefined>();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    auth
      .login(username, password)
      .then(() => {
        navigate("/");
      })
      .catch((e: AppwriteException | unknown) => {
        if (e instanceof AppwriteException) {
          setErr(e.message);
        }
        console.log(e);
      });
  }

  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        {err && <Alert severity="error">{err}</Alert>}
        <TextField
          type="email"
          name="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="standard"
          label="EMail"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
        />
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
}
