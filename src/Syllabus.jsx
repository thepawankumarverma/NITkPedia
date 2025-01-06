import React from 'react'
import Underconstruction from './Underconstruction';
// import "./Syllabus.css"
// import Alert from "./Alert"
// import { useState } from 'react'
// import ImageContainer from "./ImageContainer";

const Syllabus = () => {
//   const [semester, setSemester] = useState("");
//   const [branch, setBranch] = useState("");
//  const [alertVisible, setAlertVisible] = useState(false);
//   const handleSemesterChange = (e) => setSemester(e.target.value);
//   const handleBranchChange = (e) => setBranch(e.target.value);
// const handleSumbit=()=>{
//   if(semester && branch && semester!=="Select Semester" && branch!=="Select Branch"){
//     console.log("Selected");

//   }
//   else{
//      setAlertVisible(true);
//   }
// }
//   const semesters = [
//     "Select Semester",
//     "1st Semester",
//     "2nd Semester",
//     "3rd Semester",
//   ];

//   const branches = [
//     "Select Branch",
//     "Computer Science",
//     "Electronics",
//     "Mechanical",
//     "Civil",
//     "Electrical",
//     "Chemical",
//     "IT",
//   ];
//   const syllabuses=[{
//     title:"1st Semester",
//     value:"Pawan"
//   },
//   {title:"2nd Semester",
//   value:"PUja"
// }]
// const filteredSyllabus=syllabuses.filter((syllabus)=>syllabus.title.toLowerCase().includes(semester.toLowerCase()));
  return (
  //  <> {alertVisible && (
  //     <Alert
  //       type="error"
  //       message="Select branch and Semester"
  //       onClose={() => console.log("Info alert closed!")}
  //       isVisible={alertVisible}
  //       setIsVisible={setAlertVisible}
  //     />
  //   )}
  //   <div className="student-selector-container">
  //     <h2 className="title">Select Your Details</h2>
  //     <div className="selector-box">
  //       <div className="dropdown">
  //         <label htmlFor="semester">Semester:</label>
  //         <select
  //           id="semester"
  //           value={semester}
  //           onChange={handleSemesterChange}
  //         >
  //           {semesters.map((sem, index) => (
  //             <option key={index} value={sem}>
  //               {sem}
  //             </option>
  //           ))}
  //         </select>
  //       </div>
  //       <div className="dropdown">
  //         <label htmlFor="branch">Branch:</label>
  //         <select id="branch" value={branch} onChange={handleBranchChange}>
  //           {branches.map((br, index) => (
  //             <option key={index} value={br}>
  //               {br}
  //             </option>
  //           ))}
  //         </select>
  //       </div>
  //     </div>
  //     <div className="selected-details">
  //       <p>
  //         <strong>Selected Semester:</strong> {semester || "None"}
  //       </p>
  //       <p>
  //         <strong>Selected Branch:</strong> {branch || "None"}
  //       </p>
  //     </div>
  //     <button className='submit-button' onClick={handleSumbit}>Sumbit</button>
  //   </div>
  //   <div>
  //     <h1>Attractive Image Container</h1>
  //     <ImageContainer
  //       imageUrl="https://via.placeholder.com/300"
  //       caption="A beautiful placeholder image"
  //     />
  //   </div>
  //   {(branch && semester)?filteredSyllabus.map((syllabus)=>syllabus.value):syllabuses.map((syllabus)=>syllabus.value)};
  //   </>
  <>
  <Underconstruction></Underconstruction>
  </>);
  
}

export default Syllabus
