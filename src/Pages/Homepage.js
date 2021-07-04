import React, { useEffect } from "react";
import BANNER1 from "../assets/img/HDIP88DW-L1.png";
import BANNER2 from "../assets/img/banner22.png";
import BANNER3 from "../assets/img/banner33.png";
import cat1 from "../assets/img/category_img_01.jpg";
import cat2 from "../assets/img/category_img_02.jpg";
import cat3 from "../assets/img/category_img_03.jpg";
import feat1 from "../assets/img/feature_prod_01.jpg";
import feat2 from "../assets/img/feature_prod_02.jpg";
import feat3 from "../assets/img/feature_prod_03.jpg";
import value1 from "../assets/img/values-1.png";
import value2 from "../assets/img/values-2.png";
import value3 from "../assets/img/values-3.png";
import features from "../assets/img/features.png";
import CountUp from "react-countup";
import AOS from "aos";
import { Link } from "react-router-dom";
// import "../assets/css/templatemo.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {/* <!-- Start Banner Hero --> */}
      <div
        id="template-mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner first">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img alt="" className="img-fluid" src={BANNER1} />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="display-5">
                      <b>CCTV Camera's</b>
                    </h1>
                    <h3 className="h2">
                      Tiny and Perfect Camera with High Quality.
                    </h3>
                    <p>
                      We provide you the best available CCTV camera available in
                      the market in reasonable price with maintenance service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img alt="" className="img-fluid" src={BANNER2} />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="display-5 text-primary">
                      {" "}
                      <b> Computer and Accessories </b>
                    </h1>
                    <h3 className="h2">
                      Every model, and parts of computers are available here.
                    </h3>
                    <p>
                      We have computer and its Accessories available for your
                      home or firm that best suits the business at very low
                      cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img alt="" className="img-fluid" src={BANNER3} />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="display-5 text-primary">
                      <b> Repairing and Maintenance</b>
                    </h1>
                    <h3 className="h2">
                      Timely maintenance and repairing is the key to good
                      quality service.{" "}
                    </h3>
                    <p>
                      We bring you 100% maintenance service and repairing of the
                      products on time and on reasonable price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fa fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fa fa-chevron-right"></i>
        </a>
      </div>
      {/* <!-- End Banner Hero --> */}

      {/* //hero section */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business.
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are team of talented designers making your house and office
                well managed.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className=" text-lg-start">
                  <Link
                    to="/about"
                    className="btn btn-primary scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    {/* <i className="fa fa-arrow-right"></i> */}
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img alt="" src={BANNER1} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Values Section ======= --> */}
      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
            <p>We believe in quality.</p>
          </header>

          <div className="row">
            <div className="col-lg-4">
              <div className="box" data-aos="fade-up" data-aos-delay="200">
                <img alt="" src={value1} className="img-fluid" />
                <h3>Ad cupiditate sed est odio</h3>
                <p>
                  Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit. Et veritatis id.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="400">
                <img alt="" src={value2} className="img-fluid" />
                <h3>Voluptatem voluptatum alias</h3>
                <p>
                  Repudiandae amet nihil natus in distinctio suscipit id.
                  Doloremque ducimus ea sit non.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="600">
                <img alt="" src={value3} className="img-fluid" />
                <h3>Fugit cupiditate alias nobis.</h3>
                <p>
                  Quam rem vitae est autem molestias explicabo debitis sint.
                  Vero aliquid quidem commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Values Section --> */}

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                {/* <i className="bi bi-emoji-smile"></i> */}
                <i
                  className="fa fa-smile"
                  aria-hidden="true"
                  style={{ color: "#012970" }}
                ></i>

                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    <CountUp end={140} duration={2.75}></CountUp>
                  </span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i
                  className="fa fa-newspaper"
                  // aria-hidden="true"
                  style={{ color: " #ee6c20" }}
                ></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    <CountUp end={140} duration={2.75}></CountUp>
                  </span>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i
                  className="fa fa-headphones"
                  aria-hidden="true"
                  style={{ color: "#15be56" }}
                ></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    <CountUp end={126} duration={2.75}></CountUp>
                  </span>
                  <p>Hours Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="fa fa-users" style={{ color: "#bb0852" }}></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    <CountUp end={5} duration={2.75}></CountUp>
                  </span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Counts Section --> */}

      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Features</h2>
            <p>We have got so many features in our pocket to serve.</p>
          </header>

          <div className="row">
            <div className="col-lg-6">
              <img alt="" src={features} className="img-fluid" />
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="200"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Eos aspernatur rem</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Facilis neque ipsa</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Volup amet voluptas</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="500"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Rerum omnis sint</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="600"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Alias possimus</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="700"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Repellendus mollitia</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- / row --> */}
        </div>
        {/* <!-- End Features Section --> */}
      </section>

      {/* <!-- Start Categories of The Month --> */}
      <section className="container py-5 category">
        <div className="row text-center pt-3" data-aos="fade-up">
          <div className="col-lg-6 m-auto">
            <h1 className="h2">Categories of the Month</h1>
            <p>Most popular and products having most sell in this month.</p>
          </div>
        </div>
        <div className="row text-center">
          <div
            className="col-12 col-md-4 p-5 mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img alt="" src={BANNER2} className=" img-fluid border shadow" />
            <h2 className="h5 text-center mt-3 mb-3">Computers</h2>
            <p className="text-center">
              <Link to="/shop" className="btn btn-primary">
                Shop
              </Link>
            </p>
          </div>
          <div
            className="col-12 col-md-4 p-5 mt-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img alt="" src={BANNER1} className=" img-fluid border shadow" />
            <h2 className="h5 text-center mt-3 mb-3">CCTV</h2>
            <p className="text-center">
              <Link to="/shop" className="btn btn-primary">
                Go Shop
              </Link>
            </p>
          </div>
          <div
            className="col-12 col-md-4 p-5 mt-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <img alt="" src={BANNER3} className=" img-fluid border shadow" />
            <h2 className="h5 text-center mt-3 mb-3">EPABX</h2>
            <p className="text-center">
              <Link to="/shop" className="btn btn-primary">
                Go Shop
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End Categories of The Month --> */}

      {/* <!-- Start Featured Product --> */}
      {/* <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Services</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img alt="" src={feat1} className="card-img-top" />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$240.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Gym Weight
                  </a>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img alt="" src={feat2} className="card-img-top" />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$480.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Cloud Nike Shoes
                  </a>
                  <p className="card-text">
                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere
                    vitae pharetra sed, commodo ullamcorper.
                  </p>
                  <p className="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img alt="" src={feat3} className="card-img-top" />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                    </li>
                    <li className="text-muted text-right">$360.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Summer Addides Shoes
                  </a>
                  <p className="card-text">
                    Curabitur ac mi sit amet diam luctus porta. Phasellus
                    pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                  </p>
                  <p className="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* <!-- End Featured Product --> */}
    </>
  );
};

export default Homepage;
