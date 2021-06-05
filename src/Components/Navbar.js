import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope me-2"></i>

              <a
                className="navbar-sm-brand text-light text-decoration-none me-3"
                to="mailto:kashyapmahesh@gmail.com"
              >
                kashyapmahesh@gmail.com
              </a>
              <i className="fa fa-phone me-2" aria-hidden="true"></i>
              <a
                className="navbar-sm-brand text-light text-decoration-none me-3"
                to="tel:9851182929"
              >
                +977-9851182929
              </a>
            </div>
            <div>
              <Link
                className="text-light"
                to="https://fb.com/diwash.ranabhat.3"
                target="_blank"
                rel="sponsored"
              >
                {/* <i className="fa fa-facebook fa-sm fa-fw me-2"></i> */}
                <i
                  className="fab fa-facebook fa-sm fa-fw me-2"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                className="text-light"
                to="https://www.instagram.com/"
                target="_blank"
              >
                <i
                  className="fab fa-linkedin fa-sm fa-fw me-2"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                className="text-light"
                to="https://twitter.com/"
                target="_blank"
              >
                <i
                  className="fab fa-twitter fa-sm fa-fw me-2"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link
                className="text-light"
                to="https://www.linkedin.com/"
                target="_blank"
              >
                <i
                  className="fab fa-instagram fa-sm fa-fw me-2"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg  navbar-light shadow">
        <div className="container d-flex  align-items-center justify-content-between">
          <Link
            className="navbar-brand text-primary logo h2 align-self-center"
            to="/"
          >
            Nagarik Bazar
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="templatemo_main_nav">
            <ul className="navbar-nav d-flex justify-content-end ml-auto">
              <li className="nav-item pr-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item pr-4">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item pr-4">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item pr-4">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              {localStorage.getItem("userType") === "Nagarik-Admin" ? (
                <>
                  <li className="nav-item pr-4">
                    <Link className="nav-link" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li className="nav-item pr-4">
                    <Link className="nav-link" to="/" onClick={() => logout()}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item pr-4">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
