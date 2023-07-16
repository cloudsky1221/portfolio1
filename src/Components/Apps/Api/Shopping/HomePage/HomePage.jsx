import { useState, useEffect } from "react";
import "./HomePage.css"
import Footer from "../Footer/Footer";

function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async function() { await fetch("/src/Components/Apps/Api/Shopping/fulldata.json").then(res => res.json()).then(res => setData(res))})()
    // const a =  fetch("/src/Components/Apps/Api/Products/fulldata.json").then(res => res.json()).then(res => res);
  },[])

  console.log("data")    

  return (
    <>
      <div className="main-layout">
        <div className="top">
          home
            <input type="text" name="" id="search" />
        </div>
        <div className="body">
            <div className="banner">
            </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default HomePage