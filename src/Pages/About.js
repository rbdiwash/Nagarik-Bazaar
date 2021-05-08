import React, { useEffect } from "react";
import about from "../assets/img/about-hero.svg";
import brand_01 from "../assets/img/brand_01.png";
import brand_02 from "../assets/img/brand_02.png";
import brand_03 from "../assets/img/brand_03.png";
import brand_04 from "../assets/img/brand_04.png";
import "../assets/css/templatemo.css";
import AOS from "aos";
import value1 from "../assets/img/values-1.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {" "}
      <section class="hero py-5 first">
        <div class="container">
          <div class="row align-items-center py-5">
            <div
              class="col-md-8 text-white"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h1>About Us</h1>
              <p className="text-secondary py-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="col-md-4" data-aos="fade-left" data-aos-delay="200">
              <img src={about} alt="About Hero" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Close Banner --> */}
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="row gx-0">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="content">
                <h3>Who We Are</h3>
                <h2>Two Brothers handling a business which is</h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
                <div class="text-center text-lg-start">
                  <a
                    href="#"
                    class="btn btn-primary d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={value1} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* //services section */}
      <section id="services" class="services">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Services</h2>
            <p>Available services are listed below.</p>
          </header>

          <div class="row gy-4">
            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="service-box blue">
                <i class="ri-discuss-line icon"></i>
                <h3>Computer</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="service-box orange">
                <i class="ri-discuss-line icon"></i>
                <h3>Printer</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="service-box green">
                <i class="ri-discuss-line icon"></i>
                <h3>CCTV Camera</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div class="service-box red">
                <i class="ri-discuss-line icon"></i>
                <h3>EPABX</h3>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div class="service-box purple">
                <i class="ri-discuss-line icon"></i>
                <h3>Timely Maintenance</h3>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div class="service-box pink">
                <i class="ri-discuss-line icon"></i>
                <h3>Repairing</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <a href="#" class="read-more">
                  <span>Read More</span> <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" class="team">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Team</h2>
            <p>Our hard working team</p>
          </header>

          <div class="row gy-4">
            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member">
                <div class="member-img">
                  <img src={about} class="img-fluid" alt="" />
                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Mohan Ghimire</h4>
                  <span>Chief Executive Officer</span>
                  <p>A dedicated person to make the IT field look good.</p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member">
                <div class="member-img">
                  <img src={about} class="img-fluid" alt="" />

                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>A dedicated person to make the IT field look good.</p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="member">
                <div class="member-img">
                  <img src={about} class="img-fluid" alt="" />

                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>A dedicated person to make the IT field look good.</p>
                </div>
              </div>
            </div>

            <div
              class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="member">
                <div class="member-img">
                  <img src={about} class="img-fluid" alt="" />

                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>A dedicated person to make the IT field look good.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Start Brands --> */}
      <section class="bg-light py-5">
        <div class="container my-4">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div class="col-lg-9 m-auto tempaltemo-carousel">
              <div class="row d-flex flex-row">
                {/* <!--Controls--> */}
                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <i class="text-light fa fa-chevron-left"></i>
                  </a>
                </div>
                {/* <!--End Controls--> */}

                {/* <!--Carousel Wrapper--> */}
                <div class="col">
                  <div
                    class="carousel slide carousel-multi-item pt-2 pt-md-0"
                    id="templatemo-slide-brand"
                    data-bs-ride="carousel"
                  >
                    {/* <!--Slides--> */}
                    <div
                      class="carousel-inner product-links-wap"
                      role="listbox"
                    >
                      {/* <!--First slide--> */}
                      <div class="carousel-item active">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={brand_01}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={brand_02}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={brand_03}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src={brand_04}
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!--End First slide--> */}

                      {/* <!--Second slide--> */}
                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_01.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_02.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_03.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_04.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!--End Second slide--> */}

                      {/* <!--Third slide--> */}
                      <div class="carousel-item">
                        <div class="row">
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_01.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_02.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_03.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                          <div class="col-3 p-md-5">
                            <a href="#">
                              <img
                                class="img-fluid brand-img"
                                src="assets/img/brand_04.png"
                                alt="Brand Logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <!--End Third slide--> */}
                    </div>
                    {/* <!--End Slides--> */}
                  </div>
                </div>
                {/* <!--End Carousel Wrapper--> */}

                {/* <!--Controls--> */}
                <div class="col-1 align-self-center">
                  <a
                    class="h1"
                    href="#templatemo-slide-brand"
                    role="button"
                    data-bs-slide="next"
                  >
                    <i class="text-light fas fa-chevron-right"></i>
                  </a>
                </div>
                {/* <!--End Controls--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
