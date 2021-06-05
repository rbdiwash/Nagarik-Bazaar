import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import shop2 from "../assets/img/computer.png";
import Modal from "../Components/Modal";
import notify from "../Notifu/notify";

const SingleProduct = () => {
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3003/posts",
    })
      .then((res) => {
        console.log(res?.data);
        setProducts(res?.data);
      })
      .catch((err) => {
        notify.handleError(err.data);
        console.log(err);
      });
  }, [refresh]);
  const single = products?.filter((arg) => arg._id === id)[0];
  console.log(single);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="portfolio-details-slider swiper-container">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img alt="" src={shop2} />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="portfolio-info">
                <h3>Product Details</h3>
                <ul>
                  <li>
                    <i>Title</i> : {single?.title}
                  </li>
                  <li>
                    <i>Specifications</i> : {single?.keySpecs}
                  </li>
                  <li>
                    <i>Category</i> : {single?.category}
                  </li>
                  <li>
                    <i>Price Before</i> : Rs. {single?.priceBefore}
                  </li>
                  <li>
                    <i>Offered Price</i> : Rs. {single?.priceAfter}
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Product Description</h2>
                <p>{single?.description}</p>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  Add to Cart
                </button>
                {openModal ? <Modal dataTarget={"exampleModal"} /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
