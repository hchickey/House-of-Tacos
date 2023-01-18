import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/orders">Orders</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/menu">Menu</Link>
            </li>
        </ul>
    )
}