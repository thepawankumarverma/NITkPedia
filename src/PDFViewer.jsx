import React, { useState, useTransition } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./PDFViewer.css"

const PDFViewer = ({ pdfUrl ,button}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDownload, setIsDownload] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <div style={{ margin: "20px auto", width: "80%", position: "relative" }}>
      <div
        onMouseEnter={() => {
          setIsExpanded(true);
        }}
        onMouseLeave={() => {
          setIsExpanded(false);
        }}
        style={{
          border: "1px solid #ddd",
          borderRadius: "25px",
          padding: "0px",

          cursor: "pointer",
          transition: "height 0.5s ease, filter 0.3s ease",
          height: isExpanded ? "600px" : "100px",
          overflow: "hidden",
          width: "100%",
          filter: !isExpanded
            ? "brightness(50%) sepia(1) hue-rotate(100deg) blur(2px)"
            : "",
        }}
      >
        <Worker workerUrl={`pdf.worker.min.js`}>
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>
      <a
      href={pdfUrl}
      download={pdfUrl}
      className="responsive-button"  // Use the class name defined in the CSS file
    >
      {button}
      <i className="fa fa-download"></i>
    </a>
{/* Add this CSS for responsive behavior */}

    </div>
  );
};

export default PDFViewer;
