import { Tree } from "./Tree";
import { getRandomValue, generateData, DISTRIBUTION, addBins} from "../utils";

export const SvgGroup = ({step}) => {
  const data = generateData(DISTRIBUTION.count);
  const bins = addBins(data)
  const arr = Array.from(Array(data.length).keys());
  // console.log(data)
  return <svg 
    width = {1200}
    height = {400} 
    >

    <g>
      {arr.map((circleNum, i) => (
        <Tree 
          value={getRandomValue()} 
          cx={data[i].initX} 
          cy={data[i].initY} 
          r={data[i].r}
          step={step}
          chartX={data[i].chartX}
          chartY={data[i].chartY}
          key={i}
        />
      ))}
    </g>
  )
  </svg>
}
