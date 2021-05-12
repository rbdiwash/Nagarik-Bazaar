import React from "react";
import { Link } from "react-router-dom";
import shop1 from "../assets/img/computer.png";

const Card = ({ productName, price, discount, brand, image }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4">
        <div className="card mb-4 product-wap rounded-0">
          <div className="card rounded-0">
            <img alt=" " className="card-img rounded-0 img-fluid" src={image} />
            <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled">
                <li>
                  <a
                    className="btn btn-success text-white"
                    href="shop/single.html"
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
            <Link to="/shop/single" className="h3 text-decoration-none">
              {productName}
            </Link>
            <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
              <li>{brand}</li>
            </ul>
            <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
            <p className="text-left mb-0">
              <strike>Rs. {discount}</strike> Rs. {price}
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
