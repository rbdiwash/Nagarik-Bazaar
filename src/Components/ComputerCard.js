import React from "react";
import { Link, useParams } from "react-router-dom";
// import shop1 from "../assets/img/computer.png";

const Card = ({ pid, productName, price, discount, brand, image, key }) => {
  const id = useParams();
  return (
    <>
      <div className="col-lg-3 col-md-6" key={key}>
        <div className="card mb-4 product-wap ">
          <div className="card border-0">
            <img alt=" " className="card-img  img-fluid" src={image} />
            <div className="card-img-overlay  product-overlay d-flex align-items-center justify-content-center">
              <ul className="list-unstyled">
                <li>
                  <a className="btn btn-primary text-white">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
                <li>
                  <Link
                    to={`/shop/product/${pid}`}
                    className="btn btn-primary text-white mt-2"
                  >
                    <i className="far fa-eye"></i>
                  </Link>
                </li>
                <li>
                  <a className="btn btn-primary text-white mt-2">
                    <i className="fas fa-cart-plus"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-body">
            <Link to={`/shop/product/${pid}`} className="text-decoration-none">
              {productName}
            </Link>
            <p>{brand}</p>
            <button
              className="text-left mb-0 btn btn-primary "
              style={{ padding: "2px 4px", borderRadius: "50rem" }}
            >
              <strike>Rs. {discount}</strike> Rs. {price}
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
