import React from "react";
import "./Login.css";
import pp from "../assets/img/mohan.jpg";
const Login = () => {
  return (
    <>
      <div class="container my-4">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-9 col-lg-4">
            <div class="account-wall">
              <h1 class="text-center login-title pb-3">Sign in to Continue</h1>
              <img class="profile-img shadow" src={pp} alt="" />

              <form class="form-signin">
                <input
                  type="text"
                  class="form-control mb-3 shadow"
                  placeholder="Email"
                  required
                  autofocus
                />
                <input
                  type="password"
                  class="form-control mb-3 shadow"
                  placeholder="Password"
                  required
                />
                <button class="btn  btn-primary btn-block" type="submit">
                  Sign in
                </button>

                <span class="clearfix"></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
