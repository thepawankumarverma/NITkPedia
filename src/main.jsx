import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Calendar from "./Calendar.jsx";
import Syllabus from "./Syllabus";
import Erickshaw from "./Erickshaw";
import Datesheet from "./Datesheet";
import Miscellaneous from "./Miscellaneous";
import Timetable from "./Timetable";
import NitMarket from "./NitMarket";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    {" "}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        <Route path="/nitmarket" element={<NitMarket />} />
        <Route path="/erickshaw" element={<Erickshaw />} />
        <Route path="/datesheet" element={<Datesheet />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
