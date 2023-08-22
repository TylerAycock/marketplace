import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const navigate = useNavigate();
  const [validNewEmail, setValidNewEmail]= useState(true)
  const [validNewPass, setValidNewPass] = useState(false)

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
        if(res.data === 'email already on file'){
          setValidNewEmail(false)
        }
        localStorage.setItem("userToken", res.data);
        console.log("user REGISTERED and token now in local storage!");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-body">
      <div className="register">
        <form onSubmit={handleSumbit}>
          <div className="input-group">
            <div className="ind-input">
            <label htmlFor="fName">First Name:</label>
            <input type="text" name="fName" id="fName" onChange={e=>{setFName(e.target.value)}}/>
            </div>
            <div className="ind-input">
            <label htmlFor="lName">Last Name:</label>
            <input type="text" name="lName" id="lName" onChange={e=>{setLName(e.target.value)}}/>
            </div>
          </div>
        <div className="input-group">
          <div className={validNewEmail? "ind-input" : "ind-input error"}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" onChange={e=>{
              setEmail(e.target.value)
              setValidNewEmail(true)
              }}/>
            <span className="msg">Email Already Registered</span>
            </div>
            <div className="ind-input">
            <label htmlFor="password">Password:</label>
            <input type="password" id="passowrd" name="password" onChange={e=>{setPassword(e.target.value)}} />
            <span className="pass-msg">Make sure to use a strong password. Eight characters minimum!</span>
            </div>
        </div>
          <button type="submit" className="auth-btn register-btn" >Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;