import TextBlockCSS from "./TextBlock.module.css"

export const TextBlock = ({textFadeIn, textFadeOut}) => {
  
  return <div className={TextBlockCSS.TextBlock}>
      <div className={TextBlockCSS.fadeIn}>{textFadeIn}</div>
      <div className={TextBlockCSS.fadeOut}>{textFadeOut}</div>
    </div>
}