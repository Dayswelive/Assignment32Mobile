import React from "react";
import Navbar from "./components/Navbar";
import TrendingNow from "./components/TrendingNow";
import HeroSection from "./components/HeroSection";
import BigStories from "./components/BigStories";
import FeaturedNews from "./components/FeaturedNews";
import CountryGrid from "./components/CountryGrid";

import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <TrendingNow />
        <main className="main-content">
          <div className="top-section">
            <HeroSection />
            <BigStories />
          </div>
          <FeaturedNews />
          <CountryGrid />
        </main>
      </div>
    </>
  );
};

export default App;
