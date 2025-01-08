import React, { useState, useEffect } from "react";
import "./LastSlider.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    { name: "Alejandro Houston", text: 'I just wanted to say thank you for making such gorgeous arrangements for our birthday celebration. I couldn’t get over how perfect they were for the party. You did a fantastic job, and I appreciate it very much', job: 'BUSINESSMAN' },
    { name: "Marcus Aurelius", text: 'Your problems are the value you give to them.', job: 'PHILOSOPHER' },

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
    <div id="last-slider">
      <div className="slider-container">
        <div className="slides">
          {slides.map((slide, index) => (
            <div
              className={`slide ${currentIndex === index ? "active" : ""}`}
              key={index}>

              <div className="slide-cont">
                <img src="https://preview.colorlib.com/theme/florist/img/testimonial/quote.png.webp" alt="" srcset="" />
                <p>"{slide.text}"</p>
                <h2>{slide.name}</h2>
                <h4>{slide.job}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="radio-buttons">
          <div onClick={() => handleSlideChange((currentIndex - 1 + slides.length) % slides.length)} className="btn-l">
            <FaChevronLeft />
          </div>
          <div onClick={() => handleSlideChange((currentIndex + 1) % slides.length)} className="btn-r">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
