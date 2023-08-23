import "./Footer.css";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="footer">
      <div className="title-container">
        <h2 className="footer-title">Join our Newsletter</h2>
      </div>
      <div>
        <p className="ft-msg">
          Enjoy 20% your first online purchase and stay up to date on all things
          Marketplace.
        </p>
      </div>
      <div>
        <input
          type="email"
          className="email"
          placeholder="EMAIL ADDRESS"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          className="ft-btn"
          onClick={() => {
            setEmail("");
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Footer;
