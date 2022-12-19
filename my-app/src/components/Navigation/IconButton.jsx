import IconButtonCSS from './IconButton.module.css'
import PaginationButtonsCSS from './PaginationButtons.module.css'

export const IconButton = ({firstStep, type}) => {
  const IconTypes = {
    reset: {
      class: IconButtonCSS.ResetButton,
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDUuNzVDMTIgNi4xNjQyMSAxMS42NjI0IDYuNDk0NjMgMTEuMjUxOSA2LjU1MDQ1QzguNTY4MjIgNi45MTU0MSA2LjUgOS4yMTYxNyA2LjUgMTJDNi41IDE1LjAzNzYgOC45NjI0MyAxNy41IDEyIDE3LjVDMTQuNzgzOCAxNy41IDE3LjA4NDYgMTUuNDMxOCAxNy40NDk2IDEyLjc0ODFDMTcuNTA1NCAxMi4zMzc2IDE3LjgzNTggMTIgMTguMjUgMTJDMTguNjY0MiAxMiAxOS4wMDQyIDEyLjMzNjkgMTguOTYwNCAxMi43NDg4QzE4LjU4NjcgMTYuMjYyNyAxNS42MTMgMTkgMTIgMTlDOC4xMzQwMSAxOSA1IDE1Ljg2NiA1IDEyQzUgOC4zODY5NyA3LjczNzI5IDUuNDEzMjcgMTEuMjUxMiA1LjAzOTU4QzExLjY2MzEgNC45OTU3OCAxMiA1LjMzNTc5IDEyIDUuNzVaIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMjY2NyA1LjJDMTUuOCA1LjYgMTUuOCA2LjQgMTUuMjY2NyA2LjhMMTIuNiA4LjhDMTEuOTQwOCA5LjI5NDQzIDExIDguODI0MDUgMTEgOEwxMSA0QzExIDMuMTc1OTUgMTEuOTQwOCAyLjcwNTU3IDEyLjYgMy4yTDE1LjI2NjcgNS4yWiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K",
      alt: 'Reset'
    },
    previous: {
      class: IconButtonCSS.PreviousButton,
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNDE0MjEgMTJMMTEuOTc4MiAxNi40MjY5QzEyLjM3NjcgMTYuODEzNCAxMi4zNzU1IDE3LjQ1MzIgMTEuOTc1NiAxNy44MzgzQzExLjU5NDggMTguMjA1IDEwLjk5MTggMTguMjA0MiAxMC42MTIxIDE3LjgzNjNMNC41ODU3OCAxMkwxMC42MTI5IDYuMjI5NEMxMC45OTI4IDUuODY1NjMgMTEuNTkyMSA1Ljg2NjQ5IDExLjk3MSA2LjIzMTM1QzEyLjM3MjUgNi42MTc5OSAxMi4zNzE0IDcuMjYxMTQgMTEuOTY4NCA3LjY0NjMxTDcuNDE0MjEgMTJaIiBmaWxsPSIjMUExQjIyIi8+CjxyZWN0IHg9IjciIHk9IjExLjA3NDEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxLjkyNTkzIiByeD0iMC45NjI5NjMiIGZpbGw9IiMxQTFCMjIiLz4KPC9zdmc+Cg==",
      alt: 'Previous'
  }
  }
  
  return <div className='PaginationButtons'>
    <button 
    className={` ${IconTypes[type].class} ${PaginationButtonsCSS.PaginationButton}`}
    onClick={() => {firstStep()}}
  >
    <img src={IconTypes[type].icon} alt={IconTypes[type].alt} />
  </button>
  </div>
}


