import React from "react";

export default function Interest({ data, setData, handleSubmit }) {
  const handleInterest = (isChecked, name) => {
    let intArray = [...data.interest];
    console.log(intArray, isChecked, name);

    if (isChecked) {
      intArray.push(name);
    } else {
      intArray = intArray.filter((int) => int !== name);
    }

    console.log(intArray);
    setData((prev) => ({ ...prev, interest: intArray }));
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={data.interest.includes("coding")}
          onChange={(e) => handleInterest(e.target.checked, "coding")}
        />
        coding
      </label>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleInterest(e.target.checked, "gaming")}
          checked={data.interest.includes("gaming")}
        />
        gaming
      </label>
      <label>
        <input
          type="checkbox"
          checked={data.interest.includes("javascript")}
          onChange={(e) => handleInterest(e.target.checked, "javascript")}
        />
        javascript
      </label>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
