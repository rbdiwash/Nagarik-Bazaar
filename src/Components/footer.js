import React from "react";
import "../assets/css/fontawesome.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="text-white border-bottom pb-3 border-light logo">
                Nagarik Bazaar
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw me-1"></i>
                  Mitranagar-19, New Buspark
                </li>
                <li>
                  <i className="fa fa-phone fa-fw me-1"></i>
                  <a className="text-decoration-none" href="tel:9851182929">
                    9851182929
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw me-1"></i>
                  <a
                    className="text-decoration-none"
                    href="mailto:info@company.com"
                  >
                    kashyapmahesh@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Products and Services
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Computer
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Printer
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    CCTV
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Home Appliances
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light"></div>
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline text-left footer-icons">
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="http://facebook.com/"
                  >
                    <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i className="fab fa-linkedin fa-lg fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <label className="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control bg-dark border-light"
                  id="subscribeEmail"
                  placeholder="Email address"
                />
                <div className="input-group-text btn-success text-light">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright &copy; 2021 Nagarik Bazaar | Designed by{" "}
                  <a
                    // rel="sponsored"
                    href="http://divashranabhat.com.np/?i=1"
                    // target="_blank"
                  >
                    Divash Ranabhat
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
