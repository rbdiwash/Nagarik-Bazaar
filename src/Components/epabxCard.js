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
      <div
        className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4 mb-lg-0 epabx"
        key={key}
      >
        <div className="card pl-4 pr-3 py-2">
          <div className="div1 row py-4 px-2">
            <div className="col-3 mt-2" style={{ zIndex: "9999" }}>
              <button className="btn discBtn text-white">Offer</button>{" "}
            </div>
            <div className="col-6 d-flex justify-content-center">
              {" "}
              <img
                src={image}
                height=""
                width="150%"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-3 d-flex flex-column pl-4">
              {" "}
              <i className="fa fa-heart fa-lg mt-4" aria-hidden="true"></i>{" "}
              <i
                className="fa fa-balance-scale mt-3 font-weight-bold"
                aria-hidden="true"
              ></i>{" "}
            </div>
          </div>
          <div className="py-2">
            <p className="text-center">
              <span className="small">Free Maintenance</span>{" "}
            </p>
            <Link to={`/shop/product/${pid}`}>
              <h5>{productName}</h5>
            </Link>
            <p>{brand} </p>
            <h5 className="align-self-center">
              Rs. <strike>{discount}</strike> Rs.{price}
            </h5>{" "}
            <div className="d-flex mt-3">
              <Link to={`/shop/product/${pid}`}>
                <button className="buy d-flex ml-auto font-weight-bold pl-4 pr-5 py-2 border-0">
                  {" "}
                  Buy{" "}
                </button>{" "}
              </Link>
              <span className="cart text-white d-flex p-2">
                <i
                  className="fa fa-shopping-cart fa-lg align-self-center"
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
