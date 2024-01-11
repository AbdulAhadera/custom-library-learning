import { Link } from "react-router-dom"

function navbar() {
    return (
        <div className="navbar-main">

            <Link className="links" to={"/"}>Home</Link>
            <Link className="links" to={"/settings"}>Settings</Link>
            <Link className="links" to={"/pricing"}>Pricing</Link>
        </div>
    )
}

export default navbar
