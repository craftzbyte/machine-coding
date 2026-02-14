import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function USECALLBACKEX() {
  const [state, setState] = useState(0);

  const someFunction = useCallback(() => {
    console.log("hahahah");
  }, []);
  return (
    <div>
      {state}
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        +
      </button>
      <Child func={someFunction} />
    </div>
  );
}
