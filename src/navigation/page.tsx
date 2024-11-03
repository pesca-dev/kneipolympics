import { NavBar } from "../components/navbar";
import { useAuth } from "../hooks/useAuth";
import { Login } from "./login";

export function Page() {
  const { loggedIn } = useAuth();
  return (
    <main>
      <h1>Kneipolympics</h1>
      {loggedIn ? (
        <>
          <NavBar></NavBar>
        </>
      ) : (
        <Login></Login>
      )}
    </main>
  );
}
