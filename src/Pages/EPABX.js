import React, { useEffect, useState } from "react";
import shop1 from "../assets/img/computer2.png";
import shop2 from "../assets/img/computer.png";
import ComputerCard from "../Components/ComputerCard";
import axios from "axios";
import notify from "../Notifu/notify";
import Card from "../Components/ComputerCard";

const EPABX = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchterm, setSearchTerm] = useState("");

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

  const epabx = products.filter((arg) => arg.category === "EPABX");

  const filteredData = epabx.filter((item) =>
    searchterm === ""
      ? item
      : item?.title?.toLowerCase()?.includes(searchterm.toLowerCase()) ||
        item?.keySpecs?.toLowerCase()?.includes(searchterm?.toLowerCase()) ||
        item?.priceBefore?.toLowerCase()?.includes(searchterm?.toLowerCase()) ||
        item?.priceAfter?.toLowerCase()?.includes(searchterm?.toLowerCase())
  );
  return (
    <>
      <div className="container my-5">
        <div className="row" id="computer">
          <div className="d-flex justify-content-between flex-wrap">
            <h3 className="py-3 col-lg-5 col-md-12">
              Available EPABX's ({epabx.length})
            </h3>
            <div className="form-row py-lg-3 col-lg-7 col-md-12">
              <div className="form-group col-lg-11 col-md-10 col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  id="search"
                  name="search"
                  placeholder="Search by Name, Key Specifications, Price"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </div>
              <div className="form-group col-lg-1 col-md-2 cl-sm-2">
                <button className="btn btn-info">Search</button>
              </div>
            </div>
          </div>
          <hr className="mb-5" />

          {filteredData?.reverse()?.map((arg) => (
            <ComputerCard
              productName={arg.title}
              price={arg.priceAfter}
              discount={arg.priceBefore}
              brand={arg.keySpecs}
              image={arg.image[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EPABX;
