import { useEffect, useState, useRef } from "react";

export default function useDebounce(callback,value, delay = 500) {
  const [debounceValue, setDebounceValue] = useState("");
  const timer = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
      callback(debounceValue);
    }, delay);
    return ()=>{clearTimeout(timer)}
  }, [value, delay,debounceValue]);

  return debounceValue;
}


