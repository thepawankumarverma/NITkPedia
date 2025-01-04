import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Developers from "./Developers";

const SearchBar = ({ query, setQuery }) => {
  const [placeholder, setPlaceholder] = useState("");
  const placeholderText = "Searching ¯\_(ツ)_/¯ Let me grab my Sherlock hat!";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typePlaceholder = () => {
      if (currentIndex < placeholderText.length-1) {
        setPlaceholder((prev) => prev + placeholderText[currentIndex]);
        currentIndex++;
        timeoutId = setTimeout(typePlaceholder, typingSpeed);
      }
    };

    typePlaceholder();

 
    return () => clearTimeout(timeoutId);
  }, []);

  const [isHover,setIsHover]=useState(false);
  const[isDHover,setDHover]=useState(false);
  return (<>
  <div className="container1">
    
  <div className="developed" onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}><i class="fa fa-code " style={{ margin:"7px"}}></i></div>
   <Developers isHover={isHover} setisHover={{setIsHover}} isDHover={isDHover} setDHover={setDHover}  ></Developers>
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {console.log(placeholder)}
      {query && (
        <button className="clear-button" onClick={() => setQuery("")}>
          ✕
        </button>
      )}
      
    </div>
    
    </div>
    </>
  );
};

export default SearchBar;
