import "./Auth.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h1 className="auth-title">Login</h1>
        <p>
          Welcome back! Please sign in using your email address and password
          below
        </p>
        <form onSubmit={submitHandler}>
          <div className="input-group success">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <span className="msg">Valid Email</span>
          </div>
          <div className="input-group error">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
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
      <div>
        <h1>New Customer</h1>
        <p>
          create an account to check out faster in the future and receive emails
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
