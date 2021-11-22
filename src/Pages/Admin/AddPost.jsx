import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import axios from "axios";
import notify from "../../Notifu/notify";
import { Link } from "react-router-dom";
const AddPost = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    const myData = {
      title: data.title,
      keySpecs: data.keySpecs,
      category: data.category,
      description: data.description,
      priceBefore: data.priceBefore,
      priceAfter: data.priceAfter,
      image: data.image,
    };
    // let finalData = new FormData();
    // for (const key of Object.keys(myData)) {
    //   finalData.append(key, myData[key]);
    // }

    let finalData = new FormData();
    for (const key of Object.keys(myData)) {
      if (key === "image")
        for (let i = 0; i < myData.image.length; i++) {
          finalData.append("image", myData.image[i]);
        }
      else {
        finalData.append(key, myData[key]);
      }
    }

    axios({
      method: "post",
      url: "https://nagarikmart-backend.herokuapp.com/posts",
      headers: {
        "Content-type": "application/json",
        token: `Bearer ${localStorage.getItem("token")}`,
        // token: localStorage.getItem("token"),
      },
      // headers: localStorage.getItem("token"),

      data: finalData,
    })
      .then((res) => {
        notify.showSuccess("Product Added");
        setLoading(false);
      })
      .catch((err) => {
        notify.handleError(err.data);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div
            className="add-product col-lg-6 col-md-9 col-sm-12  p-4 shadow rounded bg-white"
            style={{ margin: "70px" }}
          >
            <div className="d-flex justify-content-between px-3">
              <h3 className="text-primary text-center"> Add Product</h3>
              <Link to="/admin/products">
                <button className="btn btn-outline-primary">
                  View Products
                </button>
              </Link>
            </div>
            <hr className="my-3 mx-3" />
            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    name="title"
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Key Specification</label>
                  <input
                    type="text"
                    className="form-control"
                    id="keySpecs"
                    placeholder="Key Feature"
                    name="keySpecs"
                    {...register("keySpecs", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cat">Category</label>
                <select
                  id="cat"
                  className="form-control"
                  name="category"
                  {...register("category", { required: true })}
                >
                  <option defaultValue value="">
                    Choose Category
                  </option>
                  <option value="CCTV">CCTV</option>
                  <option value="EPABX">EPABX</option>
                  <option value="Printer">Printer</option>
                  <option value="Computer">Computer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Description</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Description about your Products"
                  name="description"
                  {...register("description", { required: true })}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">Price Before</label>
                  <input
                    type="text"
                    className="form-control"
                    id="priceBefore"
                    name="priceBefore"
                    placeholder="Price Before Discount"
                    {...register("priceBefore", { required: true })}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">Price After</label>
                  <input
                    type="text"
                    className="form-control"
                    id="priceAfter"
                    name="priceAfter"
                    placeholder="Price After Discount"
                    {...register("priceAfter", { required: true })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Upload Photos</label>
                <input
                  name="image"
                  type="file"
                  className="form-control-file"
                  id="image"
                  {...register("image")}
                  multiple
                />
              </div>
              <hr className="my-4" />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {loading && (
                <div class="spinner-border text-success" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
