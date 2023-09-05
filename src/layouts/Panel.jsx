import MenuButton from "../components/MenuButton"
import "../styles/layouts/Panel.scss"

export default function Panel () {

    return (
        <div className="panel">
            <MenuButton />
            <button className="panel__logBtn">Log in</button>
        </div>
    )
}