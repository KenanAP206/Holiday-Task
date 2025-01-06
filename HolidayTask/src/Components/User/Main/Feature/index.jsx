import React from "react";
import "./Feature.css";

const App = () => {
  const cards = [
    {
      title: "Fresh Flower",
      items: 25,
      image: "https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg.webp",
    },
    {
      title: "Succulent plants",
      items: 162,
      image: "https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg.webp",
    },
    {
      title: "Cactus plants",
      items: 58,
      image: "https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg.webp",
    },
    {
      title: "Furniture tree",
      items: 25,
      image: "https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp",
    },
  ];

  return (
    <section id="feature">
          <div className="app">

      <div className="features">
      <div className="feat-l">
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png.webp" alt="" />
      </div>
        <div className="feature">
            <div className="feat-r">
            <h3>100% Freshness</h3>
            <p>Most people are unaware of the less common flower</p>
            </div>
        </div>
      <div className="feat-l">
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png.webp" alt="" />
      </div>
        <div className="feature">
            <div className="feat-r">
            <h3>Made by artist</h3>
            <p>Most people are unaware of the less common flower</p>
            </div>
        </div>
      <div className="feat-l">
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png.webp" alt="" />
      </div>
        <div className="feature">
            <div className="feat-r">
            <h3>Own courier</h3>
            <p>Most people are unaware of the less common flower</p>
            </div>
        </div>
      <div className="feat-l">
        <img src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png.webp" alt="" />
      </div>
        <div className="feature">
            <div className="feat-r">
            <h3>100% Freshness</h3>
            <p>Most people are unaware of the less common flower</p>
            </div>
        </div>
      </div>


      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-text">
            <h4>{card.title}</h4>
            <p>({card.items} items)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default App;
