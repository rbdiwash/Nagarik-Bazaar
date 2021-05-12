import React, { useState } from "react";
import shop2 from "../assets/img/computer.png";
import Modal from "../Components/Modal";

const SingleProduct = () => {
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
                    <img alt=" " src={shop2} alt=" " />
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
                    <i>Category</i> : Computer
                  </li>
                  <li>
                    <i>Client</i>: ASU Company
                  </li>
                  <li>
                    <i>Discount</i>: 100
                  </li>
                  <li>
                    <i>Price</i>: 10,000
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Product Description</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                  itaque inventore commodi labore quia quia. Exercitationem
                  repudiandae officiis neque suscipit non officia eaque itaque
                  enim. Voluptatem officia accusantium nesciunt est omnis
                  tempora consectetur dignissimos. Sequi nulla at esse enim cum
                  deserunt eius.
                </p>
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
