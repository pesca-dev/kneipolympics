import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { Alert, Button, Container, TextField } from "@mui/material";
import { AppwriteException } from "appwrite";

export function Register() {
  const navigate = useNavigate();
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [err, setErr] = useState<string | undefined>();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    auth
      .register(email, password, name)
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
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        {err && <Alert severity="error">{err}</Alert>}
        <TextField
          type="text"
          name="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="standard"
          label="Username"
        />
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Button type="submit">Register</Button>
      </form>
    </Container>
  );
}
