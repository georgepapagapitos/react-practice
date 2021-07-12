import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);

    }
  };

  const zero = () => {
    setCount(0);
  };

  return {
    count, setCount, increase, decrease, zero
  }
};

export const useField = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    type,
    value,
    onChange
  };
};