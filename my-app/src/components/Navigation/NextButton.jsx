
export const NextButton = ({nextStep}) => {
  return <button
  onClick={() => {nextStep()}}
>
  next step
</button>
}