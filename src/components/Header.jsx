import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineShopping ,AiOutlineUser} from "react-icons/ai";

const Header = ({ modal, setModal, cart}) => {
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

  const ClickHandler = () => {
    setModal(!modal);
  };

  const scrollTop = ()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className={classes}>
      <NavLink to={"/"} >
        <h1 className="title">Marketplace</h1>
      </NavLink>
      <nav className="nav">
        <NavLink to={"/search"}>
            <AiOutlineSearch  className="search-icon" onClick={()=>scrollTop()}/>
        </NavLink>
        <NavLink to={"/login"}>
          <AiOutlineUser className="person-icon" />
        </NavLink>
        <button className="cart" onClick={ClickHandler}>
          <AiOutlineShopping className="cart-logo"/>
          <div className="cart-count">{cart.length}</div>
        </button>
      </nav>
    </div>
  );
};

export default Header;
