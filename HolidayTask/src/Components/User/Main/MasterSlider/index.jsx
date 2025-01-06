import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    { title: "Fresh Flower & Gift Shop",text: 'Making beautiful flowers a part of your life.', image: "https://preview.colorlib.com/theme/florist/img/hero/hero-1.jpg.webp" },
    { title: "Fresh Flower & Gift Shop",text: 'Making beautiful flowers a part of your life.', image: "https://preview.colorlib.com/theme/florist/img/hero/hero-2.jpg.webp" },

  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(timer); 
}, [slides.length]);

  return (
    <div className="slider-container">
    <div className="slides">
      {slides.map((slide, index) => (
        <div
          className={`slide ${currentIndex === index ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
            <div className="slide-cont">
            <h2>{slide.title}</h2>
          <p>{slide.text}</p>
          <button className="sld-btn">SHOP NOW</button>
            </div>
        </div>
      ))}
    </div>

    <div className="radio-buttons">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`radio-button ${currentIndex === index ? "active" : ""}`}
          onClick={() => handleSlideChange(index)}
        >
          <div className="sld-btn-in"></div>
        </button>
      ))}
    </div>
  </div>
  );
};

export default Slider;
