import { useEffect, useState } from "react"
import "./Anime.css"

import icon from "../../../../../public/vite.svg"

const checkLocalStorage = JSON.parse(localStorage.getItem("anime")) || ""

function Anime() {

    const [isOpen, setIsOpen] = useState(false)
    const [data, setdata] = useState(checkLocalStorage)

    useEffect(() => {
        // (async () => 
        // {await fetch("https://api.jikan.moe/v4/manga/1").then(res => res.json()).then(res => localStorage.setItem("anime",JSON.stringify(res.data))).then(() => setdata(JSON.parse(localStorage.getItem("anime")))).catch(err => console.error(err))})()
    },[])

    return (
        <div className="anime" style={{position:"relative", zIndex:"2"}}>
            <div className="icon" onClick={() => setIsOpen(true)}>
                <img src={icon} alt="" />
            </div>
            {isOpen && <div style={{fontSize:"2rem", color:"white"}}>{data.title}</div>}
        </div>
    )
}

export default Anime