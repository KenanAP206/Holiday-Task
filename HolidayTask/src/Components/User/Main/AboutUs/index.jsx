import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import './style.css'
const AboutUs = () => {
  return (
    <section id='aboutus'>
        <div className="about-up">
            <div className="ab-up-l">
                <h3>ABOUT US</h3>
                <p>We provide all kinds of fresh flower services</p>
            </div>
            <div className="ab-up-r">
                <p>For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials and ornamental grasses to supply her studio.</p>
            </div>
        </div>
        <div className="about-low">
            <div className="ab-lo-l">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FaCirclePlay /></a>
            </div>
            <div className="ab-lo-r">
                <h3>Slow Flowers’ Floral Insights</h3>
                <h2>Dried flowers are having a renaissance</h2>
                <p>This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to “extend the season” beyond the last frost.</p>
                <button>CONTACT US</button>
            </div>
        </div>
    </section>
  );
};

export default AboutUs;