import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"

import HomePage from "../HomePage/HomePage"
import Profile from "../Profile/Profile"
import { useEffect } from "react"

function Hee() {
    const nav = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            nav("/home")
        }, 2000);
    })

    return (
        <div className="foreground" style={{width:"350px", height:"644px", backgroundColor:"red", position:"absolute", borderRadius: "20px"}}>
        </div>
    )
}


function FirstScreen({setIsOpen}) {
    
    return (
        <>
        <BrowserRouter>
            <Link to="/home" >home</Link>
            <Link to="/profile" >profile</Link>
            <Link to="/" ><button onClick={() => setIsOpen(false)}>close</button></Link>
                <Routes>
                    <Route path="/" element={<Hee />}/>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
        </BrowserRouter>
        </>
  )
}

export default FirstScreen

FirstScreen.propTypes = {
    setIsOpen:PropTypes.func
}