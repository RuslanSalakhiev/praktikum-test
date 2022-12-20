
import { SvgGroup } from "./SVG/SvgGroup";

export const Graphics = ({step, nextStep, firstStep, data}) => {
  return <>
    <SvgGroup 
      step={step}
      data={data}
    />
    </>
}