import { TextBlock } from "./TextBlock"
import { Graphics } from "./Graphics"
import { Navigation } from "./Navigation/Navigation"
import { useStep } from "../hooks/useStep";


export const Content = () => {
  let [step, nextStep, firstStep] = useStep(0);
  
  return <div className="Content">
    <TextBlock text={'Some text about apples'}/>
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