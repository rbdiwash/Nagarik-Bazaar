import React from "react";
import shop1 from "../assets/img/shop_01.jpg";
import shop2 from "../assets/img/shop_02.jpg";
import Card from "../Components/Card";

const EPABX = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row" id="computer">
          <h1 className="py-3 pb-4  text-center">Available EPABX Devices</h1>
          <hr className="mb-5" />

          <Card
            productName={"Telephone"}
            price={1000}
            discount={1200}
            brand={"Sony"}
          />

          <Card
            productName={"Telephone"}
            price={15000}
            discount={1800}
            brand={"Panasonic"}
          />

          <Card
            productName={"Double Phone"}
            price={1200}
            discount={1600}
            brand={"Nikon"}
          />

          <Card
            productName={"Telephone"}
            price={1000}
            discount={1200}
            brand={"Sony"}
          />
          <Card
            productName={"Telephone"}
            price={15000}
            discount={1800}
            brand={"Panasonic"}
          />
          <Card
            productName={"Telephone"}
            price={15000}
            discount={1800}
            brand={"Panasonic"}
          />
        </div>
      </div>
    </>
  );
};

export default EPABX;
