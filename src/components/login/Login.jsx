import "./Auth.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email.trim(),
      password: password,
    };
    console.log(user);
    axios
      .post("http://localhost:5050/login", user)
      .then((res) => {
        if (res.data === "this email is not in our records") {
          alert(res.data);
        } else {
          localStorage.setItem("userTokern", res.data);
          console.log("user confirmed and token now in local storage!");
          setToken(res.data);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("failure sending to server");
        console.log(err);
      });
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p className="auth-message">
          Welcome back! Please sign in using your email address and password
          below
        </p>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span className="msg">Valid Email</span>
          </div>
          <div className="input-group">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="msg">Incorrect Password</span>
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
        <button className="auth-btn">
          <NavLink to={"/register"}>Register</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Login;
