import "./App.css";

import { AppwriteContextProvider } from "./contexts/appwrite";
import { AuthContextProvider } from "./contexts/auth";
import { Page } from "./navigation/page";

export function App() {
  return (
    <>
      <AppwriteContextProvider>
        <AuthContextProvider>
          <Page></Page>
        </AuthContextProvider>
      </AppwriteContextProvider>
    </>
  );
}
