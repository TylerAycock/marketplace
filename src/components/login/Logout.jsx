import { NavLink, useNavigate } from "react-router-dom";
import './Auth.css'

const Logout = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="auth-body">
      <div className="register">
        <h1 className="auth-title">My Account</h1>
        <p className="auth-message">past orders will be stored here for your record</p>
        <div className="btn-group">
             <button className="auth-btn" onClick={()=>{clickHandler()}}>Log Out</button>
             <button className="auth-btn">
            <NavLink to={"/"}>Shop Marketplace</NavLink>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
