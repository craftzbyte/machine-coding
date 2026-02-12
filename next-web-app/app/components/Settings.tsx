import React from "react";

export default function Settings({ data, setData }) {
  const handleSelection = (e) => {
    setData((prev) => ({ ...prev, theme: e.target.value }));
  };
  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          checked={data.theme === "light"}
          value="light"
          onChange={handleSelection}
        />
        Light
      </label>
      <label>
        <input
          type="radio"
          checked={data.theme === "dark"}
          name="theme"
          value="dark"
          onChange={handleSelection}
        />
        dark
      </label>
    </div>
  );
}
