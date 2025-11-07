import React from "react";
import hero_image from "../assets/hero_image.png";
import hero_logo from "../assets/logo.png";
import hero_head from "../assets/home_heading.png";
import film_brand from "../assets/film_brand.png";
import hero_text from "../assets/home_text.png";



import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="home-container">
      <div className="hero-container">
        <div className="hero-image">
          {/* Main background image */}
          <img src={hero_image} alt="Hero Background" className="main-img" />

          {/* Centered overlay logo */}
          <img src={hero_logo} alt="Centered Logo" className="center-logo" />
        </div>
      </div>
      <div className="home-right">
        <img src={hero_head} className="heading1"></img>
        <p className="heading2">Films . Brands . Art</p>
        <p className="hero-text">Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
V doesn’t just tell stories - V honors them.</p>

      </div>
    </section>
  );
};

export default Hero;
