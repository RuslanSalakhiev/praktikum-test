import React from "react";
import { Slideshow } from "./components/Slideshow";

const App = () => {
  return (
    <div>
        <Slideshow median={150} sigma={10}/>
    </div>
  )
}

export default App;