import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(() => {
    const counterValue = +localStorage.getItem("counter");
    if (!counterValue) {
      localStorage.setItem("counter", "0");
      return 0;
    }
    return counterValue;
  });

  const handleInc = () => {
    setCounter(counter + 1);
    localStorage.setItem("counter", ` ${counter + 1}`);
  };
  const handleDec = () => {
    setCounter(counter - 1);
    localStorage.setItem("counter", ` ${counter - 1}`);
  };
  return (
    <div>
      {counter}
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
}
