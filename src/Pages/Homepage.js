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
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner first">
          <div class="carousel-item active">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={BANNER1} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left align-self-center">
                    <h1 class="h1">
                      <b>CCTV Camera's</b>
                    </h1>
                    <h3 class="h2">
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
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={BANNER2} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1 text-primary">
                      {" "}
                      <b> Computer and Accessories </b>
                    </h1>
                    <h3 class="h2">
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
          <div class="carousel-item">
            <div class="container">
              <div class="row p-5">
                <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img class="img-fluid" src={BANNER3} alt="" />
                </div>
                <div class="col-lg-6 mb-0 d-flex align-items-center">
                  <div class="text-align-left">
                    <h1 class="h1 text-primary">
                      <b> Repairing and Maintenance</b>
                    </h1>
                    <h3 class="h2">
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
          class="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i class="fa fa-chevron-left"></i>
        </a>
        <a
          class="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i class="fa fa-chevron-right"></i>
        </a>
      </div>
      {/* <!-- End Banner Hero --> */}

      {/* //hero section */}
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business.
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are team of talented designers making your house and office
                well managed.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a
                    href="#about"
                    class="btn btn-primary scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    {/* <i class="fa fa-arrow-right"></i> */}
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={BANNER1} class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Values Section ======= --> */}
      <section id="values" class="values">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Our Values</h2>
            <p>We believe in quality.</p>
          </header>

          <div class="row">
            <div class="col-lg-4">
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <img src={value1} class="img-fluid" alt="" />
                <h3>Ad cupiditate sed est odio</h3>
                <p>
                  Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit. Et veritatis id.
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="fade-up" data-aos-delay="400">
                <img src={value2} class="img-fluid" alt="" />
                <h3>Voluptatem voluptatum alias</h3>
                <p>
                  Repudiandae amet nihil natus in distinctio suscipit id.
                  Doloremque ducimus ea sit non.
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="fade-up" data-aos-delay="600">
                <img src={value3} class="img-fluid" alt="" />
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
      <section id="counts" class="counts">
        <div class="container" data-aos="fade-up">
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                {/* <i class="bi bi-emoji-smile"></i> */}
                <i
                  class="fa fa-smile"
                  aria-hidden="true"
                  style={{ color: "#012970" }}
                ></i>

                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    class="purecounter"
                  >
                    <CountUp end={140} duration={2.75}></CountUp>
                  </span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                <i
                  class="fa fa-newspaper"
                  // aria-hidden="true"
                  style={{ color: " #ee6c20" }}
                ></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    class="purecounter"
                  >
                    <CountUp end={140} duration={2.75}></CountUp>
                  </span>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                {/* <i class="bi bi-headset" style={{ color: "#15be56" }}></i> */}
                <i
                  class="fa fa-headphones"
                  aria-hidden="true"
                  style={{ color: "#15be56" }}
                ></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1463"
                    data-purecounter-duration="1"
                    class="purecounter"
                  >
                    <CountUp end={1265} duration={2.75}></CountUp>
                  </span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                <i class="fa fa-users" style={{ color: "#bb0852" }}></i>
                <div>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1"
                    class="purecounter"
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
      <section id="features" class="features">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Features</h2>
            <p>We have got so many features in our pocket to serve.</p>
          </header>

          <div class="row">
            <div class="col-lg-6">
              <img src={features} class="img-fluid" alt="" />
            </div>

            <div class="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div class="row align-self-center gy-4">
                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <div class="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Eos aspernatur rem</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <div class="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Facilis neque ipsa</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <div class="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Volup amet voluptas</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <div class="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Rerum omnis sint</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <div class="feature-box d-flex align-items-center">
                    <i className="fa fa-check"></i>
                    <h3>Alias possimus</h3>
                  </div>
                </div>

                <div class="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <div class="feature-box d-flex align-items-center">
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
      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img src={cat1} class="rounded-circle img-fluid border" />
            </a>
            <h5 class="text-center mt-3 mb-3">Watches</h5>
            <p class="text-center">
              <a class="btn btn-primary">Go Shop</a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img src={cat2} class="rounded-circle img-fluid border" />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
            <p class="text-center">
              <a class="btn btn-primary">Go Shop</a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img src={cat3} class="rounded-circle img-fluid border" />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
            <p class="text-center">
              <a class="btn btn-primary">Go Shop</a>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End Categories of The Month --> */}

      {/* <!-- Start Featured Product --> */}
      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Services</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src={feat1} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$240.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    class="h2 text-decoration-none text-dark"
                  >
                    Gym Weight
                  </a>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p class="text-muted">Reviews (24)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src={feat2} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$480.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    class="h2 text-decoration-none text-dark"
                  >
                    Cloud Nike Shoes
                  </a>
                  <p class="card-text">
                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere
                    vitae pharetra sed, commodo ullamcorper.
                  </p>
                  <p class="text-muted">Reviews (48)</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="card h-100">
                <a href="shop-single.html">
                  <img src={feat3} class="card-img-top" alt="..." />
                </a>
                <div class="card-body">
                  <ul class="list-unstyled d-flex justify-content-between">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                    </li>
                    <li class="text-muted text-right">$360.00</li>
                  </ul>
                  <a
                    href="shop-single.html"
                    class="h2 text-decoration-none text-dark"
                  >
                    Summer Addides Shoes
                  </a>
                  <p class="card-text">
                    Curabitur ac mi sit amet diam luctus porta. Phasellus
                    pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
                  </p>
                  <p class="text-muted">Reviews (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Featured Product --> */}
    </>
  );
};

export default Homepage;
