import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Printercard.css";
import AOS from "aos";

const ComputerCard = ({
  pid,
  productName,
  price,
  discount,
  brand,
  image,
  key,
}) => {
  const id = useParams();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-12 printercard mb-4 mb-lg-0 mt-4"
        data-aos="zoom-out"
        key={key}
      >
        <div className="card h-100 shadow-sm">
          <img src={`${image}`} className="card-img-top" alt="..." />
          <div className="label-top shadow-sm discBtn">SELL</div>
          <div className="card-body">
            <div className="clearfix mb-3">
              {" "}
              <span className="float-start badge rounded-pill bg-success">
                <strike> Rs. {discount}</strike> Rs.{price}
              </span>{" "}
              <span className="float-end">
                <Link className="text-muted small" to={`/shop/product/${pid}`}>
                  Reviews
                </Link>
              </span>{" "}
            </div>
            <h5 className="card-title"> {productName}</h5>
            <p> {brand}</p>
            <div className="text-center my-2">
              {" "}
              <Link to={`/shop/product/${pid}`} className="btn btn-warning">
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

export default ComputerCard;
