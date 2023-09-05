import NavbarLink from "./NavbarLink"
import textContent from "../data/textContent.json"
import { useContext } from "react"
import { Context } from "../Context/Context"
import "../styles/layouts/Navbar.scss"

export default function Navbar () {

    const { navigation } = textContent
    const { isMenuBtnClicked } = useContext(Context)

    const menuLinks = Object.values(navigation).map((menuLink, i) => {

        // console.log(menuLink.exact);
        // console.log(typeof menuLink.exact);
        return (
            <NavbarLink 
                key={i}
                label={menuLink.label}
                path={menuLink.path}
            />
        )
    })

    return (
        <nav className={
            `${isMenuBtnClicked 
                ? " navbar visibility" 
                : "navbar"}`
            }
        >
            <ul className="navbarLinks">
                {menuLinks}
            </ul>
        </nav>
    )
}