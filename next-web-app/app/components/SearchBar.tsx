import React, { useState } from "react";

export default function SearchBar() {
  const [progress, setProgress] = useState(100);
  const handleChange = (e) => {
    setProgress(e.target.value);
  };
  return (
    <div>
      <input value={progress} type="number" min={0} max={100} onChange={handleChange} />
      <br></br>
      <div className="parent-div">
        <div style={{ width: `${progress}%` }} className="search-div"></div>
      </div>
    </div>
  );
}
