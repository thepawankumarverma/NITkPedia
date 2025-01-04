import React, { useState,useEffect } from "react";
import "./Alert.css";

const Alert = ({
  type = "info",
  message,
  onClose,
  isVisible,
  setIsVisible,
}) => {
    useEffect(() => {
        // Update the state after 3 seconds
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 1500);
       
      }, []); 

  

  return (
    <div className="fade-out-container">
    <div className="alert-container">
      <div className={`alert alert-${type}`}>
        <span className="alert-message"><i className="fa fa-check"></i>{message}</span>
        {/* <button className="alert-close" onClick={handleClose}>
          ×
        </button> */}
      </div>
    </div>
    </div>
  );
};

export default Alert;
