import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const handleLogout = () => {
    document.cookie = "user=;";
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                LogIn
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reportform">
                Create-Report
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleLogout} className="nav-link" to="/signin">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
