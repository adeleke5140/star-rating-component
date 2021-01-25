import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const createArray = length => [...Array(length)];

function App() {
  return <StarRating style={{ backgroundColor: "blue" }} 
          onDoubleClick={e =>alert("double click")}
  />;
}

function StarRating(style = {}, { totalStars = 5 }, ...props) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div syle={{ padding: 5, ...style, ...props }}>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  );
}

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default App;
