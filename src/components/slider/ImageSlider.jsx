import { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "./ImageSlider.css";
import { NavLink } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    let next = (current + 1) % slides.length;
    let id = setTimeout(() => setCurrent(next), 3000);
    return () => clearTimeout(id);
  }, [current]);

  //this is a safety net for the data
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <AiOutlineLeft className="left-arrow" onClick={() => prevSlide()} />
      <AiOutlineRight className="right-arrow" onClick={() => nextSlide()} />
      {SliderData.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className={index === current ? "slide active" : "slide"}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-img"
                />
                <div className="slide-info">
                  <h3>{slide.title}</h3>
                  <p>{slide.details}</p>
                  <NavLink to={`/details/${slide.id}`}>
                    <button className="buy-btn">Shop Now</button>
                    <p></p>
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
