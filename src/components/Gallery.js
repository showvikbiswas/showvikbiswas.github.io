import React from "react";
import "./Gallery.css";
import ImageGallery from "react-image-gallery";
import Featured from "../images/featured.jpg";

const Gallery = ({ items, subdir }) => {
  const images = [];

  for (let index = 1; index <= items; index++) {
    images.push({
      original: process.env.PUBLIC_URL + "/" + subdir + "/" + index + ".jpg",
    });
  }
  return (
    <div>
      <ImageGallery items={images} showThumbnails={false} />
    </div>
  );
};

export default Gallery;
