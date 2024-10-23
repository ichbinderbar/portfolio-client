import LogoContainer from "../LogoContainer/LogoContainer";
import SeachBar from "../SearchBar/SearchBar";
// import UploadButton from "../UploadButton/UploadButton";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <a
        className="navbar__display-picture--end"
        href="https://www.juanidrovo.com/"
      ></a>
      <LogoContainer />
      {/* <SeachBar /> */}
      <Link className="navbar__upload-button" to="/upload">
        {/* <UploadButton text="Upload" /> */}
      </Link>
    </div>
  );
}
