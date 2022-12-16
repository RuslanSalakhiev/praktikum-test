import { motion } from "framer-motion"
import { getColor } from "../utils"



export const Tree = ({value, cx, cy, r, step}) => {
  const isSecondStep = step === 1;
  const animate = isSecondStep ? 'histogram' : 'grid';
  const color = getColor(value);

  const variants = {
    grid: {
        x:0,
        y:0,
      },
    histogram: {
      x:value*value / 100, 
      y:value*value/100
    }
  }

  return <motion.circle 
    cx={cx} 
    cy={cy} 
    r={r} 
    fill={color}
    whileHover={{scale:step}}
    variants = {variants}
    initial= "grid"
    animate= {animate} 
  />
}