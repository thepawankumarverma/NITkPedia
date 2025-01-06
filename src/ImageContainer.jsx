import React from "react";
import "./ImageContainer.css";

const ImageContainer = ({ imageUrl, caption }) => {
  return (
    <div className="image-container">
      <img src={imageUrl} alt={caption || "Image"} className="image" />
      {caption && <div className="caption">{caption}</div>}
    </div>
  );
};

export default ImageContainer;
