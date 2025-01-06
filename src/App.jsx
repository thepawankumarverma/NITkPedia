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
          imageUrl="timetable.png"
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
          imageUrl="calendar.png"
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
          imageUrl="syllabus.png"
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
          imageUrl="exam.png"
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
          imageUrl="market.png"
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
          imageUrl="erickshaw.png"
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
          imageUrl="question.png"
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
    </div>
  );
}
