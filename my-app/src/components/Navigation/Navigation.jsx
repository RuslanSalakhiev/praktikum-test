import { StepCount } from "./StepCount"
import { NextButton } from "./NextButton"
import { ToStartButton } from "./ToStartButton"


export const Navigation = ({step, nextStep, firstStep}) => {
  return <div>
    <StepCount step={step}/>
    <NextButton nextStep={nextStep}/>
    <ToStartButton firstStep={firstStep}/>
  </div>
}