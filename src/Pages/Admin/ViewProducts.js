import { refresh } from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import notify from "../../Notifu/notify";

const ViewProducts = () => {
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const [openmodal, setModal] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3003/posts",
    })
      .then((res) => {
        console.log(res);
        setProducts(res?.data);
      })
      .catch((err) => {
        notify.handleError(err.data);
        console.log(err);
      });
  }, [refresh]);

  const removeData = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:3003/posts/${id}`,
    })
      .then((res) => {
        // $(`#deleteModal-${id}`).modal("hide");
        // setModal(!openmodal);
        setRefresh(!refresh);
        notify.showSuccess("Your product is removed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filteredData = products.filter((item) =>
    searchterm === ""
      ? item
      : item?.title?.toLowerCase()?.includes(searchterm.toLowerCase()) ||
        item?.category?.toLowerCase()?.includes(searchterm?.toLowerCase()) ||
        item?.priceBefore?.toLowerCase()?.includes(searchterm?.toLowerCase()) ||
        item?.priceAfter?.toLowerCase()?.includes(searchterm?.toLowerCase())
  );

  return (
    <>
      <div className="container my-5 viewP">
        <div className="row">
          <div className="d-flex justify-content-between px-3 py-3">
            <h3>Available Products ({products?.length})</h3>
            <Link to="/admin">
              <button className="btn btn-outline-primary">Add Products</button>
            </Link>
          </div>
          <hr />
          <div class="form-row pt-4">
            <div className="form-group col-lg-5 col-md-6">
              <input
                type="text"
                class="form-control"
                id="search"
                name="search"
                placeholder="Search by Name, Category, Price"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
            <div className="form-group col-lg-1 col-md-2">
              <button className="btn btn-info">Search</button>
            </div>
          </div>
          <div className="table-responsive text-center">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">S.N</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Description</th>
                  <th scope="col">Features</th>
                  <th scope="col">Price Before</th>
                  <th scope="col">Price After</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredData?.length !== 0 ? (
                  <>
                    {filteredData?.map((arg, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{arg.title}</td>
                            <td>{arg.category}</td>
                            <td>{arg.description.slice(0, 40)}</td>
                            <td>{arg.keySpecs}</td>
                            <td>{arg.priceBefore}</td>
                            <td>{arg.priceAfter}</td>
                            <td>
                              <button
                                className="btn btn-danger"
                                style={{ padding: "2px 4px" }}
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete this??"
                                onClick={() => {
                                  removeData(arg._id);
                                }}
                                // data-toggle="modal"
                                // data-target={`#deleteModal-${arg._id}`}
                                // onClick={() => {
                                //   setId(arg._id);
                                //   setModal(!openmodal);
                                // }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <p className="text-center p-4"> !!!! Sorry, No results </p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openmodal ? (
        <div
          class="modal fade"
          // id={`deleteModal-${id}`}
          tabindex="-1"
          role="dialog"
          aria-labelledby="deleteModal"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="title">
                  Sure want to Delete this?{" "}
                </h5>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  data-dismiss="modal"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    removeData(id);
                    setModal(false);
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  data-dismiss="modal"
                  class="btn btn-primary"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ViewProducts;
