import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"

import HomePage from "../HomePage/HomePage"
import Profile from "../Profile/Profile"
import { useEffect } from "react"
import Cart from "../Cart/Cart"
import Footer from "../Footer/Footer"

function OpeningAnimation() {
    const nav = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            nav("/shopping/home")
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
            <Link to="/" ><button onClick={() => setIsOpen(false)}>close</button></Link>
                <Routes>
                    <Route path="/" element={<OpeningAnimation />}/>
                    <Route path="/shopping" element={<Footer />}>
                        <Route index element={ <h1>index</h1> } />
                        <Route path="/shopping/home" element={<HomePage />} />
                        <Route path="/shopping/profile" element={<Profile />} />
                        <Route path="/shopping/cart" element={<Cart />} />
                    </Route>
                </Routes>
        </BrowserRouter>
        </>
  )
}

export default FirstScreen

FirstScreen.propTypes = {
    setIsOpen:PropTypes.func
}