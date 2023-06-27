import { useState } from "react";
import PropTypes from "prop-types"
import "./Background.css"

import back2 from "./Images/back2.png"
import back3 from "./Images/back3.png"

const backgroundImageArray = [back2, back3]

function But({x, y, image}) {
  return (
    <div className="context-menu-box" style={{position:"absolute", top:`${x}px`, left:`${y}px`}}>
      {["town", "city"].map((ele, i) => {
        return (
          <input className="background-select" type="button" value={ele} key={i}
          onClick={(e) => {e.preventDefault();image(backgroundImageArray[i])}}/>
        )
      })}
    </div>
  )
}

function Background() {

  const [backgroundImage, setBackgroundImage] = useState(backgroundImageArray[1])

  const [menu, setmenu] = useState(false)
  const [position, setposition] = useState({x:0, y:0})

  function handlelisten(e) {
    e.preventDefault();
    console.log(e.clientX, e.clientY)
    setmenu(true)
    setposition({x:e.clientY, y:e.clientX})
  }

  function removeMenu(e) {
    console.log(e.clientX, e.clientY)
    setmenu(false)
  }

  return (
    <>
    <div className="canvas" onClick={removeMenu} onContextMenu={handlelisten} style={{backgroundImage:`url("${backgroundImage}")`}}></div>
    {menu && <But x={position.x} y={position.y} image={setBackgroundImage}/>}
    </>
  )
}

export default Background

But.propTypes = {
  x:PropTypes.number,
  y:PropTypes.number,
  image:PropTypes.func
}
