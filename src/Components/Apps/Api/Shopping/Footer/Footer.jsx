import { Link, Outlet } from "react-router-dom"

function Footer() {
  return (
    <>
    <Outlet />
    <div className="footer">
        <Link to="/shopping/home">
          <div className="home">Home</div>
        </Link>
        <Link to="/shopping/profile">
          <div className="you">You</div>
        </Link>
        <Link to="/shopping/cart">
          <div className="cart">Cart</div>
        </Link>
    </div>
    </>
  )
}

export default Footer