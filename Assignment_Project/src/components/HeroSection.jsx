import React from "react";
import heroImage from "../assets/image.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={heroImage} alt="Chitkara University" className="hero-image" />
      <div className="hero-text">
        <h1>Chitkara University MBA Admission Open; </h1>
        <h1> Check Direct List...</h1> <p>20 Sep 2023, 8:00pm</p>
        <p>
          New Delhi: The State Common Entrance Test Cell, Government of
          Maharashtra, has issued the admit cards...
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
