import PropTypes from 'prop-types'
import boublesVideo from "../assets/videos/boubles.mp4"
import '../styles/layouts/Header.scss'

export default function Header ({
    title
}) {

    return (
        <header className='header'>
            <video autoPlay loop muted className="header__video">
                <source src={boublesVideo} type="video/mp4"/>
            </video>
            <h2 className="header__title">{title}</h2>
        </header>
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}