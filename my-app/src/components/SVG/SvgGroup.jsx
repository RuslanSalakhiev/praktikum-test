import { generateData, DISTRIBUTION, addBins, TREEGROUP} from "../../utils";
import { useEffect, useState } from "react";

import { Tree } from "./Tree";
import {Axis} from './Axis'
import { DistributionLine } from "./DistributionLine";


export const SvgGroup = ({step}) => {

  let [data, setData] = useState([]);

  // генерация данных
  useEffect(() => {
    const genData = generateData(DISTRIBUTION.count);
    addBins(genData)
   
    setData(genData)
  }, []);
  
  const isSecondStep = step === 1;
  const arr = Array.from(Array(data.length).keys());

  return <svg 
    width = {TREEGROUP.width}
    height = {TREEGROUP.height} 
    >

    <g>
      {arr.map((circleNum, i) => (
        <Tree 
          value={data[i].value} 
          cx={data[i].initX} 
          cy={data[i].initY} 
          r={data[i].r}
          step={step}
          chartX={data[i].chartX}
          chartY={data[i].chartY}
          key={i}
          index={i}
        />
      ))}

    </g>
    {isSecondStep ? <Axis/> : null }
    {isSecondStep ? <DistributionLine/> : null }
    
    
  )
  </svg>
}
