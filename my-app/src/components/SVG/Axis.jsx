import { motion } from "framer-motion"

export const Axis = ({}) => {

const variants = {
  initial: {
    x2:"45",
    pathLength: 0,
  }, 
  animate: {
    x2:"650",
    pathLength: 1,
    transition: {
      pathLength: { type: "spring", duration: 1 }
    }
  }

}

  return <g>
    <text x="35" y="378" stroke="grey">120</text>
    <motion.line 
      x1="45" 
      y1="360"  
      y2="360" 
      stroke="grey" 
      strokeWidth={1}
      variants = {variants}
      initial="initial"
      animate= "animate"
    />
    <text x="630" y="378" stroke="grey">180</text>
  </g>
}