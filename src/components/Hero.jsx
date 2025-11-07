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
        <img src={hero_head}></img>
        <img src={film_brand}></img>
        <img src={hero_text}></img>

      </div>
    </section>
  );
};

export default Hero;
