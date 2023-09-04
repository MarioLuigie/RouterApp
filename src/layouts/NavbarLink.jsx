import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import "../styles/layouts/Navbar.scss"

export default function NavbarItem ({
    label,
    path
}) {

    return (
        <li className="navbarLinks__link">
            <NavLink to={path} >{label}</NavLink>
        </li>
    )
}

NavbarItem.propTypes = {
    label : PropTypes.string.isRequired,
    path : PropTypes.string.isRequired,
    // exact : PropTypes.bool.isRequired,
}