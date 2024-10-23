import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="notification">
      <Link to={"/"}>
        <h1>404</h1>
        <br />
        Page not found
        <br />
        The page you are looking for doesn't exist
        <br />
        Clik here to go back to the Home Page
        <br />
        or navigate using the navigation bar
      </Link>
    </div>
  );
}
