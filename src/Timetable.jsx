import React from "react";
import "./Syllabus.css";
import Alert from "./Alert";
import { useState } from "react";
import ImageContainer from "./ImageContainer";
import PDFViewer from "./PDFviewer";

const Timetable = () => {
  const [semester, setSemester] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSemesterChange = (e) => setSemester(e.target.value);
  const semesters = [
    "Select Semester",
    "2nd Semester",
    "4th Semester",
    "6th Semester",
    "8th Semester",
  ];
  const syllabuses = [
    {
      title: "2nd Semester",
      value: (
        <div>
          <PDFViewer pdfUrl='SecondSemester.pdf' button="B-Tech 2nd Semester Calender 2025-26"/>
        </div>
      ),
    },
    {
      title: "4th Semester",
      value: (
        <div>
        <PDFViewer pdfUrl='FourthSemester.pdf'  button="B-Tech 4th Semester Calender 2025-26"/>
      </div>
      ),
    },
    {
      title: "6th Semester",
      value: (
        <div>
        <PDFViewer pdfUrl='SixthSemester.pdf'  button="B-Tech 6th Semester Calender 2025-26"/>
      </div>
      ),
    },
    {
      title: "8th Semester",
      value: (
        <div>
        <PDFViewer pdfUrl='EigthSemester.pdf'  button="B-Tech 8th Semester Calender 2025-26"/>
      </div>
      ),
    },
  ];
  const filteredSyllabus = syllabuses.filter((syllabus) =>
    syllabus.title.toLowerCase().includes(semester.toLowerCase())
  );
  return (
    <>
      {" "}
      {alertVisible && (
        <Alert
          type="error"
          message="Select branch and Semester"
          onClose={() => console.log("Info alert closed!")}
          isVisible={alertVisible}
          setIsVisible={setAlertVisible}
        />
      )}
      <div className="student-selector-container">
        <h2 className="title">Select Your Semester</h2>
        <div className="selector-box">
          <div className="dropdown">
            <label htmlFor="semester">Semester:</label>
            <select
              id="semester"
              value={semester}
              onChange={handleSemesterChange}
            >
              {semesters.map((sem, index) => (
                <option key={index} value={sem}>
                  {sem}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p>
          <strong>Selected Semester:</strong> {semester===""||semester==="Select Semester"?semester:"Looks like our CGPA ( ͡° ͜ʖ ͡°)"}
        </p>
      </div>
      {semester===""||semester==="Select Semester"
        ? syllabuses.map((syllabus) => syllabus.value):filteredSyllabus.map((syllabus) => syllabus.value)
         }
       
      ;
    </>
  );
};

export default Timetable;
