import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import "../styles/layouts/Navbar.scss"

export default function NavbarItem ({
    label,
    link
}) {

    return (
        <li className="navbarLinks__link">
            <NavLink to={link}>{label}</NavLink>
        </li>
    )
}

NavbarItem.propTypes = {
    label : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired,
}