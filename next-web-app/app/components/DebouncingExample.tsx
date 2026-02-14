import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function DebouncingExample() {
  const [inputValue, setInputValue] = useState();
  const debounce = useDebounce(inputValue, 1000);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setDebounce(inputValue);
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [inputValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      {debounce}
    </div>
  );
}
