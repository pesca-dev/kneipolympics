import { Container } from "@mui/material";
import "./App.css";

import { Router } from "./routes";
import { AuthProvider } from "./providers/auth.provider";
import { AppwriteProvider } from "./providers/appwrite.provider";

export function App() {
  return (
    <>
      <AppwriteProvider>
        <AuthProvider>
          <Container maxWidth="lg">
            <Router />
          </Container>
        </AuthProvider>
      </AppwriteProvider>
    </>
  );
}
