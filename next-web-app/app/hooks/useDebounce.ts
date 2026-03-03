import { useEffect, useState } from "react";

export const useDebounce = (inputs = "", delay = 300) => {
  const [value, setvalue] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setvalue(inputs);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [inputs, delay]);
  return value;
};
