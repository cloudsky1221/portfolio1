import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./AMworld.css"

import icon from "/src/assets/react.svg"
import AMwindow from "./AMwindow/AMwindow"

function AMworld() {

    const [isOpen, setIsOpen] = useState(false)
    // const [data, setdata] = useState(checkLocalStorage)

    function singleClick(e) {
        e.preventDefault();
        if (window.innerWidth > 500) return;
        setIsOpen(true);
        // handleAnime()
    }

    function doubleClick(e) {
        e.preventDefault();
        if (window.innerWidth < 500) return;
        setIsOpen(true);
        // handleAnime()
    }

    // useEffect(() => {
        // (async () => 
        // {await fetch("https://api.jikan.moe/v4/manga/1").then((res, err) => {
        //     if (res) console.log(res)
        //     // if (res) {
        //         // res.json().then(res => localStorage.setItem("anime",JSON.stringify(res.data))).then(() => setdata(JSON.parse(localStorage.getItem("anime")))).catch(err => console.error(err))}
        // })})()
        // {await fetch("https://ap.jikan.moe/v4/manga/0").then(res => res.json())
        // .then((res) => {
        //     setIsLoading(false)
        //     if (res.status) console.log(res.status);
        //     else console.log(res)
        // }).catch(err => {
        //     setIsLoading(false);
        //     alert("invalid url, failed to fetch")
        // })})()
        // {await fetch("https://api.jikan.moe/v4/manga/00").then(res => res.json()).then(res => localStorage.setItem("anime",JSON.stringify(res.data))).then(() => setdata(JSON.parse(localStorage.getItem("anime")))).catch(err => console.error(err))})()
    // },[])

    return (
        <div className="anime" style={{position:"relative", zIndex:"2"}}>
            <div className="icon" onClick={singleClick} onDoubleClick={doubleClick}>
                <img src={icon} alt="" />
            </div>
            <div className="name">anime/manga world</div>
            {/* <Window /> */}
            {isOpen && <AMwindow opening={{open:isOpen, set:setIsOpen}}/>}
            {/* {isOpen && <AnimeWindow loading={{screen:isLoading, set:setIsLoading}} opening={{open:isOpen, set:setIsOpen}} data={data}/>} */}
        </div>
    )
}

export default AMworld
