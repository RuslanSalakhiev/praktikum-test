import { motion } from "framer-motion"
import { SVGParams } from "../../utils"

export const Axis = () => {

const variants = {
  initial: {
    x2:"45",
    pathLength: 0,
  }, 
  animate: {
    x2:"650",
    pathLength: 1,
    transition: {
      pathLength: { type: "spring", duration: 2 },
    }
  }

}

  return <g>
    <text x="35" y="358" >120</text>
    <motion.line 
      x1="45" 
      y1={SVGParams.height - 42}
      y2={SVGParams.height - 42}
      stroke="#000" 
      strokeWidth={1}
      variants = {variants}
      initial="initial"
      animate= "animate"
    />
    <text x="630" y="358" >180</text>
  </g>
}