import { useState } from "react"

import "./Shopping.css"
import FirstScreen from "./FirstScreen/FirstScreen"

function Shopping() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <button onClick={() => setIsOpen(true)}>open</button>
        {isOpen && <FirstScreen setIsOpen={setIsOpen}/>}
        </>
    )
}

export default Shopping