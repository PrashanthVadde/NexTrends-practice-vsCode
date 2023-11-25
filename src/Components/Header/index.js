import { Link } from "react-router-dom"

import "./index.css"

const Header = () => (
    <div className="header-container">
        
            <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"
                className="website-logo" />
        <div className="link-items">
            <Link to={"/"} className="nav-link">Home</Link>
            <Link to={"/products"} className="nav-link">Products</Link>
            <Link to={"/cart"} className="nav-link">Cart</Link>
            <Link to={"/logout"} className="nav-link">
                <button type="button">
                    Logout
                </button>
            </Link>
        </div>
    </div>
)

export default Header