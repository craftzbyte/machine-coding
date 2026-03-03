import React, { useEffect, useReducer, useRef, useState } from "react";

const OTP_DIGITS = 4;

export default function OTPInput() {
  const [inputArr, setInpurtArr] = useState(new Array(OTP_DIGITS).fill(""));
  const ref = useRef([]);
  const handleInputChange = (value, targetIndex) => {
    console.log(value, targetIndex);
    const newAr = [...inputArr];
    const nvalue = value.trim();
    newAr[targetIndex] = nvalue.slice(-1);
    if (nvalue) ref.current[targetIndex + 1]?.focus();
    setInpurtArr(newAr);
  };
  const handleOnkeyDown = (e, targetIndex) => {
    if (!(e.key === "Backspace")) return;
    if (!e.target.value) ref.current[targetIndex - 1].focus();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        height: "100px",
        flexDirection: "column",
        padding: "100px",
      }}
    >
      <h1>OTP INPUT</h1>
      <div style={{ margin: "10px" }}>
        {inputArr.map((value, index) => {
          return (
            <input
              onKeyDown={(e) => {
                handleOnkeyDown(e, index);
              }}
              ref={(input) => {
                ref.current[index] = input;
              }}
              onChange={(e) => {
                handleInputChange(e.target.value, index);
              }}
              value={inputArr[index]}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
