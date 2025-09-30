import React from "react";
import "./Home.css";
import bannerImg from "../assets/Banner.png";
import child from "../assets/child.png";

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImg} alt="Banner" />
      </div>

      {/* Bottom Section with 3 parallel divs */}
      <div className="bottom-section">
        <div className="card">
          <img src={child} alt="Card 1" />
        </div>
        <div className="card">
          <img src={child} alt="Card 2" />
        </div>
        <div className="card">
          <img src={child} alt="Card 3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
