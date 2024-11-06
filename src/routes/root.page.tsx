import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export function Root() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
