import { useState } from "react";
import { SliderData } from "./SliderData";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./ImageSlider.css";
import { NavLink } from "react-router-dom";

const ImageSlider = ({ slides, refresh ,setRefresh}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  setTimeout(()=> {
    nextSlide()
  }, 4000)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //this is a safety net for the data
  if (!Array.isArray(slides) || slides.length <= 0) {
    return;
  }

  return (
    <section className="slider">
      <AiOutlineLeft className="left-arrow" onClick={() => prevSlide()} />
      <AiOutlineRight className="right-arrow" onClick={() => nextSlide()} />
      {SliderData.map((slider, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
                <div className="ft-product" style={{ backgroundImage: `url(${slider.image})` }}>
                  <div className="ft-info">
                    <h3>{slider.title}</h3>
                    <p>{slider.details}</p>
                    <NavLink to={`/details/${slider.id}`}>
                      <button className="buy-btn">Shop Now</button>
                    </NavLink>
                  </div>
                </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
