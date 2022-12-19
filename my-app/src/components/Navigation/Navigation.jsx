import { StepCount } from "./StepCount"
import { NextButton } from "./NextButton"
import { IconButton } from "./IconButton"
import NavigationCSS from "./Navigation.module.css"

export const Navigation = ({step, nextStep, firstStep}) => {
  
  const isLastStep = step === 1;
  return <div
    className={NavigationCSS.NavigationPanel}
  >
    <StepCount step={step}/>
    {isLastStep ? null : <NextButton nextStep={nextStep}/>}
    {isLastStep ? <IconButton firstStep={firstStep} type={'reset'}/> : null}
  </div>
}