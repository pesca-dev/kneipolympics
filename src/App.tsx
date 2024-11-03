import { Container } from "@mui/material";
import "./App.css";

import { AppwriteContextProvider } from "./contexts/appwrite";
import { AuthContextProvider } from "./contexts/auth";
import { Router } from "./routes";

export function App() {
  return (
    <>
      <AppwriteContextProvider>
        <AuthContextProvider>
          <Container maxWidth="lg">
            <Router />
          </Container>
        </AuthContextProvider>
      </AppwriteContextProvider>
    </>
  );
}
