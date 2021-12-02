import { useState } from "react";

export const useInput = (currentValue = "") => {
  const [value, setValue] = useState(currentValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue("");
  };

  return [value, handleChange, resetValue];
};
