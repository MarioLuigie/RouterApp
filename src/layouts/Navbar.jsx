import NavbarLink from "./NavbarLink"
import textContent from "../data/textContent.json"
import "../styles/layouts/Navbar.scss"

export default function Navbar () {

    const { navigation } = textContent

    const menuLinks = Object.values(navigation).map((menuLink, i) => {
        return (
            <NavbarLink 
                key={i}
                label={menuLink.label}
                link={menuLink.link}
            />
        )
    })

    return (
        <nav className="navbar">
            <ul className="navbarLinks">
                {menuLinks}
            </ul>
        </nav>
    )
}