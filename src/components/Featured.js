import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Featured.css";
import FeaturedPhoto from "../assets/featured.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Featured = () => {
  const [featuredText, setFeaturedText] = useState(
    "A fairly large rugged country lies at the heart of the Himalayas. Two long years have passed, and yet my heart refuses to come back..."
  );

  const changeFeaturedText = () => {
    if (window.innerWidth <= 500) {
      setFeaturedText(
        "A fairly large rugged country lies at the heart of the Himalayas..."
      );
    } else {
      setFeaturedText(
        "A fairly large rugged country lies at the heart of the Himalayas. Two long years have passed, and yet my heart refuses to come back..."
      );
    }
  };
  window.addEventListener("resize", changeFeaturedText);
  return (
    <div className="featured">
      <div className="featured-container">
        <div className="featured-text-container">
          <h2>Nepal</h2>
          <p>{featuredText}</p>

          <Link to="/blog/nepal" className="btn">
            Read More
          </Link>
        </div>
        <div className="featured-photo-container">
          <img src={FeaturedPhoto} className="featured-photo"></img>
        </div>
      </div>
    </div>
  );
};

export default Featured;
