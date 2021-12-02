import { useState } from "react";

export const useToggle = (currentValue = false) => {
  const [value, setValue] = useState(currentValue);

  return {
    value,
    onToggle: () => setValue(!value),
    onUnset: () => setValue(false),
    onSet: () => setValue(true),
  };
};
