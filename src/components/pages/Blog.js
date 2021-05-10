import React from "react";
import "./Blog.css";
import Footer from "../Footer";
import Featured from "../Featured";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-container">
        <Featured />
        <p>More stuff soon. Stay tuned!</p>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
