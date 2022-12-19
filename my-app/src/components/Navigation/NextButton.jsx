import NextButtonCSS from './NextButton.module.css'

export const NextButton = ({nextStep}) => {
  return <button
    className={NextButtonCSS.NextButton}
  onClick={() => {nextStep()}}
>
  Дальше
</button>
}