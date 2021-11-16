/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import register from "../../../Assets/Login/register_1.svg";
import React from "react";
import Axios from "axios";

const Login = () => {
  const [usernameReg, setUsernameReg] = React.useState("");
  const [firstNameReg, setFristNameReg] = React.useState("");
  const [lastNameReg, setLastNameReg] = React.useState("");
  const [emailReg, setEmailReg] = React.useState("");
  const [passwordReg, setPasswordReg] = React.useState("");

  const register = () => {
    Axios.post("http://localhost:1337/register", {
      username: usernameReg,
      first_name: firstNameReg,
      last_name: lastNameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="register">
      <div className="container">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => {
                setFristNameReg(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => {
                setLastNameReg(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={register}
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
