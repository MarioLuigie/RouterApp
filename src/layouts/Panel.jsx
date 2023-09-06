import MenuButton from "../components/MenuButton"
// import NavBar from "./Navbar"
import { useContext } from "react"
import { Context } from "../Context/Context"
import danceAudio from "../assets/audios/mixkit-cbpd-400.mp3"
import "../styles/layouts/Panel.scss"

export default function Panel () {

    const { isMobile } = useContext(Context)

    return (
        <div className="panel">
            {isMobile && <MenuButton />}
            {/* <NavBar /> */}
            <audio id="myAudio" className="panel__audio" controls autoPlay loop>
                <source src={danceAudio} type="audio/mpeg"/>
                    Twoja przeglądarka nie obsługuje odtwarzacza audio.
            </audio>
            <button className="panel__logBtn">Log in</button>
        </div>
    )
}