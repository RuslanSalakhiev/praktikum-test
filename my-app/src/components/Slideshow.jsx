import SlideshowCSS from "./Slideshow.module.css"

import { Content } from "./Content"
export const Slideshow = () => {
  return <div className={SlideshowCSS.Slideshow}>
    <Content />
  </div>
}