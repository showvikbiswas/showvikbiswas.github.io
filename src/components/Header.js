import React from "react";
import "./Header.css";

const Header = ({ category, title, cover }) => {
  return (
    <>
      <div className="blog-header">
        <div className="blog-header-description">
          <div className="category">
            <p>{category}</p>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="date">May 10, 2021</div>
        </div>
        <div className="blog-header-image">
          <img src={cover} className="blog-cover"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
