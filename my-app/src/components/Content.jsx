import { TextBlock } from "./TextBlock/TextBlock"
import { Graphics } from "./Graphics"
import { Navigation } from "./Navigation/Navigation"

import { useStep } from "../hooks/useStep";
import { useEffect } from "react";
import { useData } from "../hooks/useData";


export const Content = () => {
  let [step, nextStep, firstStep] = useStep(0);

  let [data, setData, generateDatasource] = useData([]);

  // генерация данных
  useEffect(() => {
    generateDatasource();

  }, []);
  

  return data.length === 0 ? <div>Loading</div> : <div className="Content">
    <TextBlock 
      generateDatasource={generateDatasource}
      step={step} 
      />
    <Graphics 
      step={step} 
      nextStep={nextStep} 
      firstStep={firstStep}
      data={data}
    /> 
    <Navigation 
      step={step} 
      nextStep={nextStep} 
      firstStep={firstStep}/>
  </div>
}