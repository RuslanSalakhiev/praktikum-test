import TextBlockCSS from "./TextBlock.module.css"
import { RegenerateData } from "./RegenerateData"
import { motion } from "framer-motion"

export const TextBlock = ({step,generateDatasource}) => {
  const fadeInVariants = {
    initial: {
      opacity:0,
    }, 
    animate: {
      opacity:1,
      transition:{ duration: 0.5 }
    }
  }

  const fadeOutVariants = {
    initial: {
      opacity:1,
    }, 
    animate: {
      opacity:0,
      transition:{ duration: 0.5 }
    }
  
  }
  
  const texts = [
    `В саду 576 яблонь разной урожайности - от 120 до 180 яблок`,
    `Они распределяются нормально`
  ]

  const isFirstStep = step === 0;

  const textFadeIn = isFirstStep ? '' : texts[step]
  const animateFadeIn = isFirstStep ? 'initial' : 'animate'

  const textFadeOut = isFirstStep ? texts[step] : texts[step + 1];
  const animateFadeOut = isFirstStep ? 'initial' : 'animate'
  
  return <div className={TextBlockCSS.TextBlock}>
      <motion.div 
        className={TextBlockCSS.fadeIn}
        variants = {fadeInVariants}
        initial="initial"
        animate= {animateFadeIn}
      >
        {textFadeIn}
      </motion.div>
      <motion.div 
        className={TextBlockCSS.fadeOut}
        variants = {fadeOutVariants}
        initial="initial"
        animate= {animateFadeOut}
      >
          {textFadeOut}
        </motion.div>
      <RegenerateData generateDatasource={generateDatasource}/>
    </div>
}


