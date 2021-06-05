import React from "react";
import shop1 from "../assets/img/computer.jpg";
import shop2 from "../assets/img/computer.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import ComputerCard from "../Components/ComputerCard";
import { useEffect, useState } from "react";

import ComputerCard from "../Components/ComputerCard";
import PrinterCard from "../Components/PrinterCard";
import axios from "axios";
import notify from "../Notifu/notify";
import Card from "../Components/ComputerCard";
import EpabxCard from "../Components/epabxCard";
import Modal from "../Components/Modal";

const Shop = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3003/posts",
    })
      .then((res) => {
        console.log(res);
        setProducts(res?.data);
      })
      .catch((err) => {
        notify.handleError(err.data);
        console.log(err);
      });
  }, [refresh]);

  const cctv = products.filter((arg) => arg.category === "CCTV");
  const printer = products.filter((arg) => arg.category === "Printer");
  const computers = products.filter((arg) => arg.category === "Computer");
  const epabx = products.filter((arg) => arg.category === "EPABX");

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
                      href="/"
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
                      &nbsp; -CCTV
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="h3 text-dark text-decoration-none"
                      href="#epabx"
                    >
                      &nbsp; -EPABX
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
                {cctv.map((arg) => (
                  <div className="col-md-12">
                    <div class="card p-3">
                      <div class="row">
                        <div class="col-12 col-md-5">
                          <img src={shop1} alt="" className="img-fluid" />
                        </div>
                        <div class="col-12 col-md-7 py-3 px-4">
                          <span>
                            <i class="fa fa-heart mr-3" aria-hidden="true"></i>
                            <i class="fa fa-headphones" aria-hidden="true"></i>
                          </span>
                          <p class="small font-weight-bold my-2">{arg.title}</p>
                          <h6 class="mb-3">{arg.keySpecs}</h6>
                          <p>{arg?.description}</p>
                          <div class="d-flex mb-3">
                            <button
                              type="button"
                              class="btn btn-success mr-3"
                              data-toggle="modal"
                              data-target="#exampleModal"
                              onClick={() => {
                                setOpenModal(!openModal);
                              }}
                            >
                              Buy Now
                            </button>

                            <Link to={`/shop/product/${arg?._id}`}>
                              <button class="btn btn-outline-success">
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  // <div className="col-md-12">
                  //   <div className="card mb-4 product-wap rounded-0">
                  //     <div className="card rounded-0">
                  //       <img
                  //         alt=" "
                  //         className="card-img rounded-0 img-fluid"
                  //         src={shop1}
                  //       />
                  //       <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  //         <ul className="list-unstyled">
                  //           <li>
                  //             <a
                  //               className="btn btn-success text-white"
                  //               href="shop-single.html"
                  //             >
                  //               <i className="far fa-heart"></i>
                  //             </a>
                  //           </li>
                  //           <li>
                  //             <a
                  //               className="btn btn-success text-white mt-2"
                  //               href="shop-single.html"
                  //             >
                  //               <i className="far fa-eye"></i>
                  //             </a>
                  //           </li>
                  //           <li>
                  //             <a
                  //               className="btn btn-success text-white mt-2"
                  //               href="shop-single.html"
                  //             >
                  //               <i className="fas fa-cart-plus"></i>
                  //             </a>
                  //           </li>
                  //         </ul>
                  //       </div>
                  //     </div>
                  //     <div className="card-body">
                  //       <Link
                  //         to={`/shop/product/${arg?._id}`}
                  //         className="h3 text-decoration-none"
                  //       >
                  //         {arg.title}
                  //       </Link>
                  //       <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                  //         <li>{arg.keySpecs}</li>
                  //       </ul>
                  //       <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
                  //       <p className="mb-0">
                  //         <strike>Rs.{arg.priceBefore}</strike> Rs.
                  //         {arg.priceAfter}
                  //       </p>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </Carousel>
              {openModal ? <Modal dataTarget={"exampleModal"} /> : null}
            </div>
            <hr className="my-5" />
            {/* computer */}
            <div className="row" id="computer">
              <h1 className="py-3 pb-4  text-center">Computers</h1>

              {computers
                .reverse()
                ?.slice(0, 4)
                ?.map((arg, index) => (
                  <PrinterCard
                    key={index}
                    pid={arg._id}
                    productName={arg.title}
                    price={arg.priceAfter}
                    discount={arg.priceBefore}
                    brand={arg.keySpecs}
                    image={shop1}
                  />
                ))}
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Link to="/shop/computers">
                  <button
                    className="btn btn-warning text-white"
                    style={{ background: "#f7810a" }}
                  >
                    See All
                  </button>
                </Link>
              </div>
            </div>
            <hr className="my-5" />

            {/* printer */}
            <div className="row" id="printer">
              <h1 className="py-3 pb-4  text-center">Printers</h1>
              {printer
                .reverse()
                ?.slice(0, 3)
                ?.map((arg, index) => (
                  <ComputerCard
                    key={index}
                    pid={arg._id}
                    productName={arg.title}
                    price={arg.priceAfter}
                    discount={arg.priceBefore}
                    brand={arg.keySpecs}
                    image={shop1}
                  />
                ))}
            </div>
            <div className="row mt-4">
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
              {cctv
                .reverse()
                ?.slice(0, 4)
                ?.map((arg, index) => (
                  <ComputerCard
                    key={index}
                    pid={arg._id}
                    productName={arg.title}
                    price={arg.priceAfter}
                    discount={arg.priceBefore}
                    brand={arg.keySpecs}
                    image={shop1}
                  />
                ))}
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
              {epabx
                .reverse()
                ?.slice(0, 4)
                ?.map((arg, index) => (
                  <EpabxCard
                    key={index}
                    pid={arg._id}
                    productName={arg.title}
                    price={arg.priceAfter}
                    discount={arg.priceBefore}
                    brand={arg.keySpecs}
                    image={shop1}
                  />
                ))}
            </div>
            <div className="row mt-4">
              <div className="col d-flex justify-content-end">
                <Link to="/shop/epabx">
                  <button className="btn text-white discBtn">See All</button>
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
