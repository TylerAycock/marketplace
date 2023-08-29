import "./Auth.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from "./Logout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [validEmail, setValidEmail] = useState(true);
  const [validPass, setValidPass] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email.trim(),
      password: password,
    };
    axios
      .post("http://localhost:5050/login", user)
      .then((res) => {
        if (res.data === "invalid email or password") {
          setValidEmail(false);
          setValidPass(false);
        } else if (res.data === "invalid password") {
          setValidPass(false);
        } else if (res.data === "invalid email and password") {
          setValidEmail(false);
        } else {
          localStorage.setItem("userToken", res.data);
          console.log("user confirmed and token now in local storage!");
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("failure sending to server");
        console.log(err);
      });
  };

  return localStorage.getItem("userToken") ? (
    <Logout />
  ) : (
    <div className="auth-body">
      <div className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p className="auth-message">
          Welcome back! Please sign in using your email address and password
          below
        </p>
        <form onSubmit={submitHandler}>
          <div className={validEmail ? "input-group" : "input-group error"}>
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setValidEmail(true);
              }}
            />
            <span className="msg">Invalid Email</span>
          </div>
          <div className={validPass ? "input-group " : "input-group error"}>
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setValidPass(true);
              }}
            />
            <span className="msg">Invalid Pass</span>
          </div>
          <div className="btn-group">
            <button className="auth-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="auth-container new-user">
        <h1 className="auth-title">New Customer</h1>
        <p className="auth-message">
          Create an account to check out faster in the future and receive emails
          about your orders, new products, events and special offers!
        </p>
        <NavLink to={"/register"}>
          <button className="auth-btn reg-btn"> Register</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
