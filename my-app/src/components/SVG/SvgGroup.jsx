import { TREEGROUP} from "../../utils";

import { Tree } from "./Tree";
import { Axis } from './Axis'
import { DistributionLine } from "./DistributionLine";

import { useRef } from "react";

export const SvgGroup = ({step, data}) => {

 
  const isSecondStep = step === 1;
  
  const arr = useRef(Array.from(Array(data.length).keys()))
  console.log(arr)
  return <svg 
    width = {TREEGROUP.width}
    height = {TREEGROUP.height} 
    >
      
    <g>
      {arr.current.map((circleNum, i) => {
        return <Tree 
          value={data[i].value} 
          cx={data[i].initX} 
          cy={data[i].initY} 
          r={data[i].r}
          step={step}
          chartX={data[i].chartX}
          chartY={data[i].chartY}
          key={i}
          index={i}
        />}
      )}

    </g>
    {isSecondStep ? <Axis/> : null }
    {isSecondStep ? <DistributionLine/> : null }
    
    
  )
  </svg>
}
