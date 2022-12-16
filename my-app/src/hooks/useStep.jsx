import { useCallback, useState } from "react";

export function useStep(initialValue) {
  let [step, setStep] = useState(initialValue);
  
  const nextStep = useCallback(
    () => {setStep((currentStep) => currentStep === 0 ? currentStep + 1 : 1)}, 
    []);
  const firstStep = useCallback(
    () => {setStep(0)}, 
    []);

  return [step, nextStep, firstStep]
}