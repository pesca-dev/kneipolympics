import "./App.css";

import { AppwriteContextProvider } from "./contexts/appwrite";
import { AuthContextProvider } from "./contexts/auth";

export function App() {
  return (
    <>
      <AppwriteContextProvider>
        <AuthContextProvider></AuthContextProvider>
      </AppwriteContextProvider>
    </>
  );
}
