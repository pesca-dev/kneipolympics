import { Link, useRouteError } from "react-router-dom";

type RouteError = {
  status: number;
  statusText: string;
};

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {error.status} - {error.statusText}
      </p>
      <p>
        Get back <Link to={"/"}>Home</Link>
      </p>
    </div>
  );
}
