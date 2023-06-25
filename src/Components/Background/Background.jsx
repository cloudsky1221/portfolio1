import { useState } from "react";
import "./Background.css"

import back2 from "./Images/back2.png"
import back3 from "./Images/back3.png"

const backgroundImageArray = [back2, back3]

function Background() {

  const [backgroundImage, setBackgroundImage] = useState(backgroundImageArray[1])

  function handleBackgroundChange(e) {
    e.preventDefault();
    const option = e.target.value;
    if (option === "city") setBackgroundImage(backgroundImageArray[0]);
    if (option === "town") setBackgroundImage(backgroundImageArray[1]);
  }
  return (
    <>
    <select name="" id="" onChange={handleBackgroundChange} defaultValue="town">
      <option value="city">city</option>
      <option value="town">town</option>
    </select>
    <div className="canvas" style={{backgroundImage:`url("${backgroundImage}")`}}></div>
    </>
  )
}

export default Background