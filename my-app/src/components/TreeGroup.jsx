import { Tree } from "./Tree";
import { getGridX, getGridY, getRandomValue} from "../utils";

const SQUARE_SIZE = 6;

export const TreeGroup = ({treeCount, distance, r, step}) => {
  const arr = Array.from(Array(treeCount).keys());
  return (
    <g>
      {arr.map((circleNum, i) => (
        <Tree 
          value={getRandomValue()} 
          cx={getGridX(i, distance, SQUARE_SIZE)} 
          cy={getGridY(i, distance, SQUARE_SIZE)} 
          r={r}
          step={step}
        />
      ))}
    </g>
  )
    
}