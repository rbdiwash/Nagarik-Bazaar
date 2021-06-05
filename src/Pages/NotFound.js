import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container my-5">
    <div className="row">
      <div className="error-page text-center">
        <h1 className="text-center mb-5" style={{ fontSize: "100px" }}>
          Oops!
        </h1>
        <h1 className="mb-4">404 - PAGE NOT FOUND</h1>
        <p>
          The page you are looking for might have <br /> been removed or had its
          name changed or is not Unavailable.
        </p>
        <Link
          to="/"
          className="btn btn-primary text-white mt-3"
          style={{
            height: "min-content",
            background: "#012970",
            border: "none",
          }}
        >
          <span>Back to Homepage</span>{" "}
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
