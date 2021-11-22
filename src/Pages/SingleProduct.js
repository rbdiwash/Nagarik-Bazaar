import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Modal from "../Components/Modal";
import notify from "../Notifu/notify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SingleProduct = () => {
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://nagarikmart-backend.herokuapp.com/posts",
    })
      .then((res) => {
        setProducts(res?.data);
      })
      .catch((err) => {
        notify.handleError(err.data);
        console.log(err);
      });
  }, [refresh]);
  const single = products?.filter((arg) => arg._id === id)[0];
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7">
              <div className="portfolio-details-slider swiper-container">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <Carousel
                      autoPlay={true}
                      autoPlaySpeed={3000}
                      infiniteLoop={true}
                      autoFocus={true}
                      showArrows={true}
                      showIndicators={true}
                      showThumbs={true}
                      useKeyboardArrows={true}
                      verticalSwipe="natural"
                    >
                      {single?.image?.map((img) => (
                        <a
                          href={img}
                          data-lightbox="photos"
                          data-title="Photos"
                        >
                          <img alt="" src={img} className="rounded img-fluid" />
                        </a>
                      ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 ">
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
