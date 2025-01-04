import React, { useState, useTransition } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({ pdfUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDownload,setIsDownload]=useState(false)

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
            border: '1px solid #ddd',
            borderRadius: "25px",
            padding: '0px',
            position: 'absolute',
            cursor: 'pointer',
            transition: 'height 0.5s ease, filter 0.3s ease', 
            height: isExpanded ? '600px' : '100px',
            overflow: 'hidden',
            width: "100%",
            filter: !isExpanded 
                ? "brightness(50%) sepia(1) hue-rotate(100deg) blur(2px)" 
                : "" 
        }}
      >
        <Worker workerUrl={`/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfUrl} />
        </Worker>
      </div>
      <a
  href={pdfUrl}
  download="document.pdf"
  style={{
    textDecoration: "none",
    padding: "12px 24px",
    color: "#fff",
    borderRadius: "30px", // More rounded for modern look
    fontSize: "16px",
    fontWeight: "600",
    textTransform: "uppercase", // Uppercase text for a modern feel
    letterSpacing: "1px", // Slight spacing for clean look
    cursor: "pointer",
    position: "absolute",
    left: "50%", // Center horizontally
    transform: "translate(-50%, 100%)", // Fine-tune the centering
    zIndex: "3",
    transition: "all 0.3s ease-in-out", 
    background: "linear-gradient(45deg,  #1eff2d 30%,#00eaff )", 
  
   // Smooth transitions for effects
  }}
 
  
>
    Academics Calendar 
<i className="fa fa-download" style={{marginLeft:"10px"}}></i>
</a>
    </div>
  );
};

export default PDFViewer;
