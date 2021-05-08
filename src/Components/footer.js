import React from "react";
import "../assets/css/fontawesome.css";
const Footer = () => {
  return (
    <>
      <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-5">
              <h2 class="text-white border-bottom pb-3 border-light logo">
                Nagarik Bazaar
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <i class="fas fa-map-marker-alt fa-fw me-1"></i>
                  Mitranagar-19, New Buspark
                </li>
                <li>
                  <i class="fa fa-phone fa-fw me-1"></i>
                  <a class="text-decoration-none" href="tel:9851182929">
                    9851182929
                  </a>
                </li>
                <li>
                  <i class="fa fa-envelope fa-fw me-1"></i>
                  <a
                    class="text-decoration-none"
                    href="mailto:info@company.com"
                  >
                    kashyapmahesh@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Products and Services
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Computer
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Printer
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    CCTV
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Home Appliances
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 pt-5">
              <h2 class="h2 text-light border-bottom pb-3 border-light">
                Further Info
              </h2>
              <ul class="list-unstyled text-light footer-link-list">
                <li>
                  <a class="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    FAQs
                  </a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row text-light mb-4">
            <div class="col-12 mb-3">
              <div class="w-100 my-3 border-top border-light"></div>
            </div>
            <div class="col-auto me-auto">
              <ul class="list-inline text-left footer-icons">
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="http://facebook.com/"
                  >
                    <i class="fab fa-facebook-f fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i class="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i class="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                </li>
                <li class="list-inline-item border border-light rounded-circle text-center">
                  <a
                    class="text-light text-decoration-none"
                    target="_blank"
                    href="https://www.linkedin.com/"
                  >
                    <i class="fab fa-linkedin fa-lg fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-auto">
              <label class="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div class="input-group mb-2">
                <input
                  type="text"
                  class="form-control bg-dark border-light"
                  id="subscribeEmail"
                  placeholder="Email address"
                />
                <div class="input-group-text btn-success text-light">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-100 bg-black py-3">
          <div class="container">
            <div class="row pt-2">
              <div class="col-12">
                <p class="text-left text-light">
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
