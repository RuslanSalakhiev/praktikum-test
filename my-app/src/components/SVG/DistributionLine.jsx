import { motion } from "framer-motion"

export const DistributionLine = () => {
  const variants = {
    initial: {
      pathLength: 0,
    }, 
    animate: {
      pathLength: 1,
      transition: {
        pathLength: { type: "spring", duration: 2 },
        delay: 0.
      }
    }
  
  }

  return <motion.path
    d="M0 241C175.128 241 209.153 1 297.947 1 386.741 1 403.846 241 600 241"
    stroke="#000"
    fill = "none"
    transform="translate(45,83)"
    variants = {variants}
    initial="initial"
    animate= "animate"
  />
}
