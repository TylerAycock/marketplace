import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    const body = {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:5050/register", body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-body">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>
        <form onSubmit={handleSumbit}>
          <div className="sub-group">
            <div className="input-group">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                name="fName"
                id="fName"
                onChange={(e) => {
                  setFName(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="LName">Last Name</label>
              <input
                type="text"
                name="lName"
                id="lName"
                onChange={(e) => {
                  setLName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="sub-group">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Creat Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="btn-group">
            <button type="submit" className="auth-btn">
              Create Account
              {/* <NavLink to={"/"}> Create Acccount</NavLink> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
