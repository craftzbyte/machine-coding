import { useEffect, useState } from "react";

const useDebounce = (text, time) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setDebounce(text);
      },
      typeof +time === "number" ? time : 1000,
    );
    return () => {
      clearTimeout(timer);
    };
  }, [text, time]);

  return debounce;
};
export default useDebounce;
