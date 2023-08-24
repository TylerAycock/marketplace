import ProductCard from "./cards/ProductCard";
import "./Home.css";
import ImageSlider from "./slider/ImageSlider";
import { SliderData } from "./slider/SliderData";
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = ({ mens, refresh, setRefresh }) => {
  const productList = mens.map((item) => {
    return <ProductCard key={item.id} item={item} />;
  });

  const scrollTop = ()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <ImageSlider
        slides={SliderData}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <div className="ethos-container">
        <img
          src="https://cdn.shopify.com/s/files/1/0008/6156/9085/files/Sun-Ray.svg?v=1614724830"
          alt="sun logo"
        />
        <div className="msg-container">
          <div className="ind-msg">
            <h3>Handmade Quality</h3>
            <p>
              We utilize the highest-quality materials to create producs that
              stands the test of time.
            </p>
          </div>
          <div className="ind-msg">
            <h3>Modern Classic Style</h3>
            <p>
              We create prodcuts that defies trends with timeless aesthetics and
              premium fits.
            </p>
          </div>
          <div className="ind-msg">
            <h3>Made in the USA</h3>
            <p>
              We are inspired by the people, terrain, and freedom of the USA -
              and it comes through in all our designs.
            </p>
          </div>
        </div>
      </div>
      <div className="prod-container">
        <h2>Best Sellers</h2>
        <NavLink to={"/search"} className="shop" onClick={()=> scrollTop()}>
          <h3>Shop All</h3>
          <AiOutlineArrowRight />
        </NavLink>
        <div className="prods">{productList}</div>
      </div>
      ;
    </>
  );
};

export default Home;
