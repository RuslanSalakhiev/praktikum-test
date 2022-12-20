import { TextBlock } from "./TextBlock/TextBlock"
import { Graphics } from "./Graphics"
import { Navigation } from "./Navigation/Navigation"
import { useStep } from "../hooks/useStep";


export const Content = () => {
  let [step, nextStep, firstStep] = useStep(0);


  return <div className="Content">
    <TextBlock 
      textFadeIn={`В саду 576 яблонь разной урожайности - от 120 до 180 яблок`}
      textFadeOut={`Они распределяются нормально`} />
    <Graphics 
      step={step} 
      nextStep={nextStep} 
      firstStep={firstStep}
    />
    <Navigation 
      step={step} 
      nextStep={nextStep} 
      firstStep={firstStep}/>
  </div>
}