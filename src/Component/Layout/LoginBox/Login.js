/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleCircleFilled,
  FacebookFilled,
  SkypeFilled,
} from "@ant-design/icons";
import register from "../../../Assets/Login/register_2.svg";
import React from "react";
import { useHistory, Link } from "react-router-dom";
import firebase, { auth, db } from "../../../firebase/config";
import { addDocument, generateKeywords } from "../../../firebase/services";
import Axios from "axios";

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const history = useHistory();

  const handleLogin = async (fbProvider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId,
      });
    }
  };


  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState("");
  const [loginStatus, setLoginStatus] = React.useState("");

  const login = () => {
    Axios.post("http://localhost:1337/login", {
      username: username,
      password: password,
      type: type,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      }
      if(response.data.result){
        setType(response.data.result);
      }
    });
  };

  const onFinish = (values) => {
    if(values.type){
      alert('success student login');
      history.push('/student-workspace');
    }
  };

  return (
    <div className="login">
      <div className="container">
        <form
          className="login-form"
          onFinish={onFinish}
        >
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={login}
          >
            Sign in
          </button>

          <h1>{loginStatus}</h1>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
