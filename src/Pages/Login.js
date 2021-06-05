import React from "react";
import "./Login.css";
import pp from "../assets/img/mohan.jpg";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import notify from "../Notifu/notify";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  if (localStorage.getItem("token")) {
    history.push("/admin");
  }

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "http://localhost:3003/auth/login",
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userType", "Nagarik-Admin");
        localStorage.setItem("token", res.data.token);
        history.push("/admin");
        notify.showSuccess("Logged In");
        window.location.reload({ setTimeout: 3000 });
      })
      .catch((err) => {
        notify.handleError(err.data);
        console.log(err.response);
      });
  };

  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-9 col-lg-4">
            <div className="account-wall">
              <h1 className="text-center login-title pb-3">
                Sign in to Continue
              </h1>
              <img className="profile-img shadow" src={pp} alt="" />

              <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form-control mb-3 shadow"
                  placeholder="Email"
                  name="email"
                  // required
                  autoFocus
                  {...register("email", { required: true })}
                />
                <input
                  type="password"
                  className="form-control mb-3 shadow"
                  placeholder="Password"
                  // required
                  name="password"
                  {...register("password", { required: true })}
                />
                <button className="btn  btn-primary btn-block" type="submit">
                  Sign in
                </button>

                <span className="clearfix"></span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
