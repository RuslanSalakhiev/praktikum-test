import { TreeGroup } from "./TreeGroup"

export const SvgGroup = ({step}) => {
  return <svg 
    width = {700}
    height = {400} 
    >
    <TreeGroup treeCount={36} distance={10} r={5} step={step} />
  </svg>
}

