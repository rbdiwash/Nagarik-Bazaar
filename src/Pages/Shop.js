import React from "react";
import shop1 from "../assets/img/computer.jpg";
import shop2 from "../assets/img/computer.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import ComputerCard from "../Components/ComputerCard";

const Shop = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {/* <!-- Start Content --> */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      All Categories
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#computer"
                    >
                      -Computer
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none"
                      href="#printer"
                    >
                      -Printers
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none"
                      href="#cctv"
                    >
                      -CCTV
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none"
                      href="#epabx"
                    >
                      -EPABX
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <Carousel
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                responsive={responsive}
                keyBoardControl={true}
              >
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop1}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell Gaming PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 54,000</strike> Rs. 50,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop2}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 46,000</strike> Rs. 42,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop1}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell Gaming PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 54,000</strike> Rs. 50,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop2}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 46,000</strike> Rs. 42,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop1}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell Gaming PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 54,000</strike> Rs. 50,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop2}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 46,000</strike> Rs. 42,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop1}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell Gaming PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 54,000</strike> Rs. 50,000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-11">
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        alt=" "
                        className="card-img rounded-0 img-fluid"
                        src={shop2}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <i className="far fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="shop-single.html"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a
                        href="shop-single.html"
                        className="h3 text-decoration-none"
                      >
                        Dell PC
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>8GB RAM/500GB HDD</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                      <p className="mb-0">
                        <strike>Rs. 46,000</strike> Rs. 42,000
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
            <hr className="my-5" />
            {/* computer */}
            <div className="row" id="computer">
              <h1 className="py-3 pb-4  text-center">Computers</h1>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Dell Gaming PC
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>8GB RAM/500GB HDD</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="mb-0">
                      <strike>Rs. 54,000</strike> Rs. 50,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Dell PC
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>8GB RAM/500GB HDD</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="mb-0">
                      <strike>Rs. 46,000</strike> Rs. 42,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Link to="/shop/computers">
                  {" "}
                  <button className="btn btn-primary">See All</button>
                </Link>
              </div>
            </div>
            <hr className="my-5" />

            {/* printer */}
            <div className="row" id="printer">
              <h1 className="py-3 pb-4  text-center">Printers</h1>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Link to="/shop/printers">
                  <button className="btn btn-primary">See All</button>
                </Link>
              </div>
            </div>
            <hr className="my-5" />

            {/* cctv */}
            <div className="row" id="cctv">
              <h1 className="py-3 pb-4  text-center">CCTV</h1>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Link to="/shop/cctv">
                  <button className="btn btn-primary">See All</button>
                </Link>
              </div>
            </div>
            <hr className="my-5" />

            {/* EPABX */}
            <div className="row" id="epabx">
              <h1 className="py-3 pb-4  text-center">EPABX</h1>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt="this is text"
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop1}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      alt=" "
                      className="card-img rounded-0 img-fluid"
                      src={shop2}
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href="shop-single.html"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="far fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href="shop-single.html"
                          >
                            <i className="fas fa-cart-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href="shop-single.html"
                      className="h3 text-decoration-none"
                    >
                      Oupidatat non
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li>M/L/X/XL</li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                    <p className="text-center mb-0">$250.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Link to="/shop/epabx">
                  {" "}
                  <button className="btn btn-primary">See All</button>
                </Link>
              </div>
            </div>
            <hr className="my-5" />
          </div>
        </div>
      </div>
      {/* <!-- End Content --> */}
    </div>
  );
};

export default Shop;
