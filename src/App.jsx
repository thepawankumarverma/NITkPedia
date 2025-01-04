import React from "react";
import "./App.css";
import ClickableContainer from "./ClickableContainer";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    {
      title: "timetable",
      value: (
        <ClickableContainer
          title="Time-Table"
          imageUrl="public/Artboard 2 (2).png"
          description="No fear of the timetable, we're just waiting for the holidays!"
          link="/timetable"
        />
      ),
    },
    {
      title: "calendar",
      value: (
        <ClickableContainer
          title="Calendar"
          imageUrl="public\Artboard 1.png"
          description="Check the holidays in the calendar, forget the syllabus!"
          link="/calendar"
        />
      ),
    },
    {
      title: "Syllabus",
      value: (
        <ClickableContainer
          title="Syllabus"
          imageUrl="public/rb_1167.png"
          description="Check the syllabus, then sleep in peace!"
          link="/syllabus"
        />
      ),
    },
    {
      title: "upcoming exam datesheet",
      value: (
        <ClickableContainer
          title="Upcoming Exam Datesheet"
          imageUrl="public\rb_2754.png"
          description="Exam datesheet: The ultimate plot twist your semester needed!"
          link="/datesheet"
        />
      ),
    },
    {
      title: "NIT Market Vendors Contacts",
      value: (
        <ClickableContainer
          title="NIT Market Vendors Contacts"
          imageUrl="public/rb_505.png"
          description="The only place where you'll find snacks, study material, and a lot of last-minute excuses! "
          link="/nitmarket"
        />
      ),
    },
    {
      title: "erickshaw Driver Contacts",
      value: (
        <ClickableContainer
          title="E-Rickshaw Driver Contacts"
          imageUrl="public/rb_20041.png"
          description="Masters of navigating NIT traffic,and always eager to explore the shortest route to your destination!"
          link="/erickshaw"
        />
      ),
    },
    {
      title: "Miscellaneous",
      value: (
        <ClickableContainer
          title="Miscellaneous"
          imageUrl="public/rb_1523.png"
          description="Looking for something else?"
          link="miscellaneous"
        />
      ),
    },
  ];
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div className="app-container">
        <div
          style={{
            flexBasis: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
        </div>

        {searchQuery
          ? filteredItems.map((item) => item.value)
          : items.map((item) => item.value)}
      </div>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/datesheet" element={<Datesheet />} />
          
        </Route>
      </Routes>
    </BrowserRouter> */}

      {/* 
   <Routes>
  
  <Route path="miscellaneous" element={<Miscellaneous />} />



</Routes> */}
    </div>
  );
}
