import { NavLink } from "react-router-dom";
import cart from "../assets/cart.png";
import search from "../assets/search.png";
import person from "../assets/person.png";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 5 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const classes = `nav-bar ${sticky}`;

  return (
    <div className={classes}>
      <NavLink to={"/"}>
        <h1 className="title">Fake Store</h1>
      </NavLink>
      <nav>
        <NavLink to={'/search'}>
          <img src={search} alt="serach icon" className="search-icon" />
        </NavLink>
        <NavLink>
          <img src={person} alt="person icon" className="person-icon" />
        </NavLink>
        <NavLink to={"/cart"}>
          <img src={cart} alt="shopping cart" className="cart-logo" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
