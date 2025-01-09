import React from "react";
import "./Syllabus.css";
import Alert from "./Alert";
import { useState } from "react";
import PDFViewer from "./PDFviewer";

const Timetable = () => {
  const [semester, setSemester] = useState("Select Semester");
  const [branch, setBranch] = useState("Select Branch");
  const [alertVisible, setAlertVisible] = useState(false);
  const handleSemesterChange = (e) => setSemester(e.target.value);
  const handleBranchChange = (e) => setBranch(e.target.value);
  const content = [
    { semester: "Select Semester", branches: ["Select Branch"] },
    {
      semester: "2nd Semester",
      branches: [
        "Select Branch",
        "AIDS",
        "AIML",
        "Civil Engineering",
        "Computer Science",
        "ECE",
        "Electrical Engineering",
        "IIOT",
        "IT",
        "M&C",
        "Mechnical Engineering",
        "Microelectronics and VLSI",
        "PIE",
        "RA",
        "SET",
      ],
    },

    {
      semester: "4th Semester",
      branches: [
        "Select Branch",
        "AIML",
        "Civil engineering",
        "Computer Science",
        "ECE",
        "Electrical Engineering",
        "IT",
        "Mechnical Engineering",
        "M&C",
        "PIE",
      ],
    },
    {
      semester: "6th Semester",
      branches: [
        "Select Branch",
        "Civil engineering",
        "Computer Science",
        "Electrical Engineering",
        "IT",
        "Mechnical Engineering",
        "PIE",
      ],
    },
    {
      semester: "8th Semester",
      branches: [
        "Select Branch",
        "Civil engineering",
        "Computer Science",
        "ECE",
        "Electrical Engineering",
        "IT",
        "Mechnical Engineering",
        "PIE",
      ],
    },
  ];
  const branchesContainer = content.filter(
    (item) => item.semester === semester
  );
  const syllabuses = [
    {
      title: "2nd SemesterAIDS",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\AIDS\2ndsemester.pdf"
            button="2nd Semester AIDS"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterAIML",
      value: (
        <div>
          <PDFViewer
            pdfUrl="public\BranchWiseSyllabus\AIML\2ndSemester.pdf"
            button="2nd Semester AIML"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterCivil engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Civilengineering\2ndsemester.pdf"
            button="2nd Semester Civil Eng."
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterComputer science",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Computerscience\2ndsemester.pdf"
            button="2nd Semester CS"
          />
        </div>
      ),
    },
    {
      title: "2nd Semesterece",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\ECE\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester ECE"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesteriiOT",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\IIOT\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester IIOT"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterElectrical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Electricalengineering\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester EE"
          />
        </div>
      ),
    },
    {
      title: "2nd Semesterit",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Informationtechnology\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester IT"
          />
        </div>
      ),
    },
    {
      title: "2nd Semesterm&c",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\M&C\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester M&C"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterMechnical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Mechanicalengineering\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester Mech."
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterMicroelectronics and Vlsi",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\MicroelectronicsandVlsi\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester VLSI"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterPIE",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\PIE\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester PIE"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterRA",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\RA\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester RA"
          />
        </div>
      ),
    },
    {
      title: "2nd SemesterSET",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\SET\2ND-SEMESTER-TT-2024-25.pdf"
            button="2nd Semester SET"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterAIML",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\AIML\4thsemester.pdf"
            button="4th Semester AIML"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterCivil engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Civilengineering\4thsemester.pdf"
            button="4th Semester Civil engineering"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterComputer Science",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Computerscience\4thsemester.pdf"
            button="4th Semester Computer Science"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterECE",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\ECE\4thSemester.pdf"
            button="4th Semester ECE"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterElectrical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Electricalengineering\4thsemester.pdf"
            button="4th Semester Electrical Engineering"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterIT",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Informationtechnology\4thsemester.pdf"
            button="4th Semester IT"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterMechnical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Mechanicalengineering\4thsemester.pdf"
            button="4th Semester Mechnical Engineering"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterM&C",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\M&C\4thsemester.pdf"
            button="4th Semester M&C"
          />
        </div>
      ),
    },
    {
      title: "4th SemesterPIE",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\PIE\4thsemester.pdf"
            button="4th Semester PIE"
          />
        </div>
      ),
    },
    {
      title: "6th SemesterCivil engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Civilengineering\6thsemester.pdf"
            button="6th Semester Civil engineering"
          />
        </div>
      ),
    },
    {
      title: "6th SemesterComputer Science",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Computerscience\6thsemester.pdf"
            button="6th Semester Computer Science"
          />
        </div>
      ),
    },
    {
      title: "6th SemesterElectrical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Electricalengineering\6thsemester.pdf"
            button="6th Semester Electrical Engineering"
          />
        </div>
      ),
    },
    {
      title: "6th SemesterIT",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Informationtechnology\6thsemester.pdf"
            button="6th Semester IT"
          />
        </div>
      ),
    },
    {
      title: "6th SemesterMechnical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Mechanicalengineering\6thsemester.pdf"
            button="6th Semester Mechnical Engineering"
          />
        </div>
      ),
    },
    {
      title: "6th SemesterPIE",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\PIE\6thsemester.pdf"
            button="6th Semester PIE"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterCivil engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Civilengineering\8thsemester.pdf"
            button="8th Semester Civil engineering"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterComputer Science",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Computerscience\8thsemester.pdf"
            button="8th Semester Computer Science"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterECE",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\ECE\8thsemester.pdf"
            button="8th Semester ECE"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterElectrical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Electricalengineering\8thsemester.pdf"
            button="8th Semester Electrical Engineering"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterIT",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Informationtechnology\8thsemester.pdf"
            button="8th Semester IT"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterMechnical Engineering",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\Mechanicalengineering\8thsemester.pdf"
            button="8th Semester Mechanical Engineering"
          />
        </div>
      ),
    },
    {
      title: "8th SemesterPIE",
      value: (
        <div>
          <PDFViewer
            pdfUrl="BranchWiseSyllabus\PIE\8thsemester.pdf"
            button="8th Semester PIE"
          />
        </div>
      ),
    },
  ];
  let x;
  if (semester === "Select Semester" && branch === "Select Branch") {
    x = "Select Semester";
  } else if (semester === "Select Semester") {
    x = branch;
  } else if (branch === "Select Branch") {
    x = semester;
  } else {
    x = semester + branch;
  }

  const filteredSyllabus = syllabuses.filter((syllabus) =>
    syllabus.title.toLowerCase().includes(x.toLowerCase())
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
        <h2 className="title">Select Your Info</h2>
        <text style={{ color: "blue" }}>
          Some timetables have not yet been officially released.
        </text>
        <div className="selector-box">
          <div className="dropdown">
            <label htmlFor="semester">Semester:</label>
            <select
              id="semester"
              value={semester}
              onChange={handleSemesterChange}
            >
              {content.map((item) => (
                <option value={item.semester}>{item.semester}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="selector-box">
          <div className="dropdown">
            <label htmlFor="branch">Branch:</label>
            <select id="branch" value={branch} onChange={handleBranchChange}>
              {branchesContainer[0].branches.map((branch) => (
                <option value={branch} key={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p>
          <strong>Selected Semester:</strong>{" "}
          {semester === "" || semester === "Select Semester"
            ? semester
            : "Looks like our CGPA ( ͡° ͜ʖ ͡°)"}
        </p>
      </div>
      {semester === "" || semester === "Select Semester"
        ? syllabuses.map((syllabus) => syllabus.value)
        : filteredSyllabus.map((syllabus) => syllabus.value)}
      ;
    </>
  );
};

export default Timetable;
