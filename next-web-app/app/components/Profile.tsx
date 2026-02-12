import React from "react";

export default function Profile({ data, setData }) {
  const { name, email } = data;
  const handleChange = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          onChange={(e) => handleChange("name", e.target.value)}
          value={name}
          type="text"
        ></input>
      </div>
      <div>
        <label>Email: </label>
        <input
          onChange={(e) => handleChange("email", e.target.value)}
          value={email}
          type="text"
        ></input>
      </div>
    </div>
  );
}
