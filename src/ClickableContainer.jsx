import React from "react";
import { Link } from "react-router";
import "./ClickableContainer.css";
const ClickableContainer = ({ title, imageUrl, description, link }) => {
  return (<>
    
      <Link to={link}
        className="container"
       
        rel="noopener noreferrer"
      >
        <div className="content">
          <div className="image-wrapper">
            <img src={imageUrl} alt={title} />
            <h3 className="overlay-text2">{title}</h3>
            <p className="overlay-text">{description}</p>
          </div>
        </div>
      </Link>
     
    </>
  );
};
export default ClickableContainer;