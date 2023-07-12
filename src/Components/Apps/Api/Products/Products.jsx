import { useState } from "react"

import "./Products.css"
import FirstScreen from "./FirstScreen/FirstScreen"

function Products() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <button onClick={() => setIsOpen(true)}>open</button>
        {isOpen && <FirstScreen setIsOpen={setIsOpen}/>}
        </>
    )
}

export default Products