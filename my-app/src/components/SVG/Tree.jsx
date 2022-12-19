import { motion } from "framer-motion"
import { getColor } from "../../utils"
import { Tooltip } from "@mui/material";
import TreeCSS from "./Tree.module.css"


export const Tree = ({value, cx, cy, r, step, chartX, chartY, index,}) => {
  const isSecondStep = step === 1;
  const animate = isSecondStep ? 'histogram' : 'grid';
  const color = getColor(value);

  const variants = {
    grid: {
        x:0,
        y:0,
      },
    histogram: {
      x:chartX,
      y:chartY,
      
    }
  }


  return <Tooltip title={`${parseInt(value)} 🍏`}>
      <motion.circle
        className={TreeCSS.Tree} 
        cx={cx} 
        cy={cy} 
        r={r} 
        fill={color}
        index={index}
        variants = {variants}
        initial= "grid"
        animate= {animate} 
      />
    </Tooltip>
}