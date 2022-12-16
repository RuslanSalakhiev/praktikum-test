
import styles from "./styles.module.css"

export const NextButton = ({nextStep}) => {
  return <button
   className={styles.button
  }
  onClick={() => {nextStep()}}
>
  next step
</button>
}