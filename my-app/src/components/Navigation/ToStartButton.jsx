
export const ToStartButton = ({firstStep}) => {
  return <button 
  onClick={() => {firstStep()}}
>
  first step
</button>
}