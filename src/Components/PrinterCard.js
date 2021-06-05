import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Printercard.css";
// import shop1 from "../assets/img/computer.png";

const PrinterCard = ({
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
      {/* <div
        class="container-fluid bg-trasparent my-4 p-3 printercard"
        style={{ position: "relative" }}
      >
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"> */}
      <div class="col-lg-4 col-md-6 col-sm-12 printercard mb-4 mb-lg-0">
        <div class="card h-100 shadow-sm">
          {" "}
          <img
            src="https://www.freepnglogos.com/uploads/notebook-png/notebook-laptop-png-images-you-can-download-mashtrelo-14.png"
            class="card-img-top"
            alt="..."
          />
          <div class="label-top shadow-sm discBtn">SELL</div>
          <div class="card-body">
            <div class="clearfix mb-3">
              {" "}
              <span class="float-start badge rounded-pill bg-success">
                <strike> Rs. {discount}</strike> Rs.{price}
              </span>{" "}
              <span class="float-end">
                <Link class="text-muted small" to={`/shop/product/${pid}`}>
                  Reviews
                </Link>
              </span>{" "}
            </div>
            <h5 class="card-title"> {productName}</h5>
            <p> {brand}</p>
            <div class="text-center my-2">
              {" "}
              <Link to={`/shop/product/${pid}`} class="btn btn-warning">
                Check offer
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default PrinterCard;
