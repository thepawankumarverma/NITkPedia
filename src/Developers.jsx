import React from 'react'
import './Developers.css'
const Developers = ({isHover,setisHover,isDHover,setDHover}) => {
  return (
    <div onMouseEnter={()=>setDHover(true)} onMouseLeave={()=>setDHover(false)}>
      <div className="developer-container" style={{
              opacity: (isHover||isDHover) ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              visibility: (isHover||isDHover )? "visible" : "hidden", 
            }} >
  <div className="developer-image">
   
  </div>
  <div className="developer-info">
    <h2>About the Developer</h2>
    <p>
      Hi, I'm <u>Pawan Kumar Verma</u>, a passionate Second Year Student in NIT KKR with a keen interest for creating engaging and functional websites. 
      
    </p>
    <p>
      <b>Connect with me: </b>
      <a href="https://github.com/thepawankumarverma" target="_blank">GitHub</a> | 
      <a href="https://www.linkedin.com/in/pawan-kumar-verma-804704308/" target="_blank">LinkedIn</a>
    </p>
  </div>
</div>
    </div>
  )
}

export default Developers
