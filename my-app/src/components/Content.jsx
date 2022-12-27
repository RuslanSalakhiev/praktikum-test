import { TextBlock } from "./TextBlock/TextBlock"
import { Graphics } from "./Graphics"
import { Navigation } from "./Navigation/Navigation"
import ContentCSS from "./Content.module.css"

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
  

  return data.length === 0 ? <div>Loading</div> : <div className={ContentCSS.Content}>
    <div className={ContentCSS.MainContent}>
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
    </div>
    
    <Navigation 
      step={step} 
      nextStep={nextStep} 
      firstStep={firstStep}/>
  </div>
}