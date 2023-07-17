import { useState } from "react"
import "./AMworld.css"

import icon from "/src/assets/react.svg"
import AMwindow from "./AMwindow/AMwindow"

function AMworld() {

    const [isOpen, setIsOpen] = useState(false)

    function singleClick(e) {
        e.preventDefault();
        if (window.innerWidth > 500) return;
        setIsOpen(true);
    }

    function doubleClick(e) {
        e.preventDefault();
        if (window.innerWidth < 500) return;
        setIsOpen(true);
    }

    return (
        <div className="anime" style={{position:"relative", zIndex:"2"}}>
            <div className="icon" onClick={singleClick} onDoubleClick={doubleClick}>
                <img src={icon} alt="" />
            </div>
            <div className="name">anime/manga world</div>
            {isOpen && <AMwindow opening={{open:isOpen, set:setIsOpen}}/>}
        </div>
    )
}

export default AMworld
