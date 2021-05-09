import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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

      <nav className="navbar navbar-expand-lg sticky-top fixed-top navbar-light shadow ">
        <div className="container d-flex justify-content-between align-items-center">
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

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputMobileSearch"
                    placeholder="Search ..."
                  />
                  <div className="input-group-text">
                    <i className="fa fa-fw fa-search"></i>
                  </div>
                </div>
              </div>
              <Link
                className="nav-icon d-none d-lg-inline"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#templatemo_search"
              >
                <i className="fa fa-fw fa-search text-dark mr-2"></i>
              </Link>
              <Link
                className="nav-icon position-relative text-decoration-none"
                to="#"
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  7
                </span>
              </Link>
              <Link
                className="nav-icon position-relative text-decoration-none"
                to="#"
              >
                <i className="fa fa-fw fa-user text-dark mr-3"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  +99
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
