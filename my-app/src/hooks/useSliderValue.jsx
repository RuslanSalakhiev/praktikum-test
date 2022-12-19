import { useState } from "react";

export function useSliderValue(initialValue) {
  let [value, setValue] = useState(initialValue);
  
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  }
  
  return [value, setValue, handleSliderChange]
}