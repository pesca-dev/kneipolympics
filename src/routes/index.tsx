import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./root";
import { useAuth } from "../hooks/useAuth";
import { Login } from "./login";
import ErrorPage from "./error";
import { Main } from "./main";
import { Register } from "./register";

export function Router() {
  const { loggedIn } = useAuth();
  const children: RouteObject[] = [
    {
      path: "/",
      element: <Main />,
    },
  ];

  if (!loggedIn) {
    children.push(
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    );
  }

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children,
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
