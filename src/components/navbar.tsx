import { useAuth } from "../hooks/useAuth";
import "./navbar.css";

export function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Page</li>
      </ul>
      <span>{user?.name ?? "FUCK"}</span>
      <button onClick={() => logout()}>Logout</button>
    </nav>
  );
}
