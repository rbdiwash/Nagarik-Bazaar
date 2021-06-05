import React from "react";
import { Link, useParams } from "react-router-dom";
import "./epabx.css";
// import shop1 from "../assets/img/computer.png";

const EpabxCard = ({
  pid,
  productName,
  price,
  discount,
  brand,
  image,
  key,
}) => {
  const id = useParams();
  return (
    <>
      <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0 epabx">
        <div class="card pl-4 pr-3 py-2">
          <div class="div1 row py-4 px-2">
            <div class="col-3 mt-2">
              {" "}
              <button class="btn discBtn text-white">Offer</button>{" "}
            </div>
            <div class="col-6 d-flex justify-content-center">
              {" "}
              <img
                src="https://i.imgur.com/3SKCNZw.jpg"
                height=""
                width="150%"
                alt=""
              />{" "}
            </div>
            <div class="col-3 d-flex flex-column pl-4">
              {" "}
              <i class="fa fa-heart fa-lg mt-4" aria-hidden="true"></i>{" "}
              <i
                class="fa fa-balance-scale mt-3 font-weight-bold"
                aria-hidden="true"
              ></i>{" "}
            </div>
          </div>
          <div class="py-2">
            <p class="text-center">
              <span class="small">Free Maintenance</span>{" "}
            </p>
            <Link to={`/shop/product/${pid}`}>
              <h5>{productName}</h5>
            </Link>
            <p>{brand} </p>
            <h5 class="align-self-center">
              Rs. <strike>{discount}</strike> Rs.{price}
            </h5>{" "}
            <div class="d-flex mt-3">
              <Link to={`/shop/product/${pid}`}>
                <button class="buy d-flex ml-auto font-weight-bold pl-4 pr-5 py-2 border-0">
                  {" "}
                  Buy{" "}
                </button>{" "}
              </Link>
              <span class="cart text-white d-flex p-2">
                <i
                  class="fa fa-shopping-cart fa-lg align-self-center"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EpabxCard;
