import { NavLink } from "react-router-dom";
import "../styles/base.css";

function NavConnector() {
  return (
    <svg
      className="nav-connector"
      width="78"
      height="12"
      viewBox="0 0 78 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 6 C 13 4, 26 8, 39 6 C 52 4, 65 8, 78 6"
        className="nav-connector-path"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="navbar-centered">
      <nav className="navbar-links">
        <NavLink to="/" end className="navbar-link">
          Home
        </NavLink>
        <NavConnector />
        <NavLink to="/experience" className="navbar-link">
          Experience
        </NavLink>
        <NavConnector />
        <NavLink to="/education" className="navbar-link">
          Education
        </NavLink>
        <NavConnector />
        <NavLink to="/contact" className="navbar-link">
          Contact
        </NavLink>
        <NavConnector />
        <NavLink to="/resume" className="navbar-link navbar-link-resume">
          Get Resume
        </NavLink>
      </nav>
    </header>
  );
}
