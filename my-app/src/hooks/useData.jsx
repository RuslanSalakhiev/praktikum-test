import { useState, useCallback } from "react";
import { generateData, DISTRIBUTION, addBins } from "../utils";

export function useData(initialValue) {
  let [value, setData] = useState(initialValue);

  const generateDatasource  = useCallback(
    () => {
      const genData = generateData(DISTRIBUTION.count);
      addBins(genData)
    
      setData(genData)}, 
    []);
  
  
  return [value, setData, generateDatasource]
}

