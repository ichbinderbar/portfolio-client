import "./LogoContainer.scss";
import { Link } from "react-router-dom";
// import navbarLogo from "../../assets/images/logo/logo.svg";

export default function LogoContainer() {
  return (
    <div className="navbar__logo-container">
      <Link className="navbar__link" to="/">
        {/* <img className="navbar__icon" src={navbarLogo} /> */}
        <h1 className="navbar__title">Juan's Portfolio</h1>
      </Link>
    </div>
  );
}
