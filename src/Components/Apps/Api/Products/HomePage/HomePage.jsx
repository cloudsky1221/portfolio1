import { useState, useEffect } from "react";
import "./HomePage.css"

function HomePage() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async function() { await fetch("/src/Components/Apps/Api/Products/fulldata.json").then(res => res.json()).then(res => setData(res))})()
    // getData()
    // const a =  fetch("/src/Components/Apps/Api/Products/fulldata.json").then(res => res.json()).then(res => res);
    // setData(a)
  },[])

  console.log("data")    

  // useEffect(() => {
  //   setTimeout(() => {
  //     getData()
  //   }, 3000);
  // }, [])

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
        <div className="footer">
            <div className="home">Home</div>
            <div className="you">You</div>
            <div className="cart">Cart</div>
        </div>
      </div>
    </>
  )
}

export default HomePage