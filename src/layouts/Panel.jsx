import MenuButton from "../components/MenuButton"
// import NavBar from "./Navbar"
import { useContext } from "react"
import { Context } from "../Context/Context"
import "../styles/layouts/Panel.scss"

export default function Panel () {

    const { isMobile } = useContext(Context)

    return (
        <div className="panel">
            {isMobile && <MenuButton />}
            {/* <NavBar /> */}
            <button className="panel__logBtn">Log in</button>
        </div>
    )
}